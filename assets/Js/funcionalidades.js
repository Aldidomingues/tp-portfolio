// Ej 1: Compara los 3 numeros
const Ej1 = () => {
    const num1 = document.getElementById('ej1-numero1').value * 1;
    const num2 = document.getElementById('ej1-numero2').value * 1;
    const num3 = document.getElementById('ej1-numero3').value * 1;
    const resultadoMayor = document.getElementById("resultadoMayor");
    const resultadoMenor = document.getElementById("resultadoMenor")
    console.log(num1.innerHTML)
    let mayor = Math.max(num1, num2, num3), 
        menor = Math.min(num1, num2, num3);
  
    resultadoMayor.textContent = mayor;
    resultadoMenor.textContent = menor;
  }
  // Ej 2: Suma los numeros
  const Ej2 = () => {
    const num1 = document.getElementById("ej2_num1").value * 1;
    const num2 = document.getElementById("ej2_num2").value * 1;
  
    const resultadoEjer2 = document.getElementById("resultado_ejer2");
  
    resultadoEjer2.value = num1 + num2;
  };
  
  // Ej 3: repite tantas veces la palabra
  const Ej3 = () => {
    const palabra = document.getElementById("ej3_palabra").value;
    const num1 = document.getElementById("ej3_num1").value;
    const resultadoEjer3 = document.getElementById("resultado_ejer3");
  
    for (let i = 0; i < num1; i++) {
      resultadoEjer3.textContent =
        resultadoEjer3.innerHTML + `${i + 1} - ${palabra} `;
    }
  };
  
  // Ej 4: Convierte la temperatura
  const Ej4 = () => {
    const cel = document.getElementById("ej4_celsius").value;
    const fah = document.getElementById("ej4_fahrenheit").value;
    const resultadoHTML = document.getElementById("resultado_ej4");
    let res = 0;
    if ((cel != 0 && cel != "" && fah === 0) || fah === "") {
      //De celsius a fahrenheit
      res = cel * (9 / 5) + 32;
      resultadoHTML.textContent = `Los grados celsius (${cel}°C) a fahrenheit son: ${res}`;
    }
  
    if ((fah != 0 && fah != "" && cel === 0) || cel === "") {
      //De  fahrenheit a celsius
      res = (fah - 32) / 1.8;
      resultadoHTML.textContent = `Los grados fahrenheit (${fah}°F) a celsius son: ${res}`;
    }
  };
  
  //Ej 5: letras en una palabra
  const Ej5 = () => {
    const resultado = document.getElementById("resultado_ej5");
    const palabra = document.getElementById("ej5_palabra").value;
    resultado.textContent = `${palabra} tiene ${palabra.length} letras`;
  };
  
  //Ej 6: Par o impar
  const Ej6 = () => {
    const resultado = document.getElementById("resultado_ej6");
    const num1 = document.getElementById("ej6_num1").value * 1;
    const dato = num1 % 2;
  
    if (dato === 0) {
      resultado.textContent = `El numero ${num1} es PAR`;
    } else {
      resultado.textContent = `El numero ${num1} es IMPAR`;
    }
  };
  //Ej 7: Ingresar dos números.
  const Ej7 = () => {
    const num1 = document.getElementById("ej7_num1").value * 1;
    const num2 = document.getElementById("ej7_num2").value * 1;
    const resultado = document.getElementById("resultado_ej7");
    resultado.textContent = "";
  
    let menor = Math.min(num1, num2);
    let mayor = Math.max(num1, num2);
  
    while (menor <= mayor) {
      let calculo = menor % 3;
      if (calculo === 0) {
        resultado.textContent = resultado.innerHTML + " | " + menor;
      }
      menor++;
    }
  };
  
 