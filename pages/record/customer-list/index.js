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
        ],
        // 显示更多筛选弹窗
        showMore: false,
        //    更多筛选条件
        moreFilter: {
            entryTime: {
                value: "",
                title: "进店时间",
                type: 'datetime'
            },

            leaveTime: {
                value: "",
                title: "离店时间",
                type: 'datetime'

            },
            guiders: {
                item: [
                    {text: '导购1', value: 0},
                    {text: '导购2', value: 1},
                    {text: '导购3', value: 3},
                    {text: '导购4', value: 4},
                    {text: '导购5', value: 8}

                ],
                value: [
                    {text: '导购3', value: 3},
                ],
                title: "导购",
                type: 'checkbox'
            },
            memberType: {
                item: [
                    {text: "游客", value: 1},
                    {text: "新入会员", value: 1},
                    {text: "复购会员", value: 2}
                ],
                title: "会员情况",
                type: 'radio',


            },
            memberAttitude: {
                item: [
                    {text: "开心", value: 0},
                    {text: "被胁迫", value: 1},
                    {text: "无所谓", value: 2}
                ],

                title: "入会开心度",
                type: 'radio'

            },
            isBuy: {
                item: [
                    {
                        text: "有成交",
                        value: '0'
                    },
                    {
                        text: "没有成交",
                        value: '1'
                    },
                    {
                        text: "打折后买",
                        value: '2'
                    }
                ],
                title: "是否成交",
                type: 'radio'

            },
            sex: {
                item: [
                    {text: '男', value: '0'},
                    {text: '女', value: '1'}
                ],
                title: "顾客性别",
                type: 'radio'

            },
            age: {
                item: [
                    {text: "幼童", value: "0"},
                    {text: "小童", value: "1"},
                    {text: "大童", value: "2"},
                    {text: "小学生", value: "3"},
                    {text: "初高中", value: "4"},
                    {text: "18-24", value: "5"},
                    {text: "25-30", value: "6"},
                    {text: "35左右", value: "7"},
                    {text: "40左右", value: "8"},
                    {text: "50左右", value: "9"},
                    {text: "60左右", value: "10"},
                    {text: "65以上", value: "11"}
                ],
                title: "顾客年龄",
                type: 'checkbox'


            },
            isTry: {
                item: [
                    {text: "有试衣", value: '0'},
                    {text: "无", value: '1'},
                    {text: "身上比划", value: '2'}
                ],
                title: "是否试衣",
                type: 'radio'

            },
            isComplaint: {
                item: [
                    {text: "有", value: '0'},
                    {text: "无", value: '1'}
                ],
                title: '是否吐槽货品',
                type: 'radio'

            },
            isFeedback: {
                item: [
                    {text: '有', value: '0'},
                    {text: '无', value: '1'}
                ],
                title: "是否提出货品需求",
                type: 'radio'

            }

        },


    }
    ,
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
    }
    ,
//日历
    showCalendar() {
        this.setData({
            showCalendar: true
        })
    }
    ,
    closeCalendar() {
        this.setData({
            showCalendar: false
        })
    }
    ,
    confirmCalendar(e) {
        //[date1,date2]
        console.log(e.detail)
        this.closeCalendar()
    }
    ,
    showMore() {
        this.setData({
            showMore: true
        })
    }
    ,
    closeMore() {
        this.setData({
            showMore: false
        })
    },
    selected(e) {
        const prop = e.currentTarget.dataset.prop
        this.setData({
            // [`moreFilter.${prop}.value`]: e.detail.value,
            [`moreFilter.${prop}.checked`]: e.detail
        })
    },
//    重置
    resetFilter() {
        let moreFilter = this.data.moreFilter;
        Object.keys(moreFilter).forEach((o) => {
            console.log(o)
            console.log(o.value)
            //todo 先确定子组件返回的参数格式 <= 确定提交的数据格式
            // o.value = ""
        })
        this.setData({
            moreFilter
        })
    }
});
