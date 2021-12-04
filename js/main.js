const debug = true;

document.getElementById('speed').value = app.control.maxSpeed;
document.getElementById('carSpeed').innerHTML = app.control.maxSpeed;
function speedchange() {
    var value = document.getElementById('speed').value;
    document.getElementById('carSpeed').innerHTML = value;
    app.setSpeed(value);
}
document.getElementById('height').value = app.control.maxHeight;
document.getElementById('camHeight').innerHTML = app.control.maxHeight;
function heightchange() {
    var value = document.getElementById('height').value;
    document.getElementById('camHeight').innerHTML = value;
    app.setHeight(value);
}

function toggleDialog(open) {
    if (void 0 != open){
        if (open){
            $('#dialog').addClass('scale-100 opacity-100');
            $('#dialog').removeClass('scale-95 opacity-0');
        }else{
            $('#dialog').removeClass('scale-100 opacity-100');
            $('#dialog').addClass('scale-95 opacity-0');
        }
    }else{
        $('#dialog').toggleClass('scale-100 opacity-100');
        $('#dialog').toggleClass('scale-95 opacity-0');
    }
}

//我方合作率
var coopRateSelf = [0.1,0.3,0.5,0.7,0.9];
//对方等待概率（亲社会、个人主义、无信息）
var waitRateOther = [0.8,0.2,0.5];

//开始决策
function startDecision() {

}
//结束决策
function endDecision() {
    
}