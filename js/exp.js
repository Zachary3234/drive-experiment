const exp = new (function Experiment() {
    //我方合作率（亲自我、中立、亲社会）
    const coopRateSelf = [0.1, 0.5, 0.9];
    //对方等待概率（亲自我、中立、亲社会）
    const waitRateOther = [0.1, 0.5, 0.9];
    //实验组集合
    var curSet = 0;
    var expSets = [];
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

    this.startPreExp = function () {
        // 初始化
        expRounds.wait = [];
        expRounds.coop = [];
        expSets = [];
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
        expSets = [];
        setScore(0);
        for (let i = 0; i < waitRateOther.length; i++) {
            waitRate = waitRateOther[i];
            for (let j = 0; j < coopRateSelf.length; j++) {
                coopRate = coopRateSelf[j];
                expSets.push([coopRate, waitRate]);
            }
        }
        expSets.shuffle();
        setProgress(curSet++, expSets.length);
        // 开始实验
        nextSetFunc = () => {
            var set = expSets.pop();
            coopRate = set[0];
            waitRate = set[1];
            setRounds(coopRate, waitRate, maxRound);
            // 设置关联界面
            setProgress(curSet++);
            setRound(0, maxRound);
            resetCut();
            // 判断结束实验
            if (expSets.length == 0) {
                endExp();
                return true;
            }
            // 重置活动（重置位置和车辆）
            app.reset();
            app.setCarType(coopRate, waitRate);
            return false;
        };
        endRound();
    }
    //实验进行时
    this.waitDecision = true;
    this.changeStop = function (stop) {
        stopSelf = stop;
        app.setSpeed(2);
    }
    this.startDecision = function () {
        // 开始决策
        this.waitDecision = true;
        app.setSpeed(1);
        toggleDialog(true);
        setDialogBtn(!stopSelf);
    }
    this.endDecision = function () {
        // 结束决策
        this.waitDecision = false;
        app.setSpeed(2);

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
        if (curSet > 0) {
            // data.setData(addscore);
            // tag = (waitRateOther.findIndex((e) => waitRate == e) + 1);
            // tag += '-' + (coopRateSelf.findIndex((e) => coopRate == e) + 1);
            // data.setData(tag + '-对方类型', waitRate);
            // data.setData(tag + '-系统合作率', coopRate);
            // data.setData(tag + '-' + round + '-对方', stopOther);
            // data.setData(tag + '-' + round + '-系统', stopSelf);
            // data.setData(tag + '-' + round + '-用户', stopSelf);
            // data.setData(tag + '-' + round + '-得分', addscore);
            // data.setData(tag + '-合作率', coopUser / 10);
        }
        return {stopSelf, stopOther};
    }

    function endRound() {
        // 设置下一组
        if (expRounds.coop.length == 0 && nextSetFunc()) {
            return;
        }

        // 设置下一轮
        var coop = expRounds.coop.pop();
        var wait = expRounds.wait.pop();
        stopOther = wait;
        stopSelf = waitRate > 0.5 ? !coop : coop;

        // 画面暂停
        app.pause(true);
        // 设置关联界面
        addRound();
        toggleCut(true);
        if ($('#cut-btn').hasClass('hidden'))
            startCut();

        debug && console.log('End round');
    }
    this.startRound = function () {
        // 下次活动（接续上轮己方车辆）
        app.nextMove();
        // 对方换车
        app.changeOther();
        // 画面启动
        app.pause(false);

        // 设置关联界面
        toggleCut(false);
        setDialogBtn();

        debug && console.log('Start round');
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
