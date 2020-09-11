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
                .set(0, 'home')
                .set(1, "my")
                .set(2, "my")
                .set(3, "my")

            getApp().$router.switchTab(map.get(e.detail))

            // wx.switchTab({
            //     url: map.get(e.detail)
            // })
        },
        onShow() {
        }
    }
})
