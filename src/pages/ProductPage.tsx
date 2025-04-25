
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductBySlug, getCategoryBySlug } from "@/data/products";
import { categories } from "@/data/categories";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";

const ProductPage = () => {
  const { categorySlug, productSlug } = useParams<{ categorySlug: string, productSlug: string }>();
  const [product, setProduct] = useState<any | null>(null);
  const [category, setCategory] = useState<any | null>(null);
  
  useEffect(() => {
    if (productSlug) {
      const foundProduct = getProductBySlug(productSlug);
      if (foundProduct) {
        setProduct(foundProduct);
        
        if (categorySlug) {
          const foundCategory = getCategoryBySlug(categorySlug, categories);
          if (foundCategory) {
            setCategory(foundCategory);
          }
        }
      }
    }
  }, [productSlug, categorySlug]);
  
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
            className="rounded-lg overflow-hidden bg-muted h-96 bg-center bg-cover"
            style={{ 
              backgroundImage: `url(${product.image}), url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=500')`
            }}
          ></div>
        </div>
        
        <div>
          <div className="text-sm uppercase text-muted-foreground tracking-wider mb-1">{product.brand}</div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="mb-6">
            <p className="text-lg">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <p className="text-muted-foreground">{product.ingredients}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Where to Buy</h2>
            <div className="flex flex-wrap gap-2">
              {product.purchaseLinks.map((link: any, index: number) => (
                <a 
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-4 py-2 bg-secondary rounded-full text-sm hover:bg-secondary/80"
                >
                  {link.name}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Official Website</h2>
            <a
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Visit {product.brand} Website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
