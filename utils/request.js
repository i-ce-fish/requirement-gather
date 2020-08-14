function request(req) {
    // 去除前缀“/api”
    // req.url = req.url.replace('/api','')

    // 另一个服务器
    // 斜杠在此处添加，api文件不加斜杠
    const ServerIP = 'https://shop.cdb99.com/api/'

    // 端口号也要与小程序域名设置一致
    // const ServerIP = 'https://shop.cdb99.com/api/v1/'

    return new Promise(function (resolve, reject) {
        wx.showLoading({
            title: '加载中',
            mask: true
        })


        wx.request({
            url: ServerIP + req.url,
            data: req.data,
            method: req.method,
            timeout: 5000,
            //这几项必须设置
            header: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + wx.getStorageSync('token'),

                // 对于 GET 方法的数据，会将数据转换成 query string（encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...）
                // 对于 POST 方法且 header['content-type'] 为 application/json 的数据，会对数据进行 JSON 序列化
                //对于 POST 方法且 header['content-type'] 为 application/x-www-form-urlencoded 的数据，会将数据转换成 query string

                //getList 不可用
                // 'Content-Type': 'application/json',
                // 添加接口不可用
                // "Content-Type": "json"
                //getList使用json , 其他用默认值application/json
                'Content-Type': req.contentType ? req.contentType : 'application/json'
            },
            success: function (res) {

                console.warn('请求结果', res);

                switch (res.data.code) {
                    case 200:
                        resolve(res.data.data);
                        break;
                    //    服务器的token已过期/登录失效/未登录
                    case 500:
                        getApp().$router.push('user/login/index')
                        break;
                    default:
                        console.warn("返回码校验失败", res.data);
                }
            },
            fail: function (err) {
                wx.showModal({
                    title: '错误',
                    content: '网络异常',
                    showCancel: false
                });
                console.warn("请求失败", err)
                reject(err);
            },
            complete(res) {
                wx.hideLoading()
            }
        })
    });

}


// exports.request = request

export default request
