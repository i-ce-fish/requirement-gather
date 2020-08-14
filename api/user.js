import request from "../utils/request";

export function login(data) {
    return request({
        url: 'auth/login',
        method: 'POST',
        data: data
    })
}


export function wxLogin(data) {
    return request({
        url: "auth/signin",
        method: 'POST',
        data
    })
}

/**
 * CRUD API DEMO
 * @param data
 * @returns {Promise<unknown>}
 */
export function getUsers(data) {
    return request({
        url: "users",
        method: 'GET',
        contentType: 'json',
        data
    })
}

export function getUser(id) {
    return request({
        url: "users/" + id,
        method: 'GET'
    })
}

export function addUser(data) {
    return request({
        url: "users",
        method: 'POST',
        data
    })

}

export function putUser(data) {
    return request({
        url: "users",
        method: 'PUT',
        data
    })
}

export function delUser(id) {
    return request({
        url: "users/" + id,
        method: 'DELETE'
    })
}

