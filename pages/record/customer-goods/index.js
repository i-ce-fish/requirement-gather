const _ = require('../../../lib/lodash.min')
const upload = require('../../../utils/upload')

// pages/record/customer-goods/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        price: {
            title: "价格需求",
            type: 'checkbox',
            item: [
                {text: '满意', value: '0'},
                {text: '还行', value: '0'},
                {text: '不值当', value: '0'},
                {text: '很不值当', value: '0'},
                {text: '打折后可以考虑', value: '0'},
            ],
            inputLabel: '最高极限价',
            inputPlaceholder: ""
        },
        fabric: {
            material: {
                title: '面料材质', value: "", type: 'radio', inputLabel: '', inputPlaceholder: "显示读取的样衣材质（默认）"
            },
            thickness: {
                type: 'radio',

                title: '面料厚薄',
                item: [
                    {text: '样衣', value: '0'},
                    {text: '加厚', value: '0'},
                    {text: '变薄', value: '0'},
                ]
            },
            feel: {
                type: 'radio',
                title: '手感',
                item: [
                    {text: '样衣', value: '0'},
                    {text: '柔软', value: '0'},
                    {text: '丝滑', value: '0'}
                ]
            },
            drape: {
                type: 'radio',

                title: '面料垂感',
                item: [
                    {text: '样衣', value: '0'},
                    {text: '加垂', value: '0'},
                    {text: '加挺', value: '0'}
                ]
            },
            function: {
                type: 'radio',

                title: '面料功能',
                item: [
                    {text: '样衣', value: '0'},
                    {text: '透气', value: '0'},
                    {text: '吸湿', value: '0'},
                    {text: '快干', value: '0'},
                    {text: '防晒', value: '0'},
                    {text: '亲肤', value: '0'},
                ]
            }
        },
// 可以遍历的条件
        filter: {
            occasion: {
                type: 'checkbox',

                title: "穿着场合",
                item: [
                    {text: '约会', value: '0'},
                    {text: '宴会', value: '0'},
                    {text: '度假', value: '0'},
                    {text: '运动', value: '0'},
                    {text: '逛街', value: '0'},
                    {text: '校园', value: '0'},
                    {text: '通勤', value: '0'},
                    {text: '旅游', value: '0'},
                    {text: '居家', value: '0'},
                    {text: '商务', value: '0'},
                    {text: '沙滩', value: '0'},
                    {text: '求职', value: '0'},
                ]
            },
            season: {
                type: 'checkbox',

                title: "季节需求",
                item: [
                    {text: '春', value: '0'},
                    {text: '夏', value: '0'},
                    {text: '秋', value: '0'},
                    {text: '冬', value: '0'},
                    {text: '严冬', value: '0'},
                    {text: '盛夏', value: '0'}
                ]
            },
            template: {
                type: 'checkbox',
                title: '版型需求',
                item: [
                    {text: '修身', value: '0'},
                    {text: '常规', value: '0'},
                    {text: '直筒', value: '0'},
                    {text: '宽松', value: '0'},
                    {text: '收腰', value: '0'},
                ]

            },
            clothLength: {
                type: 'checkbox',
                title: "衣长",
                item: [
                    {text: '超长款', value: '0'},
                    {text: '长款', value: '0'},
                    {text: '中长款', value: '0'},
                    {text: '常规', value: '0'},
                    {text: '收腰', value: '0'},
                ]
            },
            collar: {
                type: 'checkbox',
                title: '领型',
                item: [
                    {text: '圆领', value: '0'},
                    {text: 'V领', value: '0'},
                    {text: 'U领', value: '0'},
                    {text: '一字领', value: '0'},
                    {text: '翻领', value: '0'},
                    {text: 'POLO领', value: '0'},
                    {text: '低领', value: '0'},
                    {text: '半高领', value: '0'},
                    {text: '高领', value: '0'},
                    {text: '方领', value: '0'},
                    {text: '假领', value: '0'},
                    {text: '无领', value: '0'},
                    {text: '系带领', value: '0'},
                    {text: '斜领', value: '0'},
                    {text: '西装领', value: '0'},
                    {text: '荷叶领', value: '0'},
                    {text: '娃娃领', value: '0'},
                    {text: '棒球领', value: '0'},
                    {text: '海军领', value: '0'},
                ]
            },
            sleeveLength: {
                type: 'checkbox',
                title: '袖长',
                item: [
                    {text: '无袖', value: '0'},
                    {text: '短袖', value: '0'},
                    {text: '长袖', value: '0'},
                    {text: '五分袖', value: '0'},
                    {text: '七分袖', value: '0'},
                    {text: '九分袖', value: '0'}
                ]
            },
            sleeve: {
                type: 'checkbox',
                title: '袖型',
                item: [
                    {text: '泡泡袖', value: '0'},
                    {text: '喇叭袖', value: '0'},
                    {text: '蝙蝠袖', value: '0'},
                    {text: '衬衫袖', value: '0'},
                    {text: '插肩袖', value: '0'},
                    {text: '公主袖', value: '0'},
                    {text: '灯笼袖', value: '0'},
                    {text: '荷叶袖', value: '0'},
                    {text: '花瓣袖', value: '0'},
                    {text: '飞飞袖', value: '0'},
                    {text: '堆堆袖', value: '0'},
                    {text: '牛角袖', value: '0'},
                    {text: '包袖', value: '0'},
                    {text: '常规袖', value: '0'},
                    {text: '落肩袖', value: '0'}
                ]
            },

            hem: {
                type: 'checkbox',
                title: "下摆",
                item: [
                    {text: '宽松下摆', value: '0'},
                    {text: '不规则下摆', value: '0'},
                    {text: '花苞下摆', value: '0'},
                    {text: '收紧带下摆', value: '0'},
                    {text: '带抽绳下摆', value: '0'},
                    {text: '碎花荷叶下摆', value: '0'},
                    {text: '百褶下摆', value: '0'},
                    {text: '弧度下摆', value: '0'},
                    {text: '双层下摆', value: '0'},
                    {text: '拼接下摆', value: '0'},
                    {text: '侧缝收折下摆', value: '0'},
                ]
            },
        },
        pattern: {
            title: '图案',
            inputPlaceholder: "图太多，太幼稚/喜欢××图案",
            inputLabel: '自定义',

            imgs: [
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000014749/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017724/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000017773/main/first/561/1.jpg'},
                {url: 'https://www.uniqlo.cn/hmall/test/u0000000014879/main/first/561/1.jpg'}
            ]

        },
        color: {
            title: '颜色',
            inputPlaceholder: "色系，明度",
            inputLabel: '自定义',


        },
        printing: {
            title: '印花工艺',
            inputPlaceholder: "后片长，两侧开叉",
            inputLabel: '自定义',

        },

        // 控制折叠
        coll: []

    },

    onLoad() {
        //展开折叠面板1
        _.forEach(this.data.filter, (o, key) => {
            o.prop = key
        })

        /**
         *
         *lodash显示使用链式调用, chain-value
         *
         * 设置需要展开的所有折叠项
         */
        let props = _.chain(this.data.filter)
            .map('prop')
            .concat('price', 'fabric', 'pattern', 'printing', 'color')
            .value()

        setTimeout(
            () => {
                this.setData({coll: props})
            }, 100
        )


    },
    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
    //勾选后 折叠并 赋值
    select(e) {
        let prop = e.currentTarget.dataset.prop
        let index = e.currentTarget.dataset.index
        this.collapseItem(prop)
        this.setData({
            [`${index}.checked`]: e.detail.checked
        })
    },
    //输入自定义后赋值
    inputCustomize(e) {
        let prop = e.currentTarget.dataset.prop
        let index = e.currentTarget.dataset.index
        this.collapseItem(prop)
        this.setData({
            [`${index}.customize`]: e.detail.checked
        })
    },


    /**
     *
     *折叠单个项
     */
    collapseItem(prop) {
        let coll = this.data.coll
        //可能多选不需要折叠
        // if (customer[index].type !== 'checkbox') {
        // 勾选后单选按钮折叠
        _.remove(coll, (o) => {
            return o === prop
        });
        // }

        this.setData({
            coll,
        })
    },
    //只有文字输入, 没有选项的设置
    onlyInput(e) {
        let prop = e.currentTarget.dataset.prop
        this.collapseItem(prop)
        this.setData({
            [`${prop}.checked`]: e.detail
        })
    },
    // 上传图片
    uploadPatternImgs(e) {
        const {file} = e.detail;
        upload.uploadImg(file)
        this.collapseItem('pattern')
    }
})
