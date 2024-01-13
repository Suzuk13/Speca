document.getElementById('calculate').onclick = function () {
    let id1 = document.getElementById('exercise').value;
    let hour = document.getElementById('hour').value; 
    let weight = document.getElementById('weight').value;

    if(id1 == '1') {
        document.getElementById('number1').value =1*weight*hour;
    }else if(id1 == '2') {
        document.getElementById('number1').value =7.3*weight*hour;
    }
}