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

const iniX = 100;
const iniY = 250;
const tamNoX = 150;
const tamNoY = 100;
const distX = 180;
const distY = 220;

var renderBusc = 0;

//Controle
var renderControle;
var renderIdx;

//=============================================================//
//                        BOTÕES                               //
//=============================================================//
function guardaNo(){
    var v = document.getElementById('valor').value;
    v = Number(v);  
    if(isNaN(v) || v == ""){
        alert('Apenas é permitido a inserção de números, tente novamente!');
    } else {
        if(insere2(v)){
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
        if(remove2(v)){
            console.log('Teste');
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
        if(buscaBtn(v) == false){
            alert('Nó não encontrado na Lista');
        } else {
            desenhaNosBusca(v);
        }
    }
    document.getElementById('valor').value = "";
}


//=============================================================//
//                        CANVAS                               //
//=============================================================//

function limpaTela(){
    ctx.fillStyle = "#322045"
    ctx.fillRect(0, 0, canvas_w, canvas_h);    
}

function desenhaNos(){
    renderIdx = 0;
    renderControle = primeiro;
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    while(renderControle != null){
        if(renderControle.noAnt == null){
            if(renderControle.noPrx == null){
                ctx.fillText(renderControle.valor.toString(), iniX+95, iniY+55);
                ctx.drawImage(fNo, iniX, iniY);
            } else {
                ctx.fillText(renderControle.valor.toString(), iniX+95, iniY+55);
                ctx.drawImage(fNo_p, iniX, iniY);
            }
        } else {
            if(renderControle.noPrx == null){
                ctx.fillText(renderControle.valor.toString(), iniX+105+renderIdx*distX, iniY+55);
                ctx.drawImage(lastNo, iniX+renderIdx*distX, iniY);
            } else {
                ctx.fillText(renderControle.valor.toString(), iniX+105+renderIdx*distX, iniY+55);
                ctx.drawImage(no_dl, iniX+renderIdx*distX, iniY);
            }
        }
    
        //console.log('Teste');
        renderIdx++;
        renderControle = renderControle.noPrx;
    }

}

function desenhaNosBusca(valor){
    var encontrado = false;
    renderIdx = 0;
    renderControle = primeiro;
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    while(renderControle != null){
        if(renderControle.noAnt == null){
            if(renderControle.noPrx == null){
                if(renderControle.valor == valor){
                    ctx.fillText(renderControle.valor.toString(), iniX+95, iniY+55);
                    ctx.drawImage(fNo_s, iniX, iniY);
                } else {
                    ctx.fillText(renderControle.valor.toString(), iniX+95, iniY+55);
                    ctx.drawImage(fNo_ns, iniX, iniY);
                }
            } else {
                if(renderControle.valor == valor){
                    encontrado = true;
                    ctx.fillText(renderControle.valor.toString(), iniX+95, iniY+55);
                    ctx.drawImage(fNo_ps, iniX, iniY);
                } else {
                    ctx.fillText(renderControle.valor.toString(), iniX+95, iniY+55);
                    ctx.drawImage(fNo_pps, iniX, iniY);
                }
            }
        } else {
            if(renderControle.noPrx == null){
                if(renderControle.valor == valor){
                    encontrado = true;
                    ctx.fillText(renderControle.valor.toString(), iniX+105+renderIdx*distX, iniY+55);
                    ctx.drawImage(lastNoS, iniX+renderIdx*distX, iniY);
                } else {
                    if(encontrado == true){
                        ctx.fillText(renderControle.valor.toString(), iniX+105+renderIdx*distX, iniY+55);
                        ctx.drawImage(lastNo, iniX+renderIdx*distX, iniY);
                    } else {
                        ctx.fillText(renderControle.valor.toString(), iniX+105+renderIdx*distX, iniY+55);
                        ctx.drawImage(lastNoPS, iniX+renderIdx*distX, iniY);
                    }
                }
            } else {
                if(renderControle.valor == valor){
                    encontrado = true;
                    ctx.fillText(renderControle.valor.toString(), iniX+105+renderIdx*distX, iniY+55);
                    ctx.drawImage(no_dlS, iniX+renderIdx*distX, iniY);
                } else {
                    ctx.fillText(renderControle.valor.toString(), iniX+105+renderIdx*distX, iniY+55);
                    ctx.drawImage(no_dlPS, iniX+renderIdx*distX, iniY);
                }
                
            }
        }
    
        renderIdx++;
        renderControle = renderControle.noPrx;
    }

}

limpaTela();