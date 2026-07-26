export const cart = [];

export function addtocart(productId){
        let matchingItem;

      cart.forEach((Cartitem) =>{
        if(productId === Cartitem.productId){
           matchingItem = Cartitem;
        }
      });
      if(matchingItem) {
        matchingItem.quantity++;
      }
      else{
cart.push({
        productId: productId,
        quantity:1
        });
      }
}