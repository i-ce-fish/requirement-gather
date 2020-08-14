/**
 * 登录拦截, 对需要登录才能操作的函数进行拦截
 * 没有token就跳到登录页
 * @param fn 执行函数
 * @returns {*}
 */
function loginValidate(fn) {
    return new Proxy(fn, {
        apply(target, ctx, args) {

            if (!wx.getStorageSync('token')) {
                getApp().$router.push('user/login/index')
            } else {
                return Reflect.apply(...arguments);
            }

        }
    })
}


/**
 * 打印方法调用前参数和方法调用返回的结果, 类似AOP
 * 用于开发阶段测试
 */
function log(fn) {
    return new Proxy(fn, {
        apply(target, ctx, args) {

            console.log(`before:${target.name}`, args)
            let result = Reflect.apply(...arguments);
            console.log(`after:${target.name}`, result)

            return result
        }
    });
}


export {
    loginValidate,
    log
};
