

export const fetchProducts = async () => { 
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;

 }

 export const fetchSingleProduct = async (productId) => {
   const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
   const data = await res.json();
   return data;
 }
