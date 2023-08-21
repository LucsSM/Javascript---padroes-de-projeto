class Codigo {

    constructor (texto) {

        if(!this._validaCodigo(texto)) throw new Error ('Código inválido');
        this._texto = texto;
    }

    _validaCodigo(codigo) {

        return /\D{3}-\D{2}-\d{2}/.test(codigo); 
    }

    get texto() {

        return this._texto;
    }
}