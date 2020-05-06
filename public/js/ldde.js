//Inicialização do Canvas

const canvas = document.getElementById('ldde');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

//variaveis de posicao e tamanho

//tamanho do canvas
const canvas_h = 619;
const canvas_w = 1100;

//distancia entre os Nos
const distX = 250;
const distY = 220;

//posicao inicial dos Nos
const iniX = 100;
const iniY = 50;

//Vetor de Nos(?)
var noVector = [];

function guardaNo(){
    var v = document.getElementById('valor').value;
    if(isNaN(v) || v == ""){
        alert('Apenas é permitido a inserção de números, favor tentar novamente!');
    } else {
        noVector.push(v);
        // alert('Valor inserido!');
        //Primeira fileira
        drawNo(v, iniX, iniY);
        nullPointerAnt(iniX, iniY);
        nullPointer(iniX, iniY);
        //drawLane(iniX, iniY);
        //drawNo(v, iniX+distX, iniY);
        // drawLane(iniX+distX, iniY);
        // drawNo(v, iniX+2*distX, iniY);
        // drawNo(v, iniX+3*distX, iniY);

        //Segunda fileira
        // drawNo(v, iniX, iniY+distY);
        // drawNo(v, iniX+distX, iniY+distY);
        // drawNo(v, iniX+2*distX, iniY+distY);
        // drawNo(v, iniX+3*distX, iniY+distY);

        //Terceira fileira
        // drawNo(v, iniX, iniY+2*distY);
        // drawNo(v, iniX+distX, iniY+2*distY);
        // drawNo(v, iniX+2*distX, iniY+2*distY);
        // drawNo(v, iniX+3*distX, iniY+2*distY);
    }
    document.getElementById('valor').value = "";
}

//Desenhar o No
function drawNo(valor, pos_x, pos_y){
    ctx.fillStyle = '#FFF';
    ctx.font = "18px Georgia";
    ctx.fillText(valor , pos_x+65, pos_y+50);
    ctx.strokeStyle = "#FFF";
    //ctx.lineWidth = 3;
    ctx.moveTo(pos_x+20,pos_y);
    ctx.lineTo(pos_x+20,pos_y+100);
    ctx.moveTo(pos_x+130,pos_y);
    ctx.lineTo(pos_x+130,pos_y+100);
    ctx.stroke();
    ///ctx.strokeRect(pos_x, pos_y, 20, 100);
    // ctx.strokeRect(pos_x, pos_y, 130, 100);
    ctx.strokeRect(pos_x, pos_y, 150, 100);
}

//Função de desenhar as ligações
function drawLane(pos_x, pos_y){
    ctx.strokeStyle = "#FFF";
    ctx.moveTo(pos_x+140,pos_y+75);
    ctx.lineTo(pos_x+260,pos_y+75);
    ctx.stroke();
}

//função que desenha o NULL anterior
function nullPointerAnt(pos_x, pos_y){
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 2;
    ctx.moveTo(pos_x+10,pos_y+50);
    ctx.lineTo(pos_x-40,pos_y+50);
    ctx.lineTo(pos_x-40,pos_y+75);
    ctx.moveTo(pos_x-40,pos_y+75);
    ctx.lineTo(pos_x-60,pos_y+75);
    ctx.lineTo(pos_x-20,pos_y+75);
    ctx.stroke();
}

//função que desenha o NULL próximo
function nullPointer(pos_x, pos_y){
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 2;
    ctx.moveTo(pos_x+140,pos_y+50);
    ctx.lineTo(pos_x+190,pos_y+50);
    ctx.lineTo(pos_x+190,pos_y+75);
    ctx.moveTo(pos_x+190,pos_y+75);
    ctx.lineTo(pos_x+210,pos_y+75);
    ctx.lineTo(pos_x+170,pos_y+75);
    ctx.stroke();
}