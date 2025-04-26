
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Chips",
    description: "Chips free from seed oils",
    image: "/images/chips.jpg",
    slug: "chips-crackers"
  },
  {
    id: "2",
    name: "Salad Dressings",
    description: "Healthy dressings made without seed oils",
    image: "/images/salad-dressings.jpg",
    slug: "salad-dressings"
  },
  {
    id: "3",
    name: "Mayonnaise",
    description: "Clean mayonnaise alternatives",
    image: "/images/mayonnaise.jpg",
    slug: "mayonnaise"
  },
  {
    id: "4",
    name: "Cooking Oils",
    description: "Healthy cooking oil alternatives",
    image: "/images/cooking-oils.jpg",
    slug: "cooking-oils"
  },
  {
    id: "5",
    name: "Baked Goods",
    description: "Bread and baked items without seed oils",
    image: "/images/baked-goods.jpg",
    slug: "baked-goods"
  },
  {
    id: "6",
    name: "Nut Butters",
    description: "Clean nut and seed butters",
    image: "/images/nut-butters.jpg",
    slug: "nut-butters"
  }
];

export function getCategoryBySlug(slug: string, categoriesData: Category[] = categories): Category | undefined {
  return categoriesData.find(category => category.slug === slug);
}
