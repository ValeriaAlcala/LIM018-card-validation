import validator from './validator.js'; //va al incio

const boton1=document.getElementById("boton1");
boton1.addEventListener("click",ventana1);

const botonbasico=document.getElementById("botonbasico");
botonbasico.addEventListener("click",ventana2);

const botonestandar=document.getElementById("botonestandar");
botonestandar.addEventListener("click",ventana2);
 
const botonpremium=document.getElementById("botonpremium");
botonpremium.addEventListener("click",ventana2);

function ventana1(){
  document.getElementById("ventana1").style.display="none";
  document.getElementById("ventana2").style.display="block";
}

function ventana2(){
  document.getElementById("ventana2").style.display="none";
  document.getElementById("ventana3").style.display="block";
}

  //console.log(validator);

  let num = ""
  const validarNumeros = document.getElementById("numero-tarjeta");
  validarNumeros.addEventListener("change", (event) => {
  num = event.target.value;
  //validator.maskify(num);
  })

  const botondepago=document.getElementById("boton-pagar");
  botondepago.addEventListener("click", (event) => {
  event.preventDefault();
  validator.isValid(num);
  })

  //let mensaje="";
  //let verificador=division
    //if(division = true){
      //mensaje="Número de tarjeta válida";
    //} else {
      //mensaje="Número de tarjeta inválido";
    //}
  //console.log(verificador)

  //let ocultar= ""