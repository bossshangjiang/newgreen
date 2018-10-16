// 审核提交
function conf() {
    var str1 = url.substr(1);
    strz=str1.split("/");
    var str="";
    var a=0;
    var verify="undone";
    if(document.getElementById("p1").checked==true&&document.getElementById("p2").checked==true){
        a+=1;
        str+="本项目为热电联产项目 ";
    }
    if(document.getElementById("p3").checked==true){
        a+=1;
        str+="本项目为清洁项目 ";
    }
    if(document.getElementById("p7").checked==true&&document.getElementById("p4").checked==true&&document.getElementById("p8").checked==true){
        a+=1;
        str+="本项目已核准施工 ";
    }
    if(document.getElementById("p5").checked==true){
        a+=1;
        str+="营业执照符合标准 ";
    }
    if(document.getElementById("p6").checked==true){
        a+=1;
        str+="合作方具有施工资质 ";
    }
    if(a==5){
        verify="done";
    }
    var data = 'description=' + str+'&verify='+verify+'&pname='+strz[9];
    console.log(data+"AJAX 外");
    $.ajax({
        type : 'POST',
        url : '/changestatus',
        data : data,
        success : function(r) {
        if(r=="success"){
            alert("提交成功");
            alert(str);
            window.location.href='/manage';
        }
        if(r=="error"){
            alert("提交失败");
            window.location.href='/manage';
        }
        }

    });
}