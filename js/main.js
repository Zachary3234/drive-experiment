const exp = new (function Experiment() {
    var score = 0;
    var round = 1;
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
    this.setExp = function (nRound = 20,_coopRate,_waitRate) {
        coopRate = void 0==_coopRate ? randomPop(coopRateSelf) : _coopRate;
        waitRate = void 0==_waitRate ? randomPop(waitRateOther) : _waitRate;
        if (coopRate==undefined) return false;
        
        if (waitRate>0.5){
            //对方亲社会
            $('#tip-social').removeClass('hidden');
            $('#tip-self').addClass('hidden');
            $('#tip-none').addClass('hidden');
        }else if(waitRate<0.5){
            //对方亲自我
            $('#tip-self').removeClass('hidden');
            $('#tip-social').addClass('hidden');
            $('#tip-none').addClass('hidden');
        }else{//waitRate==0.5
            //对方无倾向
            $('#tip-none').removeClass('hidden');
            $('#tip-social').addClass('hidden');
            $('#tip-self').addClass('hidden');
        }

        var waitNum = Math.round(waitRate*nRound);
        var coopNum = Math.round(coopRate*nRound);
        expTable.wait = [];
        expTable.coop = [];
        for (let i = 0; i < nRound; i++) {
            if (waitNum-- > 0) expTable.wait.push(1);
            else expTable.wait.push(0);
            if (coopNum-- > 0) expTable.coop.push(1);
            else expTable.coop.push(0);
        }
        return true;
    }

    var stopSelf = true;
    var stopOther = true;
    this.changeStop = function (stop) {
        stopSelf = stop;
    }
    //开始决策
    this.startDecision = function () {
        var coop = randomPop(expTable.coop);
        var wait = randomPop(expTable.wait);

        //对方决策
        stopOther = wait ? true : false;
        //我方默认决策
        if (waitRate>0.5){
            //对方亲社会，直行合作
            stopSelf = coop ? false : true;
        }else if(waitRate<0.5){
            //对方个人主义，等待合作
            stopSelf = coop ? true : false;
        }else{//waitRate==0.5
            //无法识别，等待合作
            stopSelf = coop ? true : false;
        }

        //决策框控制
        $('#auto-decition-text')[0].innerHTML = stopSelf ? "等待" : "直行";
        if (stopSelf){
            clickWait();
        }else{
            clickMove();
        }
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
            },600)
            setTimeout(()=>{
                nextRound(-2);
                setTimeout(()=>{
                    app.reset(50,true);
                },200);
            },2000)
        }
        else if (stopSelf && stopOther){
            //双方都等待
            setTimeout(()=>{
                nextRound(-1);
                setTimeout(()=>{
                    app.reset(40,true);
                },200);
            },2000)
        }
        else if (!stopSelf && stopOther){
            //我方直行，对方等待
            setTimeout(()=>{
                app.stopOther();
                nextRound(2);
                setTimeout(()=>{
                    app.resetOther();
                },200);
            },2000)
        }
        else if (stopSelf && !stopOther){
            //我方等待，对方转向
            setTimeout(()=>{
                nextRound(0);
                setTimeout(()=>{
                    app.resetOther();
                },200);
            },2000)
            setTimeout(()=>{
                app.stopSelf();
            },1700)
        }

        //决策框控制
        toggleSign();
        $("#move-btn").attr({"disabled":"true"});
        $("#wait-btn").attr({"disabled":"true"});
        $("#move-btn").toggleClass('hover:bg-blue-200');
        $("#wait-btn").toggleClass('hover:bg-blue-200');
        $(".btn-doing").toggleClass('hidden');
        $(".btn-done").toggleClass('hidden');
        setTimeout(()=>{
            setTimeout(()=>{
                toggleSign();
                $("#move-btn").removeAttr("disabled");
                $("#wait-btn").removeAttr("disabled");
                $("#move-btn").toggleClass('hover:bg-blue-200');
                $("#wait-btn").toggleClass('hover:bg-blue-200');
                $(".btn-doing").toggleClass('hidden');
                $(".btn-done").toggleClass('hidden');
            },200)
            toggleDialog(false);
        },1500)
    }
    //设置下一轮
    function nextRound(score) {
        if (preExp>0){
            if (--preExp<=0){
                app.pause();
                setRound(1);
                setScore(0);
                exp.setExp();
                $('#tip-round-tail')[0].innerHTML = '/20';
                $('#cut-round-tail')[0].innerHTML = '/20';
                togglePage(5);
            }else{
                addRound();
                addScore(score);
                toggleCut(1200);
                exp.setExp(1,randomPick(coopRateSelf),randomPick(waitRateOther));
            }
        }else{
            addRound();
            addScore(score);
            toggleCut(1200);
            //设置下一组
            if (expTable.coop.length==0){
                if(!exp.setExp()){
                    app.pause();
                }
            }
        }
    }
    // 设置预实验
    var preExp = 0;
    this.startPreExp = function () {
        preExp = 5;
        setRound(1);
        setScore(0);
        $('#tip-round-tail')[0].innerHTML = '/'+preExp;
        $('#cut-round-tail')[0].innerHTML = '/'+preExp;
    }
})();
