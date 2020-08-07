// utils/filter.js


/**
 * 废弃, 路由控制权限
 *
 * Page增加代理
 * @param pageObj
 * @returns {{onLoad}|*}
 */
//AOP
function permission(pageObj) {
    //for dev
    // return pageObj;

    if (pageObj.onLoad) {
        let _onLoad = pageObj.onLoad;
        // 使用onLoad的话需要传递options
        pageObj.onLoad = function (options) {
            if (wx.getStorageSync('token')) {
                // 获取当前页面
                let currentInstance = getPageInstance();
                _onLoad.call(currentInstance, options);

            } else {
                //跳转到登录页
                wx.redirectTo({
                    url: "/pages/user/login/index/index"
                });
            }
        }
    }
    return pageObj;
}

// 获取当前页面
function getPageInstance() {
    const pages = getCurrentPages();
    return pages[pages.length - 1];
}

exports.permission = permission;
