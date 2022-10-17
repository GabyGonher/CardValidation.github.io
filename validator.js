const validator = {
  // ...
isValid: (numdigitos) => {
  // let arr = Array.from(numdigitos.value).reverse();
  if(numdigitos === '') return false;
  let temp = 0,
      resta = 0,
      suma = 0;
  let arr = Array.from(numdigitos).map(i => parseInt(i)).reverse();
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    //Si el numero es par se multiplica por dos
    if ((i+1) % 2 === 0) {
      temp = arr[i] * 2
      //
     if (temp >= 10)  {
      temp-=9
       //console.log('resta', temp)
     }
     suma += temp;
     
   // debugger
     }
    
    else {
      suma += resta     
      suma+= arr[i] 
      //console.log(suma)
    
    }
 

}
console.log(suma);
  if (suma % 10 === 0) {
  
   return true
  }
  else{
   
    return false
  }
   
},
  
maskify:(digitos) => {
       //let coso= document.getElementById(digitos).value 
          //let mascara = document.getElementById("digitos")
         //digitos = digitos.toString()
          let acumulador = ""
          for (let i = 0; i <digitos.length; i++) {
            if (i > digitos.length -5) {
              acumulador = acumulador + digitos[i]
            }

            else {
              acumulador = acumulador + "#"
            
             //
             
              
            }
          }
  
          console.log(acumulador)
  return acumulador
        }
       
      }

export default validator;