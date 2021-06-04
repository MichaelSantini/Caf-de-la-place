// Déclaration Inputs

let inputName = document.getElementById("inputName");
let inputNb = document.getElementById("inputNb");
let inputPrice = document.getElementById("inputPrice");
let typeDrink = document.getElementById("typeDrink")
let inputAchatHt = document.getElementById("inputAchatHT")
let inputVenteHt = document.getElementById("inputVenteHT")

let rightBox = document.getElementById("rightBox")
let soft = document.getElementById("soft")
let alc = document.getElementById("alc")

let liste = []




btnValidate.addEventListener("click", function(e){

    updateDom()

    let soft; 
    let hot;
    let alc;
    let AutreProduit;

    if (inputName.value ==""){
        alert("Nom de produit : Incorrect")
    }
    else if (inputNb.value ==""){
        alert("Nombre de produit : Incorrect")
    }
    else if (inputPrice.value ==""){
        alert("Prix du produit : Incorrect")
    }
  else{ 
    if (typeDrink.value == "Boisson froide"){
        soft = new Fresh(inputName.value, inputNb.value, inputPrice.value,typeDrink.value,inputAchatHt.value,inputVenteHt.value, "","","")
        liste.push(soft)
        console.log(soft)
    }

    else if (typeDrink.value == "Boisson chaude"){
        hot = new Hot(inputName.value, inputNb.value, inputPrice.value,typeDrink.value,inputAchatHt.value,inputVenteHt.value,"","","")
        liste.push(hot)
        console.log(hot)
    }
    else if (typeDrink.value == "Boisson alcoolisée"){
        alc = new Alcool(inputName.value, inputNb.value, inputPrice.value,typeDrink.value,inputAchatHt.value,inputVenteHt.value,"","","")
        liste.push(alc)
        console.log(alc)
    }
    else if (typeDrink.value == "Autre produit"){
        
    }
else AutreProduit

 
    
}
    updateDom()


})
