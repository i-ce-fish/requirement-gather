const user = require('../../../../api/user')
const _ = require('../../../../lib/lodash.min')
const form = require('../../../../utils/form-validation')
const app = getApp();

Page({
    data: {
        user: {}
    },
    onLoad(e) {
        // this.setData({id: app.$router.params.id})
        this.get(app.$router.params.id)

    },
    onShow() {
        // 获取当前小程序的页面栈
        // let pages = getCurrentPages();
        // 数组中索引最大的页面--当前页面
        // let currentPage = pages[pages.length - 1];
        // 打印出当前页面中的 options
        // this.get(this.data.id)

    },
    async get(id) {
        const res = await user.get(id)
        this.setData({
            user: res
        })
    },
    async edit(id, data) {
        await user.edit(id, data)
        wx.$toast('修改成功', 700, 'success')
        setTimeout(() => {
            this.goList()
        }, 700)

    },
    async del() {
        await user.del(app.$router.params.id)
        wx.$toast('删除成功', 700, 'success')
        setTimeout(() => {
            this.goList()
        }, 700)
    },

    goList() {
        app.$router.push('test/form/list')
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

        //测试期间跳过校验
        checkRes = ''
        if (!checkRes) {
            this.edit(app.$router.params.id, e.detail.value)
        } else {
            wx.$toast(checkRes)
        }

    },

})
