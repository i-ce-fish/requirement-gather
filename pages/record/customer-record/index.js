Page({
    data: {
        recordForm: [
            {title: '顾客性别和着装性别标签（目测）', item: ['男', '女', '有倾向']},
            {title: '顾客年龄段（目测）', item: ['初高中生', '大学生', '工作没几年', '30岁左右', '40岁左右', '50岁以上', '大童']},
            {title: '顾客身高（目测尺码）', item: ['165', '170', '175', '180', '185', '190']},
            // {title: '顾客穿衣时尚度/个性（目测）', item: ['基本穿搭', '比较个性', '非常个性']},
            {title: '顾客着装品质/经济实力（目测）', item: ['无品牌', '快时尚', '轻奢']},
            {title: '顾客着装/形象讲究度（目测）', item: ['不讲究', '稍讲究', '很讲究']},
            {title: '顾客着装穿搭专业度（目测）', item: ['穿错了', '没毛病', '很专业']},
            {title: '顾客着装风格（目测）', item: ['运动休闲', '商务', '简约', '浪漫', '通勤', '庞克', '森女', '棉麻佛系', '自定义']},
            {
                title: '顾客穿着可能的职业/身份（目测）',
                item: ['初高中生', '大学生', '教师', '医护', '家庭主妇', '外来务工', '小老板', '机关事业',
                    '退休', '村民', '工厂管理', '自定义']
            },
            {title: '顾客着装自定义项目（目测）', item: ['xx', 'xx', 'xx', 'xx', '自定义']},

        ],
        shortcoming: {title: '顾客体型特征目测', item: ['黑', '矮', '腿短', '波脖子粗']},
        actShortComing:['0']
    },
    onLoad: function (options) {

    },
    tapShortComing(e) {
        this.setData({
            actShortComing: e.detail,
        });
    },

    setDetail(e) {
        this.setData({
            [e.currentTarget.dataset.prop]: e.detail
        })
    },
});
