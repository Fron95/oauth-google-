const CLIENT_ID = '940620741583-id2runvk01jsuopi90s92b14rhcl3oqo.apps.googleusercontent.com'
const CLIENT_SECRET = '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'  
const SCOPE = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.email'
const REDIRECT_URI = 'http://localhost:3000/complete'


const auth_uri = `https://accounts.google.com/o/oauth2/v2/auth?
scope=${SCOPE}&
access_type=online&
include_granted_scopes=true&
response_type=code&
state=state_parameter_passthrough_value&
redirect_uri=${REDIRECT_URI}&
client_id=${CLIENT_ID}`

const naver = 'https://www.naver.com'

function requireAuth(req, res) {
    res.render('main', {auth_uri : auth_uri})
}

function getToken(req, res){
    console.log(req.body)
    return res.render("complete",{query : req.query,client_id : CLIENT_ID, client_secret : CLIENT_SECRET });
}

module.exports = {
    requireAuth : requireAuth,
    getToken : getToken
}


