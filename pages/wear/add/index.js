const _ = require('../../../lib/lodash.min')
Page({
    data: {
        carousels: {
            mainImgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'}
            ],
            sideImgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'}

            ],
            backImgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'}
            ],
            detailImgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000015348/main/first/561/1.jpg'}],
        },

        labelList: {
            sex: {
                type: "checkbox",
                title: "性别",
                item: [
                    {
                        text: "男",
                        value: '0'
                    },
                    {
                        text: "女",
                        value: '1'
                    },
                    {
                        text: "中性",
                        value: '2'
                    },

                ],
                unAddable: true,
                value: ['1', '2'],
                checked: ['女', '中性']

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
                title: "适穿年龄",
                type: 'checkbox'


            },
            season: {
                title: "适穿年季",
                type: "radio",
                item: [
                    {text: '春', value: '0'},
                    {text: '夏', value: '1'},
                    {text: '秋', value: '2'},
                    {text: '冬', value: '3'},
                    {text: '全季', value: '4'}
                ],
                value: '1',
                checked: '春',
            },
            goods: {
                title: '现货匹配',
                type: 'radio',
                item: [
                    {text: '本店现货', value: '0'},
                    {text: '本店期货', value: '1'},
                    {text: '云想现货', value: '2'}
                ],
                unAddable: true
            },
            occasion: {
                title: '穿着场合',
                type: "checkbox",
                item: [
                    {text: '正式商务', value: '0'},
                    {text: '通勤上班', value: '2'},
                    {text: '居家舒适', value: '3'},
                    {text: '户外休闲', value: '4'},
                    {text: '活力运动', value: '5'},
                    {text: '性感夜店', value: '6'},
                    {text: '礼服场合', value: '7'},
                    {text: '旅游度假', value: '8'},
                    {text: '其他场合', value: '9'}
                ]
            },
            personality: {
                item: [
                    {text: "基本穿搭", value: '0'},
                    {text: "有点个性", value: '1'},
                    {text: "非常个性", value: '2'},
                ],
                title: "着装时尚度",
                type: "radio",
                unAddable: true
            },
            wearFrom: {
                title: '穿法来源',
                type: 'radio',
                item: [
                    {text: '明星', value: '0'},
                    {text: '卡通动漫', value: '1'},
                    {text: '街拍达人', value: '2'},
                    {text: '其他来源', value: '3'}
                ]
            },
            popularArea: {
                title: "流行地区",
                type: 'radio',
                item: [
                    {text: '港台', value: '0'},
                    {text: '中心城市', value: '1'},
                    {text: '上海中学生', value: '2'},
                    {text: '巴黎街头', value: '3'},
                    {text: '娱乐圈', value: '4'},
                    {text: '剑桥哈佛', value: '5'},
                    {text: '日韩', value: '6'}
                ]
            },
            temperament: {
                title: '气穿着质',
                type: 'checkbox',
                item: [
                    {text: '阳光帅气', value: '0'},
                    {text: '妩媚动人', value: '1'},
                    {text: '沉稳老练', value: '2'},
                    {text: '性感风骚', value: '3'},
                    {text: '冷酷肃杀', value: '4'},
                    {text: '浪漫多情', value: '5'},
                    {text: '小清新', value: '6'},
                    {text: '富贵大气', value: '7'},
                    {text: '睿智聪慧', value: '8'},
                    {text: '憨厚老实', value: '9'},
                    {text: '年轻活力', value: '10'},
                    {text: '健美有型', value: '12'},
                    {text: '循规蹈矩', value: '13'},
                    {text: '善良和蔼', value: '14'},
                    {text: '清净寡欲', value: '15'},
                    {text: '干练敏捷', value: '16'},
                    {text: '超凡脱俗', value: '17'}
                ]
            },
            wearStyle: {
                title: "穿衣风格",
                type: 'checkbox',
                item: [
                    {text: '简约', value: '0'},
                    {text: '森女', value: '1'},
                    {text: '商务', value: '2'},
                    {text: '少淑', value: '3'},
                    {text: '呆萌', value: '4'},
                    {text: '民族', value: '5'},
                    {text: '学院', value: '6'},
                    {text: '瑞丽', value: '7'},
                    {text: '洛丽塔', value: '8'},
                    {text: '军旅', value: '9'},
                    {text: '轻奢', value: '10'},
                ]
            }

        },

        //穿法相关单品数据格式
        productList: [
            {
                catalog: 'T恤',
                catalogId: '1',
                item: [
                    {
                        catalog: 'T恤',
                        catalogId: '1',
                        name: '男经典纯棉圆领T恤',
                        //掉拍肩
                        price: "199.99",
                        inventory: '99',
                        styleId: '226250-70'
                    }, {
                        catalog: 'T恤',
                        catalogId: '1',
                        name: '男经典纯棉圆领T恤',
                        //掉拍肩
                        price: "199.99",
                        inventory: '99',
                        styleId: '226250-70'
                    }, {
                        catalog: 'T恤',
                        catalogId: '1',
                        name: '男经典纯棉圆领T恤',
                        //掉拍肩
                        price: "199.99",
                        inventory: '99',
                        styleId: '226250-70'
                    }
                ]
            }, {
                catalog: '裙子',
                catalogId: '1',
                item: [
                    {
                        catalog: '裙子',
                        catalogId: '1',
                        name: '女经典裙子',
                        //掉拍肩
                        price: "199.99",
                        inventory: '99',
                        styleId: '226250-70'
                    }, {
                        catalog: '裙子',
                        catalogId: '1',
                        name: '女经典裙子',
                        //掉拍肩
                        price: "199.99",
                        inventory: '99',
                        styleId: '226250-70'
                    }
                ]
            },

        ]
    },
    onLoad: function (options) {
        //遍历设置prop属性, 折叠用
        _.forEach(this.data.labelList, (o, key) => {
            o.prop = key
        })
        this.setData({coll: _.map(this.data.labelList, 'prop')})

    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    //上传之后
    afterRead(event) {
        const {file} = event.detail;
        // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
        wx.uploadFile({
            url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
            filePath: file.path,
            name: 'file',
            formData: {user: 'test'},
            success(res) {
                // 上传完成需要更新 fileList
                const {fileList = []} = this.data;
                fileList.push({...file, url: res.data});
                this.setData({fileList});
            },
        })
    },
    //选择之后
    select(e) {
        let prop = e.currentTarget.dataset.prop

        let coll = this.data.coll
        //可能多选不需要折叠
        // if (customerInfo[index].type !== 'checkbox') {
        // 勾选后单选按钮折叠
        _.remove(coll, (o) => {
            return o === prop
        });
        // }
        console.log(e.detail)
        this.setData({
            coll,
            [`labelList.${prop}.checked`]: e.detail.checked,
            [`labelList.${prop}.value`]: e.detail.value
        })
    },

})
