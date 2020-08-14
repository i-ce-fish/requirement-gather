// function formatNumber (n) {
//   const str = n.toString()
//   return str[1] ? str : `0${str}`
// }
//
// export function formatTime (date) {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()
//
//   const t1 = [year, month, day].map(formatNumber).join('/')
//   const t2 = [hour, minute, second].map(formatNumber).join(':')
//
//   return `${t1} ${t2}`
// }
//
// export default {
//   formatNumber,
//   formatTime
// }


function px2rpx(px) {
    const width = wx.getSystemInfoSync().windowWidth
    return px * (750 / width)
}


// rpx  转px
function rpx2px(rpx) {
    const width = wx.getSystemInfoSync().windowWidth
    return rpx / 750 * width
}

// 通过app调用的全局方法, 获取某个节点的坐标信息
function getNodeViewport(selector) {
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    //返回一个promise函数
    return new Promise((resolve, reject) => {
        query.exec(function (res) {
            // res[0].top       // #the-id节点的上边界坐标
            resolve(res)
        })
    })
}


export {
    px2rpx,
    rpx2px,
    getNodeViewport
}
