let importeInic = document.getElementById("importeInic")
let depMens = document.getElementById("depMens")
let extras = document.getElementById("extras")
let tasa = document.getElementById("tasa")
let años = document.getElementById("años")
let label = document.getElementById("label")
let dinero = 0

let boton = document.getElementById("boton")


    
boton.addEventListener("click", calcular)



  function calcular() {
    dinero = (parseInt(importeInic.value) + (parseInt(depMens.value) * 12) +(parseInt(extras.value)))* ((parseInt(tasa.value)/100)+1)
    console.log(dinero.toFixed(2))

    for(let i = 1; i < parseInt(años.value); i++){

        dinero = (dinero + (parseInt(depMens.value) * 12) +(parseInt(extras.value)))* ((parseInt(tasa.value)/100)+1)
        console.log(dinero.toFixed(2))
        
    }
    label.textContent = "Total ahorrado: " + dinero.toFixed(2)
    
 }


 


 

 
 


  