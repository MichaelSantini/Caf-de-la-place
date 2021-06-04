
let btnValidate = document.getElementById("btnValidate")
let tbody = document.getElementById("tbody")
let degree = document.getElementById("degree")
degree.style.display = "none"
degree.style.width = "80px"

let btnHisto = document.getElementById("btnHisto")
let boxHisto = document.getElementById("boxHisto")
let btnRetirerHisto = document.getElementById("btnRetirerHisto")
// bouton historique / 

btnRetirerHisto.style.display ="none"
btnHisto.addEventListener("click", function (e) {

    boxHisto.style.display = "inline-block"
    btnHisto.style.display ="none"
    btnRetirerHisto.style.display="inline-block"

    btnRetirerHisto.addEventListener("click", function(e){
        boxHisto.style.display = "none"
    btnHisto.style.display ="inline-block"
    btnRetirerHisto.style.display="none"
    })

})

/* -------------------------------
    Affichage / Supression degree
----------------------------------*/

typeDrink.addEventListener("input", function (e) {

    if (typeDrink.value == "Boisson alcoolisée") {
        degree.style.display = "inline-block"
    }

    else {
        degree.style.display = "none"
    }

})

/* -------------------------------
    Fonction supprimer
----------------------------------*/
function deleteProducts(nom) {
    let index = liste.findIndex(function (Produits) {
        return Produits.id === nom.id;
    });
    liste.splice(index, 1);
}
/* -------------------------------
    Fonction création de produit
----------------------------------*/

function updateDom() {
    tbody.innerText = "";


    for (const products of liste) {
        console.log(products)

        /* --------------------------
            Création de contenu
        -----------------------------*/

        let row = document.createElement("tr");
        let elemId = document.createElement("td")
        let elemName = document.createElement("td");
        let elemAmount = document.createElement("td")
        let elemPrice = document.createElement("td");
        let elemType = document.createElement("td");
        let elemAchatHt = document.createElement("td");
        let elemVenteHt = document.createElement("td")
        let elemMargeHt = document.createElement("td")
        let elemVenteTtc = document.createElement("td")
        let elemInterac = document.createElement("td")
        let btnAddProduct = document.createElement("button")
        let btnRetirerProduct = document.createElement("button")
        let btnDelete = document.createElement("button")
        let btnModif = document.createElement("button")


        elemId.innerText = products.id
        elemName.innerText = products.nom;
        elemAmount.innerText = products.quantity;
        elemPrice.innerText = products.price + " €";
        elemType.innerText = products.type;
        elemAchatHt.innerText = products.achatHt + " €";
        elemVenteHt.innerText = products.venteHt + " €";
        elemMargeHt.innerText = products.margeHt + " €";
        elemVenteTtc.innerText = products.venteTtc + " €";
        btnAddProduct.innerText = "+1";
        btnDelete.innerText = "Supprimer"
        btnRetirerProduct.innerText = "-1";
        btnModif.innerText = "Modifier"




        /* ------------------------------
         Code couleur selon la quantité
        ---------------------------------*/
        if (products.quantity < 2) {
            elemId.style.borderLeft = "6px solid red"
            
        }
        else if (products.quantity >= 2 && products.quantity < 5) {
            elemId.style.borderLeft = "6px solid orange"

        }
        else if (products.quantity >= 5) {
            elemId.style.borderLeft = "6px solid green"
        }

        /* --------------------------
            ajouter +1 quantité 
        -----------------------------*/
        btnAddProduct.addEventListener("click", function (e) {
            elemAmount.innerText = ""
            products.quantity = products.quantity + 1
            console.log("Actuel " + products.quantity)
            elemAmount.innerText = products.quantity
            if (products.quantity < 2) {
                elemId.style.borderLeft = "6px solid red"
                
            }
            else if (products.quantity >= 2 && products.quantity < 5) {
                elemId.style.borderLeft = "6px solid orange"
            }
            else if (products.quantity >= 5) {
                elemId.style.borderLeft = "6px solid green"
            }
        })

        /* --------------------------
            Retirer -1 quantité 
        -----------------------------*/
        btnRetirerProduct.addEventListener("click", function (e) {
            elemAmount.innerText = ""
            products.quantity = products.quantity - 1
            console.log("Actuel " + products.quantity)
            elemAmount.innerText = products.quantity
            if (products.quantity < 0) {
                deleteProducts(products)
                updateDom();
                alert("Produit retiré")
            }
            else if (products.quantity < 2) {
                elemId.style.borderLeft = "6px solid red"
                
            }
            else if (products.quantity >= 2 && products.quantity < 5) {
                elemId.style.borderLeft = "6px solid orange"
            }
            else if (products.quantity >= 5) {
                elemId.style.borderLeft = "6px solid green"
            }
        })



        /* --------------------------
           Les appenshilds 
        -----------------------------*/
        tbody.appendChild(row);
        row.append(elemId)
        row.appendChild(elemName);
        row.appendChild(elemAmount);
        row.appendChild(elemPrice);
        row.appendChild(elemType);
        row.appendChild(elemAchatHt);
        row.appendChild(elemVenteHt);
        row.appendChild(elemMargeHt);
        row.appendChild(elemVenteTtc);
        row.appendChild(elemInterac)

        elemInterac.appendChild(btnRetirerProduct)
        elemInterac.appendChild(btnAddProduct)
        elemInterac.appendChild(btnModif)

        elemInterac.appendChild(btnDelete)
        row.style.textAlign = "center"

        btnDelete.style.width = "100px"
        btnModif.style.width = "100px"

        btnRetirerProduct.style.width = "40px"
        btnAddProduct.style.width = "40px"

        elemName.style.backgroundColor = "white"
        elemPrice.style.backgroundColor = "white"
        elemType.style.backgroundColor = "white"
        elemAmount.style.backgroundColor = "white"
        elemName.style.backgroundColor = "white"
        elemMargeHt.style.backgroundColor = "white"
        elemAchatHt.style.backgroundColor = "white"
        elemVenteHt.style.backgroundColor = "white"
        elemVenteTtc.style.backgroundColor = "white"
        row.style.backgroundColor = "white"


        /* --------------------------
           Bouton supprimer
       -----------------------------*/
        btnDelete.addEventListener("click", function (e) {
            deleteProducts(products);
            updateDom()
        })

        /* --------------------------
           Bouton modifier
       -----------------------------*/
        let modifName = document.createElement("input")
        let modifAmount = document.createElement("input")
        let modifPrice = document.createElement("input")
        let btnConfirm = document.createElement("button")
        modifName.style.width = "80px"
        modifAmount.style.width = "80px"
        modifPrice.style.width = "80px"
        btnConfirm.innerText = "Confirmer"

        btnModif.addEventListener("click", function (e) {
            modifName.value = products.nom
            modifAmount.value = products.quantity
            modifPrice.value = products.price

            elemInterac.appendChild(btnConfirm)
            btnConfirm.style.display = "inline-block"
            btnConfirm.innerText = "Confirmer"

            elemName.appendChild(modifName)
            elemAmount.appendChild(modifAmount)
            elemPrice.appendChild(modifPrice)

            btnConfirm.addEventListener("click", function (e) {
                
                elemName.innerText = modifName.value
                elemAmount.innerText = modifAmount.value
                elemPrice.innerText = modifPrice.value + " €"
                btnModif.style.display = "inline-block"


                products.nom = modifName.value
                products.quantity = modifAmount.value
                products.price = modifPrice.value
                if (products.quantity < 0) {
                    deleteProducts(products)
                    updateDom();
                    alert("Produit retiré")
                }
                else if (products.quantity < 2) {
                    elemId.style.borderLeft = "6px solid red"
                }
                else if (products.quantity >= 2 && products.quantity < 5) {
                    elemId.style.borderLeft = "6px solid orange"
                }
                else if (products.quantity >= 5) {
                    elemId.style.borderLeft = "6px solid green"
                }
            })
        })

        /* --------------------------
           Style général 
       -----------------------------*/


        row.addEventListener("pointerover", function (e) {
            row.style.backgroundColor = "rgb(140, 223, 248)"
            elemName.style.backgroundColor = "rgb(140, 223, 248)"
            elemPrice.style.backgroundColor = "rgb(140, 223, 248)"
            elemType.style.backgroundColor = "rgb(140, 223, 248)"
            elemAmount.style.backgroundColor = "rgb(140, 223, 248)"
            elemName.style.backgroundColor = "rgb(140, 223, 248)"
            elemMargeHt.style.backgroundColor = "rgb(140, 223, 248)"
            elemAchatHt.style.backgroundColor = "rgb(140, 223, 248)"
            elemVenteHt.style.backgroundColor = "rgb(140, 223, 248)"
            elemVenteTtc.style.backgroundColor = "rgb(140, 223, 248)"
            elemId.style.backgroundColor = "rgb(140, 223, 248)"


            row.addEventListener("pointerout", function (e) {
                if (products.quantity < 0) {
                    deleteProducts(products)
                    updateDom();
                    alert("Produit retiré")
                }
                else if (products.quantity < 2) {
                    elemId.style.borderLeft = "6px solid red"
                    elemName.style.backgroundColor = "white"
                    elemId.style.backgroundColor = "white"
                    elemPrice.style.backgroundColor = "white"
                    elemType.style.backgroundColor = "white"
                    elemAmount.style.backgroundColor = "white"
                    elemName.style.backgroundColor = "white"
                    elemMargeHt.style.backgroundColor = "white"
                    elemAchatHt.style.backgroundColor = "white"
                    elemVenteHt.style.backgroundColor = "white"
                    elemVenteTtc.style.backgroundColor = "white"
                    row.style.backgroundColor = "white"

                }
                else if (products.quantity >= 2 && products.quantity < 5) {
                    elemId.style.borderLeft = "6px solid orange"
                    row.style.backgroundColor = "white"
                    elemName.style.backgroundColor = "white"
                    elemPrice.style.backgroundColor = "white"
                    elemType.style.backgroundColor = "white"
                    elemAmount.style.backgroundColor = "white"
                    elemName.style.backgroundColor = "white"
                    elemMargeHt.style.backgroundColor = "white"
                    elemAchatHt.style.backgroundColor = "white"
                    elemVenteHt.style.backgroundColor = "white"
                    elemId.style.backgroundColor = "white"
                    elemVenteTtc.style.backgroundColor = "white"
                }
                else if (products.quantity >= 5) {
                    elemId.style.borderLeft = "6px solid green"
                    elemName.style.backgroundColor = "white"
                    elemPrice.style.backgroundColor = "white"
                    elemType.style.backgroundColor = "white"
                    elemAmount.style.backgroundColor = "white"
                    elemName.style.backgroundColor = "white"
                    elemMargeHt.style.backgroundColor = "white"
                    elemAchatHt.style.backgroundColor = "white"
                    elemVenteHt.style.backgroundColor = "white"
                    elemVenteTtc.style.backgroundColor = "white"
                    elemId.style.backgroundColor = "white"
                    elemInterac.style.backgroundColor = "white"

                }

            })
        })
    }
}






