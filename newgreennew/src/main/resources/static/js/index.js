
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
