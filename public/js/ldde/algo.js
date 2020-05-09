//=================================================================//
//                            ALGORITMO                            //
//=================================================================//

var ldde = [];

const tamNoX = 150;
const tamNoY = 100;
const distX = 180;
const distY = 220;

var tam, ant;

//Função para criar o No
function criaNo(num, cNo, cAnt, cPrx){
    var no = {
        valor: num,
        //Coordenadas do No
        crd: cNo,
        //Coord. dos outros Nos
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

function atualizaDados(){
    ant = ldde.length-1;
    tam = ldde.length;
}

function insere(num){
    atualizaDados();
    //Caso nao haja No
    if(tam == 0){
        criaNo(num, cordIni, {}, {})
    } 
    else if(tam >= 5){
        alert("Memória cheia! Favor remover algum Nó!");
        return false;
    }  else {
        var newCord = {
            x: ldde[ant].crd.x+distX,
            y: ldde[ant].crd.y
        };
        //cria o No e atualiza o anterior
        criaNo(num, newCord, ldde[ant].crd, {});
        atualizaNoAnt(ldde[ant], newCord);
    }
    return true;
}

function busca(num){
    atualizaDados();

    //vetor de valores dos Nos
    var busca = ldde.map(function(no){
        return no.valor;
    });
    //Retorna o index do valor encontrado
    return busca.indexOf(num);
}

function remove(num){
    var i = busca(num);
    //Não há Nó
    if(i == -1){
        alert('Este Nó não existe na lista!')
        return false;
    }

    //Caso seja o primeiro Nó
    if(i == 0){
        if(ldde[i+1] == undefined){
            //Não há nó para atualizar
        } else {
            atualizaNo(ldde[i+1], {});
        }
    }

    //Caso seja o ultimo Nó
    else if (i == ant) {
        atualizaNoAnt(ldde[i-1], {});
    }

    else {
        //Atualização dos outros Nos
        var prxCord = {
            x: ldde[i].pPrx.x,
            y: ldde[i].pPrx.y
        }
        
        var antCord = {
            x: ldde[i].pAnt.x,
            y: ldde[i].pAnt.y
        }  
        
        //Atualiza o Nó anterior com a Coord do prx Nó do Nó removido
        atualizaNoAnt(ldde[i-1], prxCord);
    
        //Atualiza o Nó seguinte com a Coord do Nó anterior do removido
        atualizaNo(ldde[i+1], antCord);
    }

    //remoção do Nó
    ldde.splice(i,1); 
    alert('Nó removido!');
    return true;   
}