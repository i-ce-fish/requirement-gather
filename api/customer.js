let rq = require('../utils/request')

function get(id) {
    return rq.request({
        url: 'customers/' + id,
        method: 'GET'
    })
}

module.exports = {
    get
}
