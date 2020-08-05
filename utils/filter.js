// utils/filter.js
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


                //需要区分page和component


                /**
                 *   todo 页面级权限控制
                 *  静态: 前端维护本地权限表
                 *  动态: 后端维护
                 *
                 */


                console.error('filter')
                const route = getPageInstance().route
                const role = {roleId: 1, roleName: 'admin'}

                const permission = [
                    {
                        page: 'pages/user/login/index/index',
                        roleId: [1, 2, 3, 4, 5]
                    }
                ]
                //    route.getRoute.getRoleId


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
