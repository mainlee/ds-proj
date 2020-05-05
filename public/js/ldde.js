//Inicialização do Canvas

const canvas = document.getElementById('ldde');
const ctx = canvas.getContext('2d');

const c_h = 619;
const c_w = 1100;

var noVector = [];

function criaNo(){
    var v = document.getElementById('valor').value;
    noVector.push(v);
}



ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

ctx.font = "30px Arial";
ctx.strokeText("Hello World", 10, 50);