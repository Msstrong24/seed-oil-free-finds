
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

interface Product {
  name: string;
  brand: string;
  ingredients: string;
  url: string;
  status: string;
  category: string;
}

export default function CategoryPage() {
  const { slug } = useParams(); // gets the category slug from URL
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/final_chips_products_downloadable.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      });
  }, []);

  useEffect(() => {
    if (products.length > 0 && slug) {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === slug.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [products, slug]);

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
            <div className="mt-2">
              {product.status === "confirmed_clean" ? (
                <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                  Confirmed Clean
                </span>
              ) : (
                <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  Needs Review
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

