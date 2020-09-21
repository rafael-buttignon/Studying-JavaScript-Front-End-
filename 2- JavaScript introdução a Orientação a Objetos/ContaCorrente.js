import {Cliente} from "./Cliente.js"
export class ContaCorrente{
    // # saldo --> Campo privado que vai ser implementado
    conta_agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }




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