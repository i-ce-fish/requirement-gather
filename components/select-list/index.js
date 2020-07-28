const utils = require('../../utils/index')
import tool from "../../utils/tool";

Component({
    options: {addGlobalClass: true},
    lifetimes: {
        ready() {
            // this.iconAni = wx.createAnimation()
            // this.data.list.forEach(item => {
            //
            //     // if (item.type === 'checkbox') {
            //     item.collapse = true
            //     // }
            //     // if (item.type === 'radio') {
            //     //     item.checked
            //     // }
            // })
        }
    },

    properties: {
        item: {
            type: Object,
            value: {}
        },
        myValue: String

    },
    data: {
        checked: '',

        showDatetime: false,
        currentDate: new Date().getTime(),

    },
    methods: {

        // show: function (e) {
        //     //原点是指渲染完成的位置
        //     // this.setData({iconRotate: this.iconAni.export(), collapse: false})
        //     // this.iconAni.rotate(180).step()
        //     this.setData({
        //         [`list[${e.currentTarget.dataset.index}].collapse`]: true
        //     })
        // },
        // hide(e) {
        //     // this.iconAni.rotate(0).step()
        //     // this.setData({iconRotate: this.iconAni.export(), collapse: true})
        //     this.setData({
        //         [`list[${e.currentTarget.dataset.index}].collapse`]: false
        //     })
        //
        // },
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
            this.triggerEvent('selected', {checked, value: e.detail})

        },
        //不需要取消, 必选的
        // tapRadio(e) {
        //     let detail = this.data.checked === e.detail ? '' : e.detail;
        //     this.setData({
        //         checked: detail
        //     })
        // }

        //需要松开才触发, 否则一拖动就会折叠
        drag(e) {
            console.log(e)
            let checked;
            let step = this.data.item.step

            //数轴组件的值
            let axisValue = e.detail.value;
            //选项的实际值
            let itemValue = this.data.item.item[axisValue / step];
            checked = itemValue ? itemValue.text : axisValue

            //死循环
            // this.setData({
            //     checked
            // });

            //返回选项中的值或者组件中的值
            this.triggerEvent('selected', {checked, value: axisValue})
        },
        //点击数轴下方文字
        // tapText(e){
        //     console.log(e.currentTarget.dataset.index)
        // }

        //使用小程序滑块
        sliderEnd(e) {
            let value = e.detail.value;
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
                console.log(o.active)
                let result = false
                if (i === index) {
                    result = true
                }
                //减少值不改变时的setData
                if (o.active !== result) {
                    this.setData({
                        [`item.item[${i}].active`]: result
                    });
                }
            })

        }, 30),

        //有bug
        // slidering: _.throttle(
        //     function (e) {
        //         console.log(e)
        //         console.log(this)
        //         let value = e.detail.value;
        //         let itemValue = this.data.item.item[value];
        //         let checked = itemValue ? itemValue.text : value
        //         console.log(checked)
        //
        //         this.setData({
        //             checked: checked
        //         })
        //     },
        //     50, {
        //         leading: true,
        //         trailing: true
        //     }
        // ),
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
            let datetime = utils.formatTime(new Date(e.detail));
            this.triggerEvent('selected', {checked: datetime, value: e.detail})
            this.setData({
                checked: datetime
            })
        }
    }
});
