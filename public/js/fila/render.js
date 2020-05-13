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

//Função para determinar tamanho da fila
function criou(){
    tamanho = document.getElementById("valor").value;
    tamanho = Number(tamanho);
    if(tamanho < 4 || tamanho > 8){
        alert('Favor preencher com números entre 4 e 8');
        document.getElementById("valor").value = "";
    } else {
        document.getElementById("btn-view").hidden = false;
        document.getElementById("valor").value = "";
        document.getElementById("input-txt").innerHTML = "Insira um valor:";
        document.getElementById("cria").hidden = true;      
        limpaTela();
        renderFila();
    }
}

function limpaTela(){
    ctx.fillStyle = "#249978";
    ctx.fillRect(0, 0, canvas_w, canvas_h);    
}

function renderEmpty(){
    ctx.drawImage(fila, 250 , 50);
}

function renderFila(){
    if(tamanho == 4){
        fila.src = "../public/img/fila/fila4.png";
        ctx.drawImage(fila4, 250 , 50);
    }
    else if (tamanho == 5){
        fila.src = "../public/img/fila/fila5.png";
        ctx.drawImage(fila5, 250 , 50);
    }
    else if (tamanho == 6){
        fila.src = "../public/img/fila/fila6.png";
        ctx.drawImage(fila6, 250 , 50);
    }
    else if (tamanho == 7){
        fila.src = "../public/img/fila/fila7.png";
        ctx.drawImage(fila7, 250 , 50);
    } else {
        fila.src = "../public/img/fila/fila8.png";
        ctx.drawImage(fila8, 250 , 50);
    }
}

limpaTela();
renderEmpty();