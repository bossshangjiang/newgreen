function count31() {
    var a = document.getElementById("lr11").value;
    var b = document.getElementById("lr12").value;
    var c= document.getElementById("lr13").value;
    var d= document.getElementById("lr14").value;

    a=Number(a);
    b=Number(b);
    c=Number(c);
    d=Number(d);


    if(a == "" || b == "" || c == ""|| d == "") {
        return;
    } else {
        var lrresult = a+b+c+d;
        $('#lrr1').text(lrresult);
    }

}

function count32() {
    var a = document.getElementById("lr21").value;
    var b = document.getElementById("lr22").value;
    var c= document.getElementById("lr23").value;
    var d= document.getElementById("lr24").value;

    a=Number(a);
    b=Number(b);
    c=Number(c);
    d=Number(d);


    if(a == "" || b == "" || c == ""|| d == "") {
        return;
    } else {
        var lrresult = a+b+c+d;
        $('#lrr2').text(lrresult);
    }

}

function count33() {
    var a = new Array();
    for (var i=0;i<21;i++)
    {
        var b=i+1;
        var c="lr3"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }

    for (var i=0;i<21;i++)
    {
        if(a[i] == "" ) return;
    }

    var sum=0;
    for (var i=0;i<21;i++)
    {
        sum=sum+a[i];
    }

    $('#lrr3').text(sum);

}

function count34() {
    var a = new Array();
    for (var i=0;i<21;i++)
    {
        var b=i+1;
        var c="lr4"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }

    for (var i=0;i<21;i++)
    {
        if(a[i] == "" ) return;
    }

    var sum=0;
    for (var i=0;i<21;i++)
    {
        sum=sum+a[i];
    }

    $('#lrr4').text(sum);

}

function count35() {
    var a = new Array();
    for (var i=0;i<7;i++)
    {
        var b=i+1;
        var c="lr5"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }

    for (var i=0;i<7;i++)
    {
        if(a[i] == "" ) return;
    }

    var sum=0;
    for (var i=0;i<7;i++)
    {
        sum=sum+a[i];
    }

    $('#lrr5').text(sum);

}

function count36() {
    var a = new Array();
    for (var i=0;i<7;i++)
    {
        var b=i+1;
        var c="lr6"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }

    for (var i=0;i<7;i++)
    {
        if(a[i] == "" ) return;
    }

    var sum=0;
    for (var i=0;i<7;i++)
    {
        sum=sum+a[i];
    }

    $('#lrr6').text(sum);

}

function countlrb() {
    var a = new Array();
    for (var i=0;i<4;i++)
    {
        var b=i+1;
        var c="lr1"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum1=0;
    for (var i=0;i<4;i++)
    {
        sum1=sum1+a[i];
    }
    $('#lrr1').text(sum1);


    var a = new Array();
    for (var i=0;i<4;i++)
    {
        var b=i+1;
        var c="lr2"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum2=0;
    for (var i=0;i<4;i++)
    {
        sum2=sum2+a[i];
    }
    $('#lrr2').text(sum2);


    var a = new Array();
    for (var i=0;i<4;i++)
    {
        var b=i+1;
        var c="lr3"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum3=0;
    for (var i=0;i<4;i++)
    {
        sum3=sum3+a[i];
    }
    $('#lrr3').text(sum3);


    var a = new Array();
    for (var i=0;i<21;i++)
    {
        var b=i+1;
        var c="lr4"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum4=0;
    for (var i=0;i<21;i++)
    {
        sum4=sum4+a[i];
    }
    $('#lrr4').text(sum4);


    var a = new Array();
    for (var i=0;i<21;i++)
    {
        var b=i+1;
        var c="lr5"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum5=0;
    for (var i=0;i<21;i++)
    {
        sum5=sum5+a[i];
    }
    $('#lrr5').text(sum5);


    var a = new Array();
    for (var i=0;i<21;i++)
    {
        var b=i+1;
        var c="lr6"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum6=0;
    for (var i=0;i<21;i++)
    {
        sum6=sum6+a[i];
    }
    $('#lrr6').text(sum6);

    var lirun1=sum1-sum4;
    $('#lrr7').text(lirun1);
    var lirun2=sum2-sum5;
    $('#lrr8').text(lirun2);
    var lirun3=sum3-sum6;
    $('#lrr9').text(lirun3);

    var a = new Array();
    for (var i=0;i<7;i++)
    {
        var b=i+1;
        var c="lr7"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum7=0;
    for (var i=0;i<4;i++)
    {
        sum7=sum7+a[i];
    }
    for (var i=4;i<7;i++)
    {
        sum7=sum7-a[i];
    }
    var lirun4=lirun1+sum7;
    $('#lrr10').text(lirun4);


    var a = new Array();
    for (var i=0;i<7;i++)
    {
        var b=i+1;
        var c="lr8"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum8=0;
    for (var i=0;i<4;i++)
    {
        sum8=sum8+a[i];
    }
    for (var i=4;i<7;i++)
    {
        sum8=sum8-a[i];
    }
    var lirun5=lirun2+sum8;
    $('#lrr11').text(lirun5);


    var a = new Array();
    for (var i=0;i<7;i++)
    {
        var b=i+1;
        var c="lr9"+b;
        a[i]=document.getElementById(c).value;
        a[i]=Number(a[i]);
    }
    var sum9=0;
    for (var i=0;i<4;i++)
    {
        sum9=sum9+a[i];
    }
    for (var i=4;i<7;i++)
    {
        sum9=sum9-a[i];
    }
    var lirun6=lirun3+sum9;
    $('#lrr12').text(lirun6);
}