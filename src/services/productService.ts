import type { Product } from "../models/Product";
import {  appSettings } from "../settings/appSettings";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(appSettings.apiUrl + "Product",{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }
    });
    const data: Product[] = await response.json();
    return data;
}

export async function newProduct(product: Product): Promise<void> {
    const response = await fetch(appSettings.apiUrl + "Product",{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }
    });
    await response.json();
}