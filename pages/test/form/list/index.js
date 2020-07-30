const user = require('../../../../api/user')
Page({
    data: {
        list: []
    },
    onLoad: function (options) {
        // this.getList()
    },
    onReady() {
    },
    onShow() {
        this.getList()
    },
    getList() {
        user.getList().then(res => {
            console.log(res)
            this.setData({
                list: res.list
            })
        })
    },
    goAdd() {
        wx.$go('/pages/test/form/add/index')
    },
    go(e) {
        let dataset = e.currentTarget.dataset;
        wx.$go(dataset.url, {id: dataset.id})
    }
});
