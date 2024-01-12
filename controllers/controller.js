const { query } = require("express");
const model = require("../models/auth-models");
const axios = require("axios");
const qs = require('qs')

function main(req, res) {
  const kakaoAuthUri = model.createUrl();
  console.log("this is url : ", kakaoAuthUri);
  res.render("main", { kakaoAuthUri: kakaoAuthUri });
}

async function complete(req, res) {
  const authCode = req.query.code;
  if (!authCode) {
    console.log("error : authentication failed");
    console.log(req, query.error);
  } else {
    console.log("authentication ok");
  }
  // 토큰받기
  const data = model.createTokenReqData(authCode);
  let access_token
  try {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      { ...data },
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      }
    );
    console.log(response.data);
    accessToken = response.data.access_token;
  } catch (error) {
    console.log(error);
    return;
  }
  // 정보가져오기

  let profile_nickname
  let profile_image

  try {
    const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        // 'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data)

    profile_image = response.data.kakao_account.profile.profile_image_url
    profile_nickname = response.data.kakao_account.profile.nickname
    console.log(profile_image)
    console.log(profile_nickname)
  } catch (error) {
    console.log(error);
    return;
  }
  
  const kakaotalk_message = {
    object_type: 'text',
    text: '텍스트 영역입니다. 최대 200자 표시 가능합니다.',
    link: {
      web_url: 'https://developers.kakao.com',
      mobile_web_url: 'https://developers.kakao.com'
    },
    button_title: '바로 확인'
  }

  try {
    const response = await axios.post(
      "https://kapi.kakao.com/v2/api/talk/memo/default/send",
      qs.stringify({template_object:JSON.stringify(kakaotalk_message)}) ,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
    return;
  }

  // 렌더하기
  res.render("complete", {nickname : profile_nickname, profile_image : profile_image});
}

module.exports = {
  main: main,
  complete: complete,
};
