// pages/home/index/main.js


let app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {

        //店铺信息
        shop: {
            name: "美邦丽水中山街店",
            address: "丽水市中山街店522号(百货大楼旁)",
            qrcode: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593673011872&di=6e98e25a009f7ca0086899e8f015145d&imgtype=0&src=http%3A%2F%2Fefile.kaoyan.com%2Fimg%2F2020%2F05%2F25%2F193612_5ecbadac69b24.png',
            wxid: 'wxid_sdfkljdsfkl153',
            introduction: "我是店长王小丽，我做服装行业12年12年时间，\n我很直爽，开店很累，但我喜欢时尚",
        },
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.init()
    },

    /**
     * 生命周期函数--监听页面显示
     *
     */
    onShow: function () {
        // 设置tabbar状态
        this.getTabBar().setData({
            activeTab: 0
        });
    },

    //页面滚动执行方式
    onPageScroll(e) {

    },

    go: function (e) {
        app.$router.push(e.currentTarget.dataset.url)
    },
    init() {
        wx.setNavigationBarTitle({
            title: this.data.shop.name
        })
    }
})
