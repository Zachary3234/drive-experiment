const data = new (function DataCollect() {
    var dataObj = {ID: ''};
    var keys = ["ID","SVO"];
    for (let i = 0; i < 6; i++) {
        keys.push("svo-"+(i+1)+"-self");
        keys.push("svo-"+(i+1)+"-other");
    }
    keys.push('总得分');
    for (let iSet = 1; iSet <= 9; iSet++) {
        keys.push(iSet + '-对方等待率');
        keys.push(iSet + '-系统合作率');
        keys.push(iSet + '-用户合作率');
        keys.push(iSet + '-本单元得分');
        for (let iRound = 1; iRound <= 10; iRound++) {
            keys.push(iSet + '-' + iRound + '-对方等待');
            keys.push(iSet + '-' + iRound + '-系统等待');
            keys.push(iSet + '-' + iRound + '-用户等待');
            keys.push(iSet + '-' + iRound + '-本轮得分');
            keys.push(iSet + '-' + iRound + '-决策时刻');
        }
    }
    
    return {
        svoSelect: [4, 4, 4, 4, 4, 4],
        svoGains: [
            // self
            [85, 85, 85, 85, 85, 85, 85, 85, 85],
            [85, 87, 89, 91, 93, 94, 96, 98, 100],
            [50, 54, 59, 63, 68, 72, 76, 81, 85],
            [50, 54, 59, 63, 68, 72, 76, 81, 85],
            [100, 94, 88, 81, 75, 69, 63, 56, 50],
            [100, 98, 96, 94, 93, 91, 89, 87, 85],
            // other
            [85, 76, 68, 59, 50, 41, 33, 24, 15],
            [15, 19, 24, 28, 33, 37, 41, 46, 50],
            [100, 98, 96, 94, 93, 91, 89, 87, 85],
            [100, 89, 79, 68, 58, 47, 36, 26, 15],
            [50, 56, 63, 69, 75, 81, 88, 94, 100],
            [50, 54, 59, 63, 68, 72, 76, 81, 85]
        ],
        setID: function (id) {
            dataObj.ID = id;
            debug && console.log('Set ID:', dataObj.ID);
        },
        setData: function (key,val) {
            dataObj[key] = val;
        },
        getData: function () {
            dataObj["SVO"] = calcSVO(this.svoGains, this.svoSelect).toFixed(2);
            let selfGain;
            let otherGain;
            for (let i = 0; i < this.svoSelect.length; i++) {
                selfGain = this.svoGains[i][this.svoSelect[i]];
                otherGain = this.svoGains[6+i][this.svoSelect[i]];
                dataObj["svo-"+(i+1)+"-self"] = selfGain;
                dataObj["svo-"+(i+1)+"-other"] = otherGain;
            }
            return dataObj;
        },
        redoData: function (obj) {
            if (obj != undefined) {
                // delete obj._id;
                dataObj = obj;
                console.log(dataObj);
                for (let i = 0; i < this.svoSelect.length; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (dataObj["svo-"+(i+1)+"-self"] == this.svoGains[i][j]
                        && dataObj["svo-"+(i+1)+"-other"] == this.svoGains[6+i][j]){
                            $('#svo-row-' + i).children()[j].click();
                        }
                    }
                }
                let check = 0;
                for (let iSet = 1; iSet <= 9; iSet++) {
                    check += dataObj[iSet + '-对方等待率']===undefined;
                    check += dataObj[iSet + '-系统合作率']===undefined;
                    check += dataObj[iSet + '-用户合作率']===undefined;
                    check += dataObj[iSet + '-本单元得分']===undefined;
                    for (let iRound = 1; iRound <= 10; iRound++) {
                        check += dataObj[iSet + '-' + iRound + '-对方等待']===undefined;
                        check += dataObj[iSet + '-' + iRound + '-系统等待']===undefined;
                        check += dataObj[iSet + '-' + iRound + '-用户等待']===undefined;
                        check += dataObj[iSet + '-' + iRound + '-本轮得分']===undefined;
                        check += dataObj[iSet + '-' + iRound + '-决策时刻']===undefined;
                    }
                    if (check==0) {
                        exp.redoExp(dataObj[iSet + '-系统合作率'],dataObj[iSet + '-对方等待率'],dataObj[iSet + '-本单元得分']);
                    }
                    else
                        break;
                }
            }
        },
        getCSV: function (dataArr) {
            let text = '';
            for (let i = 0; i < keys.length; i++) {
                const key = keys[i];
                text += key;
                if (i < keys.length-1)
                    text += ',';
                else
                    text += '\r\n';
            }
            for (let j = 0; j < dataArr.length; j++) {
                for (let i = 0; i < keys.length; i++) {
                    const key = keys[i];
                    var str = JSON.stringify(dataArr[j][key]);
                    str && (str = str.replace(/,/g,';'));
                    text += str;
                    if (i < keys.length-1)
                        text += ',';
                    else
                        text += '\r\n';
                }
            }
            let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(text);
            let link = document.createElement('a');
            link.href = uri;
            link.download = "data.csv";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
})();
