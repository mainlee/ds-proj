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

function atualizaNo(no, nCord){
    no.pAnt.x = nCord.x;
    no.pAnt.y = nCord.y;
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
            y: ldde[ant].crd.y
        };
        //cria o No e atualiza o anterior
        criaNo(num, newCord, ldde[ant].crd, {});
        atualizaNoAnt(ldde[ant], newCord);
    }
}

function busca(num){
    //vetor de valores dos Nos
    var busca = ldde.map(function(no){
        return no.valor;
    });
    //Retorna o index do valor encontrado
    return busca.indexOf(num);
}

function remove(num){
    var i = busca(num);

    //Atualização dos 'ponteiros'
    var prxCord = {
        x: ldde[i].pPrx.x,
        y: ldde[i].pPrx.y
    }
    
    var antCord = {
        x: ldde[i].pAnt.x,
        y: ldde[i].pAnt.y
    }

    atualizaNoAnt(ldde[i-1], prxCord);
    atualizaNo(ldde[i+1], antCord);

    //remoção do Nó
    ldde.splice(i,1);    
}