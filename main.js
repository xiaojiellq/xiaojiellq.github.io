var color = "#009688";

var demo = '<drawer id="drawer">\

        <vertical>\

            <appbar>\

                <toolbar id="toolbar" title="空间助手"/>\

                <tabs id="tabs"/>\

            </appbar>\

            <viewpager id="viewpager">\

                <frame>\

                   <vertical padding="16">\

        <img id="rounded_img" src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="250" h="250" radius="20dp" scaleType="fitXY"/>\

        <text text="领取账号:" textColor="black" textSize="16sp" marginTop="16"/>\

                    <input id="qq" inputType="number" hint="请输入您的QQ号码" height="-2"/>\

                  <button id="ok" text="确定" style="Widget.AppCompat.Button.Borderless.Colored" w="*"/>\

         </vertical>\

                </frame>\

                <frame>\

                    <vertical padding="16">\

                            <img id="rounded_img1" src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="250" h="250" radius="20dp" scaleType="fitXY"/>\

                    <text text="领取账号:" textColor="black" textSize="16sp" marginTop="16"/>\

                    <input id="qq1" inputType="number" hint="请输入您的QQ号码" height="-2"/>\

                    <text text="第几条说说:" textColor="red" textSize="16sp" marginTop="16"/>\

                    <input id="ss" inputType="number" hint="最新发布就输入1，依次类推" height="-2"/>\

                   <button id="ok1" text="确定" textColor="red" style="Widget.AppCompat.Button.Borderless.Colored" w="*"/>\

         </vertical>\

                </frame>\

                <frame>\

                   <vertical padding="16">\

        <img id="rounded_img2" src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="250" h="250" radius="20dp" scaleType="fitXY"/>\

        <text text="领取账号:" textColor="black" textSize="16sp" marginTop="16"/>\

                    <input id="qq2" inputType="number" hint="请输入您的QQ号码" height="-2"/>\

                  <button id="ok2" text="确定" style="Widget.AppCompat.Button.Borderless.Colored" w="*"/>\

         </vertical>\

                </frame>\

                <frame>\

                <vertical>\

                        <img id="rounded_img3" src="http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg" w="250" h="250" radius="20dp" scaleType="fitXY"/>\

                <text text="领取账号:" textColor="black" textSize="16sp" marginTop="16"/>\

               <input id="qq3" inputType="number" hint="请输入您的QQ号码" height="-2"/>\

                                  <text text="第几条说说:" textColor="red" textSize="16sp" marginTop="16"/>\

                    <input id="ss1" inputType="number" hint="最新发布就输入1，依次类推" height="-2"/>\

                  <button id="ok3" text="确定" style="Widget.AppCompat.Button.Borderless.Colored" w="*"/>\

                  </vertical>\

 </frame>\

                <frame>\

                <vertical>\

                <text text="作品链接:" textColor="black" textSize="16sp" marginTop="16"/>\

               <input id="qq4" inputType="text" hint="请输入您的作品链接" height="-2"/>\

                  <button id="ok4" text="确定" style="Widget.AppCompat.Button.Borderless.Colored" w="*"/>\

                  <text text="作品链接格式：\n只能是纯链接，需要手动把文字部分删除再提交" textColor="red" textSize="30sp" marginTop="16"/>\

                  </vertical>\

 </frame>\

            </viewpager>\

        </vertical>\

        <vertical layout_gravity="left" bg="#ffffff" w="280">\

            <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"/>\

            <list id="menu">\

                <horizontal bg="?selectableItemBackground" w="*">\

                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>\

                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>\

                </horizontal>\

            </list>\

        </vertical>\

    </drawer>'

    ui.layout(demo);

//创建选项菜单(右上角)

ui.emitter.on("create_options_menu", menu=>{

    menu.add("设置");

    menu.add("关于");

});

//监听选项菜单点击

ui.emitter.on("options_item_selected", (e, item)=>{

    switch(item.getTitle()){

        case "设置":

            toast("还没有设置");

            break;

        case "关于":

            toast("关于");

            break;

    }

    e.consumed = true;

});

activity.setSupportActionBar(ui.toolbar);

//设置滑动页面的标题

ui.viewpager.setTitles(["访客", "说说赞", "名片赞", "说说浏览", "dy浏览"]);

//让滑动页面和标签栏联动

ui.tabs.setupWithViewPager(ui.viewpager);

//让工具栏左上角可以打开侧拉菜单

ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([

  {

      title: "选项一",

      icon: "@drawable/ic_android_black_48dp"

  },

  {

      title: "选项二",

      icon: "@drawable/ic_settings_black_48dp"

  },

  {

      title: "选项三",

      icon: "@drawable/ic_favorite_black_48dp"

  },

  {

      title: "退出",

      icon: "@drawable/ic_exit_to_app_black_48dp"

  }

]);

ui.menu.on("item_click", item => {

    switch(item.title){

        case "退出":

            ui.finish();

            break;

    }

})

//访客

ui.ok.on("click", ()=>{

    var text = ui.qq.text();

    ui.rounded_img.setSource("http://q.qlogo.cn/headimg_dl?dst_uin=" + text +"&spec=640&img_type=jpg");

    if(text.length == 0){

        ui.qq.setError("输入不能为空");

        return;

    }

    var qq = parseInt(text);

    if(qq > 10000){

    threads.start(function(){

    while(true){

        var jk = http.get("http://101.33.228.150:81/api/fk.php?qq=" + qq);

var fh = jk.body.string();

       toast(fh);

        return;

        }

});

    }

    else{

    ui.qq.setError("输入错误");

    }

});

//说说赞

ui.ok1.on("click", ()=>{

    var text = ui.qq1.text();

    var text1 = ui.ss.text();

    ui.rounded_img1.setSource("http://q.qlogo.cn/headimg_dl?dst_uin=" + text +"&spec=640&img_type=jpg");

    if(text.length == 0){

        ui.qq1.setError("输入不能为空");

        return;

    }

    var qq = parseInt(text);

    var ss = parseInt(text1);

    if(qq > 10000){

    threads.start(function(){

    while(true){

        var jk = http.get("http://101.33.228.150:81/api/ssz.php?qq=" + qq);

        var jk1 = http.get("http://101.33.228.150:81/api/ssz1.php?qq="+ qq +"&ss="+ ss);

var fh = jk1.body.string();

       toast(fh);

        return;

        }

});

    }

    else{

    ui.qq.setError("输入错误");

    }

});

//名片赞

ui.ok2.on("click", ()=>{

    var text = ui.qq2.text();

    ui.rounded_img2.setSource("http://q.qlogo.cn/headimg_dl?dst_uin=" + text +"&spec=640&img_type=jpg");

    if(text.length == 0){

        ui.qq2.setError("输入不能为空");

        return;

    }

    var qq = parseInt(text);

    if(qq > 10000){

    threads.start(function(){

    while(true){

        var jk = http.get("http://101.33.228.150:81/api/mpz.php?qq=" + qq);

var fh = jk.body.string();

       toast(fh);

        return;

        }

});

    }

    else{

    ui.qq2.setError("输入错误");

    }

});

//说说浏览

ui.ok3.on("click", ()=>{

    var text = ui.qq3.text();

    ui.rounded_img3.setSource("http://q.qlogo.cn/headimg_dl?dst_uin=" + text +"&spec=640&img_type=jpg");

    if(text.length == 0){

        ui.qq3.setError("输入不能为空");

        return;

    }

    var qq = parseInt(text);

    if(qq > 10000){

    threads.start(function(){

    while(true){

        var jk = http.get("http://101.33.228.150:81/api/ssll.php?qq=" + qq);

var fh = jk.body.string();

       toast(fh);

        return;

        }

});

    }

    else{

    ui.qq3.setError("输入错误");

    }

});

//dy播放

ui.ok4.on("click", ()=>{

    var qq = ui.qq4.text();

    if(qq.length == 0){

        ui.qq4.setError("输入不能为空");

        return;

    }

    threads.start(function(){

    while(true){

        var jk = http.get("http://101.33.228.150:81/api/dybf.php?lj=" + qq);

var fh = jk.body.string();

       toast(fh);

        return;

        }

});

});
