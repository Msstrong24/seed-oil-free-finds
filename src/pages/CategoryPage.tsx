
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories, getCategoryBySlug } from '@/data/categories';
import { Card } from "@/components/ui/card";

interface Product {
  name: string;
  brand: string;
  ingredients: string;
  url: string;
  category: string;
  image: string;
  slug?: string;
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>(slug || 'Category');

  // Helper function to create a slug from brand and product name
  const createProductSlug = (brand: string, name: string): string => {
    const combinedString = `${brand}-${name}`;
    return combinedString
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove special characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  useEffect(() => {
    fetch("/final_chips_products_downloadable.json")
      .then((response) => response.json())
      .then((data) => {
        // Add slug to each product
        const productsWithSlugs = data.map((product: Product) => ({
          ...product,
          slug: createProductSlug(product.brand, product.name)
        }));
        setFilteredProducts(productsWithSlugs);
      })
      .catch((error) => console.error("Error loading products:", error));

    if (slug) {
      const category = getCategoryBySlug(slug);
      if (category) {
        setCategoryName(category.name);
      }
    }
  }, [slug]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <Link 
            key={index} 
            to={`/category/${slug}/product/${product.slug || ''}`}
            className="block"
          >
            <Card
              className="border p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer"
            >
              <div className="mb-4 overflow-hidden rounded-md flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-32 h-32"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-1">Brand: {product.brand}</p>
              <p className="text-gray-500 text-sm line-clamp-2">{product.ingredients}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
