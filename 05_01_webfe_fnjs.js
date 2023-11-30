let num1 = 5;
let num2 = 8;

function superSomador(num1, num2) {
    if (num1 < num2) {
        let resultado = 0;
        let cont;
        cont = num1
        do {
            resultado += cont;
            cont++;
        } while (cont <= num2)
        return resultado;
    }

}

const resultado = superSomador(num1, num2);
console.log(resultado);