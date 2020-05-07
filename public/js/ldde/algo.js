const ldde = [];

const cordIni = {
    x: 100,
    y: 50
}

const tamNoX = 110;
const tamNoY = 100;
const distX = 250;
const distY = 220;

//Função para criar o No
function criaNo(num, cNo, cAnt, cPrx){
    var no = {
        valor: num,
        //Coordenadas do NO
        crd: cNo,
        //Coord. dos ponteiros
        pAnt: cAnt,
        pPrx: cPrx,
    };

    ldde.push(no);
}

//Atualiza posição do No anterior
function atualizaNoAnt(no, nCord){
        no.pPrx.x = nCord.x;
        no.pPrx.y = nCord.y;
}


function insere(num){
    var ant = ldde.length-1;
    var tam = ldde.length;

    //Caso nao haja No
    if(tam == 0){
        criaNo(num, cordIni, {}, {})
    } else {
        var newCord = {
            x: ldde[ant].crd.x+distX,
            y: ldde[ant].crd
        };
        criaNo(num, newCord, ldde[ant].crd, {});
        atualizaNoAnt(ldde[ant], newCord);
    }
}

function busca(num){
    
}

function remove(num){
    ldde.splice(ldde.indexOf());

}