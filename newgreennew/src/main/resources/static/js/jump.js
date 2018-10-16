// 修改功能导航栏三个页面间的跳转
function toone() {
    var q=location.search.substr(1);
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    window.location.href='uploadinfo2.html?pname='+argStr;
}

function totwo() {
    var q=location.search.substr(1);
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    window.location.href='count3.html?pname='+argStr;
}

function tothree() {
    var q=location.search.substr(1);
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    window.location.href='newfile.html?pname='+argStr;
}



