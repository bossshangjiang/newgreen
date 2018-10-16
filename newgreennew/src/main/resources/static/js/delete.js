// 用于删除manage页面的文件
function deletedd1() {

    var data = 'pname=' + $('#m3').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
            alert("删除成功");
            window.location.href="/manage.html";}
        }

    });
}

function deletedd2() {

    var data = 'pname=' + $('#m4').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd3() {

    var data = 'pname=' + $('#m5').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd4() {

    var data = 'pname=' + $('#m6').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd5() {

    var data = 'pname=' + $('#m7').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd6() {

    var data = 'pname=' + $('#m8').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd7() {

    var data = 'pname=' + $('#m9').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd8() {

    var data = 'pname=' + $('#m10').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd9() {

    var data = 'pname=' + $('#m11').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}

function deletedd10() {

    var data = 'pname=' + $('#m12').text();
    alert(data);
    $.ajax({
        type: "POST",
        url: "/searchproject?"+data,
        success: function (data) {
            if(data=="success"){
                alert("删除成功");
                window.location.href="/manage.html";}
        }

    });
}