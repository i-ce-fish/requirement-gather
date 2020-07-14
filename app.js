//app.js
import Store from './utils/store.js';


//wx直接调用的全局方法
// 路由跳转并传参
//ps url已经带有参数的情况未处理
wx.$go = function (url, data) {
    // 拼接参数
    let str = ""
    for (let i in data) {
        str += `${i}=${data[i]}&`
    }
    str = str.slice(0, str.length - 1)
    wx.navigateTo({
        url: url + "?" + str
    })
},
    wx.$toast = function (text, duration, success) {
        wx.showToast({
            title: text ? text : '未完善的功能',
            icon: success ? 'success' : 'none',
            duration: duration || 2000
        })
    }

//  全局状态管理
//  存在性能问题=>开启局部模式，极大提高性能；减少数据大小，提高性能
let store = new Store({
    state: {
        cart: {totalNum: ""}
    },
    openPart: true
})

App({
    store: store,
    onLaunch: function (options) {
        //todo remove
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)

        // 登录
        wx.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
            }
        })
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    onError(err) {
        //全局错误监听
        console.log("发生错误：" + err)
        const res = wx.getSystemInfoSync()
        let errMsg = "手机品牌：" + res.brand + "；手机型号：" + res.model + "；微信版本号：" + res.version + "；操作系统版本：" + res.system + "；客户端平台：" + res.platform + "；错误描述：" + err;

    },
    globalData: {
        //set
        userInfo: {id: 0},
        //当前选中的tabbar
        activeTab: 0,
        shopTitle: '永康美斯特邦威 会员内购'
    },

// 通过app调用的全局方法, 获取某个节点的坐标信息
    getNodeViewport(selector) {

        const query = wx.createSelectorQuery()
        query.select(selector).boundingClientRect()
        //返回一个promise函数
        return new Promise((resolve, reject) => {
            query.exec(function (res) {
                // res[0].top       // #the-id节点的上边界坐标
                resolve(res)
            })
        })
    }
})
