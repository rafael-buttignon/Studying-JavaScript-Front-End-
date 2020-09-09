console.log(`Trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;

const listasDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

listasDeDestinos.push(`Curitiba`) //Adicionando um item na lista!

console.log(`Destinos possíveis`);
// console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listasDeDestinos);

listasDeDestinos.splice(1, 1); // Remove um item na lista!
console.log(listasDeDestinos);

console.log(listasDeDestinos[1], listasDeDestinos[0]);