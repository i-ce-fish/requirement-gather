import request from "../utils/request";

export function getCustomer(id) {
    return request({
        url: 'customers/' + id,
        method: 'GET'
    })
}

export function getCustomers(data) {
    return request({
        url: 'customers',
        method: 'GET',
        contentType: 'json',
        data
    })
}

