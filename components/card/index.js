// components/test.js
Component({
    //启用aap.wxss全局样式
    // options: {
    //   addGlobalClass: true,
    // },
    /**
     * 组件的属性列表
     */
    externalClasses: ['custom-class'], //自定义样式

    properties: {
        padding: {
            type: String,
            value: "20rpx 30rpx"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 组件的方法列表
     */
    methods: {}
})
