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
  { id: "chocolates", name: "Artisan Chocolates", icon: "🍫", count: 24 },
  { id: "caviar", name: "Premium Caviar", icon: "🥄", count: 12 },
  { id: "truffles", name: "Gourmet Truffles", icon: "🍄", count: 18 },
  { id: "nuts", name: "Exotic Nuts", icon: "🥜", count: 15 },
  { id: "dried-fruits", name: "Dried Fruits", icon: "🍇", count: 20 },
  { id: "honey", name: "Rare Honey", icon: "🍯", count: 8 },
  { id: "cheese", name: "Aged Cheese", icon: "🧀", count: 16 },
  { id: "tea", name: "Premium Tea", icon: "🍵", count: 22 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Belgian Dark Chocolate Truffles",
    description: "Hand-crafted dark chocolate truffles infused with Madagascar vanilla and dusted with 24k gold flakes. Each piece is a masterpiece of confectionery art.",
    price: 89.99,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80",
    category: "chocolates",
    rating: 4.9,
    reviews: 342,
    badge: "Best Seller",
    inStock: true,
    ingredients: ["Belgian cocoa", "Madagascar vanilla", "24k gold flakes", "Organic cream"],
    nutritionFacts: { calories: "120", fat: "8g", carbs: "12g", protein: "2g" },
    origin: "Belgium",
    weight: "250g"
  },
  {
    id: "2",
    name: "Beluga Caviar Imperial",
    description: "The finest Beluga caviar sourced from the Caspian Sea. Buttery, nutty flavor with a delicate finish that melts on your palate.",
    price: 459.99,
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
    category: "caviar",
    rating: 5.0,
    reviews: 89,
    badge: "Exclusive",
    inStock: true,
    ingredients: ["Wild Beluga sturgeon roe", "Sea salt"],
    nutritionFacts: { calories: "42", fat: "3g", carbs: "0g", protein: "4g" },
    origin: "Caspian Sea",
    weight: "50g"
  },
  {
    id: "3",
    name: "Alba White Truffle Collection",
    description: "Rare white truffles from Alba, Italy. Known as the 'diamonds of the kitchen', these truffles offer an unparalleled aromatic experience.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?w=800&q=80",
    category: "truffles",
    rating: 4.8,
    reviews: 156,
    badge: "Limited Edition",
    inStock: true,
    ingredients: ["Fresh Alba white truffles"],
    nutritionFacts: { calories: "30", fat: "0.5g", carbs: "5g", protein: "3g" },
    origin: "Alba, Italy",
    weight: "30g"
  },
  {
    id: "4",
    name: "Persian Saffron Pistachios",
    description: "Premium Iranian pistachios infused with authentic Persian saffron. A royal snack fit for emperors.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=800&q=80",
    category: "nuts",
    rating: 4.7,
    reviews: 278,
    inStock: true,
    ingredients: ["Iranian pistachios", "Persian saffron", "Himalayan pink salt"],
    nutritionFacts: { calories: "160", fat: "14g", carbs: "8g", protein: "6g" },
    origin: "Iran",
    weight: "200g"
  },
  {
    id: "5",
    name: "Medjool Date Crown Collection",
    description: "Hand-picked Medjool dates stuffed with mascarpone and wrapped in edible gold leaf. Nature's candy elevated to royalty.",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800&q=80",
    category: "dried-fruits",
    rating: 4.9,
    reviews: 412,
    badge: "Popular",
    inStock: true,
    ingredients: ["Medjool dates", "Italian mascarpone", "Edible gold leaf"],
    nutritionFacts: { calories: "90", fat: "2g", carbs: "20g", protein: "1g" },
    origin: "Jordan",
    weight: "300g"
  },
  {
    id: "6",
    name: "Manuka Honey UMF 25+",
    description: "Ultra-premium Manuka honey from New Zealand with exceptional UMF 25+ rating. Liquid gold with powerful natural properties.",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&q=80",
    category: "honey",
    rating: 5.0,
    reviews: 198,
    badge: "Premium",
    inStock: true,
    ingredients: ["100% Pure Manuka honey"],
    nutritionFacts: { calories: "70", fat: "0g", carbs: "17g", protein: "0g" },
    origin: "New Zealand",
    weight: "250g"
  },
  {
    id: "7",
    name: "Aged Parmigiano Reggiano 72-Month",
    description: "Exceptionally aged Parmigiano Reggiano matured for 72 months. Crystal-studded texture with intense umami complexity.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=800&q=80",
    category: "cheese",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    ingredients: ["Raw cow's milk", "Salt", "Rennet"],
    nutritionFacts: { calories: "110", fat: "7g", carbs: "1g", protein: "10g" },
    origin: "Parma, Italy",
    weight: "500g"
  },
  {
    id: "8",
    name: "Da Hong Pao Oolong Tea",
    description: "Legendary 'Big Red Robe' oolong from Wuyi Mountains. One of China's most prestigious teas with orchid notes and mineral depth.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&q=80",
    category: "tea",
    rating: 4.9,
    reviews: 167,
    badge: "Rare",
    inStock: true,
    ingredients: ["Da Hong Pao oolong leaves"],
    nutritionFacts: { calories: "0", fat: "0g", carbs: "0g", protein: "0g" },
    origin: "Fujian, China",
    weight: "100g"
  },
  {
    id: "9",
    name: "Swiss Milk Chocolate Bars",
    description: "Velvety Swiss milk chocolate crafted with Alpine milk and single-origin cocoa. Pure chocolate perfection.",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=800&q=80",
    category: "chocolates",
    rating: 4.6,
    reviews: 523,
    inStock: true,
    ingredients: ["Swiss cocoa", "Alpine milk", "Cane sugar", "Cocoa butter"],
    nutritionFacts: { calories: "150", fat: "9g", carbs: "16g", protein: "2g" },
    origin: "Switzerland",
    weight: "200g"
  },
  {
    id: "10",
    name: "Oscietra Caviar Premium",
    description: "Golden-hued Oscietra caviar with nutty, briny notes. A more accessible luxury for the discerning palate.",
    price: 289.99,
    image: "https://images.unsplash.com/photo-1614255118786-65e1d7e63c47?w=800&q=80",
    category: "caviar",
    rating: 4.7,
    reviews: 145,
    inStock: true,
    ingredients: ["Oscietra sturgeon roe", "Sea salt"],
    nutritionFacts: { calories: "40", fat: "3g", carbs: "0g", protein: "4g" },
    origin: "Russia",
    weight: "50g"
  },
  {
    id: "11",
    name: "Macadamia Nut Selection",
    description: "Premium Australian macadamias roasted to perfection with a hint of truffle oil and fleur de sel.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1474993036052-b2e136656e4a?w=800&q=80",
    category: "nuts",
    rating: 4.8,
    reviews: 312,
    badge: "New",
    inStock: true,
    ingredients: ["Australian macadamias", "Truffle oil", "Fleur de sel"],
    nutritionFacts: { calories: "200", fat: "21g", carbs: "4g", protein: "2g" },
    origin: "Australia",
    weight: "250g"
  },
  {
    id: "12",
    name: "Aged Gruyère Reserve",
    description: "18-month aged Swiss Gruyère with complex caramel notes and crystalline texture. A cheese connoisseur's dream.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&q=80",
    category: "cheese",
    rating: 4.7,
    reviews: 189,
    inStock: true,
    ingredients: ["Raw cow's milk", "Salt", "Rennet"],
    nutritionFacts: { calories: "117", fat: "9g", carbs: "0g", protein: "8g" },
    origin: "Switzerland",
    weight: "400g"
  },
];

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Truffle-Infused Risotto",
    description: "A luxurious risotto topped with fresh Alba white truffles and aged Parmigiano Reggiano.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    prepTime: "15 min",
    cookTime: "35 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "2 cups Arborio rice",
      "1L warm chicken stock",
      "1 cup dry white wine",
      "Alba White Truffle (10g)",
      "100g Aged Parmigiano Reggiano",
      "4 tbsp butter",
      "1 shallot, finely diced",
      "Fresh thyme"
    ],
    instructions: [
      "Sauté shallot in butter until translucent",
      "Add rice and toast for 2 minutes",
      "Pour in wine and stir until absorbed",
      "Add stock one ladle at a time, stirring constantly",
      "When rice is al dente, remove from heat",
      "Fold in butter and Parmigiano",
      "Shave fresh truffle on top and serve immediately"
    ],
    products: ["3", "7"]
  },
  {
    id: "2",
    title: "Caviar Blini Canapés",
    description: "Classic Russian blinis topped with crème fraîche and premium Beluga caviar.",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=800&q=80",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 12,
    difficulty: "Easy",
    ingredients: [
      "1 cup buckwheat flour",
      "1/2 cup all-purpose flour",
      "1 egg",
      "1 cup milk",
      "200ml crème fraîche",
      "Beluga Caviar Imperial (30g)",
      "Fresh chives",
      "Lemon wedges"
    ],
    instructions: [
      "Mix flours, egg, and milk to form smooth batter",
      "Rest batter for 30 minutes",
      "Cook small pancakes in buttered pan",
      "Cool blinis slightly",
      "Top each with a dollop of crème fraîche",
      "Add a spoonful of caviar",
      "Garnish with chives and serve with lemon"
    ],
    products: ["2"]
  },
  {
    id: "3",
    title: "Chocolate Truffle Tasting Board",
    description: "An elegant presentation of our Belgian truffles paired with rare teas and honey.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=800&q=80",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: 6,
    difficulty: "Easy",
    ingredients: [
      "Belgian Dark Chocolate Truffles (1 box)",
      "Da Hong Pao Oolong Tea",
      "Manuka Honey UMF 25+",
      "Fresh berries",
      "Edible flowers",
      "Gold leaf for garnish"
    ],
    instructions: [
      "Arrange truffles on a marble or slate board",
      "Brew Da Hong Pao tea at 95°C for 3 minutes",
      "Drizzle honey in a small dish",
      "Add fresh berries around the truffles",
      "Garnish with edible flowers and gold leaf",
      "Serve tea alongside for perfect pairing"
    ],
    products: ["1", "6", "8"]
  },
  {
    id: "4",
    title: "Stuffed Dates with Cheese",
    description: "Medjool dates stuffed with aged cheese and drizzled with premium honey.",
    image: "https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?w=800&q=80",
    prepTime: "15 min",
    cookTime: "5 min",
    servings: 8,
    difficulty: "Easy",
    ingredients: [
      "Medjool Date Crown Collection (12 pieces)",
      "Aged Parmigiano Reggiano (100g)",
      "Manuka Honey UMF 25+",
      "Walnuts",
      "Fresh rosemary",
      "Flaky sea salt"
    ],
    instructions: [
      "Slice dates lengthwise, keeping one side attached",
      "Remove pits carefully",
      "Break cheese into small chunks",
      "Stuff each date with cheese and a walnut",
      "Drizzle with Manuka honey",
      "Sprinkle with sea salt and rosemary",
      "Serve at room temperature"
    ],
    products: ["5", "6", "7"]
  }
];

export const sampleOrders: Order[] = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "Delivered",
    items: [
      { productId: "1", quantity: 2, price: 89.99 },
      { productId: "5", quantity: 1, price: 64.99 }
    ],
    total: 244.97,
    shippingAddress: "123 Royal Avenue, Beverly Hills, CA 90210",
    trackingNumber: "LUX123456789"
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-20",
    status: "Shipped",
    items: [
      { productId: "2", quantity: 1, price: 459.99 },
      { productId: "8", quantity: 1, price: 199.99 }
    ],
    total: 659.98,
    shippingAddress: "456 Crown Street, Manhattan, NY 10001",
    trackingNumber: "LUX987654321"
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-25",
    status: "Processing",
    items: [
      { productId: "3", quantity: 1, price: 299.99 },
      { productId: "6", quantity: 2, price: 189.99 },
      { productId: "7", quantity: 1, price: 149.99 }
    ],
    total: 829.96,
    shippingAddress: "789 Imperial Drive, Miami, FL 33101"
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
