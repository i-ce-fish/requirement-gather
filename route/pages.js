export default [
    //尽量添加注释

    /**
     * admin: 后台管理
     * manager: 店长
     * guider: 导购
     */
    //首页
    {
        url: 'pages/home/index/index',
        name: 'home',
        role: ['admin', 'manager', 'guider']
    },
    //我的
    {
        url: "pages/my/index/index",
        name: 'my',
        role: ['admin', 'manager', 'guider']
    },
    //我的工作
    {
        url: "pages/my/work/index",
        name: 'my/work',
        role: ['admin', 'manager', 'guider']
    },
    //穿法/添加
    {
        url: "pages/wear/add/index",
        name: 'wear/add',
        role: ['admin', 'manager', 'guider']
    },
    //登录页
    {
        url: "pages/user/login/index/index",
        name: 'login',
        role: ['admin', 'manager', 'guider']
    },
    //手机登录页
    {
        url: "pages/user/login/phone/index",
        name: 'login/phone',
        role: ['admin', 'manager', 'guider']
    },
    //会员查询页
    {
        url: "pages/member/search/index",
        name: 'member/search',
        role: ['admin', 'manager', 'guider']
    },

    //员工添加页
    {
        url: "pages/employee/add/index",
        name: 'employee/add',
        role: ['admin', 'manager']
    },
    //记录/顾客信息
    {
        url: "pages/record/customer-info/index",
        name: 'record/customer-info',

        role: ['admin', 'manager', 'guider']
    },
    //记录/顾客商品
    {
        url: "pages/record/customer-goods/index",
        name: 'record/customer-goods',
        role: ['admin', 'manager', 'guider']
    },
    //记录/顾客详情
    {
        url: "pages/record/customer-detail/index",
        name: 'record/customer-detail',
        role: ['admin', 'manager', 'guider']
    },
    //记录/列表
    {
        url: "pages/record/customer-list/index",
        name: 'record/customer-list',
        role: ['admin', 'manager', 'guider']
    },
    //记录/
    {
        url: "pages/record/feature/index",
        name: 'record/feature',
        role: ['admin', 'manager', 'guider']
    },
    //记录/顾客?
    {
        url: "pages/record/customer-record/index",
        name: 'record/customer-record',
        role: ['admin', 'manager', 'guider']
    },
    //接口测试
    {
        url: "pages/test/form/list/index",
        name: 'test/form/list',
        role: ['admin', 'manager', 'guider']
    }, {
        url: "pages/test/form/edit/index",
        name: 'test/form/edit',
        role: ['admin', 'manager', 'guider']
    }, {
        url: "pages/test/form/add/index",
        name: 'test/form/add',
        role: ['admin', 'manager', 'guider']
    }
]
