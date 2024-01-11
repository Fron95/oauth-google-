const { google } = require('googleapis')
// 환경설정
const clientId = '940620741583-id2runvk01jsuopi90s92b14rhcl3oqo.apps.googleusercontent.com'
const clientSecret = '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'
const redirecUrl = 'http://localhost:3000/complete'
const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
]
const {exec} = require('child_process')

let code;
let token;

// 클라이언트 생성
const oauth2 = new google.auth.OAuth2(
    clientId,
    clientSecret,
    redirecUrl
)


// 승인코드발급URL (로그인창 만들기)
const url = oauth2.generateAuthUrl({
    access_type : 'offline',
    scope : scopes
})

// 메인페이지 렌더링
function mainPage(req, res) {
    res.render('main', {url : url})
}

// 리다렉트페이지에서 쿼리정보 받아들이기.
async function getCode(req, res) {
    code = req.query.code
    console.log("access code", res.locals.code)
    const {tokens} = await oauth2.getToken(code)
    oauth2.setCredentials(tokens)
    console.log("tokens :", tokens)
    res.render('complete', {code:code})
    token = tokens.access_token
}

async function getUserInfo(req, res) {
    const curlCommand = `curl -H "Authorization: Bearer ${token}" https://www.googleapis.com/oauth2/v2/userinfo`
    console.log("curlCommand", curlCommand)
    await exec(curlCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);

            // 수신된 데이터를 출력합니다.
            console.log(`stdout: ${stdout}`);
            const userInfo = JSON.parse(stdout)
            console.log('userinfo', userInfo)
            res.render('finish', {data:userInfo})
        }
    });
}


module.exports = {
    mainPage : mainPage,
    getCode : getCode,
    getUserInfo : getUserInfo

}

