
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente();
const cliente2 = new Cliente();


 cliente1.nome = "Ricardo";
 cliente1.cpf= 11122233309;
 cliente1.rg = 1231233;



 cliente2.nome = "Alice";
 cliente2.cpf= 11122233309;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.conta_agencia = 102;



contaCorrenteRicardo.transferir(200, conta2);

console.log(conta2);
console.log(contaCorrenteRicardo);