
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Chips, Salad, CookingPot, Baking } from "lucide-react";
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
        return <Chips className="w-8 h-8 text-emerald-500" />;
      case "salad-dressings":
        return <Salad className="w-8 h-8 text-emerald-500" />;
      case "cooking-oils":
        return <CookingPot className="w-8 h-8 text-emerald-500" />;
      case "baked-goods":
        return <Baking className="w-8 h-8 text-emerald-500" />;
      default:
        return <Chips className="w-8 h-8 text-emerald-500" />;
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
