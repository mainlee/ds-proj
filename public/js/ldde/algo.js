var primeiro = null;
var ultimo = null;

var tam = 0;
var i = 0;
var controle;

function criaNo2(valor, noAnt, noPrx){
    var no = {
        valor: valor,
        noAnt: noAnt,
        noPrx: noPrx
    }
    return no;
}

function varre(no){
    if(no.noPrx == null){
        return ultimo = no;
    }
    varre(no.noPrx);
}

function atualizaPos(no, noAnt, noPrx){
    no.noAnt = noAnt;
    no.noPrx = noPrx;
}

function insere2(valor){
    var no = criaNo2(valor, null, null);
    tam++;

    if(primeiro == null){
        primeiro = no;
        ultimo = primeiro;  
        return true;
    }

    varre(primeiro, primeiro.noPrx);

    atualizaPos(ultimo, ultimo.noAnt, no);
    atualizaPos(no, ultimo, null);
    ultimo = no;
    return true;
}

function busca2(valor, no){
    if(no.valor == valor){
        return controle = no;
    }
    if(no.noPrx == null){
        alert('Valor não encontrado!');
        return false;
    }
    busca2(valor, no.noPrx);
}

function buscaBtn(valor){
    busca2(valor, primeiro);
    if(controle == -1){
        return false;
    }
}

function remove2(valor){
    busca2(valor, primeiro);
    if(controle == -1){
        return false;
    }

    if(controle == primeiro){
        if(controle.noPrx != null){
            atualizaPos(controle.noPrx, null, controle.noPrx.noPrx);
            primeiro = controle.noPrx;
        } else {
            if(ultimo == primeiro){
                ultimo = null;
            }
            primeiro = null;
        }
        
    }
    else if(controle == ultimo){
        atualizaPos(controle.noAnt, controle.noAnt.noAnt, null);
        ultimo = controle.noAnt;

    } else {
        atualizaPos(controle.noAnt, controle.noAnt.noAnt, controle.noPrx);
        atualizaPos(controle.noPrx, controle.noAnt, controle.noPrx.noPrx);
    }

    tam--;
    controle = null;
    return true;
}