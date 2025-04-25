
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-natural-500 flex items-center justify-center">
            <span className="text-white font-bold">SF</span>
          </div>
          <span className="font-bold text-xl">Seed Oil Free Finds</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="outline">About</Button>
          <Button>Submit Product</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
