// 加载文件详情的第1页
function func(){
    var q=decodeURI(location.search.substr(1));
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    var data = 'pname='+argStr;

    $.ajax({
        type: "POST",
        data:data,
        url: "/getdetail",
        dataType:"json",
        success: function (data) {
            document.getElementById("Name").innerHTML=data.pname;
            document.getElementById("Data").innerHTML=data.pdata;
            document.getElementById("Place").innerHTML=data.address;
            document.getElementById("Partner").innerHTML=data.partner;
            document.getElementById("Charge").innerHTML=data.charge;
            document.getElementById("Content").innerHTML=data.description;
            document.getElementById("Statue").innerHTML=data.completeinfo;
        }
    });


}

// 加载文件详情的第2页
function func1(){
    var q=decodeURI(location.search.substr(1));
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    var data = 'pname='+argStr;

    $.ajax({
        type: "POST",
        data:data,
        url: "/getbasic",
        dataType:"json",
        success: function (data) {
            document.getElementById("scale").innerHTML=data.SCALE;
            document.getElementById("ele-hour").innerHTML=data.ELE_GENERATION_H;
            document.getElementById("self").innerHTML=data.SELF_CONSUME_RATIO;
            document.getElementById("heat-prod").innerHTML=data.HEAT_PRODUCTION;
            document.getElementById("income").innerHTML=data.INCOME_VAT_RATE;
            document.getElementById("income1").innerHTML=data.INCOME_VAT_RATE;
            document.getElementById("with-ele").innerHTML=data.WITH_TAX_ELE_PRICE;
            document.getElementById("with-gas").innerHTML=data.WITH_TAX_GAS_PRICE;
            document.getElementById("interest-rate").innerHTML=data.INTEREST_RATE;
            document.getElementById("invest-amount").innerHTML=data.INVEST_AMOUNT;
            document.getElementById("manage-cost").innerHTML=data.MANAGE_COST;
            document.getElementById("construct-rate").innerHTML=data.CONSTRUCTION_TAX_RATE;
            document.getElementById("edu-rate").innerHTML=data.EDU_ADDITION_TAX_RATE;
            document.getElementById("local-rate").innerHTML=data.LOCAL_EDU_ADDITION_TAX_RATE;
            document.getElementById("business-ele").innerHTML=data.BUSINESS_INCOME_TAX_RATE;
            document.getElementById("increat").innerHTML=data.COST_TAX_RATE;
            document.getElementById("cost-gas").innerHTML=data.WITH_TAX_GAS_COST;
            document.getElementById("Name").innerHTML=data.pname;
        }
    });

    $.ajax({
        type: "POST",
        data: data,
        url: "/getresult",
        dataType: "json",
        success: function (data) {
            document.getElementById("ele-year").innerHTML = data.ELE_GENERATION_KWH;
            document.getElementById("without-ele").innerHTML = data.WITHOUT_TAX_ELE_PRICE;
            document.getElementById("without-gas").innerHTML = data.WITHOUT_TAX_GAS_PRICE;
            document.getElementById("without-gas-cost").innerHTML = data.WITHOUT_TAX_GAS_COST;
            document.getElementById("financial-cost").innerHTML = data.FINANCIAL_COST;
        }
    });
}

// 加载文件详情的第3页
function func3(){
    var q=decodeURI(location.search.substr(1));
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    var data = 'pname='+argStr;

    $.ajax({
        type: "POST",
        data:data,
        url: "/nohotitem",
        dataType:"json",
        success: function (data) {
            document.getElementById("Name").innerHTML=data[0].pname;

            document.getElementById("E3").innerHTML=data[0].ELE_INCOME;
            document.getElementById("F3").innerHTML=data[1].ELE_INCOME;
            document.getElementById("G3").innerHTML=data[2].ELE_INCOME;
            document.getElementById("H3").innerHTML=data[3].ELE_INCOME;
            document.getElementById("I3").innerHTML=data[4].ELE_INCOME;

            document.getElementById("E4").innerHTML=data[0].GAS_COST;
            document.getElementById("F4").innerHTML=data[1].GAS_COST;
            document.getElementById("G4").innerHTML=data[2].GAS_COST;
            document.getElementById("H4").innerHTML=data[3].GAS_COST;
            document.getElementById("I4").innerHTML=data[4].GAS_COST;

            document.getElementById("E5").innerHTML=data[0].GROSS_PROFIT;
            document.getElementById("F5").innerHTML=data[1].GROSS_PROFIT;
            document.getElementById("G5").innerHTML=data[2].GROSS_PROFIT;
            document.getElementById("H5").innerHTML=data[3].GROSS_PROFIT;
            document.getElementById("I5").innerHTML=data[4].GROSS_PROFIT;

            document.getElementById("E6").innerHTML=data[0].TURNOVER_TAX;
            document.getElementById("F6").innerHTML=data[1].TURNOVER_TAX;
            document.getElementById("G6").innerHTML=data[2].TURNOVER_TAX;
            document.getElementById("H6").innerHTML=data[3].TURNOVER_TAX;
            document.getElementById("I6").innerHTML=data[4].TURNOVER_TAX;

            document.getElementById("E7").innerHTML=data[0].MANAGE_COST;
            document.getElementById("F7").innerHTML=data[1].MANAGE_COST;
            document.getElementById("G7").innerHTML=data[2].MANAGE_COST;
            document.getElementById("H7").innerHTML=data[3].MANAGE_COST;
            document.getElementById("I7").innerHTML=data[4].MANAGE_COST;

            document.getElementById("E8").innerHTML=data[0].FINANCIAL_COST;
            document.getElementById("F8").innerHTML=data[1].FINANCIAL_COST;
            document.getElementById("G8").innerHTML=data[2].FINANCIAL_COST;
            document.getElementById("H8").innerHTML=data[3].FINANCIAL_COST;
            document.getElementById("I8").innerHTML=data[4].FINANCIAL_COST;

            document.getElementById("E9").innerHTML=data[0].EBITDA;
            document.getElementById("F9").innerHTML=data[1].EBITDA;
            document.getElementById("G9").innerHTML=data[2].EBITDA;
            document.getElementById("H9").innerHTML=data[3].EBITDA;
            document.getElementById("I9").innerHTML=data[4].EBITDA;

            document.getElementById("E10").innerHTML=data[0].BUSSINESS_INCOME_TAX;
            document.getElementById("F10").innerHTML=data[1].BUSSINESS_INCOME_TAX;
            document.getElementById("G10").innerHTML=data[2].BUSSINESS_INCOME_TAX;
            document.getElementById("H10").innerHTML=data[3].BUSSINESS_INCOME_TAX;
            document.getElementById("I10").innerHTML=data[4].BUSSINESS_INCOME_TAX;

            document.getElementById("E11").innerHTML=data[0].NET_CASH_FLOW;
            document.getElementById("F11").innerHTML=data[1].NET_CASH_FLOW;
            document.getElementById("G11").innerHTML=data[2].NET_CASH_FLOW;
            document.getElementById("H11").innerHTML=data[3].NET_CASH_FLOW;
            document.getElementById("I11").innerHTML=data[4].NET_CASH_FLOW;

        }
    });

    $.ajax({
        type: "POST",
        data: data,
        url: "/nohotdebt",
        dataType: "json",
        success: function (data) {
            document.getElementById("D15").innerHTML=data.IRR_WITHOUT_HEAT_DEBT;
            document.getElementById("E15").innerHTML=data.YEARONE;
            document.getElementById("F15").innerHTML=data.YEARTWO;
            document.getElementById("G15").innerHTML=data.YEARTHREE;
            document.getElementById("H15").innerHTML=data.YEARFOUR;
            document.getElementById("I15").innerHTML=data.YEARFIVE;
            document.getElementById("J15").innerHTML=data.YEARSIX;
            document.getElementById("K15").innerHTML=data.YEARSEVEN;
            document.getElementById("L15").innerHTML=data.YEAREIGHT;
            document.getElementById("M15").innerHTML=data.YEARNINE;
            document.getElementById("N15").innerHTML=data.YEARTEN;
        }
    });

    $.ajax({
        type: "POST",
        data: data,
        url: "/getresult",
        dataType: "json",
        success: function (data) {
            document.getElementById("irr").innerHTML = data.IRR_WITHOUT_HEAT;
        }
    });
}

// 加载文件详情的第4页
function func4() {
    var q = decodeURI(location.search.substr(1));
    var qs = q.split('&');
    var argStr = '';
    if (qs) {
        for (var i = 0; i < qs.length; i++) {
            argStr = qs[i].substring(qs[i].indexOf('=') + 1);
        }
    }
    var data = 'pname=' + argStr;

    $.ajax({
        type: "POST",
        data: data,
        url: "/hotitem",
        dataType: "json",
        success: function (data) {
            document.getElementById("Name").innerHTML = data[0].pname;

            document.getElementById("E21").innerHTML = data[0].ELE_INCOME;
            document.getElementById("F21").innerHTML = data[1].ELE_INCOME;
            document.getElementById("G21").innerHTML = data[2].ELE_INCOME;
            document.getElementById("H21").innerHTML = data[3].ELE_INCOME;
            document.getElementById("I21").innerHTML = data[4].ELE_INCOME;

            document.getElementById("E22").innerHTML = data[0].HEAT_INCOME;
            document.getElementById("F22").innerHTML = data[1].HEAT_INCOME;
            document.getElementById("G22").innerHTML = data[2].HEAT_INCOME;
            document.getElementById("H22").innerHTML = data[3].HEAT_INCOME;
            document.getElementById("I22").innerHTML = data[4].HEAT_INCOME;

            document.getElementById("E23").innerHTML = data[0].INCOME_SUM;
            document.getElementById("F23").innerHTML = data[1].INCOME_SUM;
            document.getElementById("G23").innerHTML = data[2].INCOME_SUM;
            document.getElementById("H23").innerHTML = data[3].INCOME_SUM;
            document.getElementById("I23").innerHTML = data[4].INCOME_SUM;

            document.getElementById("E24").innerHTML = data[0].GAS_COST;
            document.getElementById("F24").innerHTML = data[1].GAS_COST;
            document.getElementById("G24").innerHTML = data[2].GAS_COST;
            document.getElementById("H24").innerHTML = data[3].GAS_COST;
            document.getElementById("I24").innerHTML = data[4].GAS_COST;

            document.getElementById("E25").innerHTML = data[0].GROSS_PROFIT;
            document.getElementById("F25").innerHTML = data[1].GROSS_PROFIT;
            document.getElementById("G25").innerHTML = data[2].GROSS_PROFIT;
            document.getElementById("H25").innerHTML = data[3].GROSS_PROFIT;
            document.getElementById("I25").innerHTML = data[4].GROSS_PROFIT;

            document.getElementById("E26").innerHTML = data[0].TURNOVER_TAX;
            document.getElementById("F26").innerHTML = data[1].TURNOVER_TAX;
            document.getElementById("G26").innerHTML = data[2].TURNOVER_TAX;
            document.getElementById("H26").innerHTML = data[3].TURNOVER_TAX;
            document.getElementById("I26").innerHTML = data[4].TURNOVER_TAX;

            document.getElementById("E27").innerHTML = data[0].MANAGE_COST;
            document.getElementById("F27").innerHTML = data[1].MANAGE_COST;
            document.getElementById("G27").innerHTML = data[2].MANAGE_COST;
            document.getElementById("H27").innerHTML = data[3].MANAGE_COST;
            document.getElementById("I27").innerHTML = data[4].MANAGE_COST;

            document.getElementById("E28").innerHTML = data[0].FINANCIAL_COST;
            document.getElementById("F28").innerHTML = data[1].FINANCIAL_COST;
            document.getElementById("G28").innerHTML = data[2].FINANCIAL_COST;
            document.getElementById("H28").innerHTML = data[3].FINANCIAL_COST;
            document.getElementById("I28").innerHTML = data[4].FINANCIAL_COST;

            document.getElementById("E29").innerHTML = data[0].EBITDA;
            document.getElementById("F29").innerHTML = data[1].EBITDA;
            document.getElementById("G29").innerHTML = data[2].EBITDA;
            document.getElementById("H29").innerHTML = data[3].EBITDA;
            document.getElementById("I29").innerHTML = data[4].EBITDA;

            document.getElementById("E30").innerHTML = data[0].BUSSINESS_INCOME_TAX;
            document.getElementById("F30").innerHTML = data[1].BUSSINESS_INCOME_TAX;
            document.getElementById("G30").innerHTML = data[2].BUSSINESS_INCOME_TAX;
            document.getElementById("H30").innerHTML = data[3].BUSSINESS_INCOME_TAX;
            document.getElementById("I30").innerHTML = data[4].BUSSINESS_INCOME_TAX;

            document.getElementById("E31").innerHTML = data[0].NET_CASH_FLOW;
            document.getElementById("F31").innerHTML = data[1].NET_CASH_FLOW;
            document.getElementById("G31").innerHTML = data[2].NET_CASH_FLOW;
            document.getElementById("H31").innerHTML = data[3].NET_CASH_FLOW;
            document.getElementById("I31").innerHTML = data[4].NET_CASH_FLOW;
        }
    });

    $.ajax({
        type: "POST",
        data: data,
        url: "/hotdebt",
        dataType: "json",
        success: function (data) {
            document.getElementById("D35").innerHTML=data.IRR_WITH_HEAT_DEBT;
            document.getElementById("E35").innerHTML=data.YEARONE;
            document.getElementById("F35").innerHTML=data.YEARTWO;
            document.getElementById("G35").innerHTML=data.YEARTHREE;
            document.getElementById("H35").innerHTML=data.YEARFOUR;
            document.getElementById("I35").innerHTML=data.YEARFIVE;
            document.getElementById("J35").innerHTML=data.YEARSIX;
            document.getElementById("K35").innerHTML=data.YEARSEVEN;
            document.getElementById("L35").innerHTML=data.YEAREIGHT;
            document.getElementById("M35").innerHTML=data.YEARNINE;
            document.getElementById("N35").innerHTML=data.YEARTEN;
        }
    });

    $.ajax({
        type: "POST",
        data: data,
        url: "/getresult",
        dataType: "json",
        success: function (data) {
            document.getElementById("irr").innerHTML = data.IRR_WITH_HEAT;
        }
    });
}

// 加载文件详情的第5页写在html下面

// 用于导航栏五个页面的跳转
function showdetail1() {
    var data = 'pname=' + $('#Name').text();
    alert(data);
    $.ajax({
        type: "POST",
        data:data,
        url: "/detail",
        success: function (data) {
            if(data!="000")
                window.location.href ='/detail.html?pname='+data;
            alert("成功查看详情");
        }

    });
}
function basics() {
    var data = 'pname=' + $('#Name').text();
    alert(data);
    $.ajax({
        type: "POST",
        data:data,
        url: "/basics",
        success: function (data) {
            if(data!="000")
                window.location.href ='/basics-index.html?pname='+data;
        }

    });
}
function hot() {
    var data = 'pname=' + $('#Name').text();
    alert(data);
    $.ajax({
        type: "POST",
        data:data,
        url: "/hot1",
        success: function (data) {
            if(data!="000")
                window.location.href ='/hot.html?pname='+data;
        }

    });
}
function nohot() {
    var data = 'pname=' + $('#Name').text();
    alert(data);
    $.ajax({
        type: "POST",
        data:data,
        url: "/nohot1",
        success: function (data) {
            if(data!="000")
                window.location.href ='/nohot.html?pname='+data;
        }

    });
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


