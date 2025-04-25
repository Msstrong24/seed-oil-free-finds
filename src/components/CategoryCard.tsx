
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Sandwich, Salad, UtensilsCrossed, Cake } from "lucide-react";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/category/${category.slug}`);
  };

  const getIcon = (slug: string) => {
    switch (slug) {
      case "chips-crackers":
        return <Sandwich className="w-8 h-8 text-emerald-500" />;
      case "salad-dressings":
        return <Salad className="w-8 h-8 text-emerald-500" />;
      case "cooking-oils":
        return <UtensilsCrossed className="w-8 h-8 text-emerald-500" />;
      case "baked-goods":
        return <Cake className="w-8 h-8 text-emerald-500" />;
      default:
        return <Sandwich className="w-8 h-8 text-emerald-500" />;
    }
  };
  
  return (
    <Card 
      className="hover:shadow-md transition-shadow cursor-pointer p-6 flex flex-col items-center text-center"
      onClick={handleClick}
    >
      {getIcon(category.slug)}
      <h3 className="font-semibold text-xl mt-4 mb-2">{category.name}</h3>
      <p className="text-sm text-muted-foreground">15 products</p>
    </Card>
  );
};

export default CategoryCard;
