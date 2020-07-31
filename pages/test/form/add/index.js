const user = require('../../../../api/user')
const _ = require('../../../../lib/lodash.min')
const form = require('../../../../utils/formValidation')
Page({
    data: {
        pickerHidden: true,
        chosen: ''
    },

    add(data) {
        user.add(data).then(res => {
            wx.$toast('添加成功', 700, 'success')
            setTimeout(
                () => {
                    wx.$go('/pages/test/form/list/index')
                }, 700
            )
        })
    },
    formSubmit(e) {


        let rules = [
            {
                name: 'username',
                rule: ['required'],
                msg: ["请输入用户名"]

            }, {
                name: "password",
                rule: ["required", "minLength:6", "maxLength:20"],
                msg: ["请输入密码", "密码长度为6~20位数字和字母组合"]
            }, {
                name: "password2",
                rule: ["required", "isSame:password"],
                msg: ["请输入确认密码", "两次输入的密码不一致"]
            }, {
                name: "email",
                rule: ["required", "isEmail"],
                msg: ["请输入邮箱", "请输入正确的邮箱"]
            }, {
                name: "mobile",
                rule: ["required", "isMobile"],
                msg: ["请输入手机号", "请输入正确的手机号"]
            }, {
                name: "role_id",
                rule: ["required", "range:[0,1]"],
                msg: ["请输入区间数字", "请输入0-1之间的数字"]
            }];

        let checkRes = form.validation(e.detail.value, rules);

        if (!checkRes) {
            this.add(e.detail.value)
        } else {
            wx.$toast(checkRes)
        }

    },

    // getList() {
    //     user.getList({page: 1, pagesize: 5, name: 'Jay'}).then(res => {
    //         console.log(res)
    //         wx.$toast(res)
    //     })
    // },
    // get() {
    //     user.get(2).then(res => {
    //         console.log(res)
    //         wx.$toast(res)
    //     })
    // },
    // edit() {
    //     user.edit(2, {
    //         "name": "Jay Liu1",
    //         "username": "maxazure1",
    //         "email": "maxazure1@gmail.com",
    //         "role_id": 1,
    //         "mobile": "15210159911",
    //         "avatar": "test " + _.now()
    //     }).then(res => {
    //         console.log(res)
    //     })
    // },
    // login() {
    //     user.login({
    //         password: 'test',
    //         username: 'maxazure'
    //     }).then(res => {
    //         wx.setStorageSync('token', res.token)
    //         console.log(res)
    //         wx.$toast(res)
    //         // globalData.userinfo = "test info"
    //     })
    // },
    //
    // formReset(e) {
    //     console.log('form发生了reset事件，携带数据为：', e.detail.value)
    //     this.setData({
    //         chosen: ''
    //     })
    // }
})
