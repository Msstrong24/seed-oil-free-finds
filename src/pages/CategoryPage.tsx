
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  name: string;
  brand: string;
  ingredients: string;
  url: string;
  status: string;
  category: string;
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load products from the JSON file
    fetch("/final_chips_products_downloadable.json")
      .then((response) => response.json())
      .then((data) => {
        // Filter products based on category if needed
        // For now, we're showing all products from the JSON file
        // This can be enhanced later to filter by specific categories
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Error loading products:", error));
  }, [slug]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">{slug}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-1">Brand: {product.brand}</p>
            <p className="text-gray-500 text-sm">{product.ingredients}</p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 hover:underline"
            >
              View Product
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
