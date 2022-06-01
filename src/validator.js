const validator = {
  isValid: function (num) {

    let arraydenumerotarjeta=num.split(""); //transformando el numero obtenido en un array
    //console.log(arraydenumerotarjeta);

    let reversed=arraydenumerotarjeta.reverse(""); //array en reversa
    //console.log(reversed);

    let multiplicarnumeros=reversed; //multiplicar pares del array
      for(let i=1; i<reversed.length; i=i+2){
        reversed[i]=reversed[i]*2;
      //console.log(multiplicarnumeros); 
      }
    
    let sumadecifras=multiplicarnumeros; //suma de cifras
      for(let i=1; i<multiplicarnumeros.length; i=i+2){
        if(multiplicarnumeros[i]>9)
          multiplicarnumeros[i]-=9;
      //console.log(sumadecifras);
    }

    let variablesuma=sumadecifras; // suma de array
    let sumatotal=variablesuma.reduce((acc,item)=>{
      return acc=acc+parseInt(item);
    },0);
    //console.log(sumatotal);

    let division=sumatotal%10; 
        if(division%10==0){
          return true;
        } else {
          return false; 
        }
   
  },

  maskify: function (num){
    let arrayNew=[];
    let numCard;
    let extraernumero=num.split("");
  
      extraernumero.forEach((element, i) => { 
        if (i < extraernumero.length - 4 ){
          element = "#";
        }

        // Usamos el método push para agregar los elementos al arrayNew vacío
        arrayNew.push(element);
        //console.log(arrayNew);
      });
  
      numCard = arrayNew.join('');
      //alert(numCard);
      return numCard;
    }
  }

export default validator; //va al final
      

