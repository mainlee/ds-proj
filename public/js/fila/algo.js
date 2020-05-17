//Vetor com tamanho fixo
const vetor = [];

//Variaveis de inicio e fim
var ini = 0;
var fim = 0;

var tam = vetor.length;

function criaVetor(tam){
    //vetor = [];
    for(var i = 0; i<tam; i++){
        vetor[i] = null;
    }
}

function filaVazia(){
    if(ini == fim){
        console.log('Teste');
        alert('A fila está vazia!');
        return true;
    }
    return false;
}

function enfileira(num){
    //Verifica o overflow da fila
    if((fim+1)%tam == ini){
        alert('Fila cheia! Por favor desenfileire algum número!');
    } else {
        //Insere o valor na última posição
        vetor[fim] = num;
        fim = (fim+1)%tam;
    }
}

function desenfileira(){
    //Verifica se a fila está fazia
    if(!filaVazia()){
        //Apagando o valor da posição inicial da fila
        vetor[ini] = undefined;
        ini = (ini+1)%tam;
    }
}

