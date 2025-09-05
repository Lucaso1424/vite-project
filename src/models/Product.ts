export interface Product {
    productId: number; 
    name: string;
    description: string; 
    price: number; 
    onSale: boolean; 
    categoryId: number 
    createdDate: Date;
}