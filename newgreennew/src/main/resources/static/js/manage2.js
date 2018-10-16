//返回项目列表
//返回所有项目列表
function search7() {
    var ch="111";
    var data = 'id=' + 1;
    $.ajax({
        type : "GET",
        url : "/searchall",
        data : data,
        dataType:"json",
        success : function(data) {
        var size=data.size;
        var size1=size;
        if(size>10){
            sizw1=10
        }
        for(var i=3;i<13;i++){
            $('#m'+i).text("");
            $('#n'+i).text("");
            $('#o'+i).text("");
            $('#q'+i).text("");
            $('#r'+i).text("");
            $('#s'+i).text("");
            $('#t'+i).text("");
        }

        for(var i=0;i<size1;i++){
            var a=i+3;
            $('#m'+a).text(data.name[i]);
            $('#n'+a).text(data.date[i]);
            $('#o'+a).text(data.cop[i]);
            $('#q'+a).text("查看 ");
            $('#r'+a).text("修改 ");
            $('#s'+a).text("删除 ");
            $('#t'+a).text("审核");
        }}
    });
    return false;
}

function search5() {
    var ch="111";
    var data = 'id=' + 2;
    $.ajax({
        type : "GET",
        url : "/searchall",
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
                $('#s'+i).text("");
                $('#t'+i).text("");
            }

            for(var i=0;i<size;i++){
                var a=i+3;
                $('#m'+a).text(data.name[i]);
                $('#n'+a).text(data.date[i]);
                $('#o'+a).text(data.cop[i]);
                $('#q'+a).text("查看 ");
                $('#r'+a).text("修改 ");
                $('#s'+a).text("删除 ");
                $('#t'+a).text("审核");
            }}
    });
    return false;
}

function search6() {
    var ch="111";
    var data = 'id=' + 3;
    $.ajax({
        type : "GET",
        url : "/searchall",
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
                $('#s'+i).text("");
                $('#t'+i).text("");
            }

            for(var i=0;i<size;i++){
                var a=i+3;
                $('#m'+a).text(data.name[i]);
                $('#n'+a).text(data.date[i]);
                $('#o'+a).text(data.cop[i]);
                $('#q'+a).text("查看 ");
                $('#r'+a).text("修改 ");
                $('#s'+a).text("删除 ");
                $('#t'+a).text("审核");
            }}
    });
    return false;
}
