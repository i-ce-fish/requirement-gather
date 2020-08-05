const utils = require('../../utils/index')
import tool from "../../utils/tool";

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

    //核心思路: 此组件只做展示和数据预处理, 组件的控制(item.checked,  itme.value)由父组件完成
    properties: {
        item: {
            type: Object,
            value: {}
        },

    },
    data: {
        showPopup: false
    },
    methods: {
        // setDetail(e) {
        //     this.setData({
        //         [e.currentTarget.dataset.prop]: e.detail
        //     })
        // },
        tapCheckbox(e) {
            let checked
            let value
            let item = this.data.item;
            if (item.type === 'radio') {
                checked = item.item[e.detail].text
                value = item.item[e.detail].value
            }
            if (item.type === 'checkbox') {
                checked = []
                value = []

                e.detail.forEach((o) => {
                    checked.push(item.item[o].text)
                    value.push(item.item[o].value)
                })
            }
            //触发选项内容与实际值
            this.triggerEvent('selected', {checked, value})

        },
        showPopup() {
            this.setData({
                showPopup: true
            })
        },
        closePopup() {
            this.setData({showPopup: false})
        },
        tapAdd() {
            //    add Data
            this.closePopup()
        }
    }
});
