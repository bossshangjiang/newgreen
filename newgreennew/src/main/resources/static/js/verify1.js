
//跳转审核页面
function junmp(name,size,filename,descripton,verify) {
    var str='';
    str=name+'/'+size+'/';
    for(var i=0;i<size;i++){
        str+=filename[i]+'/';
        str+=descripton[i]+'/';
        str+=verify[i]+'/';
    }
    window.location.href=
        '/verify1?gov='+'/'+str;
}

function junmp2(name,size,filename,descripton) {
    var str='';
    str=name+'/'+size+'/';
    for(var i=0;i<size;i++){
        str+=filename[i]+'/';
        str+=descripton[i]+'/';
        str+=verify[i]+'/';
    }
    window.location.href=
        '/file?gov='+'/'+str;
}
function verify() {
    var data = 'pname=' + $('#Name').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp2(name,size,filename,description,verify);

            }

        }
    });
    return false;
}


function verify1() {
    var data = 'pname=' + $('#m3').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify2() {
    var data = 'pname=' + $('#m4').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify3() {
    var data = 'pname=' + $('#m5').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify4() {
    var data = 'pname=' + $('#m6').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify5() {
    var data = 'pname=' + $('#m7').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify6() {
    var data = 'pname=' + $('#m8').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }
        }
    });
    return false;
}

function verify7() {
    var data = 'pname=' + $('#m9').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify8() {
    var data = 'pname=' + $('#m10').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify9() {
    var data = 'pname=' + $('#m11').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}

function verify10() {
    var data = 'pname=' + $('#m12').text();
    $.ajax({
        type : "POST",
        url : "/showfile",
        data : data,
        dataType:"json",
        success : function(data) {
            if(data.size==0){
                alert("改项目没有文件");
            }
            else {
                var filename=new Array();
                var description=new Array();
                var verify=new Array();
                var name=data.name;
                var size=data.size;
                for(var i=0;i<size;i++){
                    filename[i]=data.filename[i];
                    description[i]=data.description[i];
                    verify[i]=data.verify[i];
                }
                junmp(name,size,filename,description,verify);

            }

        }
    });
    return false;
}