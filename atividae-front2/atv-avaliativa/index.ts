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

    receberDanoa(danoSofrido) {
        let HPtotal = this.HP
        let Danoreduzido = danoSofrido * 0.5
        if (HPtotal <= 0.25){
            this.forcadeataque += this.forcadeataque * 0.1
            this.forcadedefesa += this.forcadedefesa * 0.3
             
        }  
    }   
}