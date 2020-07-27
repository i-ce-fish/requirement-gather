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
    },
    methods: {

        // show: function (e) {
        //     //原点是指渲染完成的位置
        //     // this.setData({iconRotate: this.iconAni.export(), collapse: false})
        //     // this.iconAni.rotate(180).step()
        //     this.setData({
        //         [`list[${e.currentTarget.dataset.index}].collapse`]: true
        //     })
        // },
        // hide(e) {
        //     // this.iconAni.rotate(0).step()
        //     // this.setData({iconRotate: this.iconAni.export(), collapse: true})
        //     this.setData({
        //         [`list[${e.currentTarget.dataset.index}].collapse`]: false
        //     })
        //
        // },
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
            this.triggerEvent('selected', {checked, value: e.detail})

        },
        //不需要取消, 必选的
        // tapRadio(e) {
        //     let detail = this.data.checked === e.detail ? '' : e.detail;
        //     this.setData({
        //         checked: detail
        //     })
        // }

        //需要松开才触发, 否则一拖动就会折叠
        drag(e) {
            let checked;
            let step = this.data.item.step

            //数轴组件的值
            let axisValue = e.detail.value;
            //选项的实际值
            let itemValue = this.data.item.item[axisValue / step];
            checked = itemValue ? itemValue.text : axisValue

            //死循环
            // this.setData({
            //     checked
            // });

            //返回选项中的值或者组件中的值
            this.triggerEvent('selected', {checked, value: axisValue})
        },
        //点击数轴下方文字
        // tapText(e){
        //     console.log(e.currentTarget.dataset.index)
        // }
    }
});
