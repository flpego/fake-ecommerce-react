export const fetchProducts = async () => { 
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new Error('Error fetching products: Server responded with status ' + res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching products: ' + error.message);
  }
}



 

 export const fetchSingleProduct = async (productId) => {
   const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
   const data = await res.json();
   return data;
 }
