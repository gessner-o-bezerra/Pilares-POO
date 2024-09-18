class Exemplo{
    public variavelPublica: string
    private variavelPrivada: number
    
    
    constructor(varPublica: string, varPrivade: number){
        this.variavelPublica = varPublica
        this.variavelPrivada = varPrivade
    }

    mostrarDetalhes(): void {
        console.log(`Variavel pública> ${this.variavelPublica}`)
        console.log(`Variavel privada> ${this.variavelPrivada}`)
    }

    
}

const instacia = new Exemplo('Hello', 42)

instacia.mostrarDetalhes()

console.log(instacia.variavelPublica)
// console.log(instacia.variavelPrivada)