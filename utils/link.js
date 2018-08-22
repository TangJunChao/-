//内部跳转
const hrefTo=e=>{
  let link = e.currentTarget.dataset.link;
  console.log(link)
  wx.navigateTo({
    url: link
  })
}

//图片预览
const preImg=e=>{
  let imgSrc=e.currentTarget.dataset.src;
  // console.log([imgSrc])
  wx.previewImage({
    urls: [imgSrc]
  })
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
  preImg:preImg
}