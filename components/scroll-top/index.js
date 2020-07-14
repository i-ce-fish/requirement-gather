Component({

    //使用此组件需要在页面调用onPageScroll设置scrollTop
    properties: {
        //回顶部按钮距离底部距离 rpx
        bottom: {
            type: Number,
            value: 150
            //  160
        },
        //回顶部按钮距离右侧距离 rpx
        right: {
            type: Number,
            value: 0
        },
        //距离顶部多少距离显示 px
        top: {
            type: Number,
            value: 100
        },
        //滚动距离
        scrollTop: {
            type: Number,
            value: 0
        },
        text:{
            type:String,
            value:"TOP"
        }
    },
    observers: {
        'scrollTop': function () {
            let show = this.data.scrollTop > this.data.top;
            if ((show && this.data.visible) || (!show && !this.data.visible)) {
                return
            }
            this.setData({
                visible: show
            })
        }
    },
    data: {
        //判断是否显示
        visible: false,
        //控制显示，主要解决调用api滚到顶部fixed元素抖动的问题
        toggle: true
    },
    methods: {
        goTop: function () {
            this.setData({
                toggle: false
            })
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 120
            })
            setTimeout(() => {
                this.setData({
                    toggle: true
                })
            }, 220)
        }
    }
})
