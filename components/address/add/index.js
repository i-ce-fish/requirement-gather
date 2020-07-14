// components/test.js
const area = require('../../../utils/area')
const address = require('../../../api/address')
Component({
    //启用aap.wxss全局样式
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {},

    /**
     * 组件的初始数据
     */
    data: {
        //    地图数据
        areaList: area.area,
        showArea: false,
        //form
        form: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        //setData({prop:value})
        set(e) {
            let prop = e.currentTarget.dataset.value
            this.setData({[prop]: e.detail})
        },

        showArea() {
            this.setData({
                showArea: true
            })
        },
        closeArea() {
            this.setData({
                showArea: false
            })
        },
        confirmArea(e) {

            //todo 表单校验
            //todo  协调数据格式
            this.setData({
                'form.province': e.detail.values[0].name,
                'form.city': e.detail.values[1].name,
                'form.area': e.detail.values[2].name,
            })
            this.closeArea()
        },
        confirm() {
            address.add(this.data.form).then(res => {
                this.triggerEvent("success", {receipt: res})
            })
        },

    }
})
