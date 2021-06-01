// Criar um módulo (calculadora.js) para exportar uma biblioteca de funções 
// para calculadora simples.
// Métodos:
// - somar(a, b): retorna a soma de a e b;
// - somar(...numeros): retorna a soma de todos os numeros informados;
// - subtrair(a, b): retorna a subtração de a e b;
// - subtrair(...numeros): retorna a subtração de todos os numeros informados;
// - multiplicar(a, b): retorna a multiplicação de a e b;
// - multiplicar(...numeros): retorna a multiplicação de todos os numeros 
// informados;
// - dividir(a, b): retorna a divisão de a e b;
// - dividir(...numeros): retorna a divisão de todos os numeros informados;


let calculadora = {

    somaAB(a,b) {
        return a+b;
    },
    somaVarios(...numeros) {
        let resultado = 0
        for (i = 0; i < numeros.length;i++){
            resultado = resultado + numeros[i]
        }
        return resultado
    },
    subtrai(a,b) {
        return a - b
    },
    subtraiVarios(...numeros) {
        let resultado = numeros[0]
        for (i = 1; i < numeros.length;i++){
            resultado = resultado - numeros[i]
        }
        return resultado
    },
    multiplica(a,b) {
        return a * b
    },
    multiplicaVarios(...numeros) {
        let resultado = numeros[0]
        for (i=1; i < numeros.length; i++){
            resultado = resultado * numeros[i]
        }
        return resultado
    },
    dividir(a,b) {
        return a / b;
    },
    dividirVarios(...numeros) {
        let resultado = numeros[0]
        for (i=1; i < numeros.length; i++){
            resultado = resultado / numeros[i]
        }
        return resultado
    }

}

module.exports = calculadora 