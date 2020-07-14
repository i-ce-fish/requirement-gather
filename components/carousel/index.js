// components/test.js
Component({
    //启用aap.wxss全局样式
    // options: {
    //     addGlobalClass: true,
    // },
    /**
     * 组件的属性列表
     */
    properties: {
        imgs: {
            type: Array,
            value: []
        },
        height: {
            type: String,
            value: '750rpx'
        },
        width: {
            type: String,
            value: "750rpx"
        },
        interval: {
            type: [String, Number],
            value: 5000
        },
        duration: {
            type: [String, Number],
            value: 500
        },
        fit: {
            type: String,
            value: 'fill'
        },
        autoplay: {
            type: Boolean,
            value: true

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
