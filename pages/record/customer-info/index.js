Page({
    data: {
        comingCusInfo: {
            item: ['1人', '2人', '3人及以上', '男', '女', '+',
                '幼童', '小童', '大童', '小学生', '初高中',
                '18-24', '25-30', '35左右', '40左右', '50左右', '60左右', '65以上'],
            type: 'checkbox'
        },
        comingCus: [
            {
                item: ['帅哥', '美女', '有倾向'],
                title: "性别", type: "checkbox"
            },
            {
                item: [
                    "152",
                    "155",
                    "160",
                    "165",
                    "170",
                    "175",
                    "180",
                    "185",
                    "190"

                ],
                title: "年龄", type: "radio"

            }, {
                item: [
                    "体重正常",
                    "稍胖",
                    "超胖",
                    "略瘦",
                    "很瘦"
                ],
                title: "体型目测"
                , type: "radio"
            },
            {
                item: [
                    "一般用心",
                    "极不用心",
                    "比较用心",
                    "非常用心"
                ],
                title: "着装态度(重视用心程度)", type: "radio"

            },
            {
                item: [
                    "常识型",
                    "有错误",
                    "比较会穿"
                    ,
                    "穿搭非常好"
                ],
                title: "着装能力(会不会打扮)", type: "radio"

            },
            {
                item: [
                    "市场货",
                    "快时尚",
                    "轻奢品"
                ],
                title: "着装品牌", type: "radio"

            },
            {
                item: [
                    "基本穿搭",
                    "有点个性",
                    "非常个性"
                ],
                title: "着装时尚度", type: "radio"

            }
        ]
    },
    onLoad: function (options) {

    }
});
