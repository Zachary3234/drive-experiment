const exp = new (function Experiment() {
    debug && console.log('Import exp');

    //我方合作率（亲自我、中立、亲社会）
    const coopRateSelf = [0.1,0.5,0.9];
    //对方等待概率（亲自我、中立、亲社会）
    const waitRateOther = [0.1,0.5,0.9];
    //实验组集合
    var expSets = [];
    //实验轮集合
    var expRounds = {
        coop:[],
        wait:[],
    };
    //决策
    var stopSelf = true;
    var stopOther = true;
    //结束实验出口
    var endExpFunc = ()=>{};
    //外部引用
    this.waitDecision = true;

    this.changeStop = function (stop) {
        stopSelf = stop;
        debug && console.log('Change stopSelf:', stopSelf);
    }
    this.startPreExp = function () {
        // 初始化
        expRounds.wait = [];
        expRounds.coop = [];
        expSets = [];
        setRounds(coopRateSelf.randomPick(),waitRateOther.randomPick(),5);
        // 开始预实验
        startCut(); //startSet()
    }
    this.startExp = function () {
        // 初始化
        expRounds.wait = [];
        expRounds.coop = [];
        expSets = [];
        for (let i = 0; i < waitRateOther.length; i++) {
            var waitRate = waitRateOther[i];
            for (let j = 0; j < coopRateSelf.length; j++) {
                var coopRate = coopRateSelf[j];
                expSets.push([coopRate,waitRate]);
            }
        }
        expSets.shuffle();
        setProgress(1,expSets.length);
        // 开始实验
        endExpFunc = endExp;
        this.startSet = nextRound;
    }
    this.startSet = function () {
        setTimeout(()=>{
            toggleCut(false);
        },1000);
    }
    

    function nextRound() {
        if (expRounds.coop.length == 0) {
            if (expSets.length == 0) {
                //结束实验
                endExpFunc();
                return;
            }
            else {
                //设置下一组
                var set = expSets.pop();
                setRounds(set[0],set[1]);
            }
        }
        // toggleCut(true);
        // setTimeout(()=>{
        //     toggleCut(false);
        // },1500);
        console.log('nextRound');
    }
    
    function setRounds(coopRate,waitRate,maxRound = 10) {
        // 设置关联界面
        setRound(1, maxRound);
        setType(coopRate, waitRate);
        // resetCut();
        
        // 初始化实验轮
        expRounds.wait = [];
        expRounds.coop = [];
        // 计算等待、合作次数，并加入每轮实验决定
        var waitNum = Math.round(waitRate*maxRound);
        var coopNum = Math.round(coopRate*maxRound);
        for (let i = 0; i < maxRound; i++) {
            if (waitNum-- > 0) expRounds.wait.push(1);
            else expRounds.wait.push(0);
            if (coopNum-- > 0) expRounds.coop.push(1);
            else expRounds.coop.push(0);
        }
        // 打乱决定顺序
        expRounds.coop.shuffle();
        expRounds.wait.shuffle();
    }
    //每轮实验
    function startRound() {
        if (expRounds.coop.length <= 0) return;
        var coop = expRounds.coop.pop();
        var wait = expRounds.wait.pop();
        setType
    }

    return;
    // 设置实验组
    var set = '';
    var tag = 0;
    var round = 0;
    var coopUser = 0;
    var score = 0;
    this.setTable = function (nRound = 10,_coopRate,_waitRate) {
        if (void 0==_coopRate && void 0==_waitRate){
            var rateSet = randomPop(expSets);
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
        
        if (coopRate>0.5){
            //亲社会
            app.setSelfType(1);
            $('#tip-self').text('亲社会');
            $('#tip-self').removeClass();
            $('#tip-self').addClass('my-auto text-green-400');
            $('#cut-set-self').text('亲社会');
            $('#cut-set-self').removeClass();
            $('#cut-set-self').addClass('text-green-400');
        }else if(coopRate<0.5){
            //亲自我
            app.setSelfType(2);
            $('#tip-self').text('亲自我');
            $('#tip-self').removeClass();
            $('#tip-self').addClass('my-auto text-red-400');
            $('#cut-set-self').text('亲自我');
            $('#cut-set-self').removeClass();
            $('#cut-set-self').addClass('text-red-400');
        }else{//coopRate==0.5
            //中立
            app.setSelfType(0);
            $('#tip-self').text('中立');
            $('#tip-self').removeClass();
            $('#tip-self').addClass('my-auto');
            $('#cut-set-self').text('中立');
            $('#cut-set-self').removeClass();
        }
        if (waitRate>0.5){
            //对方亲社会
            app.setOtherType(1);
            $('#tip-other').text('亲社会');
            $('#tip-other').removeClass();
            $('#tip-other').addClass('my-auto text-green-400');
            $('#cut-set-other').text('亲社会');
            $('#cut-set-other').removeClass();
            $('#cut-set-other').addClass('text-green-400');
        }else if(waitRate<0.5){
            //对方亲自我
            app.setOtherType(2);
            $('#tip-other').text('亲自我');
            $('#tip-other').removeClass();
            $('#tip-other').addClass('my-auto text-red-400');
            $('#cut-set-other').text('亲自我');
            $('#cut-set-other').removeClass();
            $('#cut-set-other').addClass('text-red-400');
        }else{//waitRate==0.5
            //对方中立
            app.setOtherType(0);
            $('#tip-other').text('中立');
            $('#tip-other').removeClass();
            $('#tip-other').addClass('my-auto');
            $('#cut-set-other').text('中立');
            $('#cut-set-other').removeClass();
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

        if (nRound != 1){
            $('#cut-set').toggleClass('opacity-0 opacity-100'); // 显示组间说明
            app.pause(); // 暂停
        }
    }

    var stopSelf = true;
    var stopOther = true;
    this.waitDecision = false;
    this.changeStop = function (stop) {
        stopSelf = stop;
        app.setSpeed(2);
    }
    //开始决策
    this.startDecision = function () {
        this.waitDecision = true;
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
            round = round % 10;
            round++;
            data.setData(tag+'-'+round+'-对方',stopOther);
            data.setData(tag+'-'+round+'-系统',stopSelf);
        }

        //决策框控制
        // $('#auto-decition-text')[0].innerHTML = stopSelf ? "等待" : "直行";
        if (stopSelf){
            clickWait();
        }else{
            clickMove();
        }
        toggleDialog(true);
    }
    //结束决策
    this.endDecision = function () {
        this.waitDecision = false;
        //决策框控制
        toggleSign();
        setTimeout(()=>{
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
        if (!stopSelf && !stopOther){
            //双方都前进，迫停
            addscore = -2;
        }
        else if (stopSelf && stopOther){
            //双方都等待
            addscore = -1;
        }
        else if (!stopSelf && stopOther){
            //我方直行，对方等待
            addscore = 2;
        }
        else if (stopSelf && !stopOther){
            //我方等待，对方转向
            addscore = 0;
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
                toggleCut(1200,()=>{
                    app.reset();
                    app.setSelf(-20);
                    app.setOther();
                });
            }else if (expTable.coop.length==0){
                // console.log(expTable.coop);
                if (expSets.length==0){
                    //结束实验
                    // endExp();
                    setTimeout(()=>{
                        endExp(score);
                    },1000);
                    return;
                }
                //写入数据
                data.setData(tag+'-合作率',coopUser/10);
                //设置下一组
                exp.setTable();
            }
            else{
                toggleCut(1200,()=>{
                    app.setSelf(-20);
                    app.setOther();
                });
            }
            addRound();
        },2000)

        return {stopSelf,stopOther};
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
        app.reset();
        app.setSelf(40);
        app.setOther();
        app.pause();
    }
    this.startExp = function () {
        preExp = 0;
        set = 1;
        round = 1;
        score = 0;
        setRound(1);
        setScore(0);
        exp.setTable();
        $('#tip-round-tail')[0].innerHTML = '/10';
        $('#cut-round-tail')[0].innerHTML = '/10';
        app.pause();
    }
})();
