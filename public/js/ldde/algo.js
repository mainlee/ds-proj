const ldde = [];

const cordIni = {
    x: 100,
    y: 50
}

const distX = 250;
const distY = 220;

//Função para criar o No
function criaNo(num, cNo, cAnt, cPrx){
    var no = {
        valor: num,
        crd: cNo,
        pAnt: cAnt,
        pPrx: cPrx
    };

    ldde.push(no);
}

function atualizaNo(cAnt, cPrx){
    
}

function insere(num){
    //Index do anterior
    var i = ldde.length-1;

    //Index do atual
    var len = ldde.length;

    if(ldde.length == 0){
        //Primeiro No
        criaNo(num, cordIni, null ,null);

    } else {
        const nCod = {
            x: ldde[i].crd.x+distX,
            y: ldde[i].crd.y+distY
        }
        //Demais Nos
    }
}