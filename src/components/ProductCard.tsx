
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  categorySlug: string;
}

const ProductCard = ({ product, categorySlug }: ProductCardProps) => {
  return (
    <Link to={`/category/${categorySlug}/product/${product.slug}`}>
      <Card className="overflow-hidden cursor-pointer card-hover">
        <div className="h-48 overflow-hidden bg-muted">
          <div 
            className="w-full h-full bg-center bg-cover"
            style={{ 
              backgroundImage: `url(${product.image}), url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=500')` 
            }}
          ></div>
        </div>
        <CardContent className="p-4">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</div>
          <h3 className="font-semibold text-lg leading-tight">{product.name}</h3>
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{product.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
