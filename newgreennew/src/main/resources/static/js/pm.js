// 修改密码
function passmanage() {
    var data = 'number=' + $('#inputNumber').val() + '&pwd=' + $('#inputPassword1').val();
    console.log(data+"AJAX 外");
    $.ajax({
        type : 'POST',
        url : '/passmanage',
        data : data,
        success : function(r) {
           if(r=="success"){
               alert("密码修改成功");
               window.location.href='/home';
           }
           if(r=="error"){
               alert("当前密码不正确");
               window.location.href='/passwordmanage';
           }
        },
    });
}