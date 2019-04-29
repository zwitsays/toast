# - description
自定义toast提示控件，简单轻便，自适应文字长度
# - 使用方法
1.下载demo，打开文件夹，复制Components中toast文件到你的项目中
2.在页面配置文件index.json中,引入 
"usingComponents": {
    "toast":"../../Components/toast/toast"
 }
 
3.在index.wxml 页面中调用toast控件即可<toast id="toast"></toast>
4.在index.js 第一步 this.toast = this.selectComponent("#toast") 第二步this.toast.showToast('我就是一个自定义的toast，没有长度限制哦')即可
