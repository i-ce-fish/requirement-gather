Component({
    options: {addGlobalClass: true},
    lifetimes: {
        ready() {
            // this.iconAni = wx.createAnimation()
            this.data.list.forEach(item => {

                // if (item.type === 'checkbox') {
                item.collapse = true
                // }
                // if (item.type === 'radio') {
                //     item.checked
                // }
            })
        }
    },

    properties: {
        list: {
            type: Array,
            value: []
        },
        //单行显示的选项个数,1、2、3、4、6、
        num: {
            type: Number,
            value: 3
        }

    },
    data: {},
    methods: {

        show: function (e) {
            //原点是指渲染完成的位置
            // this.setData({iconRotate: this.iconAni.export(), collapse: false})
            // this.iconAni.rotate(180).step()
            this.setData({
                [`list[${e.currentTarget.dataset.index}].collapse`]: true
            })
        },
        hide(e) {
            // this.iconAni.rotate(0).step()
            // this.setData({iconRotate: this.iconAni.export(), collapse: true})
            this.setData({
                [`list[${e.currentTarget.dataset.index}].collapse`]: false
            })

        },
        tapCheckbox(e) {
            //todo  trigger
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })
        },
        tapRadio(e) {
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })


        }

    }
});
