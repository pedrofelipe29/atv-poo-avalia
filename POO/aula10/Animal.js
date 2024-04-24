"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.getNome = function () {
        return this.nome;
    };
    Animal.prototype.setNome = function (novoNome) {
        this.nome = novoNome;
    };
    return Animal;
}());
exports.Animal = Animal;
