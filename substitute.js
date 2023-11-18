document.getElementById('style1').style.visibility = "hidden";
document.getElementById('style2').style.visibility = "hidden";
document.getElementById('style3').style.visibility = "hidden";

document.getElementById('tanni1').onchange = function () {
    id = document.getElementById('tanni1').value;
    if(id == 'syou') {
        document.getElementById('text1').value = "杯";
    }else if(id == 'dai') {
        document.getElementById('text1').value = "杯";
    }else if(id == 'gram') {
        document.getElementById('text1').value = "g";
    }
}

document.getElementById('calculate').onclick = function () {
    let id1 = document.getElementById('tyoumiryou').value;
    let id2 = document.getElementById('tanni1').value;
    let number = document.getElementById('number1').value;

    if(id1 == 'mirinn'){
        document.getElementById('style1').style.visibility = "";
        document.getElementById('style2').style.visibility = "";

        document.getElementById('text2-1').value = "日本酒";
        document.getElementById('text3-1').value = "砂糖";
         if(id2 == 'syou'){
            document.getElementById('number2').value = number;
            document.getElementById('number3').value = number/3;

            document.getElementById('tanni2').value = "小さじ";
            document.getElementById('tanni3').value = "小さじ";

            document.getElementById('text2-2').value = "杯";
            document.getElementById('text3-2').value = "杯";
        }else if(id2 == 'dai'){
            document.getElementById('number2').value = number;
            document.getElementById('number3').value = number;

            document.getElementById('tanni2').value = "大さじ";
            document.getElementById('tanni3').value = "小さじ";

            document.getElementById('text2-2').value = "杯";
            document.getElementById('text3-2').value = "杯";
        }else if(id2 == 'gram'){
            document.getElementById('number2').value = number;
            document.getElementById('number3').value = number/3;

            document.getElementById('tanni2').value = "グラム";
            document.getElementById('tanni3').value = "グラム";

            document.getElementById('text2-2').value = "g";
            document.getElementById('text3-2').value = "g";
        }
    }else if(id1 == 'ponzu'){
        document.getElementById('style1').style.visibility = "";
        document.getElementById('style2').style.visibility = "";
        document.getElementById('style3').style.visibility = "";

        document.getElementById('text2-1').value = "醤油";
        document.getElementById('text3-1').value = "酢";
        document.getElementById('text4-1').value = "みりん";
        if(id2 == 'syou'){
            document.getElementById('number2').value = number;
            document.getElementById('number3').value = number;
            document.getElementById('number4').value = number/2;

            document.getElementById('tanni2').value = "小さじ";
            document.getElementById('tanni3').value = "小さじ";
            document.getElementById('tanni4').value = "小さじ";

            document.getElementById('text2-2').value = "杯";
            document.getElementById('text3-2').value = "杯";
            document.getElementById('text4-2').value = "杯";
        }else if(id2 == 'dai'){
            document.getElementById('number2').value = number;
            document.getElementById('number3').value = number;
            document.getElementById('number4').value = number/2;

            document.getElementById('tanni2').value = "大さじ";
            document.getElementById('tanni3').value = "大さじ";
            document.getElementById('tanni4').value = "大さじ";

            document.getElementById('text2-2').value = "杯";
            document.getElementById('text3-2').value = "杯";
            document.getElementById('text4-2').value = "杯";
        }else if(id2 == 'gram'){
            document.getElementById('number2').value = number;
            document.getElementById('number3').value = number;
            document.getElementById('number4').value = number/2;

            document.getElementById('tanni2').value = "グラム";
            document.getElementById('tanni3').value = "グラム";
            document.getElementById('tanni4').value = "グラム";

            document.getElementById('text2-2').value = "g";
            document.getElementById('text3-2').value = "g";
            document.getElementById('text4-2').value = "g";
        }
    }
}