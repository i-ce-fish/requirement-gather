import {getUsers} from "../../../../api/user";

const app = getApp()
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
        const {list} = await getUsers()
        this.setData({
            list
        })
    },
    go(e) {
        let dataset = e.currentTarget.dataset;
        app.$router.push(dataset.url, {id: dataset.id})
    }
});
