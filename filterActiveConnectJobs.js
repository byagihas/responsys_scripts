const fs = require('fs');
const path = require('path');

const loaddata = () => {
    let filebuffer = Buffer.from(fs.readFileSync(__dirname + "/hotwireconnectjobs.json"));
    let file = filebuffer.toString('utf-8');
    let pipe_delimit = file.split(",{").join('|{');
    let object_final = pipe_delimit.split("|");

    var arr = [];
    var numActive = 0;
    for (let i = 0; i < object_final.length; i++) {
        if(JSON.parse(object_final[i]).nextRun.length != 0) {
            arr.push(JSON.parse(object_final[i]).connectSubTypeDisplayValue + '\n');
            numActive++;
        }
    }
    return arr;
};

const writefile = async () => {
    let data = await loaddata();
    fs.appendFileSync(__dirname + "/connectjobs_active.json", data, 'utf-8');
}

writefile();



/*
.filter(function (i, n) {
        return n.activation === 'Active';
    });

Console.log(finalArray);*/