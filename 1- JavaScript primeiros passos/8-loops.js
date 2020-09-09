console.log(`Trabalhando com listas`);

const estaAcompanhada = true;
const idadeComprador = 21;
let temPassagemComprada = false;
const destino = "Salvador";

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

console.log(`Destinos possíveis`);
console.log(listasDeDestinos);

const podeComprar = estaAcompanhada == true || idadeComprador >= 18;

let contador = 0;
let destinoExiste = false;


while(contador<3){
    if(listasDeDestinos[contador] == destino){
        console.log("Destino existente");
        destinoExiste = true;
        break;
    }
    contador +=1;
}

console.log("Destino existente: ", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0 ; cont < 3 ; cont++ ){
    if(listasDeDestinos[cont] == destino){
        console.log("Destino existente");
        destinoExiste = true;
        break;
    }
}
