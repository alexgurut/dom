(($)=>{
    'use strict'
    
    // USO DE CLASSNAME
    let miClass = $.getElementsByClassName("miClassName").namedItem
    miClass[0].classList.add("miClassNameP")

    //USO DE BYID

    let porID = $.getElementById("mih3")
    porID.classList.add("mih3")
    porID.innerHTML += " nuevo texto"

    console.log("error")

})(document)