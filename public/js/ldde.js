//Inicialização do Canvas

const canvas = document.getElementById('ldde');
const ctx = canvas.getContext('2d');

const c_h = 619;
const c_w = 1100;

var noVector = [];

function guardaNo(){
    var v = document.getElementById('valor').value;
    if(isNaN(v)){
        alert('Apenas é permitido a inserção de números, favor tentar novamente!');
    } else {
        noVector.push(v);
        alert('Valor inserido!');
        drawNo(v, 0, 0);
    }
    document.getElementById('valor').value = "";
}

//
function drawNo(valor, pos_x, pos_y){
    ctx.fillStyle = '#FFF';
    ctx.font = "16px Georgia";
    ctx.fillText(valor , pos_x+70, pos_y+50);
    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 3;
    ctx.strokeRect(pos_x, pos_y, 20, 100);
    ctx.strokeRect(pos_x, pos_y, 130, 100);
    ctx.strokeRect(pos_x, pos_y, 150, 100);
}