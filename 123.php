<!DOCTYPE HTML>
<html>
<head>
<title>更改链接</title>
<meta charset="UTF-8">
<meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" id="viewport" name="viewport">
</head>
<body>
<form method="post">
<input type="text" name="money" placeholder="请输入支付宝交易号">
<input type="submit" name="sub" value="更改">
</form>
<?php
if(isset($_POST["sub"])){
$files=fopen("123.txt","w") or die("非法操作！");
$txt=$_POST["money"];
fwrite($files,$txt);
fclose($files);
  echo '<script>
alert("更改成功");
</script>
';
}
?>
</body>
</html>