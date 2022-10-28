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

  let num = ""
  const validarNumeros = document.getElementById("numero-tarjeta");
  validarNumeros.addEventListener("change", (event) => {

  num = event.target.value;
  validator.maskify(num);
  let numero=validator.maskify(num);
  validarNumeros.value=numero;
  })

  const botondepago=document.getElementById("boton-pagar");

  botondepago.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(validator.isValid(num));
  // console.log(num)
  let mensaje=""

    if(validator.isValid(num)===true){
      mensaje="¡El pago se realizó correctamente!"
    // }else if(num==""){
    //     mensaje="Colocar una tarjeta válida"
    }else if(validator.isValid(num)===false){
      mensaje="Coloca una tarjeta válida"}
     
      document.getElementById("mensaje-exitoso").innerHTML=mensaje;  

  return mensaje;
})
}




