class Menu {
    private meuArray: ItemMenu[];

    constructor(){
        let op1 = new ItemMenu("1", "atacar");

        this.meuArray.push(op1);

        let op2 = new ItemMenu("2", "Ataque especial");

        this.meuArray.push(op2);

        let op3 = new ItemMenu("3","Tomar poção de Cura de HP");

        this.meuArray.push(op3);

        let op4 = new ItemMenu("4","tomar poção que restaura MP")

        this.meuArray.push(op4);

        let op5 = new ItemMenu("5","Defender")

        this.meuArray.push(op5);
    }

getimprimirMenu() {

    var entrada = require('prompt-sync')();

    let opcaoSelecionada = entrada("1,2,3,4,5")
    return opcaoSelecionada;
}
 
}

class ItemMenu {
    opcao: string
    textoDaOpcao: string

    constructor(o: string, t: string){
        this.opcao = o;
        this.textoDaOpcao = t;
    }
}

class Coliseu {
    boos: Monstro




}

class Monstro {
    HP: number
    forcadeataque: number
    forcadedefesa: number

    receberDano(danoSofrido) {
        let HPtotal = this.HP
        let Danoreduzido = danoSofrido * 0.5
        if (HPtotal <= 0.25){
            this.forcadeataque += this.forcadeataque * 0.1
            this.forcadedefesa += this.forcadedefesa * 0.3
            this.HP -= Danoreduzido
        }
        else {
            this.HP -= danoSofrido
            var danoArmadura = danoSofrido - this.forcadedefesa
            if (this.HP <= 0){
                console.log("monstro derrotado")
            }
            
        } 
    }   
}

class Equipamento {
    nomedoesquipamento: string;
    aumentoAtaque: number;
    aumentoDefesa: number;

    constructor(espada: string, aumentoAtaque: number, aumentoDefesa: number) {
        this.nomedoesquipamento = espada;
        this.aumentoAtaque = aumentoAtaque;
        this.aumentoDefesa = aumentoDefesa;
    }

    exibirInformacoes(): void {
        console.log("espada:", this.nomedoesquipamento);
        console.log("Aumento de Ataque:", this.aumentoAtaque);
        console.log("Aumento de Defesa:", this.aumentoDefesa);
    }
}

const equipamento = new Equipamento("Espada Mágica", 10, 5);
equipamento.exibirInformacoes();




    class Lutador {
        HP: number;
        MP: number;
        ataque: number;
        defesa: number;
        equipamentoCabeca: Equipamento;
        equipamentoCorpo: Equipamento;
        equipamentoMao: Equipamento;
    }

   