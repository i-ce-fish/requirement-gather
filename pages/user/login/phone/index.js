// pages/user/login/main.js


let user = require('../../../../api/user')

Page({

    /**
     * 页面的初始数据
     */
    data: {
        userForm: {
            password: 'test',
            username: 'maxazure'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        // if (wx.getStorageSync('token')) {
        //     this.goHome()
        // }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    login() {
        //todo
        //登录接口需要单独设计content-type，后期不需要这种登录方式
        // 'Content-Type': 'application/json',
        user.login(this.data.userForm).then(res => {
            wx.setStorageSync('token', res.token),
            // globalData.userinfo = "test info"
                this.goHome()
        })

    },
    goHome() {
        wx.switchTab({
            url: '/pages/home/index/index'
        })
    }
})
