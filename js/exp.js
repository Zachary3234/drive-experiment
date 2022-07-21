const exp = new (function Experiment() {
    //我方合作率（亲自我、中立、亲社会）
    const coopRateSelf = [0.1, 0.5, 0.9];
    //对方等待概率（亲自我、中立、亲社会）
    const waitRateOther = [0.1, 0.5, 0.9];
    //实验组集合
    var curSet = 0;
    var curRound = 0;
    var coopUser = 0;
    var finalScore = 0;
    var roundsScore = 0;
    var expSets = [];
    for (let i = 0; i < waitRateOther.length; i++) {
        for (let j = 0; j < coopRateSelf.length; j++) {
            expSets.push([coopRateSelf[j], waitRateOther[i]]);
        }
    }
    //实验轮集合
    var expRounds = {
        coop: [],
        wait: [],
    };
    //每组轮数
    var maxRound = 10;
    var preRound = 5; // 预实验轮数
    //等待合作率
    var coopRate = 0.5;
    var waitRate = 0.5;
    //决策
    var stopSelf = true;
    var stopOther = true;
    //结束实验出口
    var nextSetFunc = () => { return true };

    var preFlag = false;
    this.startPreExp = function () {
        preFlag = true;
        // 初始化
        expRounds.wait = [];
        expRounds.coop = [];
        setScore(0);
        setRound(0, preRound);
        // 开始预实验
        nextSetFunc = () => {
            coopRate = coopRateSelf.randomPick();
            waitRate = waitRateOther.randomPick();
            setRounds(coopRate, waitRate, 1);
            // 判断结束预实验
            if (parseInt($('#tip-round-num').text()) >= preRound) {
                endPreExp();
                preFlag = false;
                return true;
            }
            // 重置车辆
            app.setCarType(coopRate, waitRate);
            return false;
        };
        endRound();
        startCut();
    }
    this.startExp = function () {
        // 初始化
        expRounds.wait = [];
        expRounds.coop = [];
        setScore(finalScore);
        expSets.shuffle();
        // 开始实验
        nextSetFunc = () => {
            // 判断结束实验
            if (expSets.length == 0) {
                // 记录数据
                data.setData('总得分', finalScore);
                $('#final-score').text(finalScore);
                // 结束实验
                endExp();
                return true;
            }
            // 设置下一组
            var set = expSets.pop();
            coopRate = set[0];
            waitRate = set[1];
            setRounds(coopRate, waitRate, maxRound);
            // 设置关联界面
            setProgress(++curSet);
            curRound = 0;
            coopUser = 0;
            setRound(0, maxRound);
            resetCut();
            // 重置活动（重置位置和车辆）
            app.reset();
            app.setCarType(coopRate, waitRate);
            // 记录数据
            data.setData(curSet + '-对方等待率', waitRate);
            data.setData(curSet + '-系统合作率', coopRate);
            return false;
        };
        endRound();
    }
    this.redoExp = function (coopRate, waitRate, setScore) {
        $('#skip-btn').removeClass('hidden');
        for (let i = 0; i < expSets.length; i++) {
            if (expSets[i][0] == parseFloat(coopRate) && 
            expSets[i][1] == parseFloat(waitRate)) {
                expSets.splice(i,1);
                break;
            }
        }
        curSet++;
        finalScore += parseFloat(setScore);
    }
    //实验进行时
    var timer = null;
    var timeSec = 0;
    var timeRecord = [];
    this.waitDecision = true;
    this.changeStop = function (stop) {
        stopSelf = stop;
        timeRecord.push({
            stop: stopSelf,
            time: timeSec
        });
        app.setSpeed(2);
    }
    this.startDecision = function () {
        // 开始决策
        this.waitDecision = true;
        app.setSpeed(1);
        toggleDialog(true);
        setDialogBtn(!stopSelf);
        timeSec = 0;
        timeRecord = [];
        timer = setInterval(()=>{
            timeSec += 0.01;
        },10);
    }
    this.endDecision = function () {
        // 结束决策
        this.waitDecision = false;
        app.setSpeed(2);
        clearInterval(timer);
        // 记录数据
        if (~preFlag && curSet > 0) {
            data.setData(curSet + '-' + curRound + '-决策时刻', timeRecord);
        }

        // 结算分数
        var addscore = 0;
        if (!stopSelf && !stopOther) {
            //双方都前进
            addscore = -2;
        }
        else if (stopSelf && stopOther) {
            //双方都等待
            addscore = -1;
        }
        else if (!stopSelf && stopOther) {
            //我方直行，对方等待
            addscore = 2;
        }
        else if (stopSelf && !stopOther) {
            //我方等待，对方转向
            addscore = 0;
        }
        setTimeout(() => {
            toggleDialog(false);
        }, 1500);
        setTimeout(() => {
            addScore(addscore);
        }, 2000);
        setTimeout(() => {
            endRound(); //结束本轮
        }, 3000)

        // 记录数据
        if (~preFlag && curSet > 0) {
            data.setData(curSet + '-' + curRound + '-用户等待', 0+stopSelf);
            data.setData(curSet + '-' + curRound + '-本轮得分', addscore);
            roundsScore += addscore;
            (waitRate > 0.5) ^ stopSelf && coopUser++;
            if (curRound==maxRound){
                data.setData(curSet + '-用户合作率', coopUser / maxRound);
                data.setData(curSet + '-本单元得分', roundsScore);
                finalScore += roundsScore;
                roundsScore = 0;
            }
        }
        setDialogBtn(!stopSelf);
        return {stopSelf, stopOther};
    }

    function endRound() {
        // 画面暂停
        app.pause(true);
        // 设置下一组
        if (expRounds.coop.length == 0 && nextSetFunc()) {
            // 没有剩余的实验组，结束实验
            return;
        }

        // 设置下一轮
        var coop = expRounds.coop.pop();
        var wait = expRounds.wait.pop();
        stopOther = wait;
        // 对方亲社会，我方不等待视为合作
        // 对方亲自我或中立，我方等待视为合作
        stopSelf = waitRate > 0.5 ? !coop : coop;
        curRound++;
        // 记录数据
        if (~preFlag && curSet > 0) {
            data.setData(curSet + '-' + curRound + '-对方等待', 0+stopOther);
            data.setData(curSet + '-' + curRound + '-系统等待', 0+stopSelf);
        }

        // 设置关联界面
        addRound();
        toggleCut(true);
        if ($('#cut-btn').hasClass('hidden'))
            startCut();

        debug && console.log('End round');
    }
    this.startRound = function () {
        // 下次活动（接续上轮己方车辆）
        app.nextMove(0,1);
        // app.nextMove(1,0);
        // 对方换车
        app.changeOther();
        // 画面启动
        app.pause(false);

        // 设置关联界面
        toggleCut(false);
        setDialogBtn();

        debug && console.log('Start round');
    }
    this.setAssess = function (level) {
        data.setData(curSet + '-用户评价',level);
    }

    function setRounds(coopRate, waitRate, nRound) {
        // 设置关联界面
        setType(coopRate, waitRate);

        // 初始化实验轮
        expRounds.wait = [];
        expRounds.coop = [];
        // 计算等待、合作次数，并加入每轮实验决定
        var waitNum = Math.round(waitRate * nRound);
        var coopNum = Math.round(coopRate * nRound);
        for (let i = 0; i < nRound; i++) {
            if (waitNum-- > 0) expRounds.wait.push(1);
            else expRounds.wait.push(0);
            if (coopNum-- > 0) expRounds.coop.push(1);
            else expRounds.coop.push(0);
        }
        // 打乱决定顺序
        expRounds.coop.shuffle();
        expRounds.wait.shuffle();
    }

})();
