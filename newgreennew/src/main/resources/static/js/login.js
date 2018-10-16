
function postData() {
    var data = 'number=' + $('#inputNumber').val() + '&pwd=' + $('#inputPassword').val();
    console.log(data+"AJAX 外");
    $.ajax({
        type : 'POST',
        url : '/postData',
        data : data,
        success : function(r) {
            console.log(data+"ajax内");

            if(r=="success_manager"||r=="success_user"){
                alert("登录成功");
                window.location.href = '/home';
            }
            else if(r=="fail")//登录失败，alert
            {
                alert("密码错误");
                window.location.href = '/login';

            }
            else if(r=="notexist"){
                alert("该工号不存在");
                window.location.href = '/signup';
            }

            else
                alert("UI 返回错误数据");
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}


function usersignup() {
    var data = 'username=' + $('#username').val() + '&usernumber='+$('#usernumber').val()+'&userpwd=' + $('#userpwd').val() + '&useremail=' +$('#useremail').val();
    console.log(data);
    $.ajax({
        type : 'POST',
        url : '/signup',
        data : data,
        success : function(r) {
            console.log(data);
            console.log(r);
            if(r=="success")//注册成功，跳转login
                window.location.href = '/login';
            else if(r=="exist"){
                alert("该工号已存在");
                window.location.href = '/signup';
            }

            else
                alert("UI 返回错误数据");
        },
        error : function() {
            alert('没有返回数据!')
        }
    });
}


