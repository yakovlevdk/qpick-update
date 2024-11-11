import { productType } from '../types/productType';

export const updateProductApi = async (productId: string, productDetails: productType) => {
  
    console.log('до отправки запроса')
    const response = await fetch(`http://localhost:3000/products/edit/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productDetails),
      credentials: "include",
    });

    console.log('после отправки запроса')
    return await response.json();
 
};