
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/category/${category.slug}`);
  };
  
  return (
    <Card 
      className="overflow-hidden cursor-pointer card-hover"
      onClick={handleClick}
    >
      <div className="h-48 overflow-hidden bg-muted">
        <div 
          className="w-full h-full bg-center bg-cover"
          style={{ 
            backgroundImage: `url(${category.image}), url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?q=80&w=500')` 
          }}
        ></div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg">{category.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <span className="text-sm text-primary font-medium">View Products →</span>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
