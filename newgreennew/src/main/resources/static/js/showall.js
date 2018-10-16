// 显示所有用户
function showall1() {
        var data = 'id=' + 1;
        $.ajax({
            type : "GET",
            url : "/showall",
            data : data,
            dataType:"json",
            success : function(data) {
                var size=data.size;
                for(var i=3;i<13;i++){
                    $('#m'+i).text("");
                    $('#n'+i).text("");
                    $('#o'+i).text("");
                    $('#q'+i).text("");
                    $('#r'+i).text("");
                }
                for(var i=0;i<size;i++){
                    var a=i+3;
                    $('#m'+a).text(data.name[i]);
                    $('#n'+a).text(data.jobnumber[i]);
                    $('#o'+a).text(data.password[i]);
                    $('#q'+a).text("删除 ");
                    $('#r'+a).text("设为管理员 ");
                }}
        });
}
function showall2() {
    var data = 'id=' + 2;
    $.ajax({
        type : "GET",
        url : "/showall",
        data : data,
        dataType:"json",
        success : function(data) {
            var size=data.size;
            for(var i=3;i<13;i++){
                $('#m'+i).text("");
                $('#n'+i).text("");
                $('#o'+i).text("");
                $('#q'+i).text("");
                $('#r'+i).text("");
            }
            for(var i=0;i<size-10;i++){
                var a=i+3;
                $('#m'+a).text(data.name[i]);
                $('#n'+a).text(data.jobnumber[i]);
                $('#o'+a).text(data.password[i]);
                $('#q'+a).text("删除 ");
                $('#r'+a).text("设为管理员 ");
            }}
    });
}
function showall3() {
    var data = 'id=' + 3;
    $.ajax({
        type : "GET",
        url : "/showall",
        data : data,
        dataType:"json",
        success : function(data) {
            var size=data.size;
            for(var i=3;i<13;i++){
                $('#m'+i).text("");
                $('#n'+i).text("");
                $('#o'+i).text("");
                $('#q'+i).text("");
                $('#r'+i).text("");
            }
            for(var i=0;i<size-20;i++){
                var a=i+3;
                $('#m'+a).text(data.name[i]);
                $('#n'+a).text(data.jobnumber[i]);
                $('#o'+a).text(data.password[i]);
                $('#q'+a).text("删除 ");
                $('#r'+a).text("设为管理员 ");
            }}
    });
}