// 实时计算count页面数据
function result1() {
    var a = document.getElementById("B26").value;
    var b = document.getElementById("B27").value;
    var str=document.getElementById("B28").value.replace("%","");
    var c= str/100;

    if(a == "" || b == "" || c == "") {
        return;
    } else {
        var B29 = a * 1000 * b * (1 - c);
        $('#result1').text(B29);
        // $('#test').val(B29);
    }
}
function result12(){
    var a = document.getElementById("B26-2").value;
    var b = document.getElementById("B27-2").value;
    var str=document.getElementById("B28-2").value.replace("%","");
    var c= str/100;

    if(a == "" || b == "" || c == "") {
        return;
    } else {
        var B29 = a * 1000 * b * (1 - c);
        $('#result12').text(B29);
    }
}
function result2() {
    var a = document.getElementById("B30").value;
    var str=document.getElementById("B31").value.replace("%","");
    var b= str/100;

    if(a == "" || b == "" ) {
        return;
    } else {
        var B32 = a/(1+b);
        $('#result2').text(B32);
    }
}
function result22() {
    var a = document.getElementById("B30-2").value;
    var str=document.getElementById("B31-2").value.replace("%","");
    var b= str/100;

    if(a == "" || b == "" ) {
        return;
    } else {
        var B32 = a/(1+b);
        $('#result22').text(B32);
    }
}
function result3() {
    var str = document.getElementById("B312").value.replace("%","");
    var b = document.getElementById("B34").value;
    var a= str/100;

    if(a == "" || b == "" ) {
        return;
    } else {
        var B35 = b/(1+a);
        $('#result3').text(B35);
    }
}
function result32() {
    var str = document.getElementById("B312-2").value.replace("%","");
    var b = document.getElementById("B34-2").value;
    var a= str/100;

    if(a == "" || b == "" ) {
        return;
    } else {
        var B35 = b/(1+a);
        $('#result32').text(B35);
    }
}
function result4() {
    var a = document.getElementById("B36").value;
    var str=document.getElementById("B37").value.replace("%","");
    var b= str/100;

    if(a == "" || b == "" ) {
        return;
    } else {
        var B38 = a/(1+b);
        $('#result4').text(B38);
    }

}
function result5() {

    var str=document.getElementById("B18").value.replace("%","");
    var a= str/100;
    // alert(str);
    // alert(a);
    var b = document.getElementById("B16").value;
    if(b == "" ) {
        return;
    } else {
        var B19 = a*b;
        // alert(B19);
        $('#result5').text(B19);
        $('#D35').text(0-b);
        $('#D15').text(0-b);
    }

}
function result52() {

    var str=document.getElementById("B18-2").value.replace("%","");
    var a= str/100;
    var b = document.getElementById("B16-2").value;
    if( b == "" ) {
        return;
    } else {
        var B19 = a*b;
        $('#result52').text(B19);
        $('#D35-2').text(0-b);
        $('#D15-2').text(0-b);
    }

}
function result6() {
    var a = parseFloat(document.getElementById("result32").innerText);
    var b = parseFloat(document.getElementById("B33-2").value);

    if(a == "" || b == "") {
        return;
    } else {
        var B29 = a * b ;
        $('#result6').text(B29);
    }
}

function hanreshouyi1() {
    var a = document.getElementById("result1").innerText;
    var b = document.getElementById("result2").innerText;
    var c = document.getElementById("result4").innerText;

    if(a == "" || b == ""|| c == ""  ) {
        return;
    } else {
        // 电费
        var E3 = parseInt(a  * b) ;
        var F3=parseInt(a*b*0.7);
        $('#E3').text(E3);
        $('#F3').text(F3);
        $('#G3').text(E3);
        $('#H3').text(E3);
        $('#I3').text(E3);

        $('#E21').text(E3);
        $('#F21').text(F3);
        $('#G21').text(E3);
        $('#H21').text(E3);
        $('#I21').text(E3);

        // 燃气
        var E4 =parseInt(a * c)  ;
        var F4=parseInt(a*c*0.7);
        $('#E4').text(E4);
        $('#F4').text(F4);
        $('#G4').text(E4);
        $('#H4').text(E4);
        $('#I4').text(E4);

        $('#E24').text(E4);
        $('#F24').text(F4);
        $('#G24').text(E4);
        $('#H24').text(E4);
        $('#I24').text(E4);

        // 不含热毛利
        var E5=E3-E4;
        var F5=F3-F4;
        $('#E5').text(E5);
        $('#F5').text(F5);
        $('#G5').text(E5);
        $('#H5').text(E5);
        $('#I5').text(E5);
    }
}
function hanreshouyi12() {
    var a = document.getElementById("result12").innerText;
    var b = document.getElementById("result22").innerText;

    if (a == "" || b == "" ) {
        return;
    } else {
        // 电费
        var E3 = parseInt(a * b);
        var F3 = parseInt(a * b * 0.7);
        $('#E3-2').text(E3);
        $('#F3-2').text(F3);
        $('#G3-2').text(E3);
        $('#H3-2').text(E3);
        $('#I3-2').text(E3);

        $('#E21-2').text(E3);
        $('#F21-2').text(F3);
        $('#G21-2').text(E3);
        $('#H21-2').text(E3);
        $('#I21-2').text(E3);
    }
}
function hanreshouyi2() {
    var a = parseFloat(document.getElementById("B30").value);
    var b = parseFloat(document.getElementById("result2").innerText);
    var c = parseFloat(document.getElementById("B36").value);
    var d = parseFloat(document.getElementById("result4").innerText);
    var e = parseFloat(document.getElementById("result1").innerText);

    var f = parseFloat(document.getElementById("B33").value);
    var g = parseFloat(document.getElementById("B34").value);
    var h = parseFloat(document.getElementById("result3").innerText);


    var str1=document.getElementById("B40").value.replace("%","");
    var tax1= str1/100;
    var str2=document.getElementById("B41").value.replace("%","");
    var tax2= str2/100;
    var str3=document.getElementById("B42").value.replace("%","");
    var tax3= str3/100;

    if (a == "" || b == "" || c == ""||d == "" || e == "" || tax1 == ""|| tax2 == ""|| tax3 == "") {
        return;
    } else {
        // 流转税
        var xx=parseFloat(a-b-c+d);
        var yy=parseFloat(tax1+tax2+tax3);
        var zz=xx * e * yy;
        var E6 = parseInt(zz);
        var F6 = parseInt(zz*0.7);
        $('#E6').text(E6);
        $('#F6').text(F6);
        $('#G6').text(E6);
        $('#H6').text(E6);
        $('#I6').text(E6);

        var E26 = parseInt(((a-b-c+d)*e+(g-h)*f)*(tax1+tax2+tax3));
        var F26 = parseInt(((a-b-c+d)*e+(g-h)*f)*(tax1+tax2+tax3)*0.7);
        $('#E26').text(E26);
        $('#F26').text(F26);
        $('#G26').text(E26);
        $('#H26').text(E26);
        $('#I26').text(E26);
    }
}
function hanreshouyi3() {
    // 管理
    var a = parseInt(document.getElementById("B39").value);
    // 财务
    var b = document.getElementById("result5").innerText;
    //毛利
    var c = document.getElementById("E5").innerText;
    var d = document.getElementById("F5").innerText;
    // 管理费用
    $('#E7').text(a);
    $('#F7').text(a);
    $('#G7').text(a);
    $('#H7').text(a);
    $('#I7').text(a);

    $('#E27').text(a);
    $('#F27').text(a);
    $('#G27').text(a);
    $('#H27').text(a);
    $('#I27').text(a);
    // 财务费用
    $('#E28').text(b);
    $('#F28').text(b);
    $('#G28').text(b);
    $('#H28').text(b);
    $('#I28').text(b);

    $('#E8').text(b);
    $('#F8').text(b);
    $('#G8').text(b);
    $('#H8').text(b);
    $('#I8').text(b);

    // EBITDA=毛利-管理
    $('#E9').text(parseInt(c-a));
    $('#F9').text(parseInt(d-a));
    $('#G9').text(parseInt(c-a));
    $('#H9').text(parseInt(c-a));
    $('#I9').text(parseInt(c-a));

}
function hanreshouyi32() {

    // 财务
    var b = document.getElementById("result52").innerText;

    // 财务费用
    $('#E28-2').text(b);
    $('#F28-2').text(b);
    $('#G28-2').text(b);
    $('#H28-2').text(b);
    $('#I28-2').text(b);

    $('#E8-2').text(b);
    $('#F8-2').text(b);
    $('#G8-2').text(b);
    $('#H8-2').text(b);
    $('#I8-2').text(b);

}
function hanreshouyi4() {
    var a = document.getElementById("E5").innerText;
    var b = document.getElementById("E6").innerText;
    var c = document.getElementById("E7").innerText;
    var d = document.getElementById("E8").innerText;

    var e = document.getElementById("E25").innerText;
    var f = document.getElementById("E26").innerText;
    var g = document.getElementById("E27").innerText;
    var h = document.getElementById("E28").innerText;

    var str=document.getElementById("B43").value.replace("%","");
    var tax= str/100;


    var aa= parseFloat(a-b-c-d);
    var bb= parseFloat(e-f-g-h);

    if (aa>0) {
        $('#E10').text(aa*tax);
        $('#E11').text(aa-(aa*tax));
        $('#H10').text(aa*tax*0.5);
        $('#H11').text(aa-(aa*tax*0.5));
        $('#I10').text(aa*tax);
        $('#I11').text(aa-(aa*tax));
    } else {
        // 企业所得税 净现金流
        $('#E10').text(0);
        $('#E11').text(aa);
        $('#H10').text(0);
        $('#H11').text(aa);
        $('#I10').text(0);
        $('#I11').text(aa);
    }
    $('#F10').text(0);
    var x = document.getElementById("F5").innerText;
    var y = document.getElementById("F6").innerText;
    $('#F11').text(x-y-c-d);
    $('#G10').text(0);
    $('#G11').text(aa);

    if (bb>0) {
        $('#E30').text(bb*tax);
        $('#E31').text(bb-(bb*tax));
        $('#H30').text(bb*tax*0.5);
        $('#H31').text(bb-(bb*tax*0.5));
        $('#I30').text(bb*tax);
        $('#I31').text(bb-(bb*tax));
    } else {
        // 企业所得税 净现金流
        $('#E30').text(0);
        $('#E31').text(bb);
        $('#H30').text(0);
        $('#H31').text(bb);
        $('#I30').text(0);
        $('#I31').text(bb);
    }
    $('#F30').text(0);
    var xx = document.getElementById("F25").innerText;
    var yy = document.getElementById("F26").innerText;
    $('#F31').text(xx-yy-c-d);
    $('#G30').text(0);
    $('#G31').text(bb);
}
function hanreshouyi5() {

    $('#E15').text(document.getElementById("E11").innerText);
    $('#F15').text(document.getElementById("E11").innerText);
    $('#G15').text(document.getElementById("F11").innerText);
    $('#H15').text(document.getElementById("G11").innerText);
    $('#I15').text(document.getElementById("G11").innerText);
    $('#J15').text(document.getElementById("H11").innerText);
    $('#K15').text(document.getElementById("H11").innerText);
    $('#L15').text(document.getElementById("I11").innerText);
    $('#M15').text(document.getElementById("I11").innerText);
    $('#N15').text(document.getElementById("I11").innerText);

    $('#E35').text(document.getElementById("E31").innerText);
    $('#F35').text(document.getElementById("E31").innerText);
    $('#G35').text(document.getElementById("F31").innerText);
    $('#H35').text(document.getElementById("G31").innerText);
    $('#I35').text(document.getElementById("G31").innerText);
    $('#J35').text(document.getElementById("H31").innerText);
    $('#K35').text(document.getElementById("H31").innerText);
    $('#L35').text(document.getElementById("I31").innerText);
    $('#M35').text(document.getElementById("I31").innerText);
    $('#N35').text(document.getElementById("I31").innerText);
}
function buhanreshouyi1() {
    var a = document.getElementById("B33").value;
    var b = document.getElementById("result3").innerText;
    var c = parseInt(document.getElementById("E21").innerText);
    var d = parseInt(document.getElementById("F21").innerText);
    var e = parseInt(document.getElementById("E24").innerText);
    var f = parseInt(document.getElementById("F24").innerText);
    var g = parseInt(document.getElementById("E27").innerText);
    if(a == "" || b == "") {
        return;
    } else {
        // 热收入
        var E22 = parseInt(a * b) ;
        var F22 =parseInt( a * b *0.7 );
        $('#E22').text(E22);
        $('#F22').text(F22);
        $('#G22').text(E22);
        $('#H22').text(E22);
        $('#I22').text(E22);

        // 收入合计
        var heji=E22+c;
        $('#E23').text(heji);
        $('#F23').text(heji);
        $('#G23').text(heji);
        $('#H23').text(heji);
        $('#I23').text(heji);

        //毛利
        $('#E25').text(E22+c-e);
        $('#F25').text(F22+d-f);
        $('#G25').text(E22+c-e);
        $('#H25').text(E22+c-e);
        $('#I25').text(E22+c-e);

        //EBITDA
        $('#E29').text(E22+c-e-g);
        $('#F29').text(F22+d-f-g);
        $('#G29').text(E22+c-e-g);
        $('#H29').text(E22+c-e-g);
        $('#I29').text(E22+c-e-g);
    }
}
function buhanreshouyi12() {
    var a = document.getElementById("B33-2").value;
    var b = document.getElementById("result32").innerText;
    var c = parseInt(document.getElementById("E21-2").innerText);
    if(a == "" || b == "") {
        return;
    } else {
        // 热收入
        var E22 = parseInt(a * b) ;
        var F22 =parseInt( a * b *0.7 );
        $('#E22-2').text(E22);
        $('#F22-2').text(F22);
        $('#G22-2').text(E22);
        $('#H22-2').text(E22);
        $('#I22-2').text(E22);

        // 收入合计
        var heji=E22+c;
        $('#E23-2').text(heji);
        $('#F23-2').text(heji);
        $('#G23-2').text(heji);
        $('#H23-2').text(heji);
        $('#I23-2').text(heji);
    }
}

function getirr() {

    var a = parseFloat(document.getElementById("B16").value);

    //收入的数组

    var StepNum = 1000;//最大循环次数

    var MinDev = 1;//终止误差
    var MinValue = 0.0;//初值最大最小
    var MaxValue = 1.0;
    var TestValue = 0.0;

    while (StepNum > 0) {
        TestValue = (MinValue + MaxValue) / 2.0;//大循环是二分法求irr数
        var npvvalue=npv(TestValue);
        if (Math.abs(-a + npvvalue) < MinDev) {
            break;
            // alert("收敛了");
        }else if (Math.abs(a)>npvvalue) {
            MaxValue = TestValue;
            // alert("qujianjianban+");
            // alert(TestValue);
        } else {
            MinValue = TestValue;
            // alert("qujianjianban-");
            // alert(TestValue);
        }
        StepNum--;
    }
    // alert(TestValue);
    $('#IRR1').text(Math.round(TestValue*100)+"%");
}
function npv(tstirr) {
    var input = new Array(11);
    input[1] = parseFloat(document.getElementById("E15").innerText);
    input[2] = parseFloat(document.getElementById("F15").innerText);
    input[3] = parseFloat(document.getElementById("G15").innerText);
    input[4] = parseFloat(document.getElementById("H15").innerText);
    input[5] = parseFloat(document.getElementById("I15").innerText);
    input[6] = parseFloat(document.getElementById("J15").innerText);
    input[7] = parseFloat(document.getElementById("K15").innerText);
    input[8] = parseFloat(document.getElementById("L15").innerText);
    input[9] = parseFloat(document.getElementById("M15").innerText);
    input[10] = parseFloat(document.getElementById("N15").innerText);

    var year1 = 10;//年数
    var npvvalue1 = 0.0;//npv的值
    var tempi = 1;//年数的变量
    for (tempi; tempi <= year1; tempi++) {//求不同testvalue下的npv
        npvvalue1 = npvvalue1 + (input[tempi] / Math.pow(1 + tstirr, tempi));
    }//循环累加
    // alert(npvvalue);
    return npvvalue1;
}

function getirr1() {

    var a = parseFloat(document.getElementById("B16").value);

    //收入的数组

    var StepNum = 1000;//最大循环次数

    var MinDev = 1;//终止误差
    var MinValue = 0.0;//初值最大最小
    var MaxValue = 1.0;
    var TestValue = 0.0;

    while (StepNum > 0) {
        TestValue = (MinValue + MaxValue) / 2.0;//大循环是二分法求irr数
        var npvvalue=npv1(TestValue);
        if (Math.abs(-a + npvvalue) < MinDev) {
            break;
            // alert("收敛了");
        }else if (Math.abs(a)>npvvalue) {
            MaxValue = TestValue;
            // alert("qujianjianban+");
            // alert(TestValue);
        } else {
            MinValue = TestValue;
            // alert("qujianjianban-");
            // alert(TestValue);
        }
        StepNum--;
    }
    // alert(TestValue);
    $('#IRR2').text(Math.round(TestValue*100)+"%");
}
function npv1(testirr) {
    var input = new Array(11);
    input[1] = parseFloat(document.getElementById("E35").innerText);
    input[2] = parseFloat(document.getElementById("F35").innerText);
    input[3] = parseFloat(document.getElementById("G35").innerText);
    input[4] = parseFloat(document.getElementById("H35").innerText);
    input[5] = parseFloat(document.getElementById("I35").innerText);
    input[6] = parseFloat(document.getElementById("J35").innerText);
    input[7] = parseFloat(document.getElementById("K35").innerText);
    input[8] = parseFloat(document.getElementById("L35").innerText);
    input[9] = parseFloat(document.getElementById("M35").innerText);
    input[10] = parseFloat(document.getElementById("N35").innerText);

    var year1 = 10;//年数
    var npvvalue = 0.0;//npv的值
    var tempi = 1;//年数的变量
    for (tempi; tempi <= year1; tempi++) {//求不同testvalue下的npv
        npvvalue = npvvalue + (input[tempi] / Math.pow(1 + testirr, tempi));
    }//循环累加
    // alert(npvvalue);
    return npvvalue;
}

function fantuihanshu() {
    alert("计算新成本");
    var a = parseFloat(document.getElementById("B16-2").value);

    var StepNum = 1000;//最大循环次数
    var MinDev =0.001;//终止误差
    var MinValue = 0.0;//初值最大最小
    var MaxValue = 10;//这里是含税燃气成本
    var TestValue = 0.0;


    while (StepNum > 0) {
        TestValue = (MinValue + MaxValue) / 2.0;//大循环是二分法求irr数
        var npvvalue=npv3(TestValue);//
        if (Math.abs(-a + npvvalue) < MinDev) {
            break;
            //   alert("收敛了");
        }else if (Math.abs(a)>npvvalue) {
            MaxValue = TestValue;
            //  alert("+++++++++++test=");alert(TestValue);
        } else {
            MinValue = TestValue;
            //  alert("-----------teat=");alert(TestValue);
        }
        StepNum--;
    }
    var year1 = 11;//年数
    var tempi = 1;//年数的变量
    var str=document.getElementById("IRR3").value.replace("%","");
    var nowirr=str/100;//输入现在的irr值
    var everyyear = new Array();

    everyyear[1]=parseFloat(document.getElementById("E3-2").innerText);//1是电费收入
    everyyear[2]=parseFloat(document.getElementById("E22-2").innerText);//2是热收入
    everyyear[4]=parseFloat(document.getElementById("result52").innerText);//4是财务费用
    everyyear[5]=parseFloat(document.getElementById("result12").innerText);//5是年发电量
    everyyear[6]=parseFloat(document.getElementById("result22").innerText);//6是不含税电价
    everyyear[7]=parseFloat(document.getElementById("result32").innerText);//7是不含税供气价格
    var str1=document.getElementById("B37-2").value.replace("%","");
    everyyear[9]= str1/100;//9是成本增值税税率
    everyyear[10]=TestValue/(1+everyyear[9]);                     //10是不含税燃气成本
    var str2=document.getElementById("B40-2").value.replace("%","");
    everyyear[12]=str2/100;//12是城建税税率 有
    var str3=document.getElementById("B41-2").value.replace("%","");
    everyyear[13]=str3/100;//13是教育税附加税率
    var str4=document.getElementById("B42-2").value.replace("%","");
    everyyear[14]=str4/100;//14是地方教育税附加税率
    everyyear[15]=parseFloat(document.getElementById("B30-2").value);//15是含税电价 有
    // everyyear[15]=0.75;
    everyyear[16]=parseFloat(document.getElementById("B34-2").value);//16是含税供气价格 有
    // everyyear[16]=878;
    everyyear[17]=parseFloat(document.getElementById("B33-2").value);//17是年供热量 有
    // everyyear[17]=21592.07;
    var str8=document.getElementById("B43-2").value.replace("%","");
    everyyear[18]=str8/100;//18是企业所得税 有

    var zhi=new Array(5);
    zhi[0]=everyyear[1]+everyyear[2];//0是收入合计
    //1是流转税
    zhi[1]=(((everyyear[15]-everyyear[6])-(TestValue-everyyear[10]))*everyyear[5]+(everyyear[16]-everyyear[7])*everyyear[17])*(everyyear[12]+everyyear[13]+everyyear[14]);
    zhi[2]=everyyear[4];//2是财务费用
    zhi[3]=everyyear[10]*everyyear[5];//3是燃气成本
    zhi[4]=(zhi[0]-zhi[1]-zhi[2]-(zhi[3]/0.9))*everyyear[18];//4是企业所得税
    zhi[5]=zhi[3]/9.0;//5是管理费用

    var shouru=Array(11);
    for(tempi;tempi<year1;tempi++){
        if(tempi>2&&tempi<4){
            shouru[tempi]=zhi[0]*0.7-zhi[1]*0.7-zhi[2]-zhi[3]*0.7-zhi[5];
        }else if(tempi>=4&&tempi<6){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5];
        }else if(tempi>=6&&tempi<=7){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-(zhi[4]/2.0);
        }else{
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-zhi[4];
        }
    }
    $('#E35-2').text(shouru[1].toFixed(2));
    $('#F35-2').text(shouru[2].toFixed(2));
    $('#G35-2').text(shouru[3].toFixed(2));
    $('#H35-2').text(shouru[4].toFixed(2));
    $('#I35-2').text(shouru[5].toFixed(2));
    $('#J35-2').text(shouru[6].toFixed(2));
    $('#K35-2').text(shouru[7].toFixed(2));
    $('#L35-2').text(shouru[8].toFixed(2));
    $('#M35-2').text(shouru[9].toFixed(2));
    $('#N35-2').text(shouru[10].toFixed(2));

    $('#chengben5').text(TestValue.toFixed(4));
    $('#chengben4').text((everyyear[10]).toFixed(4));
    $('#chengben6').text((zhi[5]).toFixed(2));
    $('#chengben8').text((everyyear[10]*everyyear[5]).toFixed(2));

}
function npv3(hanshuiranqi) {

    var year1 = 11;//年数
    var npvvalue = 0.0;//npv的值
    var tempi = 1;//年数的变量
    var str=document.getElementById("IRR3").value.replace("%","");
    var nowirr=str/100;//输入现在的irr值
    var everyyear = new Array();

    everyyear[1]=parseFloat(document.getElementById("E3-2").innerText);//1是电费收入
    everyyear[2]=parseFloat(document.getElementById("E22-2").innerText);//2是热收入
    everyyear[4]=parseFloat(document.getElementById("result52").innerText);//4是财务费用
    everyyear[5]=parseFloat(document.getElementById("result12").innerText);//5是年发电量
    everyyear[6]=parseFloat(document.getElementById("result22").innerText);//6是不含税电价
    everyyear[7]=parseFloat(document.getElementById("result32").innerText);//7是不含税供气价格
    var str1=document.getElementById("B37-2").value.replace("%","");
    everyyear[9]= str1/100;//9是成本增值税税率
    everyyear[10]=hanshuiranqi/(1+everyyear[9]);                     //10是不含税燃气成本
    var str2=document.getElementById("B40-2").value.replace("%","");
    everyyear[12]=str2/100;//12是城建税税率 有
    var str3=document.getElementById("B41-2").value.replace("%","");
    everyyear[13]=str3/100;//13是教育税附加税率
    var str4=document.getElementById("B42-2").value.replace("%","");
    everyyear[14]=str4/100;//14是地方教育税附加税率
    everyyear[15]=parseFloat(document.getElementById("B30-2").value);//15是含税电价 有
    everyyear[16]=parseFloat(document.getElementById("B34-2").value);//16是含税供气价格 有
    everyyear[17]=parseFloat(document.getElementById("B33-2").value);//17是年供热量 有

    var str8=document.getElementById("B43-2").value.replace("%","");
    everyyear[18]=str8/100;//18是企业所得税 有
    var zhi=new Array(5);
    zhi[0]=everyyear[1]+everyyear[2];//0是收入合计
    //1是流转税
    zhi[1]=(((everyyear[15]-everyyear[6])-(hanshuiranqi-everyyear[10]))*everyyear[5]+(everyyear[16]-everyyear[7])*everyyear[17])*(everyyear[12]+everyyear[13]+everyyear[14]);
    zhi[2]=everyyear[4];//2是财务费用
    zhi[3]=everyyear[10]*everyyear[5];//3是燃气成本
    zhi[5]=zhi[3]/9.0;//5是管理费用
    zhi[4]=(zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5])*everyyear[18];//4是企业所得税

    var shouru=Array(11);
    for(tempi;tempi<year1;tempi++){
        if(tempi>2&&tempi<4){
            shouru[tempi]=zhi[0]*0.7-zhi[1]*0.7-zhi[2]-zhi[3]*0.7-zhi[5];
        }else if(tempi>=4&&tempi<6){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5];
        }else if(tempi>=6&&tempi<=7){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-(zhi[4]/2.0);
        }else{
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-zhi[4];
        }
    }

    for (tempi=1; tempi < year1; tempi++) {//求不同testvalue下的npv
        npvvalue = npvvalue + ( shouru[tempi]/ Math.pow(1 + nowirr, tempi));
    }//循环累加
    /*   alert("返回一次npv=");
       alert(npvvalue);*/
    return parseInt(npvvalue);
}

function fantuihanshu2() {

    var a = parseFloat(document.getElementById("B16-2").value);

    var StepNum = 1000;//最大循环次数
    var MinDev =0.001;//终止误差
    var MinValue = 0.0;//初值最大最小
    var MaxValue = 10;//这里是含税燃气成本
    var TestValue = 0.0;


    while (StepNum > 0) {
        TestValue = (MinValue + MaxValue) / 2.0;//大循环是二分法求irr数
        var npvvalue=npv4(TestValue);//
        if (Math.abs(-a + npvvalue) < MinDev) {
            break;
            //   alert("收敛了");
        }else if (Math.abs(a)>npvvalue) {
            MaxValue = TestValue;
            //  alert("+++++++++++test=");alert(TestValue);
        } else {
            MinValue = TestValue;
            //  alert("-----------teat=");alert(TestValue);
        }
        StepNum--;
    }
    var year1 = 11;//年数
    var tempi = 1;//年数的变量
    var str=document.getElementById("IRR3").value.replace("%","");
    var nowirr=str/100;//输入现在的irr值
    var everyyear = new Array();

    everyyear[1]=parseFloat(document.getElementById("E3-2").innerText);//1是电费收入
    everyyear[4]=parseFloat(document.getElementById("result52").innerText);//4是财务费用
    everyyear[5]=parseFloat(document.getElementById("result12").innerText);//5是年发电量
    everyyear[6]=parseFloat(document.getElementById("result22").innerText);//6是不含税电价
    everyyear[7]=parseFloat(document.getElementById("result32").innerText);//7是不含税供气价格
    var str1=document.getElementById("B37-2").value.replace("%","");
    everyyear[9]= str1/100;//9是成本增值税税率
    everyyear[10]=TestValue/(1+everyyear[9]);                     //10是不含税燃气成本
    var str2=document.getElementById("B40-2").value.replace("%","");
    everyyear[12]=str2/100;//12是城建税税率 有
    var str3=document.getElementById("B41-2").value.replace("%","");
    everyyear[13]=str3/100;//13是教育税附加税率
    var str4=document.getElementById("B42-2").value.replace("%","");
    everyyear[14]=str4/100;//14是地方教育税附加税率
    everyyear[15]=parseFloat(document.getElementById("B30-2").value);//15是含税电价 有
    // everyyear[15]=0.75;
    everyyear[16]=parseFloat(document.getElementById("B34-2").value);//16是含税供气价格 有
    // everyyear[16]=878;
    everyyear[17]=parseFloat(document.getElementById("B33-2").value);//17是年供热量 有
    // everyyear[17]=21592.07;
    var str8=document.getElementById("B43-2").value.replace("%","");
    everyyear[18]=str8/100;//18是企业所得税 有

    var zhi=new Array(5);
    zhi[0]=everyyear[1];//0是收入合计
    //1是流转税
    zhi[1]=(((everyyear[15]-everyyear[6])-(TestValue-everyyear[10]))*everyyear[5]+(everyyear[16]-everyyear[7])*everyyear[17])*(everyyear[12]+everyyear[13]+everyyear[14]);
    zhi[2]=everyyear[4];//2是财务费用
    zhi[3]=everyyear[10]*everyyear[5];//3是燃气成本
    zhi[4]=(zhi[0]-zhi[1]-zhi[2]-(zhi[3]/0.9))*everyyear[18];//4是企业所得税
    zhi[5]=zhi[3]/9.0;//5是管理费用

    var shouru=Array(11);
    for(tempi;tempi<year1;tempi++){
        if(tempi>2&&tempi<4){
            shouru[tempi]=zhi[0]*0.7-zhi[1]*0.7-zhi[2]-zhi[3]*0.7-zhi[5];
        }else if(tempi>=4&&tempi<6){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5];
        }else if(tempi>=6&&tempi<=7){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-(zhi[4]/2.0);
        }else{
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-zhi[4];
        }
    }
    $('#E15-2').text(shouru[1].toFixed(2));
    $('#F15-2').text(shouru[2].toFixed(2));
    $('#G15-2').text(shouru[3].toFixed(2));
    $('#H15-2').text(shouru[4].toFixed(2));
    $('#I15-2').text(shouru[5].toFixed(2));
    $('#J15-2').text(shouru[6].toFixed(2));
    $('#K15-2').text(shouru[7].toFixed(2));
    $('#L15-2').text(shouru[8].toFixed(2));
    $('#M15-2').text(shouru[9].toFixed(2));
    $('#N15-2').text(shouru[10].toFixed(2));

    $('#chengben2').text(TestValue.toFixed(2));
    $('#chengben1').text((everyyear[10]).toFixed(2));
    $('#chengben3').text((zhi[5]).toFixed(2));
    $('#chengben7').text((everyyear[10]*everyyear[5]).toFixed(2));

}
function npv4(hanshuiranqi) {

    var year1 = 11;//年数
    var npvvalue = 0.0;//npv的值
    var tempi = 1;//年数的变量
    var str=document.getElementById("IRR3").value.replace("%","");
    var nowirr=str/100;//输入现在的irr值
    var everyyear = new Array();

    everyyear[1]=parseFloat(document.getElementById("E3-2").innerText);//1是电费收入
    everyyear[4]=parseFloat(document.getElementById("result52").innerText);//4是财务费用
    everyyear[5]=parseFloat(document.getElementById("result12").innerText);//5是年发电量
    everyyear[6]=parseFloat(document.getElementById("result22").innerText);//6是不含税电价
    everyyear[7]=parseFloat(document.getElementById("result32").innerText);//7是不含税供气价格
    var str1=document.getElementById("B37-2").value.replace("%","");
    everyyear[9]= str1/100;//9是成本增值税税率
    everyyear[10]=hanshuiranqi/(1+everyyear[9]);                     //10是不含税燃气成本
    var str2=document.getElementById("B40-2").value.replace("%","");
    everyyear[12]=str2/100;//12是城建税税率 有
    var str3=document.getElementById("B41-2").value.replace("%","");
    everyyear[13]=str3/100;//13是教育税附加税率
    var str4=document.getElementById("B42-2").value.replace("%","");
    everyyear[14]=str4/100;//14是地方教育税附加税率
    everyyear[15]=parseFloat(document.getElementById("B30-2").value);//15是含税电价 有
    everyyear[16]=parseFloat(document.getElementById("B34-2").value);//16是含税供气价格 有
    everyyear[17]=parseFloat(document.getElementById("B33-2").value);//17是年供热量 有

    var str8=document.getElementById("B43-2").value.replace("%","");
    everyyear[18]=str8/100;//18是企业所得税 有
    var zhi=new Array(5);
    zhi[0]=everyyear[1];//0是收入合计
    //1是流转税
    zhi[1]=(((everyyear[15]-everyyear[6])-(hanshuiranqi-everyyear[10]))*everyyear[5]+(everyyear[16]-everyyear[7])*everyyear[17])*(everyyear[12]+everyyear[13]+everyyear[14]);
    zhi[2]=everyyear[4];//2是财务费用
    zhi[3]=everyyear[10]*everyyear[5];//3是燃气成本
    zhi[5]=zhi[3]/9.0;//5是管理费用
    zhi[4]=(zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5])*everyyear[18];//4是企业所得税

    var shouru=Array(11);
    for(tempi;tempi<year1;tempi++){
        if(tempi>2&&tempi<4){
            shouru[tempi]=zhi[0]*0.7-zhi[1]*0.7-zhi[2]-zhi[3]*0.7-zhi[5];
        }else if(tempi>=4&&tempi<6){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5];
        }else if(tempi>=6&&tempi<=7){
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-(zhi[4]/2.0);
        }else{
            shouru[tempi]=zhi[0]-zhi[1]-zhi[2]-zhi[3]-zhi[5]-zhi[4];
        }
    }

    for (tempi=1; tempi < year1; tempi++) {//求不同testvalue下的npv
        npvvalue = npvvalue + ( shouru[tempi]/ Math.pow(1 + nowirr, tempi));
    }//循环累加
    /*   alert("返回一次npv=");
       alert(npvvalue);*/
    return parseInt(npvvalue);
}

function aplusb() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    if(a == ""||b == ""){
        return;
    }
    else{

        var aplusb = parseInt(a) + parseInt(b);
        if(aplusb < eval(25)){
            var dist = eval(25)-aplusb;
            $('#aplusb').text(aplusb+ "    与标准值相差  "+dist);
        }
        else {
            $('#aplusb').text(aplusb);

        }
    }
}
function cplusd() {
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;

    if(c == ""||d == ""){
        return;
    }
    else{
        var cplusd = parseInt(c) + parseInt(d);
        $('#cplusd').text("   "+cplusd);
    }
}