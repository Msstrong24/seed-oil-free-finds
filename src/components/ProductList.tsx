
import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  name: string;
  brand: string;
  ingredients: string;
  url: string;
  category: string;
  image: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/final_chips_products_downloadable.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product, index) => (
        <div key={index} className="border p-4 rounded-lg shadow hover:shadow-md transition">
          <div className="mb-4 overflow-hidden rounded-md flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain w-32 h-32"
            />
          </div>
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
  );
}
