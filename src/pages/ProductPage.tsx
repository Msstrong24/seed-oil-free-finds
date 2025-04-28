
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategoryBySlug } from "@/data/categories";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";

interface Product {
  name: string;
  brand: string;
  ingredients: string;
  url: string;
  category: string;
  image: string;
  slug?: string;
}

const ProductPage = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string, productSlug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Helper function to create a slug from brand and product name (same as in CategoryPage)
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
    if (categorySlug) {
      // Find the category first
      const foundCategory = getCategoryBySlug(categorySlug, categories);
      if (foundCategory) {
        setCategory(foundCategory);
      }
      
      // Fetch products and find the matching one by slug
      fetch("/final_chips_products_downloadable.json")
        .then((response) => response.json())
        .then((data) => {
          const matchingProduct = data.find((p: Product) => {
            const slug = createProductSlug(p.brand, p.name);
            return slug === productSlug;
          });
          
          if (matchingProduct) {
            setProduct(matchingProduct);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading products:", error);
          setLoading(false);
        });
    }
  }, [categorySlug, productSlug]);
  
  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading product details...</div>;
  }
  
  if (!product || !category) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="flex mb-8" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link 
                to={`/category/${categorySlug}`}
                className="ml-1 text-sm text-muted-foreground hover:text-primary"
              >
                {category.name}
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="ml-1 text-sm font-medium truncate max-w-[200px]">{product.name}</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
        <div>
          <div 
            className="rounded-lg overflow-hidden bg-muted h-96 bg-center bg-cover flex items-center justify-center"
            style={{ 
              backgroundImage: product.image ? `url(${product.image})` : undefined,
              backgroundColor: !product.image ? '#f3f4f6' : undefined
            }}
          >
            {!product.image && <span className="text-gray-400">No image available</span>}
          </div>
        </div>
        
        <div>
          <div className="text-sm uppercase text-muted-foreground tracking-wider mb-1">{product.brand}</div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="mb-6">
            <p className="text-lg">{product.category}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <p className="text-muted-foreground">{product.ingredients}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Where to Buy</h2>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-2 bg-secondary rounded-full text-sm hover:bg-secondary/80"
            >
              View on Amazon
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
