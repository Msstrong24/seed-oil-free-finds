
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="bg-natural-100 rounded-lg p-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Foods Without Seed Oils</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">Search our list to find food products that are seed oil free.</p>
          <div className="grid grid-cols-3 gap-4 max-w-md">
            <div className="p-3 bg-white rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-natural-500">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-natural-500">100+</div>
              <div className="text-sm text-muted-foreground">Products</div>
            </div>
            <div className="p-3 bg-white rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-natural-500">50+</div>
              <div className="text-sm text-muted-foreground">Brands</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
            Categories
          </div>
          <h2 className="text-4xl font-bold mb-4">Browse By Food Type</h2>
          <p className="text-xl text-muted-foreground">
            Explore our curated categories of seed oil-free products
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fade-in">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="mb-12">
        <div className="bg-secondary rounded-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-3">Why Avoid Seed Oils?</h2>
              <p className="text-muted-foreground mb-4">
                Seed oils are highly processed, industrial oils that are high in omega-6 fatty acids. 
                Research suggests excessive consumption may contribute to inflammation and various health problems.
              </p>
              <p className="text-muted-foreground">
                We're here to help you find delicious alternatives made with healthier fats like olive oil, 
                coconut oil, avocado oil, and animal fats.
              </p>
            </div>
            <div className="md:w-1/3">
              <ul className="bg-white p-4 rounded-lg shadow-sm">
                <li className="mb-2 pb-2 border-b">✓ No Canola/Rapeseed Oil</li>
                <li className="mb-2 pb-2 border-b">✓ No Soybean Oil</li>
                <li className="mb-2 pb-2 border-b">✓ No Corn Oil</li>
                <li className="mb-2 pb-2 border-b">✓ No Sunflower/Safflower Oil</li>
                <li>✓ No Cottonseed Oil</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
