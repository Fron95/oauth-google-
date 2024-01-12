const client_id = "326b098fd85088cb73b0f36ef86af48e";
const redirect_uri = "http://localhost:3000/complete";
const response_type = "code";
const scope = "profile_nickname,profile_image,talk_message";
const client_secret = "f5Q0KC4sUrPuYMrCjSMzBrOOsnTuOpft";

function createUrl() {
  const auth_uri = "https://kauth.kakao.com/oauth/authorize";

  const queryParams = new URLSearchParams({
    client_id: client_id,
    redirect_uri: redirect_uri,
    response_type: response_type,
    scope: scope,
  });

  return `${auth_uri}?${queryParams.toString()}`;
}

function createTokenReqData(accessCode) {
  data = {
    grant_type: 'authorization_code',
    client_id: client_id,
    redirect_uri: redirect_uri,
    code: accessCode,
    client_secret: client_secret,
  };

  return data;
}

module.exports = {
  createUrl: createUrl,
  createTokenReqData : createTokenReqData
};
