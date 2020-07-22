Page({
    data: {

        customerInfo: [
            {
                item: ['无同伴', '1人', '2人及以上'],
                title: '同伴人数',
                type: 'radio',
                default: '无同伴'
            },
            {
                item: ['男', '女', '+'],
                title: "性别",
                type: "checkbox",
                default: '帅哥'
            },
            {
                title: '年龄',
                item: ['幼童', '小童', '大童', '小学生', '初高中',
                    '18-24', '25-30', '35左右', '40左右', '50左右', '60左右', '65以上'],
                type: 'radio',
                default: '25-30'
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
                default: '170-175'

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
                default: '体重正常'

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
                default: '一般用心'

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
                default: '常识型'


            },
            {
                item: [
                    "市场货",
                    "快时尚",
                    "轻奢品"
                ],
                title: "着装品牌",
                type: "radio",
                default: '市场货'
            },
            {
                item: [
                    "基本穿搭",
                    "有点个性",
                    "非常个性"
                ],
                title: "着装时尚度",
                type: "radio",
                default: '基本穿搭'

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
        let customerInfoColl = this.data.customerInfoColl
        this.data.customerInfo.forEach((o, i) => {
            customerInfoColl.push(i)
        })
        this.setData({customerInfoColl})
        //展开折叠面板2
        let customerAblityColl = this.data.customerInfoColl
        this.data.customerInfo.forEach((o, i) => {
            customerAblityColl.push(i)
        })
        this.setData({customerAblityColl})
    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
});
