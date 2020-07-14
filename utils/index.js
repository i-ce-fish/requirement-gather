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



const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}


function px2rpx(px) {
    const width = wx.getSystemInfoSync().windowWidth
    return px * (750 / width)
}


// rpx  转px
function rpx2px(rpx) {
    const width = wx.getSystemInfoSync().windowWidth
    return rpx / 750 * width
}




module.exports = {
    formatTime,
    px2rpx,
    rpx2px
}
