const exp = new (function Experiment() {
    //我方合作率
    var coopRateSelf = [0.1,0.3,0.5,0.7,0.9];
    var coopRate = 0.5;
    //对方等待概率（个人主义、亲社会、无信息）
    var waitRateOther = [0.2,0.8,0.5];
    var waitRate = 0.5;
    //实验组
    var expSet = [];
    var expTable = {
        coop:[],
        wait:[],
    };
    for (let i = 0; i < waitRateOther.length; i++) {
        waitRate = waitRateOther[i];
        for (let j = 0; j < coopRateSelf.length; j++) {
            coopRate = coopRateSelf[j];
            expSet.push([coopRate,waitRate]);
        }
    }
    
    // 设置实验组
    var set = '';
    var tag = 0;
    var round = 0;
    var coopUser = 0;
    var score = 0;
    this.setTable = function (nRound = 20,_coopRate,_waitRate) {
        if (void 0==_coopRate && void 0==_waitRate){
            var rateSet = randomPop(expSet);
            coopRate = rateSet[0];
            waitRate = rateSet[1];
            //写入数据
            coopUser = 0;
            setProg(set++);
            tag = (waitRateOther.findIndex((e)=>waitRate==e)+1);
            tag += '-'+(coopRateSelf.findIndex((e)=>coopRate==e)+1);
            data.setData(tag+'-对方类型',waitRate);
            data.setData(tag+'-系统合作率',coopRate);
        }else{
            coopRate = void 0==_coopRate ? randomPick(coopRateSelf) : _coopRate;
            waitRate = void 0==_waitRate ? randomPick(waitRateOther) : _waitRate;
        }
        
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

        //写入数据
        if (preExp<=0){
            round = round%20;
            round++;
            data.setData(tag+'-'+round+'-对方',stopOther);
            data.setData(tag+'-'+round+'-系统',stopSelf);
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
        
        //我方合作率
        if (waitRate>0.5){
            //对方亲社会，直行合作
            if (!stopSelf) coopUser++;
        }else if(waitRate<0.5){
            //对方个人主义，等待合作
            if (stopSelf) coopUser++;
        }else{//waitRate==0.5
            //无法识别，等待合作
            if (stopSelf) coopUser++;
        }

        //判断情况
        var addscore = 0;
        var fn = null;
        if (!stopSelf && !stopOther){
            //双方都前进，迫停
            setTimeout(()=>{
                app.stopSelf();
                app.stopOther();
            },600)
            addscore = -2;
            // reset
            fn = ()=>{
                app.setSelf(-20);
                app.setOther();
            }
        }
        else if (stopSelf && stopOther){
            //双方都等待
            addscore = -1;
            // reset
            fn = ()=>{
                app.setSelf(-20);
                app.setOther();
            }
        }
        else if (!stopSelf && stopOther){
            //我方直行，对方等待
            addscore = 2;
            // setTimeout(()=>{
            //     app.stopOther();
            //     app.setOther();
            // },2000)
            // reset
            fn = ()=>{
                app.setSelf(-20);
                app.setOther();
            }
        }
        else if (stopSelf && !stopOther){
            //我方等待，对方转向
            addscore = 0;
            // setTimeout(()=>{
            //     app.stopSelf();
            //     app.setOther();
            // },1800)
            // reset
            fn = ()=>{
                app.setSelf(-20);
                app.setOther();
            }
        }
        
        //写入数据
        if (preExp<=0){
            data.setData(tag+'-'+round+'-用户',stopSelf);
            data.setData(tag+'-'+round+'-得分',addscore);
        }

        //结算分数
        setTimeout(()=>{
            addScore(addscore);
            score += addscore;
            //设置下一轮
            if (preExp>0){
                if (--preExp<=0){
                    //结束预实验
                    // endPreExp();
                    setTimeout(endPreExp,1000);
                    return;
                }
                exp.setTable(1,randomPick(coopRateSelf),randomPick(waitRateOther));
            }else if (expTable.coop.length==0){
                if (expSet.length==0){
                    //结束实验
                    // endExp();
                    setTimeout(()=>{
                        endExp(score);
                    },1000);
                    return;
                }
                //写入数据
                data.setData(tag+'-合作率',coopUser/20);
                //设置下一组
                exp.setTable();
                //换车
                fn = ()=>{
                    app.reset();
                    app.setSelf(30);
                    app.setOther();
                }
            }
            addRound();
            if(fn) toggleCut(1200,fn);
            else toggleCut(1200);
        },2000)

    }
    
    // 设置预实验
    var preExp = 0;
    this.startPreExp = function (nPreExp = 5) {
        preExp = nPreExp;
        setRound(1);
        setScore(0);
        exp.setTable(1,randomPick(coopRateSelf),randomPick(waitRateOther));
        $('#tip-round-tail')[0].innerHTML = '/'+preExp;
        $('#cut-round-tail')[0].innerHTML = '/'+preExp;
    }
    this.startExp = function () {
        preExp = 0;
        set = 1;
        round = 1;
        score = 0;
        setRound(1);
        setScore(0);
        exp.setTable();
        $('#tip-round-tail')[0].innerHTML = '/20';
        $('#cut-round-tail')[0].innerHTML = '/20';
    }
})();
