Component({
    options: {
        addGlobalClass: true
    },
    properties: {
        list: {
            type: Object,
            value: {}
        }
    },
    data: {},
    methods: {
        tapImg(e) {
            wx.previewImage({
                current: e.currentTarget.dataset.img, // 当前显示图片的http链接
                urls: [e.currentTarget.dataset.img] // 需要预览的图片http链接列表

            })
        },
        go: function (e) {
            wx.$go(e.currentTarget.dataset.url)
        },
    }
});
