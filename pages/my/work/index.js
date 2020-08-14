import _ from "../../../utils/lodash.min";

Page({
    data: {
        todoList: ['0'],
        tableData: [
            ['项目', '今日', '本周', '本月'],
            ['客流人数', '412', '3345', '333456'],
            ['采集人数', '312', '2345', '23456'],
            ['完成率', '81.2%', '91.2%', '21.2%'],
            ['补充资料', '300', '2340', '23450'],
            ['差异', '12', '5', '6']
        ],
        shareTable: [
            ['姓名', '拿货额', '下级人数', '下级拿货', '提成合计'],
            ['王小丫', '2580', '12', '345678', '4321'],
            ['李晓燕', '2580', '12', '345678', '4321'],
            ['张晓梅', '2580', '12', '345678', '4321'],
            ['徐小风', '2580', '12', '345678', '4321']
        ],
        wear: {
            carousels: [
                {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"}
            ],
        }

    },
    onLoad: function (options) {

    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    afterRead(event) {
        const {file} = event.detail;
        // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
        wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
            filePath: file.path,
            name: 'file',
            formData: {user: 'test'},
            success(res) {
                // 上传完成需要更新 fileList
                const {fileList = []} = this.data;
                fileList.push({...file, url: res.data});
                this.setData({fileList});
            },
        });

    },
    delCarousel(e) {
        let carousels = this.data.wear.carousels
        _.remove(carousels, (o, i) => {
            return i === e.detail.index
        })
        this.setData({
            'wear.carousels': carousels
        })
    }
})
