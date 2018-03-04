var jiangpi = ["联想电脑", "小米手机", "500元现金", "200元抵用卷", "美的空调", "海尔冰箱", "一根大肠", "苹果手表"];
timer = null;

function pxh() {
    var pxh1 = document.getElementById("pxh1");
    var play = document.getElementById("play");
    var stop = document.getElementById("stop");
    clearInterval(timer);
    timer = setInterval(
        function() {
            var random = Math.floor(Math.random() * jiangpi.length);
            pxh1.innerHTML = jiangpi[random];
        }, 50)
    play.style.background = "#808080"
}

function dc() {
    clearInterval(timer);
    play.style.background = "#000080"
}