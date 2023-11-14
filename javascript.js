function validaIdade(input) {
    var idade = input.value;

    var idadeInt = parseInt(idade);

    if (idadeInt < 0 || isNaN(idadeInt)){
        input.value = prompt('Digite a sua idade');
        
    }
}