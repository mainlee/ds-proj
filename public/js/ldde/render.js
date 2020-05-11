//=============================================================//
//                        INICIALIZAÇÃO                        //
//=============================================================//
const canvas = document.getElementById('ldde');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

//variaveis de posicao e tamanho
//tamanho do canvas
const canvas_h = 619;
const canvas_w = 1100;

//=============================================================//
//                        BOTÕES                               //
//=============================================================//
function guardaNo(){
    var v = document.getElementById('valor').value;
    v = Number(v);  
    if(isNaN(v) || v == ""){
        alert('Apenas é permitido a inserção de números, tente novamente!');
    } else {
        if(insere(v)){
            limpaTela();
            desenhaNos();
        }
    }
    //Limpa campo de inserção
    document.getElementById('valor').value = "";
}

function removeNo(){
    var v = document.getElementById('valor').value;
    v = Number(v);  
    if(isNaN(v) || v == ""){
        alert('Apenas é permitido a inserção de números, tente novamente!');
    } else {
        if(remove(v)){
            limpaTela();
            desenhaNos();
        }
    }
    document.getElementById('valor').value = "";
}

function buscaNo() {
    var v = document.getElementById('valor').value;
    v = Number(v);  
    if(isNaN(v) || v == ""){
        alert('Apenas é permitido a inserção de números, tente novamente!');
    } else {
        if(busca(v) == -1){
            alert('Nó não encontrado na Lista');
        } else {
            alert('Encontrou o Nó');
        }
    }
}

//=============================================================//
//                        CANVAS                               //
//=============================================================//

function limpaTela(){
    ctx.fillStyle = "#667eea"
    ctx.fillRect(0, 0, canvas_w, canvas_h);    
}

function desenhaNos(){
    atualizaDados();
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    for(i in ldde){
        if(i == 0){
            if(ldde[i].pPrx.x === undefined){
                ctx.fillText(ldde[i].valor.toString(), ldde[i].crd.x+95, ldde[i].crd.y+55);
                ctx.drawImage(fNo, 0, 0, 220, 100,ldde[i].crd.x, ldde[i].crd.y, 220, 100);
            } else {
                ctx.fillText(ldde[i].valor.toString(), ldde[i].crd.x+95, ldde[i].crd.y+55);
                ctx.drawImage(fNo_p, 0, 0, 220, 100,ldde[i].crd.x, ldde[i].crd.y, 220, 100);
            }
        } else {
            if(i == ant){
                ctx.fillText(ldde[i].valor.toString(), ldde[i].crd.x+103, ldde[i].crd.y+55);
                ctx.drawImage(lastNo, 0, 0, 220, 100,ldde[i].crd.x, ldde[i].crd.y, 220, 100);
            }
            else {
                ctx.fillText(ldde[i].valor.toString(), ldde[i].crd.x+100, ldde[i].crd.y+55);
                ctx.drawImage(no_dl, 0, 0, 230, 100,ldde[i].crd.x, ldde[i].crd.y, 220, 100);
            }
        }
    }
}

limpaTela();