class Alcool extends Produits{
    constructor(name,quantity,price,type,achatHt,venteHt,margeHt,venteTtc,id,degree){
        super(name,quantity,price,type,achatHt,venteHt,margeHt,venteTtc,id);
        this.degree = degree;
    }
    
}