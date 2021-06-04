class Produits{
    constructor(nom,quantity,price,type,achatHt,venteHt,margeHt,venteTtc,id) {
        this.nom = nom;
        this.quantity = Number(quantity);
        this.price = price;
        this.type = type;
        this.achatHt = achatHt;
        this.venteHt = venteHt;
        this.margeHt = venteHt - achatHt;
        this.venteTtc = venteHt * 1.2;
        this.id = nom + Date.now()
    }
}