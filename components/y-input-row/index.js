// components/test.js
Component({
    //使表单识别自定义组件
    behaviors: ['wx://form-field'],
    // behaviors: ['wx://form-field-group']

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
            value: "请输入"
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
            this.setData({
                value: e.detail.value
            })
            this.triggerEvent("blur", e.detail.value)
        },
        // onInput(e) {
        //     this.triggerEvent("input", e.detail.value)
        // }

    }
})
