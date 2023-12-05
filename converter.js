document.getElementById('tanni').onchange = function () {
    let id = document.getElementById('tanni').value;
    if(id == 'syou') {
        document.getElementById('text1').value = "杯";
    }else if(id == 'dai') {
        document.getElementById('text1').value = "杯";
    }else if(id == 'gram') {
        document.getElementById('text1').value = "g";
    } 
}

document.getElementById('calculate').onclick = function () {
    let number1 = parseFloat(document.getElementById('number1').value);

    let id1 = document.getElementById('tyoumiryou').value;
    let id2 = document.getElementById('tanni').value;
    
    if(id1 == 'syokuen'){
        if(id2 == 'syou'){
            result = 6*number1;
            document.getElementById('text3').value = "g";
        }else if(id2 == 'dai'){
            result = 18*number1;
            document.getElementById('text3').value = "g";
        }else if(id2 == 'gram'){
            result = number1/6;
            document.getElementById('text3').value = "杯";
        }
    }else if(id1 == 'satou'){
        if(id2 == 'syou'){
            result = 3*number1;
            document.getElementById('text3').value = "g";
        }else if(id2 == 'dai'){
            result = 9*number1;
            document.getElementById('text3').value = "g";
        }else if(id2 == 'gram'){
            result = number1/3;
            document.getElementById('text3').value = "杯";
        }
    }

    document.getElementById('number2').value = result;

    let id = document.getElementById('tanni').value;
    if(id == 'syou'){
        document.getElementById('text2').value = "グラム";
    }else if(id == 'dai'){
        document.getElementById('text2').value = "グラム";
    }else if(id == 'gram'){
        document.getElementById('text2').value = "小さじ";
    }
}