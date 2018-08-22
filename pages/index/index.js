//index.js
const preImg = require('../../utils/link.js');
const network=require('../../utils/network.js');
//写入参数  
// var params = new Object();
// params.showapi_appid = "54514";
// params.showapi_sign = "125e5404a8554b79aaea52d13341112c";
// network.POST('/44-1/',{
//   params: params,
//   success: function (res) {
//     console.log(res)
//     //拿到解密后的数据，进行代码逻辑  

//   },
//   fail: function () {
//     //失败后的逻辑  

//   },
// }) 
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner:{
      linkSrc:'http://h5.91jianguo.com/uploads/xcx/cd.jpg',
      imgSrc:'http://h5.91jianguo.com/uploads/xcx/cd_banner.jpg',
      gameSrc:'http://h5.91jianguo.com/uploads/xcx/cd_icon.png',
      title:'彩弹连连射',
      content:'滚滚滚，滚走鱼尾纹1'
    },
    imgUrls: [
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/cd.jpg',
        txt:'是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        title:'彩弹连连射',
        pf:100,
        url:'http://h5.91jianguo.com/uploads/xcx/cd_icon.png',
        href:'../list/list'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/gyd.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        title: '滚远点',
        pf: 93,
        url: 'http://h5.91jianguo.com/uploads/xcx/gyd_icon.png',
        href: '../list/list'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/fbzj.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        title: '防爆专家',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/fbzj_icon.png',
        href: '../list/list'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/qql.jpg',
        txt: '是时候动动脑子啦！想办法让小球俩相撞吧！规则很简单，画一条线或一个形状让小球撞在一起，你不仅需要智慧更需要一些想象力哦！',
        title: '砌砌乐',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/qql_icon.png',
        href: '../list/list'
      }
    ],
    indexList:[
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/gyd.jpg',
        img:'http://h5.91jianguo.com/uploads/xcx/gyd_list.jpg',
        content: '是时候动动脑子啦！',
        title: '滚远点',
        pf: 93,
        url: 'http://h5.91jianguo.com/uploads/xcx/gyd_icon.png',
        href: '../list/list'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/fbzj.jpg',
        img: 'http://h5.91jianguo.com/uploads/xcx/fbzj_list.jpg',
        content: '是时候动动脑子啦！',
        title: '防爆专家',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/fbzj_icon.png',
        href: '../list/list'
      },
      {
        linkSrc: 'http://h5.91jianguo.com/uploads/xcx/qql.jpg',
        img: 'http://h5.91jianguo.com/uploads/xcx/qql_list.jpg',
        content: '是时候动动脑子啦！',
        title: '砌砌乐',
        pf: 90,
        url: 'http://h5.91jianguo.com/uploads/xcx/qql_icon.png',
        href: '../list/list'
      },
    ],
    swiperIndex: 0
  },
  linkTo:function(e){
    let href=e.currentTarget.dataset.link;
    wx.switchTab({
      url: href,
    })
  },
  link:function (e) {
    let link = e.currentTarget.dataset.link;
    console.log(link)
    wx.navigateTo({
      url: link
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //首页转发
    wx.showShareMenu({
      withShareTicket: true
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  swiperChange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  preImg:preImg.preImg,
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }
})
