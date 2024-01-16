document.getElementById('text1').src = "home.html";
document.getElementById('style1').style.visibility = "hidden";
document.getElementById('style2').style.visibility = "hidden";
let id=""

document.getElementById('button3-1').onclick = function () {
    document.getElementById('style1').style.visibility = "";
    document.getElementById('style2').style.visibility = "";
    document.getElementById('style2-1').style.visibility = "";
    document.getElementById('text1').src = "ryouri.html";
    document.getElementById('button2-1').value = "単位変換";
    document.getElementById('button2-2').value = "代用計算";
    id=1;
}

document.getElementById('button3-2').onclick = function () {
    document.getElementById('style1').style.visibility = "";
    document.getElementById('style2').style.visibility = "";
    document.getElementById('style2-1').style.visibility = "hidden";
    document.getElementById('text1').src = "calorie.html";
    document.getElementById('button2-1').value = "運動";
    id=2;
}

document.getElementById('button2-1').onclick = function () {
    if(id == 1){
        document.getElementById('text1').src = "converter.html";
    } else if (id == 2) {
        document.getElementById('text1').src = "exercise.html";
    }
}

document.getElementById('button2-2').onclick = function () {
    if(id == 1){
        document.getElementById('text1').src = "substitute.html";
    } else if (id == 2) {
        document.getElementById('text1').src = "yotei.html";
    }
}

document.getElementById('button1').onclick = function () {
    document.getElementById('style1').style.visibility = "hidden";
    document.getElementById('style2').style.visibility = "hidden";
    document.getElementById('text1').src = "home.html";
}