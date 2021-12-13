const data = new (function DataCollect() {
    var dataCollect = {
        id : undefined,
        gender: undefined,
        SVO: undefined,
        score : 0,
        '1-type': undefined,
        '1-1': undefined,
        '1-2': undefined,
        '1-3': undefined,
        '1-4': undefined,
    }

    this.addScore = function (val){
        dataCollect.score += val;
    }
    this.setID = function (id){
        dataCollect.id = id;
    }
    var set = 1;
    var round = 1;
    this.setData = function (coopRate,waitRate,stopOther,stopSelf){
        if (round==1){
            dataCollect[set+'-type'] = waitRate;
        }
        dataCollect[set+'-'+round] = stopSelf;
        if (++round>20) {
            dataCollect[set+'-coopRate'] = coopRate;
            round = 1;
            set++;
        }
    }
    this.sendData = function (){
        
    }
})();