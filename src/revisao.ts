class Carro {
    marca: string
    modelo: string
    ano: number

    constructor(marca: string,
    modelo: string,
    ano: number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano

    }

    exibirInfos(): void{
        console.log(`Este é um ${this.marca}, ${this.modelo} do ano ${this.ano}`)
    }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2022)
meuCarro.exibirInfos()
// console.log(meuCarro)