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
    async getList() {
        const {list} = await user.getList()
        this.setData({
            list
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
