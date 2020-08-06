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

module.exports = {
    px2rpx,
    rpx2px,
    getNodeViewport
}
