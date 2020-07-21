const _ = require('../../../lib/lodash.min');

Page({
    data: {
        activeColl: ['1'],
        userForm: {
            eduList: [{}],
            familyList: [{}]
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
    }
});
