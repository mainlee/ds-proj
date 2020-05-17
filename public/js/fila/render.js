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

//Função para determinar tamanho da fila
function criou(){
    tamanho = document.getElementById("valor").value;
    tamanho = Number(tamanho);
    if(tamanho < 4 || tamanho > 8){
        alert('Favor preencher com números entre 4 e 8');
        document.getElementById("valor").value = "";
    } else {
        document.getElementById("btn-view").hidden = false;
        tamanho = document.getElementById("valor").value;
        document.getElementById("valor").value = "";
        document.getElementById("input-txt").innerHTML = "Insira um valor:";
        document.getElementById("cria").hidden = true;  
  
        limpaTela();
        renderFila();
    }
}

function limpaTela(){
    ctx.translate(-center_x, -center_y);
    ctx.fillStyle = "#249978";
    ctx.fillRect(0, 0, canvas_w, canvas_h);    
}

function renderEmpty(){
    ctx.drawImage(fila, 250 , 50);
}

function renderFila(){
    ctx.translate(center_x, center_y);  
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
    // ctx.font = "30px Arial";
    // ctx.fillStyle = "white";
    // ctx.fillText("5",570,100);  
}

//Função de desenhar números:
function desenhaNumero(valor) {

    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    //ctx.fillText("5",center_x+radius,center_y);
    ctx.translate(500, 310);

    var ang;
    var num;
    ctx.font = radius * 0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    //Valor para 4
    /*for(num = 1; num <= 4; num++){
        //Lógica dos números
        ang =  ((-45 + 90* num) * Math.PI) / 180;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }*/

    // for(num = 1; num <= 5; num++){
    //     //Lógica dos números
    //     ang =  ((-36 + 72* num) * Math.PI) / 180;
    //     ctx.rotate(ang);
    //     ctx.translate(0, -radius * 0.85);
    //     ctx.rotate(-ang);
    //     ctx.fillText(num.toString(), 0, 0);
    //     ctx.rotate(ang);
    //     ctx.translate(0, radius * 0.85);
    //     ctx.rotate(-ang);
    // }

    for(num = 1; num < 6; num++){
        //Lógica dos números
        ang =  ((-30 + 60* num) * Math.PI) / 180;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }

//ctx.fillText("5",0,radius);
//ctx.fillText("5",0,-radius);


}

ctx.translate(center_x, center_y);  
limpaTela();
renderEmpty();