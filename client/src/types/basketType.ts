export interface Product {
    product_id: string;
    quantity: number;
  }
  
  export interface basketType {
    user_id: string;
    products: Product[];
  }