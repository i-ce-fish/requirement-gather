const _ = require('../../../lib/lodash.min')
Page({
    data: {

        customerInfo: [
            {
                item: ['无同伴', '1人', '2人及以上'],
                title: '同伴人数',
                type: 'radio',
            },
            {
                item: ['男', '女', '+'],
                title: "性别",
                type: "checkbox",
            },
            {
                title: '年龄',
                item: ['幼童', '小童', '大童', '小学生', '初高中',
                    '18-24', '25-30', '35左右', '40左右', '50左右', '60左右', '65以上'],
                type: 'radio',
            },
            {
                item: [
                    "150以下",
                    "150-155",
                    "155-160",
                    "160-165",
                    "165-170",
                    "170-175",
                    "175-180",
                    "180-185",
                    "185-190",
                    "190以上"

                ],
                title: "年龄",
                type: "radio",

            }, {
                item: [
                    "体重正常",
                    "稍胖",
                    "超胖",
                    "略瘦",
                    "很瘦"
                ],
                title: "体型目测",
                type: "radio",

            },
        ]

        ,
        customerAblity: [

            {
                item: [
                    "一般用心",
                    "极不用心",
                    "比较用心",
                    "非常用心"
                ],
                title: "着装态度(重视用心程度)",
                type: "radio",

            },
            {
                item: [
                    "常识型",
                    "有错误",
                    "比较会穿"
                    ,
                    "穿搭非常好"
                ],
                title: "着装能力(会不会打扮)",
                type: "radio",


            },
            {
                item: [
                    "市场货",
                    "快时尚",
                    "轻奢品"
                ],
                title: "着装品牌",
                type: "radio",
            },
            {
                item: [
                    "基本穿搭",
                    "有点个性",
                    "非常个性"
                ],
                title: "着装时尚度",
                type: "radio",

            }
        ],
        customerInfoColl: [],
        customerAblityColl: []
    },
    onLoad: function (options) {
        this.init()

    },
    init() {
        //展开折叠面板1
        this.setData({customerInfoColl: _.range(this.data.customerInfo.length)})
        //展开折叠面板2
        this.setData({customerAblityColl: _.range(this.data.customerAblity.length)})

    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    selectInfo(e) {
        let index = e.currentTarget.dataset.index
        let customerInfoColl = this.data.customerInfoColl

        //可能多选不需要折叠
        // if (customerInfo[index].type !== 'checkbox') {
        // 勾选后单选按钮折叠
        _.remove(customerInfoColl, (o) => {
            return o === index
        });
        // }

        this.setData({
            customerInfoColl,
            [`customerInfo[${index}].checked`]: e.detail
        })
    },
    selectAblity(e) {
        let index = e.currentTarget.dataset.index
        let customerAblityColl = this.data.customerAblityColl

        //可能多选不需要折叠
        // if (customerAblity[index].type !== 'checkbox') {
        // 勾选后折叠
        _.remove(customerAblityColl, (o) => {
            return o === index
        });
        // }

        this.setData({
            customerAblityColl,
            [`customerAblity[${index}].checked`]: e.detail
        })
    }
});
