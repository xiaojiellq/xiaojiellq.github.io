<?php	$qq = $_REQUEST["qq"];

if($qq==""){

echo "加参数，懂？";

}else{

$ssid =file_get_contents("http://cd.xj620.cn/ds/ssid.php?qq=$qq");

    $xd=file_get_contents("http://api.xiequ.cn/VAD/GetIp.aspx?act=get&uid=103486&vkey=978CC1CA358C450F46C52E7309031589&num=1&time=30&plat=0&re=0&type=0&so=1&ow=1&spl=1&addr=&db=1");

    $msg = json_decode($xd, true);

    $ip = $msg['data'][0]['IP'];

    $port = $msg['data'][0]['Port'];

    $url = "https://fx.rx189.cn/ajax.php?act=pay";

    $urlpost = "tid=4046&inputvalue=$qq&inputvalue2=".$ssid."&num=1";

    $ch = curl_init();

$header = array("Host:fx.rx189.cn","accept:application/json, text/javascript, */*; q\u003d0.01","x-requested-with:XMLHttpRequest","user-agent:Mozilla/5.0 (Linux; U; Android 11; zh-cn; 2203121C Build/RKQ1.200826.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.116 Mobile Safari/537.36 XiaoMi/MiuiBrowser/15.5.8","content-type:application/x-www-form-urlencoded; charset\u003dUTF-8","origin:https://fx.rx189.cn","referer:https://fx.rx189.cn/user/shop.php?cid\u003d58\u0026tid\u003d4046");

    //设置目标请求的网址

    curl_setopt($ch, CURLOPT_URL, $url);

    curl_setopt($ch, CURLOPT_POST, 1);

    curl_setopt($ch, CURLOPT_POSTFIELDS, $urlpost);

    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

    //设置代理ip地址

    curl_setopt($ch, CURLOPT_PROXY, $ip);

    //设置代理端口

    curl_setopt($ch, CURLOPT_PROXYPORT, $port);

    // curl_setopt($ch, CURLOPT_PROXYUSERPWD, "user:password");//账号密码

    curl_setopt($ch, CURLOPT_PROXYTYPE, CURLPROXY_HTTP); //使用http代理模式

    //执行URL请求并把它传递给浏览器

    $response = curl_exec($ch);

    curl_close($ch);

    $fh = json_decode($response, true);

    echo $fh['msg'];}

?>
