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

//Variaveis de controle
var i = 0;
var j = 0;

//Vetor de Nos(?)
var noVector = [];
var num;

function guardaNo(){
    var v = document.getElementById('valor').value;
    if(isNaN(v) || v == ""){
        alert('Apenas é permitido a inserção de números, tente novamente!');
    } else {
        const no = {
            valor: v,
            noX: iniX+i*distX,
            noY: iniY+j*distY
        };
        noVector.push(no);

        i++;
        if(i>3){
            i = 0;
            j++;
        }
        if(j>2){
            alert('Acabou!');
        }

        var tam = noVector.length;
        for(num = 0; num < tam ; num++){
            drawNo(noVector[num].valor, noVector[num].noX, noVector[num].noY);
        }

        // alert('Valor inserido!');
        //Primeira fileira
        //drawNo(v, iniX, iniY);
        //nullPointerAnt(iniX, iniY);
        //nullPointer(iniX, iniY);
        // drawLane(iniX, iniY);

        // drawNo(v, iniX+distX, iniY);
        // drawLane(iniX+distX, iniY);

        // drawNo(v, iniX+2*distX, iniY);
        // drawLane(iniX+2*distX, iniY);

        // drawNo(v, iniX+3*distX, iniY);
        // lastLane(iniX+3*distX, iniY);

        //Segunda fileira
        // drawNo(v, iniX, iniY+distY);
        // drawNo(v, iniX+distX, iniY+distY);
        // drawNo(v, iniX+2*distX, iniY+distY);
        // drawNo(v, iniX+3*distX, iniY+distY);
        // lastLane(iniX+3*distX, iniY+distY);

        //Terceira fileira
        // drawNo(v, iniX, iniY+2*distY);
        // drawNo(v, iniX+distX, iniY+2*distY);
        // drawNo(v, iniX+2*distX, iniY+2*distY);
        // drawNo(v, iniX+3*distX, iniY+2*distY);
        // nullPointer(iniX+3*distX, iniY+2*distY);
    }
    //Limpa campo de inserção
    document.getElementById('valor').value = "";
}

//Desenhar o No
function drawNo(valor, pos_x, pos_y){
    //Texto inserido no No
    ctx.fillStyle = '#FFF';
    ctx.font = "18px Georgia";
    ctx.fillText(valor , pos_x+60, pos_y+50);

    //No
    ctx.strokeStyle = "#FFF";
    ctx.moveTo(pos_x+20,pos_y);
    ctx.lineTo(pos_x+20,pos_y+100);
    ctx.moveTo(pos_x+130,pos_y);
    ctx.lineTo(pos_x+130,pos_y+100);
    ctx.stroke();
    ctx.strokeRect(pos_x, pos_y, 150, 100);
}

//Função de desenhar as ligações
function drawLane(pos_x, pos_y){
    //Organização
    const posX = pos_x+140;
    const nPosX = pos_x+260;
    const posY = pos_y+75;

    ctx.strokeStyle = "#FFF";
    ctx.moveTo(posX,posY);
    ctx.lineTo(nPosX,posY);
    ctx.stroke();
}

//função que desenha o NULL anterior
function nullPointerAnt(pos_x, pos_y){
    //Organização
    const posX = pos_x-40;
    const posY = pos_y+50;
    const nPosY = pos_y+75;


    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 2;
    ctx.moveTo(pos_x+10,posY);
    ctx.lineTo(posX,posY);
    ctx.lineTo(posX,nPosY);
    ctx.moveTo(posX,nPosY);
    ctx.lineTo(pos_x-60,nPosY);
    ctx.lineTo(pos_x-20,nPosY);
    ctx.stroke();
}

//função que desenha o NULL próximo
function nullPointer(pos_x, pos_y){
    //Organização
    const posX = pos_x+190;
    const posY = pos_y+50;
    const nPosY = pos_y+75;

    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 2;

    ctx.moveTo(pos_x+140,posY);
    ctx.lineTo(posX,posY);
    ctx.lineTo(posX,nPosY);

    ctx.moveTo(posX,nPosY);
    ctx.lineTo(pos_x+210,nPosY);
    ctx.lineTo(pos_x+170,nPosY);
    ctx.stroke();
}

//Ligação do ultimo No do canvas
function lastLane(pos_x, pos_y){
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 2;

    ctx.moveTo(pos_x+140,pos_y+25);
    ctx.lineTo(pos_x+220,pos_y+25);
    ctx.lineTo(pos_x+220,pos_y+25);
    ctx.lineTo(pos_x+220,pos_y+140);
    ctx.lineTo(pos_x-3*distX-40,pos_y+140);
    ctx.lineTo(pos_x-3*distX-40,pos_y+distY+75);
    ctx.lineTo(pos_x-3*distX+10,pos_y+distY+75);
    ctx.stroke();
}