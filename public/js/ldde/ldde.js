//Inicialização do Canvas

const canvas = document.getElementById('ldde');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 2;

//variaveis de posicao e tamanho

//tamanho do canvas
const canvas_h = 619;
const canvas_w = 1100;

//distancia entre os Nos
//const distX = 250;
//const distY = 220;

//posicao inicial dos Nos
const iniX = 100;
const iniY = 50;

//const ldde = exportLDDE();

//Variaveis de controle
var i = 0;
var j = 0;

//Atualização da tela
function atualizaTela(){
    ctx.fillStyle = "#667eea"
    ctx.fillRect(0, 0, canvas_w, canvas_h);
    for(var n=0; n<=tam;n++){
        //console.log(n);
        drawNo(ldde[n].valor, ldde[n].crd.x, ldde[n].crd.y);
    }
}


function guardaNo(){
    var v = document.getElementById('valor').value;
    v = Number(v);  
    if(isNaN(v) || v == ""){
        alert('Apenas é permitido a inserção de números, tente novamente!');
    } else {
        insere(v);
        //console.log(ldde[tam].pAnt.x);
    }
    //Limpa campo de inserção
    atualizaTela();
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

atualizaTela();