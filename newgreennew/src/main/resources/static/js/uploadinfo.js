// 获取项目上传第一页基本信息内容 跳转第二页count
function uploadinfo() {
    var y=$('#year').val();
    var m=$('#month').val();
    if(y.length == 1||m.length == 1){
        alert("请补全项目信息");
        window.location.href='/uploadinfo';
        return false;
    }
    // 取得指定FORM里的元素
    var t = $('#form').serializeArray();
    var d = {};
    $.each(t, function() {
        d[this.name] = this.value;
    });
    var data = JSON.stringify(d);

    $.ajax({
        type : 'POST',
        url : '/uploadinfo',
        data : "data="+data,
        success:function(data){
            if(data=="error"){
                alert("已有该项目");
                window.location.href='/uploadinfo';
                return false;
            }
            else{
                var link ="count.html" + '?name='+data;
                // alert(link);
                window.location.href = link;
                return false;}
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}