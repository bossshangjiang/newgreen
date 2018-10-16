//返回项目列表
//manage页面按项目名查
function search1() {
    var ch='projectname';
    var data = 'projectname=' + $('#'+ch).val();
    alert(data);
    $.ajax({
        type : "POST",
        url : "/searchbypname",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.name=="none"){
                alert("没有该项目");
            }
            else {
                $('#m3').text(data.name);
                $('#n3').text(data.date);
                $('#o3').text(data.partner);
                $('#q3').text("查看 ");
                $('#r3').text("修改 ");
                $('#s3').text("删除 ");
                $('#t3').text("审核");
            }

        }
    });
    return false;
}

//manage页面按时间查
function search2() {
    var data = 'datasearch=' + $('#datasearch').val();
    $.ajax({
        type : "POST",
        url : "/searchbypdate",
        data : data,
        dataType:"json",
        success : function(data) {
                var a=data.size;
                if(a==0){
                    for(var i=3;i<10;i++){
                        $('#m'+i).text("");
                        $('#n'+i).text("");
                        $('#o'+i).text("");
                        $('#q'+i).text("");
                        $('#r'+i).text("");
                        $('#s'+i).text("");
                        $('#t'+i).text("");
                    }
                    alert("没有该时间段内的项目");
                }
                switch (a)
                {
                    case 1:{
                        for(var i=3;i<10;i++){
                            $('#m'+i).text("");
                            $('#n'+i).text("");
                            $('#o'+i).text("");
                            $('#q'+i).text("");
                            $('#r'+i).text("");
                            $('#s'+i).text("");
                            $('#t'+i).text("");
                        }
                        $('#m3').text(data.name0);
                        $('#n3').text(data.date0);
                        $('#o3').text(data.partner0);
                        $('#q3').text("查看 ");
                        $('#r3').text("修改 ");
                        $('#s3').text("删除 ");
                        $('#t3').text("审核");
                        break;
                    }
                    case 2:{
                        for(var i=3;i<10;i++){
                            $('#m'+i).text("");
                            $('#n'+i).text("");
                            $('#o'+i).text("");
                            $('#q'+i).text("");
                            $('#r'+i).text("");
                            $('#s'+i).text("");
                            $('#t'+i).text("");
                        }
                        $('#m3').text(data.name0);
                        $('#n3').text(data.date0);
                        $('#o3').text(data.partner0);
                        $('#q3').text("查看 ");
                        $('#r3').text("修改 ");
                        $('#s3').text("删除 ");
                        $('#t3').text("审核");

                        $('#m4').text(data.name1);
                        $('#n4').text(data.date1);
                        $('#o4').text(data.partner1);
                        $('#q4').text("查看 ");
                        $('#r4').text("修改 ");
                        $('#s4').text("删除 ");
                        $('#t4').text("审核");
                        break;
                    }
                    case 3:{
                        for(var i=3;i<10;i++){
                            $('#m'+i).text("");
                            $('#n'+i).text("");
                            $('#o'+i).text("");
                            $('#q'+i).text("");
                            $('#r'+i).text("");
                            $('#s'+i).text("");
                            $('#t'+i).text("");
                        }
                        $('#m3').text(data.name0);
                        $('#n3').text(data.date0);
                        $('#o3').text(data.partner0);
                        $('#q3').text("查看 ");
                        $('#r3').text("修改 ");
                        $('#s3').text("删除 ");
                        $('#t3').text("审核");

                        $('#m4').text(data.name1);
                        $('#n4').text(data.date1);
                        $('#o4').text(data.partner1);
                        $('#q4').text("查看 ");
                        $('#r4').text("修改 ");
                        $('#s4').text("删除 ");
                        $('#t4').text("审核");

                        $('#m5').text(data.name2);
                        $('#n5').text(data.date2);
                        $('#o5').text(data.partner2);
                        $('#q5').text("查看 ");
                        $('#r5').text("修改 ");
                        $('#s5').text("删除 ");
                        $('#t5').text("审核");
                        break;
                    }
                    case 4:{
                        for(var i=3;i<10;i++){
                            $('#m'+i).text("");
                            $('#n'+i).text("");
                            $('#o'+i).text("");
                            $('#q'+i).text("");
                            $('#r'+i).text("");
                            $('#s'+i).text("");
                            $('#t'+i).text("");
                        }
                        $('#m3').text(data.name0);
                        $('#n3').text(data.date0);
                        $('#o3').text(data.partner0);
                        $('#q3').text("查看 ");
                        $('#r3').text("修改 ");
                        $('#s3').text("删除 ");
                        $('#t3').text("审核");

                        $('#m4').text(data.name1);
                        $('#n4').text(data.date1);
                        $('#o4').text(data.partner1);
                        $('#q4').text("查看 ");
                        $('#r4').text("修改 ");
                        $('#s4').text("删除 ");
                        $('#t4').text("审核");

                        $('#m5').text(data.name2);
                        $('#n5').text(data.date2);
                        $('#o5').text(data.partner2);
                        $('#q5').text("查看 ");
                        $('#r5').text("修改 ");
                        $('#s5').text("删除 ");
                        $('#t5').text("审核");

                        $('#m6').text(data.name3);
                        $('#n6').text(data.date3);
                        $('#o6').text(data.partner3);
                        $('#q6').text("查看 ");
                        $('#r6').text("修改 ");
                        $('#s6').text("删除 ");
                        $('#t6').text("审核");
                        break;
                    }
                    case 5:{
                        for(var i=3;i<10;i++){
                            $('#m'+i).text("");
                            $('#n'+i).text("");
                            $('#o'+i).text("");
                            $('#q'+i).text("");
                            $('#r'+i).text("");
                            $('#s'+i).text("");
                            $('#t'+i).text("");
                        }
                        $('#m3').text(data.name0);
                        $('#n3').text(data.date0);
                        $('#o3').text(data.partner0);
                        $('#q3').text("查看 ");
                        $('#r3').text("修改 ");
                        $('#s3').text("删除 ");
                        $('#t3').text("审核");

                        $('#m4').text(data.name1);
                        $('#n4').text(data.date1);
                        $('#o4').text(data.partner1);
                        $('#q4').text("查看 ");
                        $('#r4').text("修改 ");
                        $('#s4').text("删除 ");
                        $('#t4').text("审核");

                        $('#m5').text(data.name2);
                        $('#n5').text(data.date2);
                        $('#o5').text(data.partner2);
                        $('#q5').text("查看 ");
                        $('#r5').text("修改 ");
                        $('#s5').text("删除 ");
                        $('#t5').text("审核");

                        $('#m6').text(data.name3);
                        $('#n6').text(data.date3);
                        $('#o6').text(data.partner3);
                        $('#q6').text("查看 ");
                        $('#r6').text("修改 ");
                        $('#s6').text("删除 ");
                        $('#t6').text("审核");

                        $('#m7').text(data.name4);
                        $('#n7').text(data.date4);
                        $('#o7').text(data.partner4);
                        $('#q7').text("查看 ");
                        $('#r7').text("修改 ");
                        $('#s7').text("删除 ");
                        $('#t7').text("审核");
                        break;
                    }
                    }




        },
    });
}
