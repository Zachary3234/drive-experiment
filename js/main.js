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
            $('#dialog').removeClass('scale-95 opacity-0 invisible');
        }else{
            $('#dialog').removeClass('scale-100 opacity-100');
            $('#dialog').addClass('scale-95 opacity-0');
            setTimeout(()=>{
                $('#dialog').addClass('invisible');
            },200);
        }
    }else{
        $('#dialog').toggleClass('scale-100 opacity-100');
        $('#dialog').toggleClass('scale-95 opacity-0 invisible');
    }
}

const exp = new (function Experiment() {
    //我方合作率
    var coopRateSelf = [0.1,0.3,0.5,0.7,0.9];
    //对方等待概率（亲社会、个人主义、无信息）
    var waitRateOther = [0.8,0.2,0.5];
    //生成实验组
    var expTable = {
        coopRate:[],
        waitRate:[],
    };
    
    // for (let i = 0; i < coopRateSelf.length; i++) {
    //     var coopRate = coopRateSelf[i];
    //     var waitRate = randomPick(waitRateOther);
    // }
    expTable.coopRate.push(randomPick(coopRateSelf));
    expTable.waitRate.push(randomPick(waitRateOther));

    var stopSelf = true;
    var stopOther = true;
    this.changeStop = function (stop) {
        stopSelf = stop;
    }
    //开始决策
    this.startDecision = function () {
        var coopRate = expTable.coopRate[0];
        var waitRate = expTable.waitRate[0];
        // var coopRate = expTable.coopRate.pop();
        // var waitRate = expTable.waitRate.pop();

        //对方决策
        stopOther = randomDecide(waitRate) ? true : false;
        //我方默认决策
        if (waitRate>0.5){
            //对方亲社会，直行合作
            stopSelf = randomDecide(coopRate) ? false : true;
        }else if(waitRate<0.5){
            //对方个人主义，等待合作
            stopSelf = randomDecide(coopRate) ? true : false;
        }else{//waitRate==0.5
            //无法识别，等待合作
            stopSelf = randomDecide(coopRate) ? true : false;
        }

        // stopSelf = true;
        // stopOther = true;
        // stopSelf = false;
        // stopOther = false;
        stopSelf = randomPick([false,true]);
        stopOther = randomPick([false,true]);
        //决策框控制
        $('#auto-decition-text')[0].innerHTML = stopSelf ? "等待" : "直行";
        toggleDialog(true);
    }

    //结束决策
    this.endDecision = function () {
        stopSelf && app.stopSelf();
        stopOther && app.stopOther();

        if (!stopSelf && !stopOther){
            //双方都前进迫停
            setTimeout(()=>{
                app.stopSelf();
                app.stopOther();
            },500)
            setTimeout(()=>{
                app.reset();
            },2000)
        }
        else if (stopSelf && stopOther){
            //双方都等待
            setTimeout(()=>{
                app.reset();
            },1500)
        }
        else if (!stopSelf && stopOther){
            //我方直行，对方等待
            setTimeout(()=>{
                app.stopOther();
                app.resetOther();
            },2000)
        }
        else if (stopSelf && !stopOther){
            //我方等待，对方转向
            setTimeout(()=>{
                app.stopSelf();
                app.resetOther();
            },2000)
        }

        //决策框控制
        setTimeout(()=>{
            toggleDialog(false);
        }, 1000)
    }
})();