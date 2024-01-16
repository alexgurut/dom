(($)=>{
    'use strict'
    
    // USO DE CLASSNAME
    let miClass = $.getElementsByClassName("miClassName").namedItem
    miClass[0].classList.add("miClassNameP")

    //USO DE BYID

    let porID = $.getElementById("porId")
    porID.style.backgroundColor = "red"

})(document)