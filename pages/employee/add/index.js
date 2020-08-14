import _ from "../../../utils/lodash.min";

Page({
    data: {
        activeColl: ['1'],
        userForm: {
            eduList: [{}],
            familyList: [{}],
            workList: [{}],
            lifeImgs: [{url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},
                {url: "https://www.uniqlo.cn/hmall/test/u0000000015347/model/rank1/first/591-822/1.jpg"},]
        },
        // imgIDFace: ""
    },
    onLoad: function (options) {

    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    uploadIDFace(e) {
        let this_ = this
        wx.chooseImage({
            count: 1,
            sizeType: ['original'],
            sourceType: ['camera', 'album'],
            success(res) {
                this_.setData({
                    [e.currentTarget.dataset.prop]: res.tempFilePaths[0]
                })
            }
        })
    },
    //添加一个数组
    addList(e) {
        let prop = e.currentTarget.dataset.prop;
        let list = this.data.userForm[prop]
        list.push({})
        this.setData({
            [`userForm.${prop}`]: list
        })
    },
    //删除一个数组
    removeList(e) {
        let prop = e.currentTarget.dataset.prop;
        let index = e.currentTarget.dataset.index;
        let list = this.data.userForm[prop]
        _.remove(list, (o, i) => {
            return i === index
        })
        this.setData({
            [`userForm.${prop}`]: list
        })
    },
//    上传生活照
    uploadLifeImgs(e) {
        const {file} = e.detail;
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
    }
});
