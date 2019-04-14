/**
 * Created by 25159 on 2016/11/28.
 */
    function openNew(){
        //获取页面的高度和宽度
        var sWidth=document.body.scrollWidth;
        var sHeight=document.body.scrollHeight;
        //获取页面的可视区域高度和宽度
        var wHeight=document.documentElement.clientHeight;
        var oMask=document.createElement("div");
        oMask.id="mask";
        oMask.style.height=sHeight+"px";
        oMask.style.width=sWidth+"px";
        document.body.appendChild(oMask);
        var oLogin=document.createElement("div");
        oLogin.id="login";
        oLogin.innerHTML= "<div class='loginCon'>" +
                                "<div id='close'>点击关闭</div>" +
                                "<div class='loginL'><span>登录</span></div>" +
                                "<div class='loginLL'>" +
                                    "<div class='loginLLL'>" +
                                        "<img src='images/img/emailIcon.png' width='48' height='40'/><input type='text' placeholder='请输入邮箱'/><br/>" +
                                        "<img src='images/img/pwIcon.png' width='48' height='40' style='margin-top:15px;'/><input type='text' style='margin-top:15px;' placeholder='请输入密码'/><br/>" +
                                        "<input type='checkbox' style='margin-top:15px;'/>自动登录<a href='#' style='padding-left:130px;'>忘记密码？</a><br/>" +
                                        "<button type='button'>立即注册</button><button type='submit'>登录</button>" +
                                    "</div> " +
                                "</div>" +
                                "<div class='loginLLM'></div>" +
                                "<div class='loginLLR'>" +
                                    "<p>一键授权，快速登录</p>" +
                                    "<img src='images/img/qq.png' width='200' height='40'/>" +
                                    "<img src='images/img/wb.png' width='200' height='40' style='margin-top:15px;'/>  " +
                                "</div> " +
                            "</div>";
        document.body.appendChild(oLogin);
        //获取登陆框的宽和高
        var dHeight=oLogin.offsetHeight;
        var dWidth=oLogin.offsetWidth;
        //设置登陆框的left和top
        oLogin.style.left=sWidth/2-dWidth/2+"px";
        oLogin.style.top=wHeight/2-dHeight/2+"px";
        //点击关闭按钮
        var oClose=document.getElementById("close");
        //点击登陆框以外的区域也可以关闭登陆框
        oClose.onclick=oMask.onclick=function(){
            document.body.removeChild(oLogin);
            document.body.removeChild(oMask);
        };
    };

    window.onload=function(){
        var oBtn=document.getElementById("btnLogin");
        //点击登录按钮
        oBtn.onclick=function(){
            openNew();
            return false;
        }
    }
