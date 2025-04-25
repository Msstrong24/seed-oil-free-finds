
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategoryBySlug } from "@/data/products";
import { getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { ChevronRight } from "lucide-react";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [category, setCategory] = useState<any | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  
  useEffect(() => {
    if (slug) {
      const foundCategory = getCategoryBySlug(slug, categories);
      if (foundCategory) {
        setCategory(foundCategory);
        const categoryProducts = getProductsByCategory(foundCategory.id);
        setProducts(categoryProducts);
      }
    }
  }, [slug]);
  
  if (!category) {
    return <div className="container mx-auto px-4 py-8">Category not found</div>;
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
              <span className="ml-1 text-sm font-medium">{category.name}</span>
            </div>
          </li>
        </ol>
      </nav>
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        <p className="text-muted-foreground">{category.description}</p>
      </div>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-in">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} categorySlug={slug || ''} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted rounded-lg">
          <h3 className="text-lg font-semibold mb-2">No products found</h3>
          <p className="text-muted-foreground mb-6">
            We haven't added products to this category yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
