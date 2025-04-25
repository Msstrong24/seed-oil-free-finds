
export interface Product {
  id: string;
  categoryId: string;
  name: string;
  brand: string;
  description: string;
  ingredients: string;
  image: string;
  website: string;
  purchaseLinks: {
    name: string;
    url: string;
  }[];
  slug: string;
}

export const products: Product[] = [
  {
    id: "101",
    categoryId: "1",
    name: "Sea Salt Potato Chips",
    brand: "Jackson's",
    description: "Classic potato chips cooked in coconut oil with sea salt.",
    ingredients: "Potatoes, coconut oil, sea salt",
    image: "/images/jacksons-chips.jpg",
    website: "https://jacksons.com",
    purchaseLinks: [
      {
        name: "Amazon",
        url: "https://amazon.com/jacksons"
      },
      {
        name: "Thrive Market",
        url: "https://thrivemarket.com/jacksons"
      }
    ],
    slug: "jacksons-sea-salt-potato-chips"
  },
  {
    id: "102",
    categoryId: "1",
    name: "Grain Free Sea Salt Crackers",
    brand: "Simple Mills",
    description: "Delicious grain-free crackers made with almond flour and baked with coconut oil.",
    ingredients: "Almond flour, coconut flour, tapioca starch, coconut oil, sea salt",
    image: "/images/simple-mills-crackers.jpg",
    website: "https://simplemills.com",
    purchaseLinks: [
      {
        name: "Amazon",
        url: "https://amazon.com/simplemills"
      },
      {
        name: "Thrive Market",
        url: "https://thrivemarket.com/simplemills"
      }
    ],
    slug: "simple-mills-grain-free-sea-salt-crackers"
  },
  {
    id: "201",
    categoryId: "2",
    name: "Organic Ranch Dressing",
    brand: "Primal Kitchen",
    description: "Organic ranch dressing made with avocado oil.",
    ingredients: "Water, avocado oil, organic egg yolks, organic apple cider vinegar, sea salt, organic onion, organic garlic, organic herbs",
    image: "/images/primal-kitchen-ranch.jpg",
    website: "https://primalkitchen.com",
    purchaseLinks: [
      {
        name: "Amazon",
        url: "https://amazon.com/primalkitchen"
      },
      {
        name: "Thrive Market",
        url: "https://thrivemarket.com/primalkitchen"
      }
    ],
    slug: "primal-kitchen-organic-ranch-dressing"
  },
  {
    id: "301",
    categoryId: "3",
    name: "Avocado Oil Mayonnaise",
    brand: "Chosen Foods",
    description: "Classic mayonnaise made with pure avocado oil.",
    ingredients: "Avocado oil, egg yolks, water, distilled vinegar, salt, rosemary extract",
    image: "/images/chosen-foods-mayo.jpg",
    website: "https://chosenfoods.com",
    purchaseLinks: [
      {
        name: "Amazon",
        url: "https://amazon.com/chosenfoods"
      },
      {
        name: "Thrive Market",
        url: "https://thrivemarket.com/chosenfoods"
      }
    ],
    slug: "chosen-foods-avocado-oil-mayonnaise"
  }
];

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(product => product.categoryId === categoryId);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getCategoryBySlug(slug: string, categoriesData: any[]): any | undefined {
  return categoriesData.find(category => category.slug === slug);
}
