const fs = require('fs');
const path = require('path');

const loaddata = () => {
    let filebuffer = Buffer.from(fs.readFileSync(__dirname + "/active_programs.json"));
    let file = filebuffer.toString('utf-8');
    let object_final = JSON.parse(file).programs;

    var arr = [];
    var numActive = 0;
    for (let i = 0; i < object_final.length; i++) {
        arr.push(object_final[i].name + '\n');
        numActive++;
    }
    return arr;
};

const writefile = async () => {
    let data = await loaddata();
    fs.writeFileSync(__dirname + "/programs_active.json", data, 'utf-8');
}

writefile();



/*
.filter(function (i, n) {
        return n.activation === 'Active';
    });

Console.log(finalArray);*/