//内部跳转
const hrefTo=e=>{
  let link = e.currentTarget.dataset.link;
  // console.log(link)
  wx.navigateTo({
    url: link
  })
}

//按钮分享
const shareFn=(res)=>{
  console.log(res);
  if (res.from === 'button') {
    // 来自页面内转发按钮
    var path = res.target.dataset.path;
    var title = res.target.dataset.title;
    console.log(res.target.dataset.path)
    console.log(title)
  }
  return {
    title: title,
    path: path,
    success: function (res) {
      // 转发成功
    },
    fail: function (res) {
      // 转发失败
    }
  }
}
//图片预览
// const preImg=e=>{
//   let imgSrc=e.currentTarget.dataset.src;
//   // console.log([imgSrc])
//   wx.previewImage({
//     urls: [imgSrc]
//   })
// }

const navMini=e=>{
  console.log(e.appId)
}

//小程序跳转若没有appid就弹出图片
const preImg=e=>{
  let toId=e.currentTarget.dataset.id;
  if(!toId){
    let imgSrc = e.currentTarget.dataset.src;
    wx.previewImage({
      urls: [imgSrc]
    })
  }else{
    wx.navigateToMiniProgram({
      appId: toId,
      path: '',
      extraData: {
        //foo: 'bar'
      },
      envVersion: 'release',
      success(res) {
        // 打开成功
        console.log('调用成功')
      }
    })
  }
}

//ajax封装
const AjaxFn=(url,data,callback)=>{
  wx.request({
    url:url,
    data:data,
    header: {
      'Content-Type': 'application/json'
    },
    success:function(res){
      callback(res);
    },
    fail:function(res){
      console.log(res);
    }
  })
}

module.exports = {
  hrefTo: hrefTo,
  preImg:preImg,
  navMini: navMini,
  shareFn: shareFn
}