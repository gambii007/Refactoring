const fs = require("fs");

class Reader{
    static readJsonFile(path){
        const rawdata = fs.readFileSync(path); //Abre el documento
        //return console.log(JSON.parse(rawdata)); //Regresa una impresion de rwdata
        return JSON.parse(rawdata) //Solo regresa rwdata
    }
}

module.exports = Reader