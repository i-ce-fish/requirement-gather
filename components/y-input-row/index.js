// components/test.js
Component({
    //启用aap.wxss全局样式
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {
        label: {
            type: String,
            value: ""
        },
        value: {
            type: String,
            value: ""
        },
        placeholder: {
            type: String,
            value: ""
        },
        rightIcon: {
            type: String,
            value: "",
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {
        onChange(e) {
            this.triggerEvent("blur", e.detail.value)
        },

    }
})
