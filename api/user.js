let rq = require('../utils/request')

function login(data) {
    return rq.request({
        url: 'auth/login',
        method: 'POST',
        data: data
    })
}

//test add
function add(data) {
    return rq.request({
        url: 'users',
        method: 'POST',
        data: data
    })
}


function getList(data) {
    return rq.request({
        url: 'users',
        method: 'get',
        data: data,
        contentType: 'json'
    })
}

function get(id) {
    return rq.request({
        url: 'users/' + id,
        method: 'get'
    })
}

function edit(id, data) {
    return rq.request({
        url: 'users/' + id,
        method: 'put',
        data
    })
}

function del(id) {
    return rq.request({
        url: 'users/' + id,
        method: 'DELETE'
    })

}

function wxLogin(data) {
    return rq.request({
        url: "auth/signin",
        method: 'POST',
        data
    })
}

module.exports = {
    login, wxLogin,
    get, getList, add, edit, del
}
