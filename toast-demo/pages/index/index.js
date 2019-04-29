//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    promiseData:[1,2,3]

  },
  onReady:function () {
    this.toast = this.selectComponent("#toast")
  },
  onLoad: function () {

  },

  //调用showToast方法
  showMyToast:function () {
    this.toast.showToast('我就是一个自定义的toast，没有长度限制哦')
  }
})
