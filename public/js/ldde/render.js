//=============================================================//
//                        INICIALIZAÇÃO                        //
//=============================================================//
const canvas = document.getElementById('ldde');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

//variaveis de posicao e tamanho
//tamanho do canvas
const canvas_h = 570;
const canvas_w = 1100;

var renderBusc = 0;

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
            alert('Encontrou o Nó!');
        }
    }
    document.getElementById('valor').value = "";
}

function organizar(){
    if(ldde.length == 0){
        alert('Não há nenhum Nó!');
    } else {
        moveNos();
    }
}

//=============================================================//
//                        CANVAS                               //
//=============================================================//

function limpaTela(){
    ctx.fillStyle = "#322045"
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

function moveNos(){
    limpaTela();
    if(ldde[0].crd.x !== iniX){
        ldde[0].crd.x = iniX;
    }
    for(var i=1; i<ldde.length; i++){
        ldde[i].crd.x = ldde[i-1].crd.x+distX;
        ldde[i].pAnt.x = ldde[i-1].crd.x;
        ldde[i-1].pPrx.x = ldde[i].crd.x;
    }
    desenhaNos();
}

/*function selectNo(num){
    if(num < tam){
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
    
        if(num == 0){
            ctx.fillText(ldde[num].valor.toString(), ldde[num].crd.x+95, ldde[num].crd.y+55);
            ctx.drawImage(fNo_ps, 0, 0, 220, 100,ldde[num].crd.x, ldde[num].crd.y, 220, 100);
        } else {
            if(ldde[num].pPrx.x == undefined){
                ctx.fillText(ldde[num].valor.toString(), ldde[num].crd.x+103, ldde[num].crd.y+55);
                ctx.drawImage(lastNoS, 0, 0, 220, 100,ldde[num].crd.x, ldde[num].crd.y, 220, 100);
            } else {
                ctx.fillText(ldde[num].valor.toString(), ldde[num].crd.x+100, ldde[num].crd.y+55);
                ctx.drawImage(no_dlS, 0, 0, 230, 100,ldde[num].crd.x, ldde[num].crd.y, 220, 100);
            }
        }
        selectPointer(num);
    }
}

function selectPointer(num){
    ctx.fillStyle = "white";
    console.log(num);
    if(num == 0){
        ctx.drawImage(fNo_pps, 0, 0, 220, 100,ldde[num].crd.x, ldde[num].crd.y, 220, 100);
    } else {
        if(ldde[num].pPrx.x == undefined){
            ctx.drawImage(lastNoPS, 0, 0, 220, 100,ldde[num].crd.x, ldde[num].crd.y, 220, 100);
            ctx.fillText(ldde[num-1].valor.toString(), ldde[num-1].crd.x+95, ldde[num-1].crd.y+55);
        } else {
            ctx.drawImage(no_dlPS, 0, 0, 230, 100,ldde[num].crd.x, ldde[num].crd.y, 220, 100);
            ctx.fillText(ldde[num-1].valor.toString(), ldde[num-1].crd.x+95, ldde[num-1].crd.y+55);
        }
    }
    selectNo(num+1);
}*/

limpaTela();
alert('Utilize a função de organizar para ajustar as posições dos Nós! :)');