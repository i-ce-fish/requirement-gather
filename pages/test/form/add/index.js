const user = require('../../../../api/user')
const _ = require('../../../../lib/lodash.min')
Page({
    data: {
        pickerHidden: true,
        chosen: ''
    },

    pickerConfirm(e) {
        this.setData({
            pickerHidden: true
        })
        this.setData({
            chosen: e.detail.value
        })
    },

    pickerCancel() {
        this.setData({
            pickerHidden: true
        })
    },

    pickerShow() {
        this.setData({
            pickerHidden: false
        })
    },

    formSubmit(e) {

        console.log(e.detail.value)
        user.add(e.detail.value).then(res => {
            console.log(res)
            wx.$toast(res)
        })


    },

    getList() {
        user.getList({page: 1, pagesize: 5, name: 'Jay'}).then(res => {
            console.log(res)
            wx.$toast(res)
        })
    },
    get() {
        user.get(2).then(res => {
            console.log(res)
            wx.$toast(res)
        })
    },
    edit() {
        user.edit(2, {
            "name": "Jay Liu1",
            "username": "maxazure1",
            "email": "maxazure1@gmail.com",
            "role_id": 1,
            "mobile": "15210159911",
            "avatar": "test " + _.now()
        }).then(res => {
            console.log(res)
        })
    },
    login() {
        user.login({
            password: 'test',
            username: 'maxazure'
        }).then(res => {
            wx.setStorageSync('token', res.token)
            console.log(res)
            wx.$toast(res)
            // globalData.userinfo = "test info"
        })
    },

    formReset(e) {
        console.log('form发生了reset事件，携带数据为：', e.detail.value)
        this.setData({
            chosen: ''
        })
    }
})
