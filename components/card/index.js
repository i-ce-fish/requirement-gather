// components/test.js
Component({
    //启用aap.wxss全局样式
    options: {
        addGlobalClass: true,
    },
    /**
     * 组件的属性列表
     */
    externalClasses: ['custom-class'], //自定义样式

    properties: {
        padding: {
            type: String,
            value: "20rpx 30rpx"
        },
        //是否显示标题
        title: {
            type: String,
            value: ""
        }
        ,
        //是否显示关闭按钮
        closeable: {
            type: Boolean,
            value: false

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
        tapClose(){
            this.triggerEvent('close')
        }
    }
})
