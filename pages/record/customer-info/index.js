const _ = require('../../../lib/lodash.min')
Page({
    data: {

        customerInfo: {
            friend: {
                type: "radio",
                title: "同伴人数",
                // min: "0",
                // max: "100",
                // step: "50",
                // value: "0",
                item: [
                    {
                        text: "0",
                        value: "0"
                    },
                    {
                        text: "1",
                        value: "1"
                    }, {
                        text: "2人以上",
                        value: "2"
                    },


                ]
            },
            sex: {
                type: "checkbox",
                item: [
                    {
                        text: "男",
                        value: 0
                    },
                    {
                        text: "女",
                        value: 1
                    },
                    {
                        text: "+",
                        value: 2
                    },

                ],
                title: "性别"
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
            height: {
                type: "axis",
                title: "身高",
                min: "100",
                max: "200",
                step: '1',
                item: [
                    {
                        text: "100以下",
                        value: 0
                    }, {
                        text: "200以上",
                        value: 1
                    },


                ]

            },
            weight: {
                type: "axis",
                title: "体重",
                min: " 0",
                max: "100",
                step: "25",
                item: [
                    {
                        text: "很瘦",
                        value: 0
                    },
                    {
                        text: "较瘦",
                        value: 1
                    }, {
                        text: "正常",
                        value: 2
                    },
                    {
                        text: "较胖",
                        value: 3
                    },
                    {
                        text: "很胖",
                        value: 4
                    },

                ]
            }

        },
        feature: {
            type: 'input',
            value: "红色头发"
        }
        ,
        customerAblity: {
            attitude: {

                item: [
                    {
                        text: "极不用心",
                        value: 0
                    },
                    {
                        text: "一般用心",
                        value: 1
                    },
                    {
                        text: "比较用心",
                        value: 2
                    }, {
                        text: "非常用心",
                        value: 3
                    },
                ],
                title: "着装态度(重视用心程度)",
                type: "axis",
                min: '0',
                max: "100",
                step: "33.333",
            },
            wearAblity: {

                title: "着装能力(会不会打扮)",
                item: [
                    {
                        text: "常识型",
                        value: 0
                    },
                    {
                        text: "有错误",
                        value: 1
                    },
                    {
                        text: "一般",
                        value: 2
                    },
                    {
                        text: "比较会穿",
                        value: 3
                    },
                    {
                        text: "穿搭非常好",
                        value: 4
                    },


                ],
                type: "axis",
                min: "0",
                max: "100",
                step: "25",
            },
            brand: {

                item: [
                    {
                        text: "市场货",
                        value: 0
                    },
                    {
                        text: "快时尚",
                        value: 1
                    },
                    {
                        text: "轻奢品",
                        value: 2
                    },

                ],
                title: "着装品牌",
                type: "radio"
            },
            personality: {

                item: [
                    {
                        text: "基本穿搭",
                        value: 0
                    },
                    {
                        text: "有点个性",
                        value: 1
                    },
                    {
                        text: "非常个性",
                        value: 2
                    },

                ],
                title: "着装时尚度",
                step: '50',
                type: "axis",
                min: "0",
                max: "100",
            }
        },
        customerInfoColl: [],
        customerAblityColl: [],
        currentValue: 170
    },
    onLoad: function (options) {
        this.init()
    },
    init() {
        //展开折叠面板1
        // this.setData({customerInfoColl: _.map(this.data.customerInfo, 'prop')})
        //展开折叠面板2
        //  // this.setData({customerAblityColl: _.range(this.data.customerAblity.length)})
        // this.setData({customerAblityColl: _.map(this.data.customerAblity, 'prop')})

    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    selectInfo(e) {
        let prop = e.currentTarget.dataset.prop

        // let customerInfoColl = this.data.customerInfoColl
        //可能多选不需要折叠
        // if (customerInfo[index].type !== 'checkbox') {
        // 勾选后单选按钮折叠
        // _.remove(customerInfoColl, (o) => {
        //     return o === index
        // });
        // }
        this.setData({
            // customerInfoColl,
            [`customerInfo.${prop}.checked`]: e.detail.checked
        })
    },
    selectAblity(e) {
        // let index = e.currentTarget.dataset.index
        let prop = e.currentTarget.dataset.prop

        // let customerAblityColl = this.data.customerAblityColl
        //可能多选不需要折叠
        // if (customerAblity[index].type !== 'checkbox') {
        // 勾选后折叠
        // _.remove(customerAblityColl, (o) => {
        //     return o === index
        // });
        // }

        this.setData({
            // customerAblityColl,
            [`customerAblity.${prop}.checked`]: e.detail.checked
        })
    },
});
