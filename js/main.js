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
function coopchange() {
    var value = document.getElementById('coop').value;
    document.getElementById('coopRate').innerHTML = value;
    // app.setHeight(value);
}
function waitchange() {
    var value = document.getElementById('wait').value;
    document.getElementById('waitRate').innerHTML = value;
    // app.setHeight(value);
}
function setexp() {
    exp.setExp(parseFloat(document.getElementById('coop').value),parseFloat(document.getElementById('wait').value));
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
    var coopRate = 0.5;
    //对方等待概率（亲社会、个人主义、无信息）
    var waitRateOther = [0.8,0.2,0.5];
    var waitRate = 0.5;
    //实验组
    var expTable = {
        coop:[],
        wait:[],
    };
    
    // 设置实验组
    this.setExp = function (coopRateIndex,waitRateIndex) {
        waitRate = waitRateIndex;
        coopRate = coopRateIndex;
        // waitRate = waitRateOther[waitRateIndex];
        // coopRate = coopRateSelf[coopRateIndex];
        var waitNum = Math.round(waitRate*20);
        var coopNum = Math.round(coopRate*20);
        expTable.wait = [];
        expTable.coop = [];
        for (let i = 0; i < 20; i++) {
            if (waitNum-- > 0) expTable.wait.push(1);
            else expTable.wait.push(0);
            if (coopNum-- > 0) expTable.coop.push(1);
            else expTable.coop.push(0);
        }
    }

    var stopSelf = true;
    var stopOther = true;
    this.changeStop = function (stop) {
        stopSelf = stop;
    }
    //开始决策
    this.startDecision = function () {
        if (expTable.coop.length==0){
            setexp();
        }
        var coop = randomPop(expTable.coop);
        var wait = randomPop(expTable.wait);

        //对方决策
        stopOther = wait ? true : false;
        $('#exp')[0].innerHTML = wait ? "对方等待<br>" : "对方转向<br>";
        $('#exp')[0].innerHTML += coop ? "我方合作" : "我方不合作";
        //我方默认决策
        if (waitRate>0.5){
            //对方亲社会，直行合作
            stopSelf = coop ? false : true;
            // app.setOther(true);
        }else if(waitRate<0.5){
            //对方个人主义，等待合作
            stopSelf = coop ? true : false;
            // app.setOther(false);
        }else{//waitRate==0.5
            //无法识别，等待合作
            stopSelf = coop ? true : false;
        }

        // stopSelf = true;
        // stopOther = true;
        // stopSelf = false;
        // stopOther = false;
        // stopSelf = randomPick([false,true]);
        // stopOther = randomPick([false,true]);
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
            $('#exp')[0].innerHTML = "";
        }, 1000)
    }
})();