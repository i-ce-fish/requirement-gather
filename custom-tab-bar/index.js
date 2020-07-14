Component({
    // useStore: true,
    properties: {
        // 属性值可以在组件使用时指定
    },
    data: {
        // 这里是一些组件内部数据

        //  自定义状态栏状态无效：在目标页onShow设置，this.getTabBar().setData
        activeTab: '',
    },
    methods: {
        // 这里是一个自定义方法
        onChange(e) {
            // event.detail 的值为当前选中项的索引
            const map = new Map()
                .set(0, '/pages/home/index/index')
                .set(1, "/pages/user/my/index")
                .set(2, "/pages/user/my/index")
                .set(3, "/pages/user/my/index")

            wx.switchTab({
                url: map.get(e.detail)
            })
        },
        onShow() {
        }
    }
})
