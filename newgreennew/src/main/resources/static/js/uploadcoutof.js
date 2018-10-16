//修改项目数据 并跳转第三页newfile
function uploadcountof() {
    // 取得指定FORM里的元素
    alert("提交成功");
    var t = $('#form1').serializeArray();
    var d = {};
    $.each(t, function() {
        d[this.name] = this.value.replace("%","");
    });
    var data = JSON.stringify(d);
// 获取pname值
    var q=location.search.substr(1);
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }

    var count = 'data='+data+'&pname='+argStr;
    // alert(argStr);

    $.ajax({
        type : 'POST',
        url : '/reviseirr_base',
        data : count,
        success:function(data){
            if(data!="aaa"){
                // 跳转至文件上传
                // alert("上传成功");
                var link ='newfile.html?pname='+data;
                window.location.href = link;
                return false;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("base");
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function uploadcount1of() {
    var ELE_GENERATION_KWH  =$("#result1").html();
    var WITHOUT_TAX_ELE_PRICE  =$("#result2").html();
    var WITHOUT_TAX_GAS_PRICE  =$("#result3").html();
    var WITHOUT_TAX_GAS_COST  =$("#result4").html();
    var FINANCIAL_COST  =$("#result5").html();
    var IRR_WITHOUT_HEAT  =$("#IRR1").html().replace("%","");
    var IRR_WITH_HEAT  =$("#IRR2").html().replace("%","");
    var d={};
    d.ELE_GENERATION_KWH=ELE_GENERATION_KWH;
    d.WITHOUT_TAX_ELE_PRICE=WITHOUT_TAX_ELE_PRICE;
    d.WITHOUT_TAX_GAS_PRICE=WITHOUT_TAX_GAS_PRICE;
    d.WITHOUT_TAX_GAS_COST=WITHOUT_TAX_GAS_COST;
    d.FINANCIAL_COST=FINANCIAL_COST;
    d.IRR_WITHOUT_HEAT=IRR_WITHOUT_HEAT;
    d.IRR_WITH_HEAT=IRR_WITH_HEAT;

// var d={
//     ELE_GENERATION_KWH:ELE_GENERATION_KWH,
//     WITHOUT_TAX_ELE_PRICE:WITHOUT_TAX_ELE_PRICE,
//     WITHOUT_TAX_GAS_PRICE:WITHOUT_TAX_GAS_PRICE,
//     WITHOUT_TAX_GAS_COST:WITHOUT_TAX_GAS_COST,
//     FINANCIAL_COST:FINANCIAL_COST,
//     IRR_WITHOUT_HEAT:IRR_WITHOUT_HEAT,
//     IRR_WITH_HEAT:IRR_WITH_HEAT
// };
    var data = JSON.stringify(d);

    var q=location.search.substr(1);
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }

    var count = 'data='+data+'&pname='+argStr;

    $.ajax({
        type : 'POST',
        url : '/reviseirr_result',
        data : count,
        success:function(data){
            if(data!="aaa"){
                console.log("success");
                // return false;
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("result");
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });



}

function uploadcount2of() {

    var d = {};
    d.IRR_WITH_HEAT_DEBT = $("#D35").html();
    d.YEARONE = $("#E35").html();
    d.YEARTWO = $("#F35").html();
    d.YEARTHREE = $("#G35").html();
    d.YEARFOUR = $("#H35").html();
    d.YEARFIVE = $("#I35").html();
    d.YEARSIX = $("#J35").html();
    d.YEARSEVEN = $("#K35").html();
    d.YEAREIGHT = $("#L35").html();
    d.YEARNINE = $("#M35").html();
    d.YEARTEN = $("#N35").html();

    var data = JSON.stringify(d);

    var q = location.search.substr(1);
    var qs = q.split('&');
    var argStr = '';
    if (qs) {
        for (var i = 0; i < qs.length; i++) {
            argStr = qs[i].substring(qs[i].indexOf('=') + 1);
        }
    }
    var count = 'data=' + data + '&pname=' + argStr;

    $.ajax({
        type: 'POST',
        url: '/reviseirr_with_heat_debt',
        data: count,
        success: function (data) {
            if (data != "aaa") {
                console.log("success");
                return false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("hanre");
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function uploadcount3of() {

    var d = {};
    d.IRR_WITHOUT_HEAT_DEBT = $("#D15").html();
    d.YEARONE = $("#E15").html();
    d.YEARTWO = $("#F15").html();
    d.YEARTHREE = $("#G15").html();
    d.YEARFOUR = $("#H15").html();
    d.YEARFIVE = $("#I15").html();
    d.YEARSIX = $("#J15").html();
    d.YEARSEVEN = $("#K15").html();
    d.YEAREIGHT = $("#L15").html();
    d.YEARNINE = $("#M15").html();
    d.YEARTEN = $("#N15").html();

    var data = JSON.stringify(d);

    var q = location.search.substr(1);
    var qs = q.split('&');
    var argStr = '';
    if (qs) {
        for (var i = 0; i < qs.length; i++) {
            argStr = qs[i].substring(qs[i].indexOf('=') + 1);
        }
    }

    var count = 'data=' + data + '&pname=' + argStr;

    $.ajax({
        type: 'POST',
        url: '/reviseirr_without_heat_debt',
        data: count,
        success: function (data) {
            if (data != "aaa") {
                console.log("success");
                return false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("hanre");
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        }
    });
}

function uploadcount4of() {



    var q = location.search.substr(1);
    var qs = q.split('&');
    var argStr = '';
    if (qs) {
        for (var i = 0; i < qs.length; i++) {
            argStr = qs[i].substring(qs[i].indexOf('=') + 1);
        }
    }


    var year1 = {};
    year1.ELE_INCOME = $("#E21").html();
    year1.GAS_COST = $("#E24").html();
    year1.GROSS_PROFIT = $("#E25").html();
    year1.TURNOVER_TAX = $("#E26").html();
    year1.MANAGE_COST = $("#E27").html();
    year1.FINANCIAL_COST = $("#E28").html();
    year1.EBITDA = $("#E29").html();
    year1.BUSSINESS_INCOME_TAX = $("#E30").html();
    year1.NET_CASH_FLOW = $("#E31").html();
    year1.STAGE = "stage1";
    year1.HEAT_INCOME = $("#E22").html();
    year1.INCOME_SUM = $("#E23").html();
    year1.pname = argStr;
    var yyy1 = JSON.stringify(year1);

    var year2 = {};
    year2.ELE_INCOME = $("#F21").html();
    year2.GAS_COST = $("#F24").html();
    year2.GROSS_PROFIT = $("#F25").html();
    year2.TURNOVER_TAX = $("#F26").html();
    year2.MANAGE_COST = $("#F27").html();
    year2.FINANCIAL_COST = $("#F28").html();
    year2.EBITDA = $("#F29").html();
    year2.BUSSINESS_INCOME_TAX = $("#F30").html();
    year2.NET_CASH_FLOW = $("#F31").html();
    year2.STAGE = "stage2";
    year2.HEAT_INCOME = $("#F22").html();
    year2.INCOME_SUM = $("#F23").html();
    year2.pname = argStr;
    var yyy2 = JSON.stringify(year2);

    var year3 = {};
    year3.ELE_INCOME = $("#G21").html();
    year3.GAS_COST = $("#G24").html();
    year3.GROSS_PROFIT = $("#G25").html();
    year3.TURNOVER_TAX = $("#G26").html();
    year3.MANAGE_COST = $("#G27").html();
    year3.FINANCIAL_COST = $("#G28").html();
    year3.EBITDA = $("#G29").html();
    year3.BUSSINESS_INCOME_TAX = $("#G30").html();
    year3.NET_CASH_FLOW = $("#G31").html();
    year3.STAGE = "stage3";
    year3.HEAT_INCOME = $("#G22").html();
    year3.INCOME_SUM = $("#G23").html();
    year3.pname = argStr;
    var yyy3 = JSON.stringify(year3);

    var year4 = {};
    year4.ELE_INCOME = $("#H21").html();
    year4.GAS_COST = $("#H24").html();
    year4.GROSS_PROFIT = $("#H25").html();
    year4.TURNOVER_TAX = $("#H26").html();
    year4.MANAGE_COST = $("#H27").html();
    year4.FINANCIAL_COST = $("#H28").html();
    year4.EBITDA = $("#H29").html();
    year4.BUSSINESS_INCOME_TAX = $("#H30").html();
    year4.NET_CASH_FLOW = $("#H31").html();
    year4.STAGE = "stage4";
    year4.HEAT_INCOME = $("#H22").html();
    year4.INCOME_SUM = $("#H23").html();
    year4.pname = argStr;
    var yyy4 = JSON.stringify(year4);

    var year5 = {};
    year5.ELE_INCOME = $("#I21").html();
    year5.GAS_COST = $("#I24").html();
    year5.GROSS_PROFIT = $("#I25").html();
    year5.TURNOVER_TAX = $("#I26").html();
    year5.MANAGE_COST = $("#I27").html();
    year5.FINANCIAL_COST = $("#I28").html();
    year5.EBITDA = $("#I29").html();
    year5.BUSSINESS_INCOME_TAX = $("#I30").html();
    year5.NET_CASH_FLOW = $("#I31").html();
    year5.STAGE = "stage5";
    year5.HEAT_INCOME = $("#I22").html();
    year5.INCOME_SUM = $("#I23").html();
    year5.pname = argStr;
    var yyy5 = JSON.stringify(year5);


    var count = 'year1=' + yyy1 + '&year2=' + yyy2+ '&year3=' + yyy3 + '&year4=' + yyy4+ '&year5=' + yyy5;

    $.ajax({
        type: 'POST',
        url: '/reviseirr_with_heat_item',
        data: count,
        success: function (data) {
            if (data != "aaa") {
                console.log("success");
                return false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert("hanre2");
            // alert(XMLHttpRequest.status);
            // alert(XMLHttpRequest.readyState);
            // alert(textStatus);
        }
    });
}

function uploadcount5of() {
    var q = location.search.substr(1);
    var qs = q.split('&');
    var argStr = '';
    if (qs) {
        for (var i = 0; i < qs.length; i++) {
            argStr = qs[i].substring(qs[i].indexOf('=') + 1);
        }
    }

    var year1 = {};
    year1.ELE_INCOME = $("#E3").html();
    year1.GAS_COST = $("#E4").html();
    year1.GROSS_PROFIT = $("#E5").html();
    year1.TURNOVER_TAX = $("#E6").html();
    year1.MANAGE_COST = $("#E7").html();
    year1.FINANCIAL_COST = $("#E8").html();
    year1.EBITDA = $("#E9").html();
    year1.BUSSINESS_INCOME_TAX = $("#E10").html();
    year1.NET_CASH_FLOW = $("#E11").html();
    year1.STAGE = "stage1";
    year1.pname = argStr;
    var yyy1 = JSON.stringify(year1);

    var year2 = {};
    year2.ELE_INCOME = $("#F3").html();
    year2.GAS_COST = $("#F4").html();
    year2.GROSS_PROFIT = $("#F5").html();
    year2.TURNOVER_TAX = $("#F6").html();
    year2.MANAGE_COST = $("#F7").html();
    year2.FINANCIAL_COST = $("#F8").html();
    year2.EBITDA = $("#F9").html();
    year2.BUSSINESS_INCOME_TAX = $("#F10").html();
    year2.NET_CASH_FLOW = $("#F11").html();
    year2.STAGE = "stage2";
    year2.pname = argStr;
    var yyy2 = JSON.stringify(year2);

    var year3 = {};
    year3.ELE_INCOME = $("#G3").html();
    year3.GAS_COST = $("#G4").html();
    year3.GROSS_PROFIT = $("#G5").html();
    year3.TURNOVER_TAX = $("#G6").html();
    year3.MANAGE_COST = $("#G7").html();
    year3.FINANCIAL_COST = $("#G8").html();
    year3.EBITDA = $("#G9").html();
    year3.BUSSINESS_INCOME_TAX = $("#G10").html();
    year3.NET_CASH_FLOW = $("#G11").html();
    year3.STAGE = "stage3";
    year3.pname = argStr;
    var yyy3 = JSON.stringify(year3);

    var year4 = {};
    year4.ELE_INCOME = $("#H3").html();
    year4.GAS_COST = $("#H4").html();
    year4.GROSS_PROFIT = $("#H5").html();
    year4.TURNOVER_TAX = $("#H6").html();
    year4.MANAGE_COST = $("#H7").html();
    year4.FINANCIAL_COST = $("#H8").html();
    year4.EBITDA = $("#H9").html();
    year4.BUSSINESS_INCOME_TAX = $("#H10").html();
    year4.NET_CASH_FLOW = $("#H11").html();
    year4.STAGE = "stage4";
    year4.pname = argStr;
    var yyy4 = JSON.stringify(year4);

    var year5 = {};
    year5.ELE_INCOME = $("#I3").html();
    year5.GAS_COST = $("#I4").html();
    year5.GROSS_PROFIT = $("#I5").html();
    year5.TURNOVER_TAX = $("#I6").html();
    year5.MANAGE_COST = $("#I7").html();
    year5.FINANCIAL_COST = $("#I8").html();
    year5.EBITDA = $("#I9").html();
    year5.BUSSINESS_INCOME_TAX = $("#I10").html();
    year5.NET_CASH_FLOW = $("#I11").html();
    year5.STAGE = "stage5";
    year5.pname = argStr;
    var yyy5 = JSON.stringify(year5);

    var count = 'year1=' + yyy1 + '&year2=' + yyy2+ '&year3=' + yyy3 + '&year4=' + yyy4+ '&year5=' + yyy5;

    $.ajax({
        type: 'POST',
        url: '/reviseirr_without_heat_item',
        data: count,
        success: function (data) {
            if (data != "aaa") {
                console.log("success");
                return false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // alert("buhanre2");
            // alert(XMLHttpRequest.status);
            // alert(XMLHttpRequest.readyState);
            // alert(textStatus);
        }
    });
}