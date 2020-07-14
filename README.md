## vant源码修改记录
1. 修改van-button line8，因为disabled设置后仍有点击效果
    before:
    ```html

        hover-class="van-button--active hover-class"
    ```
    after:
    ```html
          hover-class="{{ !disabled ? 'van-button--active hover-class' : 'noop' }} "
    ```

2. 修改商品导航按钮的形状改成方形
    注释了goods-action-button/index.wxss里全部的按钮圆形边框

3. 修改提交订单导航
    submit-bar/index.wxss 高度和边距
    submit-bar/index.wxss 增加阴影
    
1. 购物车页面、结算页面、
订单付款页面
（展示订单号、老板头像、微信号、一键复制老板微信号）
购物车：未登录存进缓存，登录=》api
2.分类页懒加载、
3.页面布局（优衣库首页--大类页（分类按钮）--T恤（小类页）-商品详情）
