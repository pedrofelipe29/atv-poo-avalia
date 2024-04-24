export class Animal {

    private nome: string   
    
    getNome() {
        return this.nome
    }

    setNome(novoNome: string){
        this.nome = novoNome
    }
}