Page({
    data: {
        customerList: [
            {
                name: '顾客003',
                guiders: ['小王', '小李', '小红'],
                sex: '女',
                friend: '1人',
                feature: '蓝色外套, 白色球鞋, 牛仔裤',
                age: '30-35',
                height: '160-165',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017753/model/rank1/first/591-822/1.jpg',
                productHistory: ['238530-70', '226250-90'],
                createTime: '18:15:26'
            }, {
                name: '顾客007',
                guiders: ['小王', '小李', '小红'],
                sex: '女',
                friend: '1人',
                feature: '蓝色外套, 白色球鞋, 牛仔裤',
                age: '30-35',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017753/model/rank1/first/591-822/1.jpg',

                height: '160-165',
                productHistory: ['238530-70', '226250-90', '226250-90', '226250-90', '226250-90', '226250-90'],
                createTime: '18:16:26'
            }, {
                name: '顾客008',
                guiders: ['小王', '小李', '小红'],
                sex: '女',
                friend: '1人',
                feature: '蓝色外套, 白色球鞋, 牛仔裤',
                age: '30-35',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017753/model/rank1/first/591-822/1.jpg',

                height: '160-165',
                productHistory: ['238530-70', '226250-90'],
                createTime: '18:17:26'
            }, {
                name: '顾客009',
                guiders: ['小王', '小李', '小红'],
                sex: '女',
                friend: '1人',
                img: 'https://www.uniqlo.cn/hmall/test/u0000000017753/model/rank1/first/591-822/1.jpg',
                feature: '蓝色外套, 白色球鞋, 牛仔裤',
                age: '30-35',
                height: '160-165',
                productHistory: [],
                createTime: '18:23:26'
            }
        ],
        allGuiders: [
            {text: '导购1', value: 0},
            {text: '导购2', value: 1},
            {text: '导购3', value: 3},
            {text: '导购4', value: 4},
            {text: '导购5', value: 8}
        ],
        guidersDefault: '按导购筛选',
        //日期
        showCalendar: false,
        //    第一排筛选条件
        btnList: [
            {text: '显示在店', value: '0', active: true},
            {text: '今日离店', value: '1', active: false},
            {text: '今日全部', value: '2', active: false},
            {text: '昨日全部', value: '3', active: false}
        ]
    },
    onLoad: function (options) {

    },
    //筛选按钮列表(互斥按钮)
    tapBtn(e) {
        let index = e.currentTarget.dataset.index
        this.data.btnList.forEach((o, i) => {
            if (i === index) {
                this.setData({
                    [`btnList[${i}].active`]: !this.data.btnList[index].active
                })
            } else {
                this.setData({
                    [`btnList[${i}].active`]: false

                })
            }
        })
    },
    //日历
    showCalendar() {
        this.setData({
            showCalendar: true
        })
    },
    closeCalendar() {
        this.setData({
            showCalendar: false
        })
    },
    confirmCalendar(e) {
        //[date1,date2]
        console.log(e.detail)
        this.closeCalendar()
    },

});
