//manage页面跳转至修改页面
function revise1() {
    var data = 'pname=' + $('#m3').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        success: function (data){
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise2() {
    var data = 'pname=' + $('#m4').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise3() {
    var data = 'pname=' + $('#m5').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            alert(data);
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise4() {

    var data = 'pname=' + $('#m6').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){

            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise5() {
    var data = 'pname=' + $('#m7').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            alert(data);
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise6() {
    var data = 'pname=' + $('#m8').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            alert(data);
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise7() {
    var data = 'pname=' + $('#m9').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            alert(data);
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise8() {
    var data = 'pname=' + $('#m10').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            alert(data);
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise9() {
    alert("diaoyongrevise1()");
    var data = 'pname=' + $('#m11').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            alert(data);
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

function revise10() {
    var data = 'pname=' + $('#m12').text();
    $.ajax({
        type: "POST",
        url: "/toinfo2",
        data: data,
        success: function (data){
            alert(data);
            window.location.href='uploadinfo2.html?pname='+data;
        }
    });
}

//自动加载修改页面第一页项目基本信息内容
function revise() {
    var q=decodeURI(location.search.substr(1));
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }
    var data = 'pname=' + argStr;
    $.ajax({
        type: "POST",
        url: "/showproject",
        data: data,
        dataType: "json",
        success: function (data){
            document.getElementById("Name").value=data.pname;
            $('#Name').val(data.pname);
            $('#year').val(data.year);
            $('#month').val(data.month);
            $('#Partner').val(data.partner);
            $('#Charge').val(data.charge);
            $('#Content').val(data.description);
            $('#Place').val(data.address);

            if(data.work==nocomplete){
                $("input[name='work'][value=nocomplete]").attr("checked",true);
            }else{
                $("input[name='work'][value=complete]").attr("checked",true);
            }
        }
    });
}

//自动加载修改页面第二页项目数据内容
function reviseirr_base() {
    var q=decodeURI(location.search.substr(1));
    var qs=q.split('&');
    var argStr='';
    if(qs){
        for(var i=0;i<qs.length;i++){
            argStr=qs[i].substring(qs[i].indexOf('=')+1);
        }
    }

    var data = 'pname=' + argStr;
    $.ajax({
        type: "POST",
        url: "/showirr_base" ,
        data:data,
        dataType: "json",
        success: function (data) {
            $('#B26').val(data.SCALE);
            $('#B27').val(data.ELE_GENERATION_H);
            // var a=data.SELF_CONSUME_RATIO+"%";
            // $('#B28').val(a);
            $('#B28').val(data.SELF_CONSUME_RATIO);
            $('#B33').val(data.HEAT_PRODUCTION);
            $('#B31').val(data.INCOME_VAT_RATE);
            $('#B312').val(data.INCOME_VAT_RATE);
            $('#B30').val(data.WITH_TAX_ELE_PRICE);
            $('#B34').val(data.WITH_TAX_GAS_COST);
            $('#B18').val(data.INTEREST_RATE);
            $('#B16').val(data.INVEST_AMOUNT);
            $('#B39').val(data.MANAGE_COST);
            $('#B40').val(data.CONSTRUCTION_TAX_RATE);
            $('#B41').val(data.EDU_ADDITION_TAX_RATE);
            $('#B42').val(data.LOCAL_EDU_ADDITION_TAX_RATE);
            $('#B43').val(data.BUSINESS_INCOME_TAX_RATE);
            $('#B37').val(data.COST_TAX_RATE);
            $('#B36').val(data.WITH_TAX_GAS_COST);
        }
    });

    $.ajax({
        type: "POST",
        url: "/showirr_result" ,
        data:data,
        dataType: "json",
        success: function (data) {
            $("#result1").html(data.ELE_GENERATION_KWH);
            $("#result2").html(data.WITHOUT_TAX_ELE_PRICE);
            $("#result3").html(data.WITHOUT_TAX_GAS_PRICE);
            $("#result4").html(data.WITHOUT_TAX_GAS_COST);
            $("#result5").html(data.FINANCIAL_COST);
            $("#IRR1").html(data.IRR_WITHOUT_HEAT);
            $("#IRR2").html(data.IRR_WITH_HEAT);
        }

    });
    $.ajax({
        type: "POST",
        url: "/showirr_with_heat_debt",
        data:data,
        dataType: "json",
        success: function (data) {
            $("#D35").html(data.IRR_WITH_HEAT_DEBT);
            $("#E35").html(data.YEARONE);
            $("#F35").html(data.YEARTWO);
            $("#G35").html(data.YEARTHREE);
            $("#H35").html(data.YEARFOUR);
            $("#I35").html(data.YEARFIVE);
            $("#J35").html(data.YEARSIX);
            $("#K35").html(data.YEARSEVEN);
            $("#L35").html(data.YEAREIGHT);
            $("#M35").html(data.YEARNINE);
            $("#N35").html(data.YEARTEN);

        }

    });
    $.ajax({
        type: "POST",
        url: "/showirr_without_heat_debt",
        data: data,
        dataType: "json",
        success: function (data) {
            $("#D15").html(data.IRR_WITHOUT_HEAT_DEBT);
            $("#E15").html(data.YEARONE);
            $("#F15").html(data.YEARTWO);
            $("#G15").html(data.YEARTHREE);
            $("#H15").html(data.YEARFOUR);
            $("#I15").html(data.YEARFIVE);
            $("#J15").html(data.YEARSIX);
            $("#K15").html(data.YEARSEVEN);
            $("#L15").html(data.YEAREIGHT);
            $("#M15").html(data.YEARNINE);
            $("#N15").html(data.YEARTEN);
        }
    });


    $.ajax({
        type: "POST",
        url: "/showirr_with_heat_item",
        data: data,
        dataType: "json",
        success: function (data) {
            $("#E21").html(data.ELE_INCOME[0]);
            $("#E24").html(data.GAS_COST[0]);
            $("#E25").html(data.GROSS_PROFIT[0]);
            $("#E26").html(data.TURNOVER_TAX[0]);
            $("#E27").html(data.MANAGE_COST[0]);
            $("#E28").html(data.FINANCIAL_COST[0]);
            $("#E29").html(data.EBITDA[0]);
            $("#E30").html(data.BUSSINESS_INCOME_TAX[0]);
            $("#E31").html(data.NET_CASH_FLOW[0]);
            $("#E22").html(data.HEAT_INCOME[0]);
            $("#E23").html(data.INCOME_SUM[0]);


            $("#F21").html(data.ELE_INCOME[1]);
            $("#F24").html(data.GAS_COST[1]);
            $("#F25").html(data.GROSS_PROFIT[1]);
            $("#F26").html(data.TURNOVER_TAX[1]);
            $("#F27").html(data.MANAGE_COST[1]);
            $("#F28").html(data.FINANCIAL_COST[1]);
            $("#F29").html(data.EBITDA[1]);
            $("#F30").html(data.BUSSINESS_INCOME_TAX[1]);
            $("#F31").html(data.NET_CASH_FLOW[1]);
            $("#F22").html(data.HEAT_INCOME[1]);
            $("#F23").html(data.INCOME_SUM[1]);

            $("#G21").html(data.ELE_INCOME[2]);
            $("#G24").html(data.GAS_COST[2]);
            $("#G25").html(data.GROSS_PROFIT[2]);
            $("#G26").html(data.TURNOVER_TAX[2]);
            $("#G27").html(data.MANAGE_COST[2]);
            $("#G28").html(data.FINANCIAL_COST[2]);
            $("#G29").html(data.EBITDA[2]);
            $("#G30").html(data.BUSSINESS_INCOME_TAX[2]);
            $("#G31").html(data.NET_CASH_FLOW[2]);
            $("#G22").html(data.HEAT_INCOME[2]);
            $("#G23").html(data.INCOME_SUM[2]);

            $("#H21").html(data.ELE_INCOME[3]);
            $("#H24").html(data.GAS_COST[3]);
            $("#H25").html(data.GROSS_PROFIT[3]);
            $("#H26").html(data.TURNOVER_TAX[3]);
            $("#H27").html(data.MANAGE_COST[3]);
            $("#H28").html(data.FINANCIAL_COST[3]);
            $("#H29").html(data.EBITDA[3]);
            $("#H30").html(data.BUSSINESS_INCOME_TAX[3]);
            $("#H31").html(data.NET_CASH_FLOW[3]);
            $("#H22").html(data.HEAT_INCOME[3]);
            $("#H23").html(data.INCOME_SUM[3]);

            $("#I21").html(data.ELE_INCOME[4]);
            $("#I24").html(data.GAS_COST[4]);
            $("#I25").html(data.GROSS_PROFIT[4]);
            $("#I26").html(data.TURNOVER_TAX[4]);
            $("#I27").html(data.MANAGE_COST[4]);
            $("#I28").html(data.FINANCIAL_COST[4]);
            $("#I29").html(data.EBITDA[4]);
            $("#I30").html(data.BUSSINESS_INCOME_TAX[4]);
            $("#I31").html(data.NET_CASH_FLOW[4]);
            $("#I22").html(data.HEAT_INCOME[4]);
            $("#I23").html(data.INCOME_SUM[4]);
        }
    });

    $.ajax({
        type: "POST",
        url: "/showirr_without_heat_item" ,
        data:data,
        dataType: "json",
        success: function (data) {
            $("#E3").html(data.ELE_INCOME[0]);
            $("#E4").html(data.GAS_COST[0]);
            $("#E5").html(data.GROSS_PROFIT[0]);
            $("#E6").html(data.TURNOVER_TAX[0]);
            $("#E7").html(data.MANAGE_COST[0]);
            $("#E8").html(data.FINANCIAL_COST[0]);
            $("#E9").html(data.EBITDA[0]);
            $("#E10").html(data.BUSSINESS_INCOME_TAX[0]);
            $("#E11").html(data.NET_CASH_FLOW[0]);


            $("#F3").html(data.ELE_INCOME[1]);
            $("#F4").html(data.GAS_COST[1]);
            $("#F5").html(data.GROSS_PROFIT[1]);
            $("#F6").html(data.TURNOVER_TAX[1]);
            $("#F7").html(data.MANAGE_COST[1]);
            $("#F8").html(data.FINANCIAL_COST[1]);
            $("#F9").html(data.EBITDA[1]);
            $("#F10").html(data.BUSSINESS_INCOME_TAX[1]);
            $("#F11").html(data.NET_CASH_FLOW[1]);


            $("#G3").html(data.ELE_INCOME[2]);
            $("#G4").html(data.GAS_COST[2]);
            $("#G5").html(data.GROSS_PROFIT[2]);
            $("#G6").html(data.TURNOVER_TAX[2]);
            $("#G7").html(data.MANAGE_COST[2]);
            $("#G8").html(data.FINANCIAL_COST[2]);
            $("#G9").html(data.EBITDA[2]);
            $("#G10").html(data.BUSSINESS_INCOME_TAX[2]);
            $("#G11").html(data.NET_CASH_FLOW[2]);


            $("#H3").html(data.ELE_INCOME[3]);
            $("#H4").html(data.GAS_COST[3]);
            $("#H5").html(data.GROSS_PROFIT[3]);
            $("#H6").html(data.TURNOVER_TAX[3]);
            $("#H7").html(data.MANAGE_COST[3]);
            $("#H8").html(data.FINANCIAL_COST[3]);
            $("#H9").html(data.EBITDA[3]);
            $("#H10").html(data.BUSSINESS_INCOME_TAX[3]);
            $("#H11").html(data.NET_CASH_FLOW[3]);


            $("#I3").html(data.ELE_INCOME[4]);
            $("#I4").html(data.GAS_COST[4]);
            $("#I5").html(data.GROSS_PROFIT[4]);
            $("#I6").html(data.TURNOVER_TAX[4]);
            $("#I7").html(data.MANAGE_COST[4]);
            $("#I8").html(data.FINANCIAL_COST[4]);
            $("#I9").html(data.EBITDA[4]);
            $("#I10").html(data.BUSSINESS_INCOME_TAX[4]);
            $("#I11").html(data.NET_CASH_FLOW[4]);
        }
    });

}