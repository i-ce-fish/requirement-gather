Page({
    data: {
        itemNum: 3,
        clothes:
            [
                {
                    item: [
                        {
                            name: '立领',
                            img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839915065,4062438879&fm=26&gp=0.jpg"
                        }, {
                            name: "圆领",
                            img: "http://img0.imgtn.bdimg.com/it/u=1891705372,1980634868&fm=11&gp=0.jpg"
                        }, {
                            name: "V领",
                            img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340486731,3074013664&fm=26&gp=0.jpg"
                        }
                    ], name: "领型"
                }, {
                item: [
                    {
                        name: '泡泡袖',
                        img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839915065,4062438879&fm=26&gp=0.jpg"
                    }, {
                        name: "喇叭袖",
                        img: "http://img0.imgtn.bdimg.com/it/u=1891705372,1980634868&fm=11&gp=0.jpg"
                    }, {
                        name: "蝙蝠袖",
                        img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340486731,3074013664&fm=26&gp=0.jpg"
                    }
                ], name: "袖子"
            }, {
                item: [
                    {
                        name: '立领',
                        img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1839915065,4062438879&fm=26&gp=0.jpg"
                    }, {
                        name: "圆领",
                        img: "http://img0.imgtn.bdimg.com/it/u=1891705372,1980634868&fm=11&gp=0.jpg"
                    }, {
                        name: "V领",
                        img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340486731,3074013664&fm=26&gp=0.jpg"
                    }, {
                        name: "V领",
                        img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340486731,3074013664&fm=26&gp=0.jpg"
                    }, {
                        name: "V领",
                        img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340486731,3074013664&fm=26&gp=0.jpg"
                    }, {
                        name: "V领",
                        img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340486731,3074013664&fm=26&gp=0.jpg"
                    }, {
                        name: "V领",
                        img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=340486731,3074013664&fm=26&gp=0.jpg"
                    }
                ], name: "领型"
            }


            ]

    },
    onLoad: function (options) {

    },
    // 初始化数据, 增加显示类型
    onReady() {
        this.data.clothes.forEach((item, index) => {
            this.setData({
                [`clothes[${index}].type`]: 'showPart'
            })
        })
    },
    //点击选项
    tapRadio(e) {
        let index = e.currentTarget.dataset.index
        this.setData({
            [`clothes[${index}].checked`]: e.detail,
            [`clothes[${index}].type`]: 'hide',
        })
    },
    //显示所有选项
    showCollapse(e) {
        let index = e.currentTarget.dataset.index
        this.setData({
            [`clothes[${index}].type`]: 'show'
        })
    },

    //显示前3条
    showPartCollapse(e) {
        let index = e.currentTarget.dataset.index
        this.setData({
            [`clothes[${index}].type`]: 'showPart'
        })
    },

    //隐藏所有
    hideAllCollapse(e) {
        let index = e.currentTarget.dataset.index
        this.setData({
            [`clothes[${index}].type`]: 'hide'
        })
    }
})


