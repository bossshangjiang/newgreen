//修改项目基本信息 并跳转第二页count3
function uploadinfofo() {
    var t = $('#form').serializeArray();
    var d = {};
    $.each(t, function() {
        d[this.name] = this.value;
    });
    var data = JSON.stringify(d);

    $.ajax({
        type : 'POST',
        url : '/reviseinfo',
        data : "data="+data,
        success:function(data){
            if(data!="aaa"){
                var link ='count3.html?pname='+data;
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