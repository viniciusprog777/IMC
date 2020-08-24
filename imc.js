const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const nome = document.querySelector("#nome");
const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

const imc = (p,a,n) => {
    imcCalculado = p / (a * a);
    
    if (imcCalculado < 10) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com desnutrição grau 5";
    }
    if (imcCalculado <= 12.9) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com desnutrição grau 4";

    }
    if (imcCalculado <= 15.9) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com desnutrição grau 3";

    }
    if (imcCalculado <= 16.9) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com desnutrição grau 2";

    }
    if (imcCalculado <= 18.4) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com desnutrição grau 1";

    }
    if (imcCalculado <= 24.9) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com o peso normal";

    }
    if (imcCalculado <= 29.9) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com pré-obesidade";

    }
    if (imcCalculado <= 34.9) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com obesidade grau 1";

    }
    if (imcCalculado <= 39.9) {
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com obesidade grau 2";

    }
    else{
        return "Seu imc é " + Math.round(imcCalculado) + " " + n + ", e você está com obesidade grau 3";

    }
}
const mostrarResultado = () =>{
    resultado.innerHTML = imc(peso.value, altura.value, nome.value);
}

calcular.addEventListener('click', mostrarResultado);