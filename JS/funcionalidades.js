
function ej1(){
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

  function ej2(){
    const num1 = document.getElementById("ej2_num1").value * 1;
    const num2 = document.getElementById("ej2_num2").value * 1;
  
    const resultadoEjer2 = document.getElementById("resultado_ejer2");
  
    resultadoEjer2.value = num1 + num2;
  };
  

  function ej3(){
    const palabra = document.getElementById("ej3_palabra").value;
    const num1 = document.getElementById("ej3_num1").value;
    const resultadoEjer3 = document.getElementById("resultado_ejer3");
  
    for (let i = 0; i < num1; i++) {
      resultadoEjer3.textContent =
        resultadoEjer3.innerHTML + `${i + 1} - ${palabra} `;
    }
  };
  

  function ej4(){
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
  

  function ej5(){
    const resultado = document.getElementById("resultado_ej5");
    const palabra = document.getElementById("ej5_palabra").value;
    resultado.textContent = `${palabra} tiene ${palabra.length} letras`;
  };
  

  function ej6(){
    const resultado = document.getElementById("resultado_ej6");
    const num1 = document.getElementById("ej6_num1").value * 1;
    const dato = num1 % 2;
  
    if (dato === 0) {
      resultado.textContent = `El numero ${num1} es PAR`;
    } else {
      resultado.textContent = `El numero ${num1} es IMPAR`;
    }
  };

  function ej7(){
    const num1 = parseInt(document.getElementById("ejercicio7Num1").value);
    const num2 = parseInt(document.getElementById("ejercicio7Num2").value);
    const resultado = document.getElementById("ejercicio7Resultado");
  
   
    resultado.textContent = "";
    
    if(num1 < num2){
      for(let i=num1+1; i < num2; i++){
        let resto1 = (i % 3);
        if (resto1 == 0){
          resultado.textContent = resultado.innerHTML + " | " + i;
        }
      }
    }else{
      for(let i=num1+1; i < num1; i++){
        let resto2 = (i % 3);
        if(resto2 == 0){
          resultado.textContent = resultado.innerHTML + " | " + i;
        }
      }
    }
  }
  
  function ej8(){
    let ej8_num = parseFloat(document.getElementById("ej8_num").value);

    function esPrimo(numero){
        
        let divisores = 0;
        
        for(let i=2; i <= numero; i++) {        
            if(numero % i === 0) {
            divisores += 1;                    
            }
        }
    
        if(divisores===1){
            console.log(numero + " es primo")
        return true
        }else{
            console.log(numero + " no es primo")
        return false
        }
    }

    let Primo = [];

    for(let i=0; i <= ej8_num; i++){
        console.log("i es " + i)
    if (esPrimo(i)){
        Primo.push(i);
        }
    }

    document.getElementById("ej8_res").value = Primo.toString();
}

function ej9() {
    var ej9_nombre = document.getElementById("ej9_nombre").value;
    var ej9_apellido = document.getElementById("ej9_apellido").value;
    var ej9_ciudad = document.getElementById("ej9_ciudad").value;
    var ej9_edad = document.getElementById("ej9_edad").value;
 
    document.getElementById('ej9_res').innerHTML = 'Mi nombre es ' + ej9_nombre + " " + ej9_apellido +', tengo ' + ej9_edad + ' años. Nací en la ciudad de ' + ej9_ciudad
}

function ej10(){
    var ej10_num1 = parseInt(document.getElementById("ej10_num1").value)
    var ej10_num2 = parseInt(document.getElementById("ej10_num2").value)
    var ej10_res = ""

    if (ej10_num1 > ej10_num2) {
      
      for (let index = ej10_num1 - 1; index > ej10_num2 ; index--) {
                        
          ej10_res = ej10_res + index + ", ";
      }
  
          document.getElementById("ej10_res").value = ej10_res
      } 
          
  
      if (ej10_num2 > ej10_num1){
          
      for (let index = ej10_num1 + 1; ej10_num2 > index ; index++) {
                        
        ej10_res = ej10_res + index + ", ";;
      }
          document.getElementById("ej10_res").value = ej10_res
      }
}