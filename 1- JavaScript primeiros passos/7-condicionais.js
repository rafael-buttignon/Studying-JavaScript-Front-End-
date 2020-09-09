console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;

const estaAcompanhada = true;
const idadeComprador = 21;
const temPassagemComprada = true;
const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);


console.log(`Destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listasDeDestinos);

// if (idadeComprador > 18) {
//     console.log("Comprador Maior de Idade");
//     listasDeDestinos.splice(1, 1); // Remove um item na lista!
// } else if (estaAcompanhada == true) {
//     console.log("Comprador esta acompanhado");
//     listasDeDestinos.splice(1, 1); // Remove um item na lista!
// } else {
//     console.log("Comprador, não é maior de idade!");
// }

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

if (estaAcompanhada == true || idadeComprador > 18){
    console.log("Boa Viagem!!!");
    listasDeDestinos.splice(1, 1); // Remove um item na lista!
} else {
    console.log("Comprador, não é maior de idade!");
}

console.log("Embarque: \n\n");

if(idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa Viagem!!!");
}else{
    console.log("Você não pode embarcar!")
}

console.log(listasDeDestinos);
