export class ContaCorrente{
    // # saldo --> Campo privado que vai ser implementado
    conta_agencia;
    cliente;
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

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}