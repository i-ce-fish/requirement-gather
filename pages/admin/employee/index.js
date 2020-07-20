Page({
    data: {
        activeColl: ['1'],
        userForm: {
            eduList: ['0'],
            familyList: ['0']
        },
        //家庭成员
        showFamily: false,
        familyForm: {}


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
    addList(e) {
        let list = this.data.userForm[e.currentTarget.dataset.prop]
        list.push('1')
        this.setData({
            [`userForm.${e.currentTarget.dataset.prop}`]: list
        })
    },
    addFamily() {
        this.setData({
            showFamily: true
        })
    },
    closeFamily() {
        this.setData({
            showFamily: false
        })
    },
    confirmFamily() {
        let familyList = this.data.userForm.familyList
        familyList.push(this.data.familyForm)

        this.setData({
            'userForm.familyList': familyList,
            'familyForm': {}
        })
        this.closeFamily()
    }
});
