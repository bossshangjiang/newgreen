// 本文件用于在修改文件时 显示搜索的文件列表 及删除、下载功能的跳转

//显示newfile页面文件列表
function revisefile1() {
    var q=decodeURI(location.search.substr(1));
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    var data = 'name=' + argStr + '&type='+ $("#fff").val();
    // alert(data);
    $.ajax({
        type : "POST",
        url : "/showrevisefile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("该项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                var type=data.type;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                if(size==1){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1");
                    });
                }
                if(size==2){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1");
                        deleteRow(this)
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2");
                    });

                }
                if(size==3){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1");
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2");
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3");
                    });

                }
                if(size==4){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1")
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2")
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3")
                    });


                    document.getElementById("m4").innerHTML=filename[3];
                    document.getElementById("z4").innerHTML=description[3];
                    document.getElementById("n4").href="download?filename="+filename[3]+"&amp;pname="+name;
                    document.getElementById("n4").innerHTML="下载";
                    document.getElementById("x4").innerHTML=verify[3];
                    document.getElementById("v4").innerHTML="删除";
                    $("#v4").on("click",function(){
                        deletefile(filename[3],name,type,"4")
                    });

                }
                if(size==5){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1")
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2")
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3")
                    });

                    document.getElementById("m4").innerHTML=filename[3];
                    document.getElementById("z4").innerHTML=description[3];
                    document.getElementById("n4").href="download?filename="+filename[3]+"&amp;pname="+name;
                    document.getElementById("n4").innerHTML="下载";
                    document.getElementById("x4").innerHTML=verify[3];
                    document.getElementById("v4").innerHTML="删除";
                    $("#v4").on("click",function(){
                        deletefile(filename[3],name,type,"4")
                    });


                    document.getElementById("m5").innerHTML=filename[4];
                    document.getElementById("z5").innerHTML=description[4];
                    document.getElementById("n5").href="download?filename="+filename[4]+"&amp;pname="+name;
                    document.getElementById("n5").innerHTML="下载";
                    document.getElementById("x5").innerHTML=verify[4];
                    document.getElementById("v5").innerHTML="删除";
                    $("#v5").on("click",function(){
                        deletefile(filename[4],name,type,"5")
                    });


                }
                if(size==6){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1")
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2")
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3")
                    });

                    document.getElementById("m4").innerHTML=filename[3];
                    document.getElementById("z4").innerHTML=description[3];
                    document.getElementById("n4").href="download?filename="+filename[3]+"&amp;pname="+name;
                    document.getElementById("n4").innerHTML="下载";
                    document.getElementById("x4").innerHTML=verify[3];
                    document.getElementById("v4").innerHTML="删除";
                    $("#v4").on("click",function(){
                        deletefile(filename[3],name,type,"4")
                    });


                    document.getElementById("m5").innerHTML=filename[4];
                    document.getElementById("z5").innerHTML=description[4];
                    document.getElementById("n5").href="download?filename="+filename[4]+"&amp;pname="+name;
                    document.getElementById("n5").innerHTML="下载";
                    document.getElementById("x5").innerHTML=verify[4];
                    document.getElementById("v5").innerHTML="删除";
                    $("#v5").on("click",function(){
                        deletefile(filename[4],name,type,"5")
                    });

                    document.getElementById("m6").innerHTML=filename[5];
                    document.getElementById("z6").innerHTML=description[5];
                    document.getElementById("n6").href="download?filename="+filename[5]+"&amp;pname="+name;
                    document.getElementById("n6").innerHTML="下载";
                    document.getElementById("x6").innerHTML=verify[5];
                    $("#v6").on("click",function(){
                        deletefile(filename[5],name,type,"6")
                    });

                }
                if(size==7){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1")
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2")
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3")
                    });

                    document.getElementById("m4").innerHTML=filename[3];
                    document.getElementById("z4").innerHTML=description[3];
                    document.getElementById("n4").href="download?filename="+filename[3]+"&amp;pname="+name;
                    document.getElementById("n4").innerHTML="下载";
                    document.getElementById("x4").innerHTML=verify[3];
                    document.getElementById("v4").innerHTML="删除";
                    $("#v4").on("click",function(){
                        deletefile(filename[3],name,type,"4")
                    });


                    document.getElementById("m5").innerHTML=filename[4];
                    document.getElementById("z5").innerHTML=description[4];
                    document.getElementById("n5").href="download?filename="+filename[4]+"&amp;pname="+name;
                    document.getElementById("n5").innerHTML="下载";
                    document.getElementById("x5").innerHTML=verify[4];
                    document.getElementById("v5").innerHTML="删除";
                    $("#v5").on("click",function(){
                        deletefile(filename[4],name,type,"5")
                    });

                    document.getElementById("m6").innerHTML=filename[5];
                    document.getElementById("z6").innerHTML=description[5];
                    document.getElementById("n6").href="download?filename="+filename[5]+"&amp;pname="+name;
                    document.getElementById("n6").innerHTML="下载";
                    document.getElementById("x6").innerHTML=verify[5];
                    $("#v6").on("click",function(){
                        deletefile(filename[5],name,type,"6")
                    });

                    document.getElementById("m7").innerHTML=filename[6];
                    document.getElementById("z7").innerHTML=description[6];
                    document.getElementById("n7").href="download?filename="+filename[6]+"&amp;pname="+name;
                    document.getElementById("n7").innerHTML="下载";
                    document.getElementById("x7").innerHTML=verify[6];
                    $("#v7").on("click",function(){
                        deletefile(filename[6],name,type,"7")
                    });

                }
                if(size==8){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1")
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2")
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3")
                    });

                    document.getElementById("m4").innerHTML=filename[3];
                    document.getElementById("z4").innerHTML=description[3];
                    document.getElementById("n4").href="download?filename="+filename[3]+"&amp;pname="+name;
                    document.getElementById("n4").innerHTML="下载";
                    document.getElementById("x4").innerHTML=verify[3];
                    document.getElementById("v4").innerHTML="删除";
                    $("#v4").on("click",function(){
                        deletefile(filename[3],name,type,"4")
                    });


                    document.getElementById("m5").innerHTML=filename[4];
                    document.getElementById("z5").innerHTML=description[4];
                    document.getElementById("n5").href="download?filename="+filename[4]+"&amp;pname="+name;
                    document.getElementById("n5").innerHTML="下载";
                    document.getElementById("x5").innerHTML=verify[4];
                    document.getElementById("v5").innerHTML="删除";
                    $("#v5").on("click",function(){
                        deletefile(filename[4],name,type,"5")
                    });

                    document.getElementById("m6").innerHTML=filename[5];
                    document.getElementById("z6").innerHTML=description[5];
                    document.getElementById("n6").href="download?filename="+filename[5]+"&amp;pname="+name;
                    document.getElementById("n6").innerHTML="下载";
                    document.getElementById("x6").innerHTML=verify[5];
                    $("#v6").on("click",function(){
                        deletefile(filename[5],name,type,"6")
                    });

                    document.getElementById("m7").innerHTML=filename[6];
                    document.getElementById("z7").innerHTML=description[6];
                    document.getElementById("n7").href="download?filename="+filename[6]+"&amp;pname="+name;
                    document.getElementById("n7").innerHTML="下载";
                    document.getElementById("x7").innerHTML=verify[6];
                    $("#v7").on("click",function(){
                        deletefile(filename[6],name,type,"7")
                    });

                    document.getElementById("m8").innerHTML=filename[7];
                    document.getElementById("z8").innerHTML=description[7];
                    document.getElementById("n8").href="download?filename="+filename[7]+"&amp;pname="+name;
                    document.getElementById("n8").innerHTML="下载";
                    document.getElementById("x8").innerHTML=verify[7];
                    $("#v8").on("click",function(){
                        deletefile(filename[7],name,type,"8")
                    });

                }
                if(size==9){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1")
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2")
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3")
                    });

                    document.getElementById("m4").innerHTML=filename[3];
                    document.getElementById("z4").innerHTML=description[3];
                    document.getElementById("n4").href="download?filename="+filename[3]+"&amp;pname="+name;
                    document.getElementById("n4").innerHTML="下载";
                    document.getElementById("x4").innerHTML=verify[3];
                    document.getElementById("v4").innerHTML="删除";
                    $("#v4").on("click",function(){
                        deletefile(filename[3],name,type,"4")
                    });


                    document.getElementById("m5").innerHTML=filename[4];
                    document.getElementById("z5").innerHTML=description[4];
                    document.getElementById("n5").href="download?filename="+filename[4]+"&amp;pname="+name;
                    document.getElementById("n5").innerHTML="下载";
                    document.getElementById("x5").innerHTML=verify[4];
                    document.getElementById("v5").innerHTML="删除";
                    $("#v5").on("click",function(){
                        deletefile(filename[4],name,type,"5")
                    });

                    document.getElementById("m6").innerHTML=filename[5];
                    document.getElementById("z6").innerHTML=description[5];
                    document.getElementById("n6").href="download?filename="+filename[5]+"&amp;pname="+name;
                    document.getElementById("n6").innerHTML="下载";
                    document.getElementById("x6").innerHTML=verify[5];
                    $("#v6").on("click",function(){
                        deletefile(filename[5],name,type,"6")
                    });

                    document.getElementById("m7").innerHTML=filename[6];
                    document.getElementById("z7").innerHTML=description[6];
                    document.getElementById("n7").href="download?filename="+filename[6]+"&amp;pname="+name;
                    document.getElementById("n7").innerHTML="下载";
                    document.getElementById("x7").innerHTML=verify[6];
                    $("#v7").on("click",function(){
                        deletefile(filename[6],name,type,"7")
                    });

                    document.getElementById("m8").innerHTML=filename[7];
                    document.getElementById("z8").innerHTML=description[7];
                    document.getElementById("n8").href="download?filename="+filename[7]+"&amp;pname="+name;
                    document.getElementById("n8").innerHTML="下载";
                    document.getElementById("x8").innerHTML=verify[7];
                    $("#v8").on("click",function(){
                        deletefile(filename[7],name,type,"8")
                    });

                    document.getElementById("m9").innerHTML=filename[8];
                    document.getElementById("z9").innerHTML=description[8];
                    document.getElementById("n9").href="download?filename="+filename[8]+"&amp;pname="+name;
                    document.getElementById("n9").innerHTML="下载";
                    document.getElementById("x9").innerHTML=verify[8];
                    $("#v9").on("click",function(){
                        deletefile(filename[8],name,type,"9")
                    });

                }
                if(size==10){
                    document.getElementById("m1").innerHTML=filename[0];
                    document.getElementById("z1").innerHTML=description[0];
                    document.getElementById("n1").href="download?filename="+filename[0]+"&amp;pname="+name;
                    document.getElementById("n1").innerHTML="下载";
                    document.getElementById("x1").innerHTML=verify[0];
                    document.getElementById("v1").innerHTML="删除";
                    $("#v1").on("click",function(){
                        deletefile(filename[0],name,type,"1")
                    });

                    document.getElementById("m2").innerHTML=filename[1];
                    document.getElementById("z2").innerHTML=description[1];
                    document.getElementById("n2").href="download?filename="+filename[1]+"&amp;pname="+name;
                    document.getElementById("n2").innerHTML="下载";
                    document.getElementById("x2").innerHTML=verify[1];
                    document.getElementById("v2").innerHTML="删除";
                    $("#v2").on("click",function(){
                        deletefile(filename[1],name,type,"2")
                    });

                    document.getElementById("m3").innerHTML=filename[2];
                    document.getElementById("z3").innerHTML=description[2];
                    document.getElementById("n3").href="download?filename="+filename[2]+"&amp;pname="+name;
                    document.getElementById("n3").innerHTML="下载";
                    document.getElementById("x3").innerHTML=verify[2];
                    document.getElementById("v3").innerHTML="删除";
                    $("#v3").on("click",function(){
                        deletefile(filename[2],name,type,"3")
                    });

                    document.getElementById("m4").innerHTML=filename[3];
                    document.getElementById("z4").innerHTML=description[3];
                    document.getElementById("n4").href="download?filename="+filename[3]+"&amp;pname="+name;
                    document.getElementById("n4").innerHTML="下载";
                    document.getElementById("x4").innerHTML=verify[3];
                    document.getElementById("v4").innerHTML="删除";
                    $("#v4").on("click",function(){
                        deletefile(filename[3],name,type,"4")
                    });


                    document.getElementById("m5").innerHTML=filename[4];
                    document.getElementById("z5").innerHTML=description[4];
                    document.getElementById("n5").href="download?filename="+filename[4]+"&amp;pname="+name;
                    document.getElementById("n5").innerHTML="下载";
                    document.getElementById("x5").innerHTML=verify[4];
                    document.getElementById("v5").innerHTML="删除";
                    $("#v5").on("click",function(){
                        deletefile(filename[4],name,type,"5")
                    });

                    document.getElementById("m6").innerHTML=filename[5];
                    document.getElementById("z6").innerHTML=description[5];
                    document.getElementById("n6").href="download?filename="+filename[5]+"&amp;pname="+name;
                    document.getElementById("n6").innerHTML="下载";
                    document.getElementById("x6").innerHTML=verify[5];
                    $("#v6").on("click",function(){
                        deletefile(filename[5],name,type,"6")
                    });

                    document.getElementById("m7").innerHTML=filename[6];
                    document.getElementById("z7").innerHTML=description[6];
                    document.getElementById("n7").href="download?filename="+filename[6]+"&amp;pname="+name;
                    document.getElementById("n7").innerHTML="下载";
                    document.getElementById("x7").innerHTML=verify[6];
                    $("#v7").on("click",function(){
                        deletefile(filename[6],name,type,"7")
                    });

                    document.getElementById("m8").innerHTML=filename[7];
                    document.getElementById("z8").innerHTML=description[7];
                    document.getElementById("n8").href="download?filename="+filename[7]+"&amp;pname="+name;
                    document.getElementById("n8").innerHTML="下载";
                    document.getElementById("x8").innerHTML=verify[7];
                    $("#v8").on("click",function(){
                        deletefile(filename[7],name,type,"8")
                    });

                    document.getElementById("m9").innerHTML=filename[8];
                    document.getElementById("z9").innerHTML=description[8];
                    document.getElementById("n9").href="download?filename="+filename[8]+"&amp;pname="+name;
                    document.getElementById("n9").innerHTML="下载";
                    document.getElementById("x9").innerHTML=verify[8];
                    $("#v9").on("click",function(){
                        deletefile(filename[8],name,type,"9")
                    });

                    document.getElementById("m10").innerHTML=filename[9];
                    document.getElementById("z10").innerHTML=description[9];
                    document.getElementById("n10").href="download?filename="+filename[9]+"&amp;pname="+name;
                    document.getElementById("n10").innerHTML="下载";
                    document.getElementById("x10").innerHTML=verify[9];
                    $("#v10").on("click",function(){
                        deletefile(filename[9],name,type,"10")
                    });
                }

            }

        }
    });
    return false;
}

//删除某个文件
function deletefile(filename,pname,type,v) {
var trid=v;
    var data='filename=' + filename+'&pname=' + pname;
    alert(pname);
    alert(data);
    $.ajax({
        type: "POST",
        url: "/deletefile?"+data,
        success: function () {
                console.log(trid);
                // $("#tr_"+trid).remove();
        }
    });
}

//删除某个文件后页面上同时删除此行
function deleteRow(obj){
    var index=obj.parentNode.rowIndex;
    var table = document.getElementById("table1");
    table.deleteRow(index);
}