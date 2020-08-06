const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

/*函数节流*/
function throttle(fn, interval) {
    let enterTime = 0;//触发的时间
    const gapTime = interval || 300;//间隔时间，如果interval不传，则默认300ms
    return function () {
        const context = this;
        const backTime = new Date();//第一次函数return即触发的时间
        if (backTime - enterTime > gapTime) {
            fn.call(context, arguments);
            enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
        }
    };
}

/*函数防抖*/
function debounce(fn, interval) {
    let timer;
    const gapTime = interval || 1000;//间隔时间，如果interval不传，则默认1000ms
    return function () {
        clearTimeout(timer);
        const context = this;
        const args = arguments;//保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
        timer = setTimeout(function () {
            fn.call(context, args);
        }, gapTime);
    };
}

export default {
    formatTime,
    throttle,
    debounce
};
