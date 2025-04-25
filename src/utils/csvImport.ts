
/**
 * Simple utility to import CSV data for product information
 * This will be expanded in the future to handle actual CSV imports
 */

import { Product } from "@/data/products";
import { Category } from "@/data/categories";

/**
 * Import product data from CSV
 * @param csvContent CSV content as string
 * @returns Array of product objects
 */
export const importProductsFromCSV = (csvContent: string): Partial<Product>[] => {
  // Simple implementation for now
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',');
  
  const products: Partial<Product>[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = line.split(',');
    
    const product: Record<string, any> = {};
    
    headers.forEach((header, index) => {
      // Handle special fields like purchase links
      if (header === 'purchaseLinks') {
        try {
          product[header] = JSON.parse(values[index]);
        } catch {
          product[header] = [];
        }
      } else {
        product[header] = values[index];
      }
    });
    
    products.push(product as Partial<Product>);
  }
  
  return products;
};

/**
 * Import category data from CSV
 * @param csvContent CSV content as string
 * @returns Array of category objects
 */
export const importCategoriesFromCSV = (csvContent: string): Partial<Category>[] => {
  // Similar implementation as products
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',');
  
  const categories: Partial<Category>[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = line.split(',');
    
    const category: Record<string, any> = {};
    
    headers.forEach((header, index) => {
      category[header] = values[index];
    });
    
    categories.push(category as Partial<Category>);
  }
  
  return categories;
};

/**
 * Generate a slug from a string
 * @param text Text to generate slug from
 * @returns Formatted slug
 */
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};
