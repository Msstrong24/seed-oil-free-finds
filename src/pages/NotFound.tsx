
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        Sorry, we couldn't find the page you're looking for. It might have been removed or doesn't exist.
      </p>
      <Button asChild>
        <Link to="/">Return to Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
