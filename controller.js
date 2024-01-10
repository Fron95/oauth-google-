const CLIENT_ID = '940620741583-id2runvk01jsuopi90s92b14rhcl3oqo.apps.googleusercontent.com'
const CLIENT_SECRET = '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'  
const SCOPE = 'https://www.googleapis.com/auth/userinfo.email'
const REDIRECT_URI = 'http://localhost:3000/complete'
const auth_uri = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code
                client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`
const naver = 'https://www.naver.com'

function requireAuth(req, res) {
    res.render('main', {auth_uri : naver})
}

module.exports = {
    requireAuth : requireAuth

}