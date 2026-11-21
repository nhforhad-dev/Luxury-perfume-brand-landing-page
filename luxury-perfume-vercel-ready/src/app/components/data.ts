// Shared content + product data for ROVÉNAIRE

export type Category = "Women" | "Men" | "Unisex";

export interface Product {
  id: string;
  name: string;
  category: Category;
  tagline: string;
  notes: string[];
  price: number;
  rating: number;
  reviews: number;
  image: string;
  family: string; // floral, woody, etc.
  bestseller?: boolean;
}

const u = (id: string, w = 900, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;

export const IMAGES = {
  hero: u("1768243280018-f4854cabfc3e", 1920, 1280),
  brandPortrait: u("1644820850758-ffd841aa235c", 1100, 1400),
  storyBottle: u("1615160460367-dcccd27e11ad", 1200, 1500),
  womanSuit: u("1662748716967-88fea581d239", 1100, 1400),
  manPortrait: u("1614252368727-99517bc90d7b", 1200, 800),
  giftBox: u("1778058505526-c23c8e95ec21", 1000, 1250),
  obsidian: u("1772191399367-91ed8d95664b", 1000, 1000),
  ornateBox: u("1764509195128-e2f389ac3235", 1000, 1250),
  orchids: u("1771099077123-e9795202de0c", 1000, 1250),
};

export const PRODUCTS: Product[] = [
  {
    id: "rouge-veil",
    name: "Rouge Veil",
    category: "Women",
    tagline: "Sensual · Radiant",
    notes: ["Rose", "Red Berries", "Vanilla", "Musk"],
    price: 145,
    rating: 4.9,
    reviews: 1284,
    image: u("1608721279136-cd41b752fa41"),
    family: "Floral",
    bestseller: true,
  },
  {
    id: "noir-etat",
    name: "Noir Étát",
    category: "Men",
    tagline: "Bold · Commanding",
    notes: ["Bergamot", "Leather", "Cedarwood", "Amber"],
    price: 155,
    rating: 4.8,
    reviews: 962,
    image: u("1598634222670-87c5f558119c"),
    family: "Woody",
    bestseller: true,
  },
  {
    id: "velvet-ash",
    name: "Velvet Ash",
    category: "Unisex",
    tagline: "Modern · Versatile",
    notes: ["Iris", "Black Pepper", "Sandalwood", "Tonka"],
    price: 160,
    rating: 4.9,
    reviews: 1547,
    image: u("1656746678868-579bf6d7868d"),
    family: "Musky",
    bestseller: true,
  },
  {
    id: "crimson-bloom",
    name: "Crimson Bloom",
    category: "Women",
    tagline: "Floral · Seductive",
    notes: ["Peony", "Jasmine", "Soft Oud", "White Musk"],
    price: 150,
    rating: 4.7,
    reviews: 738,
    image: u("1615160460524-432433ba1b8f"),
    family: "Floral",
    bestseller: true,
  },
  {
    id: "ambre-lux",
    name: "Ambre Lux",
    category: "Unisex",
    tagline: "Warm · Amber",
    notes: ["Amber", "Saffron", "Vanilla", "Oud"],
    price: 165,
    rating: 4.8,
    reviews: 611,
    image: u("1615160460366-2c9a41771b51"),
    family: "Amber",
  },
  {
    id: "fume-blanc",
    name: "Fumé Blanc",
    category: "Men",
    tagline: "Fresh · Clean",
    notes: ["Vetiver", "Mint", "Grapefruit", "Musk"],
    price: 140,
    rating: 4.6,
    reviews: 503,
    image: u("1622618991746-fe6004db3a47"),
    family: "Fresh",
  },
];

export const IDENTITIES: {
  category: Category;
  title: string;
  desc: string;
  image: string;
}[] = [
  {
    category: "Women",
    title: "For Her",
    desc: "Soft, sensual, radiant, floral, seductive.",
    image: u("1727264702001-26b983dd93a1", 900, 1200),
  },
  {
    category: "Men",
    title: "For Him",
    desc: "Bold, refined, woody, fresh, commanding.",
    image: u("1634275964869-45a16e0afcad", 900, 1200),
  },
  {
    category: "Unisex",
    title: "Unisex",
    desc: "Balanced, modern, versatile, elevated.",
    image: u("1598634222670-87c5f558119c", 900, 1200),
  },
];

export const MOODS: string[] = [
  "Everyday Elegance",
  "Date Night",
  "After Dark",
  "Office Luxury",
  "Weekend Escape",
  "Statement Evenings",
  "Gift-Worthy Scents",
  "Fresh All-Day Signatures",
];

export const DISCOVERY_SETS: {
  name: string;
  desc: string;
  price: number;
  image: string;
}[] = [
  {
    name: "Women Discovery Set",
    desc: "Five feminine signatures in 2ml travel vials.",
    price: 38,
    image: u("1608721279136-cd41b752fa41", 800, 800),
  },
  {
    name: "Men Discovery Set",
    desc: "Five masculine blends to find your signature.",
    price: 38,
    image: u("1598634222670-87c5f558119c", 800, 800),
  },
  {
    name: "Unisex Discovery Set",
    desc: "Modern neutrals, balanced and elevated.",
    price: 38,
    image: u("1656746678868-579bf6d7868d", 800, 800),
  },
  {
    name: "Couple Discovery Box",
    desc: "A curated pairing for two, beautifully boxed.",
    price: 64,
    image: u("1615160460524-432433ba1b8f", 800, 800),
  },
];

export const TESTIMONIALS: {
  quote: string;
  name: string;
  role: string;
}[] = [
  {
    quote:
      "The packaging feels luxurious and the scent lasts beautifully all day. ROVÉNAIRE has become my signature.",
    name: "Ayesha R.",
    role: "Verified Buyer · Rouge Veil",
  },
  {
    quote:
      "Finally found a men's fragrance that feels expensive, clean, and memorable without being loud.",
    name: "Fahim K.",
    role: "Verified Buyer · Noir Étát",
  },
  {
    quote:
      "The unisex collection is stunning. Elegant, balanced, and completely addictive — I get compliments daily.",
    name: "Zara L.",
    role: "Verified Buyer · Velvet Ash",
  },
];

export const GIFT_SETS: { title: string; desc: string; image: string }[] = [
  {
    title: "For Her",
    desc: "Floral signatures, gift-wrapped.",
    image: u("1608721279136-cd41b752fa41", 800, 1000),
  },
  {
    title: "For Him",
    desc: "Bold blends in a keepsake box.",
    image: u("1614252368727-99517bc90d7b", 1000, 800),
  },
  {
    title: "For Couples",
    desc: "A pairing made to share.",
    image: u("1615160460524-432433ba1b8f", 800, 1000),
  },
  {
    title: "Corporate Luxury",
    desc: "Refined gifting at scale.",
    image: u("1764509195128-e2f389ac3235", 800, 1000),
  },
];

export const JOURNAL: {
  category: string;
  title: string;
  read: string;
  image: string;
}[] = [
  {
    category: "Guide",
    title: "How to Choose a Signature Perfume",
    read: "6 min read",
    image: u("1644820850758-ffd841aa235c", 900, 700),
  },
  {
    category: "Trends",
    title: "Women's Fragrance Trends for Modern Luxury",
    read: "4 min read",
    image: u("1771099077123-e9795202de0c", 900, 700),
  },
  {
    category: "Edit",
    title: "Unisex Perfume: The Rise of Refined Neutrality",
    read: "5 min read",
    image: u("1656746678868-579bf6d7868d", 900, 700),
  },
];
