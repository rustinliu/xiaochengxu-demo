// index.js
// 获取应用实例

Page({
    data: {
        msg: 'World',
        count: 1,
    },
    x: function () {
        this.setData({ count: this.data.count + 1 });
    },
});
