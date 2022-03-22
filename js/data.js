const data = new (function DataCollect() {
    var dataObj = {ID: ''};
    
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
        setData: function () {

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
        getCSV: function (dataArr) {
            let text = '';
            let keys = ["ID","SVO"];
            for (let i = 0; i < this.svoSelect.length; i++) {
                keys.push("svo-"+(i+1)+"-self");
                keys.push("svo-"+(i+1)+"-other");
            }
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
                    text += dataArr[j][key];
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
