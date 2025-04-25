
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Seed Oil Free Finds</h3>
            <p className="text-muted-foreground">
              Discovering and sharing food products without harmful seed oils.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/submit" className="hover:text-primary">Submit a Product</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-2">
              Stay updated with new seed oil free products.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 border rounded flex-1"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Seed Oil Free Finds. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
