const API_URL ='https://route.showapi.com';
// const requestHandler={
//   params:{},
//   success:function(res){

//   },
//   fail:function(res){

//   }
// }
const GET=(url,requestHandler)=>{
  request('GET',url,requestHandler);
}
const POST=(url,requestHandler)=>{
  request('POST',url,requestHandler);
}
const request=(method,url,requestHandler)=>{
  var params=requestHandler.params;
  wx.request({
    url:API_URL+url,
    data:params,
    method:method,
    success:function(res){
      requestHandler.success(res);
    },
    fail:function(res){
      requestHandler.fail(res);
    },
    complete:function(res){

    }
  })
}
module.exports={
  GET:GET,
  POST:POST
}