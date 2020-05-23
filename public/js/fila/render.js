//=============================================================//
//                        INICIALIZAÇÃO                        //
//=============================================================//
const canvas = document.getElementById('fila');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

//variaveis de posicao e tamanho
//tamanho do canvas
const canvas_h = 570;
const canvas_w = 1100;

//Variavel de tamanho do vetor
var tamanho;

//Radio da circunferência
var radius = 250;
var center_x = 500;
var center_y = 310;

function loop(){
    limpaTela();
    renderFila();
    desenhaNumero();
}

//==============================================================================//
//                                  BOTOES                                      //
//==============================================================================//

//Função para determinar tamanho da fila
function criou(){
    tamanho = document.getElementById("valor").value;
    tamanho = Number(tamanho);
    if(tamanho < 4 || tamanho > 8){
        alert('Estamos na versão beta. Favor preencher com números entre 4 e 8');
        document.getElementById("valor").value = "";
    } else {
        document.getElementById("btn-view").hidden = false;
        tamanho = Number(document.getElementById("valor").value);
        criaVetor(tamanho);
        document.getElementById("valor").value = "";
        document.getElementById("input-txt").innerHTML = "Insira um valor:";
        document.getElementById("cria").hidden = true;  
  
        limpaTela();
        renderFila();
    }
}

//Botão de enfileirar
function btnEnf(){
    var number = Number(document.getElementById("valor").value);
    enfileira(number);
    document.getElementById("valor").value = "";
    loop();
    
}

//Botão de desenfileirar
function btnDesenf(){
    desenfileira();
    loop();
}

//==============================================================================//
//                                  RENDERIZAÇAO                                //
//==============================================================================//

function limpaTela(){
    ctx.fillStyle = "#153242";
    ctx.fillRect(0, 0, canvas_w, canvas_h);    
}

//Circunferencia Inicial
function renderEmpty(){
    ctx.drawImage(fila, 250 , 50);
}


function renderFila(){
    if(tamanho == 4){
        ctx.drawImage(fila4, 250 , 50);
    }
    else if (tamanho == 5){
        ctx.drawImage(fila5, 250 , 50);
    }
    else if (tamanho == 6){
        ctx.drawImage(fila6, 250 , 50);
    }
    else if (tamanho == 7){
        ctx.drawImage(fila7, 250 , 50);
    } else {
        ctx.drawImage(fila8, 250 , 50);
    }
}

//Função de desenhar números:
function desenhaNumero() {
    var ang;

    //Caso Geral
    var geral_a = 360/vetor.length;
    var geral_b = geral_a/2;

    ctx.translate(center_x, center_y);

    ctx.fillStyle = "white";
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for(var i = 1; i <= vetor.length; i++){
        if(vetor[i-1] != null){
            //Lógica dos números
            ang =  ((-geral_b + geral_a* i) * Math.PI) / 180;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(vetor[i-1].toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }
    ctx.translate(-center_x, -center_y);
}

limpaTela();
renderEmpty();