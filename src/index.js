import validator from './validator.js';
//...

const numdigitos = document.getElementById("digitos")
// let hidden=document.getElementById("oculto")
const tarjetaMaskify = document.getElementById("tarjetaMaskify")
//console.log(numdigitos);
const sec2= document.getElementById("seccion2")
const sec3= document.getElementById("seccion3")
const sec4= document.getElementById("seccion4")
const resultado = document.getElementById("resultado");
resultado.classList.remove('valido', 'invalido');

document.getElementById("digitos").addEventListener('keyup', () => {
    const mascara = validator.maskify(numdigitos.value)
    tarjetaMaskify.innerHTML = mascara;
    
    
})
document.getElementById("botonPago").addEventListener('click', () => {
    sec2.style.display = 'none';
    sec3.style.display = 'block';
    sec4.style.display = 'block';
});

document.getElementById("boton1").addEventListener('click', () => {
const valid = validator.isValid(numdigitos.value);

    if (valid) {
        resultado.innerHTML = "Tarjeta Valida"
        resultado.classList.add('valido');
        
    } else {
        resultado.innerHTML = "Tarjeta invalida, verifique de nuevo"
        resultado.classList.add('invalido');

}

});

{
    let destino = document.getElementById ("destino");
    let origen = document.getElementById("origen")
    const validaDestinos = () => {
        if (destino.value === origen.value && destino.value != '') {
            alert("Asegurate de elegir un destino distinto al origen");
            destino.value = '';
        }
    };

    destino.addEventListener('change', validaDestinos);
    origen.addEventListener('change', validaDestinos); 
};

{
    
    let pasajeros = document.getElementById ('boletos')
    let mostraPrecio= document.getElementById('mostrarPrecio') 
    pasajeros.addEventListener("change", () => {
        let precio= 2000
        let pagoTotal = pasajeros.value * precio  
        console.log(precio, pagoTotal)

        mostraPrecio.innerHTML = pagoTotal
    } )
  
    }


    // console.log (pagoTotal)


     
    //return pagoTotal
    //boletos.addEventListener('change', )


//    function () {
//     let pago= " "
//     let precio= 1800
//     pago = boleto.value * precio
//     console.log (pago)
    
   

//} 

