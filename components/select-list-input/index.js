
Component({
    options: {addGlobalClass: true},
    lifetimes: {
        ready() {
            // this.iconAni = wx.createAnimation()
            // this.data.list.forEach(item => {
            //
            //     // if (item.type === 'checkbox') {
            //     item.collapse = true
            //     // }
            //     // if (item.type === 'radio') {
            //     //     item.checked
            //     // }
            // })
        }
    },

    properties: {
        item: {
            type: Object,
            value: {}
        },

    },
    data: {
        checked: '',
        showPopup: false

    },
    methods: {
        setDetail(e) {
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })

        },
        tapCheckbox(e) {
            this.setDetail(e)
            let checked = []
            if (this.data.item.type === 'radio') {
                checked.push(this.data.item.item[e.detail].text)
            }
            if (this.data.item.type === 'checkbox') {
                e.detail.forEach((o) => {
                    checked.push(this.data.item.item[o].text)
                })
            }
            // this.setData({
            //     checked
            // })

            //触发选项内容与实际值
            this.triggerEvent('selected', {checked, value: e.detail})

        },
        cfmInput(e) {
            console.log(e.detail)
            //自定义
            this.triggerEvent('input', {checked: e.detail, value: e.detail})
        },
        // showPopup() {
        //     this.setData({
        //         showPopup: true
        //     })
        // },
        // closePopup() {
        //     this.setData({showPopup: false})
        // },
        // tapAdd() {
        //     //    add Data
        //     this.closePopup()
        // }
    }
});
