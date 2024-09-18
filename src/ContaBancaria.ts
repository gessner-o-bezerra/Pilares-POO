class ContaBancaria {
    constructor(protected numeroConta: string, protected saldo: number){}

    getNumeroConta(): string {
        return this.numeroConta;
    }

    getSaldo(): number {
        return this.saldo;
    }

    setSaldo(novoSaldo: number) {
        if (novoSaldo >= 0) {
            this.saldo = novoSaldo;
        } else {
            console.log("O saldo não pode ser negativo.");
        }
    }

    depositar(valor: number) {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("Valor inválido.");
        }
    }

    sacar(valor: number) {
        if (valor > 0 && this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }
}


class ContaCorrente extends ContaBancaria {
    constructor(numeroConta: string, saldo: number, private chequeEspecial: number) {
        super(numeroConta, saldo);
    }

    getChequeEspecial(): number {
        return this.chequeEspecial;
    }

    setChequeEspecial(valor: number) {
        if (valor >= 0) {
            this.chequeEspecial = valor;
            // this.setSaldo(this.getSaldo() + this.chequeEspecial)
        } else {
            console.log("O valor não pode ser negativo.");
        }
    }

    usarChequeEspecial(valor: number) {
        if (valor > 0 && valor <= this.chequeEspecial) {
            const saldoFinal = (this.getSaldo() - valor) + this.chequeEspecial;

            if (saldoFinal >= 0) {
                this.setSaldo(saldoFinal);
            } else {
                console.log("Seu limite é insuficiente.");
            }
            this.chequeEspecial -= valor;
            console.log(`Cheque especial utilizado. Valor: ${valor}. Cheque especial restante: ${this.chequeEspecial}`);
        } else {
            console.log("Valor excede o limite ou é inválido.");
        }
    }

    sacar(valor: number) {
        if (valor <= this.getSaldo() + this.chequeEspecial) {
            if (valor > this.getSaldo()) {
                const valorDoCheque = valor - this.getSaldo();
                this.setSaldo(0);
                this.usarChequeEspecial(valorDoCheque);
            } else {
                this.setSaldo(this.getSaldo() - valor);
            }
        } else {
            console.log("Erro: Saldo insuficiente mesmo com o cheque especial.");
        }
    }
}

class ContaPoupanca extends ContaBancaria {

    constructor(numeroConta: string, saldo: number) {
        super(numeroConta, saldo);
    }

    // Método para calcular juros
    public calcularJuros(taxa: number) {
        if (taxa > 0) {
            const juros = this.getSaldo() * (taxa / 100);
            this.setSaldo(this.getSaldo() + juros);
            console.log(`Juros calculados: ${juros}. Novo saldo: ${this.getSaldo()}`);
        } else {
            console.log("A taxa de juros deve ser positiva.");
        }
    }
}

// Conta Corrente
const contaCorrente = new ContaCorrente("00123", 500, 1000);
console.log(`Conta Corrente - Número: ${contaCorrente.getNumeroConta()}, Saldo: ${contaCorrente.getSaldo()}`);
contaCorrente.depositar(200);
console.log(`Saldo após depósito: ${contaCorrente.getSaldo()}`);
contaCorrente.sacar(100);
console.log(`Saldo após saque: ${contaCorrente.getSaldo()}`);
contaCorrente.usarChequeEspecial(500);
console.log(`Saldo após usar cheque especial: ${contaCorrente.getSaldo()} (saldo + cheque especial)`);

// Conta Poupança
const contaPoupanca = new ContaPoupanca("00987", 1000);
console.log(`Conta Poupança - Número: ${contaPoupanca.getNumeroConta()}, Saldo: ${contaPoupanca.getSaldo()}`);
contaPoupanca.calcularJuros(5); // juros de 5%
console.log(`Saldo após cálculo de juros: ${contaPoupanca.getSaldo()}`);
