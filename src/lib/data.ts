export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
  inStock: boolean;
  ingredients?: string[];
  nutritionFacts?: {
    calories: string;
    fat: string;
    carbs: string;
    protein: string;
  };
  origin?: string;
  weight?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
  products: string[];
}

export interface Order {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
  items: { productId: string; quantity: number; price: number }[];
  total: number;
  shippingAddress: string;
  trackingNumber?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = [
  { id: "classic", name: "Classic Roasted", icon: "✨", count: 8 },
  { id: "spicy", name: "Spicy & Tangy", icon: "🌶️", count: 12 },
  { id: "sweet", name: "Sweet & Savory", icon: "🍯", count: 10 },
  { id: "luxury", name: "Luxury Blends", icon: "👑", count: 6 },
  { id: "gifts", name: "Royal Gift Hampers", icon: "🎁", count: 5 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Himalayan Pink Salt Makhana",
    description: "Slow-roasted lotus seeds seasoned with hand-harvested Himalayan pink salt and a touch of pure ghee. A subtle, elegant snack for any time of day.",
    price: 12.99,
    originalPrice: 15.00,
    image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?w=800&q=80",
    category: "classic",
    rating: 4.9,
    reviews: 1240,
    badge: "Best Seller",
    inStock: true,
    ingredients: ["Popped Lotus Seeds", "Pure Ghee", "Himalayan Pink Salt"],
    nutritionFacts: { calories: "95", fat: "4g", carbs: "12g", protein: "2g" },
    origin: "Mithila, India",
    weight: "100g"
  },
  {
    id: "2",
    name: "Truffle & Parmesan Makhana",
    description: "Our signature luxury blend. Roasted fox nuts coated with authentic Italian truffle oil and aged Parmesan cheese flakes. The ultimate royal indulgence.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?w=800&q=80",
    category: "luxury",
    rating: 5.0,
    reviews: 450,
    badge: "Exclusive",
    inStock: true,
    ingredients: ["Popped Lotus Seeds", "Italian Truffle Oil", "Aged Parmesan Cheese", "Sea Salt"],
    nutritionFacts: { calories: "110", fat: "6g", carbs: "11g", protein: "3g" },
    origin: "Italy-India Fusion",
    weight: "100g"
  },
  {
    id: "3",
    name: "Peri-Peri Zest Makhana",
    description: "Fire-roasted lotus seeds tossed in a bold and spicy Peri-Peri seasoning. A perfect kick for spice lovers who don't compromise on quality.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1599481238640-4c1288750d7a?w=800&q=80",
    category: "spicy",
    rating: 4.8,
    reviews: 890,
    inStock: true,
    ingredients: ["Popped Lotus Seeds", "Olive Oil", "Peri-Peri Spices", "Lemon Zest"],
    nutritionFacts: { calories: "98", fat: "4.5g", carbs: "12g", protein: "2g" },
    origin: "Mithila, India",
    weight: "100g"
  },
  {
    id: "4",
    name: "Rose & Cardamom Royal Makhana",
    description: "Infused with the essence of fresh Damascus roses and aromatic cardamom. This sweet blend is a tribute to royal Indian heritage.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80",
    category: "sweet",
    rating: 4.7,
    reviews: 320,
    badge: "Royal Collection",
    inStock: true,
    ingredients: ["Popped Lotus Seeds", "Jaggery", "Rose Petals", "Cardamom Pods"],
    nutritionFacts: { calories: "105", fat: "3g", carbs: "18g", protein: "2g" },
    origin: "Rajasthan, India",
    weight: "100g"
  },
  {
    id: "5",
    name: "Smoked Barbeque Makhana",
    description: "Crunchy fox nuts with a deep, smoky hickory flavor and a hint of brown sugar. A sophisticated take on a classic snack flavor.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=800&q=80",
    category: "spicy",
    rating: 4.6,
    reviews: 560,
    inStock: true,
    ingredients: ["Popped Lotus Seeds", "Rice Bran Oil", "Smoked Paprika", "Brown Sugar"],
    nutritionFacts: { calories: "102", fat: "5g", carbs: "13g", protein: "2g" },
    origin: "Mithila, India",
    weight: "100g"
  },
  {
    id: "6",
    name: "Cheddar Cheese & Herbs Makhana",
    description: "Creamy white cheddar combined with a blend of Mediterranean herbs makes this makhana variety irresistibly savory.",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80",
    category: "luxury",
    rating: 4.9,
    reviews: 780,
    badge: "Chef's Choice",
    inStock: true,
    ingredients: ["Popped Lotus Seeds", "White Cheddar", "Dried Oregano", "Basil"],
    nutritionFacts: { calories: "108", fat: "6g", carbs: "11g", protein: "3g" },
    origin: "India",
    weight: "100g"
  },
  {
    id: "7",
    name: "Dark Chocolate & Sea Salt Makhana",
    description: "Rich Belgian dark chocolate meets the crunch of roasted makhana, finished with a sprinkle of sea salt. A decadent yet healthy dessert snack.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
    category: "sweet",
    rating: 5.0,
    reviews: 620,
    badge: "Indulgent",
    inStock: true,
    ingredients: ["Popped Lotus Seeds", "70% Dark Chocolate", "Sea Salt"],
    nutritionFacts: { calories: "125", fat: "7g", carbs: "14g", protein: "2g" },
    origin: "Belgium-India Fusion",
    weight: "100g"
  },
  {
    id: "8",
    name: "The Imperial Tasting Hamper",
    description: "An exquisite collection of our top 5 makhana flavors, presented in a handcrafted royal gold-leaf box. The perfect gift for any occasion.",
    price: 89.99,
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1549465220-1d8c9d9c4709?w=800&q=80",
    category: "gifts",
    rating: 5.0,
    reviews: 150,
    badge: "Limited Edition",
    inStock: true,
    ingredients: ["Various premium roasted makhana flavors"],
    origin: "Shriyans Signature",
    weight: "500g"
  },
];

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Lotus Seed & Pistachio Kheer",
    description: "A royal dessert made with creamy milk, slow-cooked makhana, and premium Iranian pistachios.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80",
    prepTime: "10 min",
    cookTime: "40 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "2 cups Shriyans Lotus Seeds (Classic)",
      "1L Full cream milk",
      "1/2 cup Sugar or Jaggery",
      "1/4 cup Chopped pistachios",
      "1 tsp Cardamom powder",
      "A pinch of Saffron"
    ],
    instructions: [
      "Crush half the roasted makhana into smaller pieces",
      "Boil milk in a heavy-bottomed pan until it reduces to 3/4 volume",
      "Add makhana and sugar, simmer for 15 minutes",
      "Stir in cardamom and saffron",
      "Garnish with pistachios and serve warm or chilled"
    ],
    products: ["1"]
  },
  {
    id: "2",
    title: "Gourmet Makhana Trail Mix",
    description: "A sophisticated blend of roasted makhana, nuts, and dried fruits for the ultimate energy boost.",
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?w=800&q=80",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "1 cup Truffle & Parmesan Makhana",
      "1/4 cup Roasted almonds",
      "1/4 cup Dried cranberries",
      "1 tbsp Pumpkin seeds",
      "A sprinkle of chili flakes"
    ],
    instructions: [
      "Combine all ingredients in a large bowl",
      "Toss gently to ensure even distribution",
      "Store in an airtight container for up to a week"
    ],
    products: ["2"]
  }
];

export const sampleOrders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "Delivered",
    items: [
      { productId: "1", quantity: 3, price: 12.99 },
      { productId: "2", quantity: 1, price: 24.99 }
    ],
    total: 63.96,
    shippingAddress: "123 Royal Avenue, Beverly Hills, CA 90210",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-20",
    status: "Shipped",
    items: [
      { productId: "8", quantity: 1, price: 89.99 },
      { productId: "7", quantity: 2, price: 21.99 }
    ],
    total: 133.97,
    shippingAddress: "456 Crown Street, Manhattan, NY 10001",
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find(r => r.id === id);
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowercaseQuery) ||
      p.description.toLowerCase().includes(lowercaseQuery) ||
      p.category.toLowerCase().includes(lowercaseQuery)
  );
}
