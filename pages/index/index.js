//index.js
const preImg = require('../../utils/link.js');
const network=require('../../utils/network.js');
const proData=require('../../utils/data.js');

//获取应用实例
const app = getApp()

Page({
  data: {
    banner:[],
    imgUrls: '',
    indexList:'',
    swiperIndex: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular: true,
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
    wx.showLoading({
      title: "加载中"
    })
    var _that=this;
    network.GET('/Api_applet/list/', {
      success: function (res) {
        // console.log(res)
        // console.log(res.data.cvoData)
        let data = res.data.cvoData;
        //拿到解密后的数据，进行代码逻辑  
        _that.bannerShow(data);
        _that.listShow(data);
        _that.indexList(data);
        wx.hideLoading();
      },
      fail: function () {
        //失败后的逻辑  

      },
    }) 
    //首页转发
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  bannerShow:function(data){
    let res=[];
    for(let i in data){
      if(data[i].type.indexOf('2')>-1){
        res.push(data[i])
      }
      // console.log(data[i].type.indexOf('2'))
    }
    this.setData({
      banner:res
    })
  },
  listShow(data){
    let res=[];
    for(let i in data){
      if(data[i].type.indexOf('1')>-1){
        res.push(data[i]);
      }
    }
    this.setData({
      imgUrls:res
    })
  },
  indexList(data){
    let res=[];
    for(let i in data){
      if(data[i].type.indexOf('0')>-1){
        res.push(data[i])
      }
    }
    // console.log(res)
    this.setData({
      indexList:res.slice(0,9)
    })
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
  navMini: preImg.navMini,
  onShareAppMessage: preImg.shareFn,
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }
})
