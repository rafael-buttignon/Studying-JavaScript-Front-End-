class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    // # saldo --> Campo privado que vai ser implementado
    agencia;
    saldo = 0;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return
        }
        this.saldo += valor;
    }
}
const cliente1 = new Cliente();
const cliente2 = new Cliente();


 cliente1.nome = "Ricardo";
 cliente1.cpf= 11122233309;
 cliente1.rg = 1231233;


 cliente2.nome = "Alice";
 cliente2.cpf= 11122233309;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 112323-2;
contaCorrenteRicardo.saldo = 0;


contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(100);

console.log(valorSacado);

console.log(contaCorrenteRicardo);