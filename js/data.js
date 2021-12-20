const data = new (function DataCollect() {
    var dataCollect = {
        id : undefined,
        SVO: undefined,
        score : 0,
    }

    this.setID = function (id){
        dataCollect.id = id;
    }
    this.setSVO = function (svo){
        dataCollect.SVO = svo;
    }
    this.setScore = function (val){
        dataCollect.score = val;
    }
    this.setData = function (prop,val){
        dataCollect[prop] = val;
    }
    this.sendData = function (){
        //ajax发送到服务器
        $.ajax({
            url: "https://server.yunapps.site:10000/", //请求的URL
            timeout: 5000, //超时时间设置，单位毫秒
            type: 'post', //请求方式，get或post
            data: JSON.stringify(dataCollect), //请求所传参数，json格式
        })
        .fail(function (XMLHttpRequest, status){
            console.log(status, XMLHttpRequest)
            downloadCSV(JSON.stringify(dataCollect),'data','.json');
        })
        .done(function (XMLHttpRequest, status){
            console.log(status, XMLHttpRequest)
        });
        // .always(function (XMLHttpRequest, status){
        //     console.log(status, XMLHttpRequest);
        // });

    }
    
    function genCSVText(){
        var csvText = '';

        csvText += dataCollect['id']+',';
        csvText += dataCollect['SVO']+',';
        csvText += dataCollect['score']+',';

        return csvText;
    }
})();

const svoGains = [
    // self
    [85,85,85,85,85,85,85,85,85],
    [85,87,89,91,93,94,96,98,100],
    [50,54,59,63,68,72,76,81,85],
    [50,54,59,63,68,72,76,81,85],
    [100,94,88,81,75,69,63,56,50],
    [100,98,96,94,93,91,89,87,85],
    // other
    [85,76,68,59,50,41,33,24,15],
    [15,19,24,28,33,37,41,46,50],
    [100,98,96,94,93,91,89,87,85],
    [100,89,79,68,58,47,36,26,15],
    [50,56,63,69,75,81,88,94,100],
    [50,54,59,63,68,72,76,81,85]
];

for (let i = 0; i < 6; i++) {
    $('#svo-row-'+i)[0].innerHTML = '';
    for (let j = 0; j < 9; j++) {
        if (j==4){
            $('#svo-row-'+i)[0].innerHTML += '<div class="selected"><div>'+svoGains[i][j]+'</div><div>'+svoGains[6+i][j]+'</div></div>';
        }else{
            $('#svo-row-'+i)[0].innerHTML += '<div><div>'+svoGains[i][j]+'</div><div>'+svoGains[6+i][j]+'</div></div>';
        }
    }
    $('#svo-row-'+i).children().click(function (){
        $('#svo-row-'+i).children().removeClass('selected');
        $(this).addClass('selected');
    });
}

function downloadCSV(csvText,title="data",type=".csv"){
    let uri = "data:text/csv;charset=utf-8,\ufeff" + encodeURIComponent(csvText);
    var link = document.createElement('a');
    link.href = uri;
    link.download =  title+type;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}