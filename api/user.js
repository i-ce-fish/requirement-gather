let rq = require('../utils/request')

function login(data) {
    return rq.request({
        url: 'auth/login',
        method: 'POST',
        data: data
    })
}


function wxLogin(data) {
    return rq.request({
        url: "auth/signin",
        method:'POST',
        data
    })
}



module.exports = {
    login,wxLogin
}
