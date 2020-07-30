const user = require('../../../../api/user')
const _ = require('../../../../lib/lodash.min')
const form = require('../../../../utils/formValidation')
Page({
    data: {
        user: {}
    },
    onLoad(e) {
        this.setData({id: e.id})

    },
    onShow() {
        // 获取当前小程序的页面栈
        // let pages = getCurrentPages();
        // 数组中索引最大的页面--当前页面
        // let currentPage = pages[pages.length - 1];
        // 打印出当前页面中的 options
        this.get(this.data.id)

    },
    get(id) {
        user.get(id).then(res => {
            this.setData({
                user: res
            })
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

        checkRes = ''
        if (!checkRes) {
            user.edit(this.data.id, e.detail.value).then(res => {
                wx.showToast({
                    title: '修改成功',
                    icon: 'success',
                    duration: 700,
                    success() {
                        setTimeout(
                            () => {
                                wx.$go('/pages/test/form/list/index')
                            }, 700
                        )
                    }
                })
            })

        } else {
            wx.$toast(checkRes)
        }

    },

    del() {
        user.del(this.data.id).then((res) => {
            wx.showToast({
                title: '删除成功',
                icon: 'success',
                duration: 700,
                success() {
                    setTimeout(
                        () => {
                            wx.$go('/pages/test/form/list/index')
                        }, 700
                    )
                }
            })
        })
    }
})
