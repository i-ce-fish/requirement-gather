const utils = require('../../utils/index')
import tool from "../../utils/index";

Component({
    options: {addGlobalClass: true},

    properties: {
        item: {
            type: Object,
            value: {}
        },

    },
    data: {
        checked: '',

        showDatetime: false,
        currentDate: new Date().getTime(),

    },
    methods: {


        //todo 封装page
        setDetail(e) {
            this.setData({
                [e.currentTarget.dataset.prop]: e.detail
            })

        },

        tapCheckbox(e) {
            this.setDetail(e)
            let checked = []
            if (this.data.item.type === 'radio') {
                checked.push(this.data.item.item[e.detail].text)
            }
            if (this.data.item.type === 'checkbox') {
                e.detail.forEach((o) => {
                    checked.push(this.data.item.item[o].text)
                })
            }
            // this.setData({
            //     checked
            // })
            //触发选项内容与实际值
            this.triggerEvent('selected', {checked, value: e.detail})

        },
        //不需要取消, 必选的
        // tapRadio(e) {
        //     let detail = this.data.checked === e.detail ? '' : e.detail;
        //     this.setData({
        //         checked: detail
        //     })
        // }

        //使用小程序滑块
        sliderEnd(e) {
            //实际值
            let value = e.detail.value;
            //实际值对应内容
            let itemValue = this.data.item.item[value];

            let checked = itemValue ? itemValue.text : value
            this.triggerEvent('selected', {checked, value})
        },
        //过频导致性能问题, 太慢会有并发错误
        slidering: tool.throttle(function (e) {
            let item = this.data.item;
            let value = e[0].detail.value;
            //考虑起点不为0的情况
            let long = value - item.min;
            //考虑总长度不为100的情况
            let totalLong = item.max - item.min;
            //平均每一个区间的长度
            let unit = item.item.length;
            //向下取整, 计算当前滑块所在的选项的索引
            let index = Math.floor(long / (totalLong / unit))
            //遍历设置状态
            item.item.map((o, i) => {
                let result = false
                if (i === index) {
                    result = true
                }
                //减少值不改变时不必要的setData
                if (o.active !== result) {
                    this.setData({
                        [`item.item[${i}].active`]: result
                    });
                }
            })

        }, 30),


        //日历组件
        showDatetime() {
            this.setData({
                showDatetime: true
            })
        },
        closeDatetime() {
            this.setData({
                showDatetime: false
            })
        },
        confirmDatetime(e) {
            this.closeDatetime()
            //格式化时间戳
            let datetime = utils.formatTime(new Date(e.detail));
            this.triggerEvent('selected', {checked: datetime, value: e.detail})
            this.setData({
                checked: datetime
            })
        }
    }
});
