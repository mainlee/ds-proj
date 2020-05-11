//Vetor com tamanho fixo
const vetor = [tam];

//Variaveis de inicio e fim
var i, f;

//Atualiza posições
function atualizaPos(){
    i = vetor[0];
    f = vetor[vetor.length-1];
}

function insere(num){
    //Verifca se a fila está fazia
    if(vetor.length == 0){
        vetor.push(num);
    }
}

