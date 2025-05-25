import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/custom-dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ScrollArea } from "./ui/scroll-area";
import { X } from "lucide-react";
import { useState } from "react";
import { ScrollReveal } from "./animation/ScrollReveal";
import { cn } from "@/lib/utils";

type MenuItem = {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  popular?: boolean;
  servedAs?: string; // e.g., "Hot or Iced", "Hot only", etc.
  categories?: string[] | undefined;
};

type FilterItem = {
  id: string;
  label: string;
};

type MenuCategoryProps = {
  items: MenuItem[];
  hasCategory?: boolean;
  filters?: FilterItem[];
};

function MenuCategory({
  items,
  hasCategory = false,
  filters = [],
}: MenuCategoryProps) {
  const [selectedFilter, setSelectedFilter] = useState("popular");

  // Filter images based on selected category
  const filteredItem = hasCategory
    ? items.filter((item) => item.categories?.includes(selectedFilter))
    : items;
  console.log(filteredItem);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {!hasCategory &&
        items.map((item) => (
          <ScrollReveal
            delay={0.1}
            key={item.id}
            className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm overflow-hidden border border-zinc-100"
          >
            <div className="w-full sm:w-1/3 h-40 sm:h-auto relative bg-zinc-100">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-full"
              />
              {item.popular && (
                <div className="absolute top-2 left-2 z-10">
                  <Badge className="bg-zinc-900">Popular</Badge>
                </div>
              )}
            </div>
            <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium">{item.name}</h3>
                  <span className="text-zinc-700 ml-2 whitespace-nowrap font-medium">
                    {item.price}
                  </span>
                </div>
                <p className="text-zinc-600 text-sm mb-3">{item.description}</p>
              </div>

              {item.servedAs && (
                <div className="mt-2 text-xs">
                  <p className="flex items-center">
                    <span className="bg-black text-white px-2 py-0.5 rounded-sm font-medium">
                      Served:
                    </span>
                    <span className="ml-1.5 text-zinc-500">
                      {item.servedAs}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      {/* {} */}
      {hasCategory && (
        <>
          <div className="md:col-span-2">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={cn(
                      "px-4 py-2 rounded-full transition-colors",
                      selectedFilter === filter.id
                        ? "bg-black text-white"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                    )}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {filteredItem.map((item) => (
            <ScrollReveal
              delay={0.2}
              key={item.id}
              className="flex flex-col sm:flex-row bg-white rounded-lg shadow-sm overflow-hidden border border-zinc-100"
            >
              <div className="w-full sm:w-1/3 h-40 sm:h-auto relative bg-zinc-100">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full"
                />
                {item.popular && (
                  <div className="absolute top-2 left-2 z-10">
                    <Badge className="bg-zinc-900">Popular</Badge>
                  </div>
                )}
              </div>
              <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{item.name}</h3>
                    <span className="text-zinc-700 ml-2 whitespace-nowrap font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-zinc-600 text-sm mb-3">
                    {item.description}
                  </p>
                </div>

                {item.servedAs && (
                  <div className="mt-2 text-xs">
                    <p className="flex items-center">
                      <span className="bg-black text-white px-2 py-0.5 rounded-sm font-medium">
                        Served:
                      </span>
                      <span className="ml-1.5 text-zinc-500">
                        {item.servedAs}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </>
      )}
    </div>
  );
}

const coffeeItems: MenuItem[] = [
  {
    id: "dubai-chocolate-drink",
    name: "Dubai Chocolate Drink",
    price: "₱220.00",
    description:
      "Beverage that combines the nutty flavor of pistachios with chocolate drizzle on side",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE2025022510484680032/detail/menueditor_item_11e14e1aaa6e4ab481e2bacd053b7ebb_1740481884296893382.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["preciso-signatures", "popular"],
  },
  {
    id: "biscoff-latte",
    name: "Biscoff Latte",
    price: "₱220.00",
    description:
      "Signature Preciso drink mixed with biscoff, milk and coffee. Lotus biscuit on top. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011758043211/detail/3e1e52012e1c49b19c91228e6f5b16a2_1730338873423874521.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["preciso-signatures", "popular"],
  },
  {
    id: "preciso-coffee",
    name: "Preciso Coffee",
    price: "₱220.00",
    description:
      "Our signature drink. Preciso creamy signature blend coffee. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011757065069/detail/menueditor_item_a44858fbc7f54fadadaf967706ad0a9a_1731727195045043307.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["preciso-signatures", "popular"],
  },
  {
    id: "iced-spanish-latte",
    name: "Iced Spanish Latte",
    price: "₱200.00",
    description:
      "Signature Preciso drink with sweetened milk and coffee. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011758020366/detail/8d5b57f8fb3a43a69364831e0afd0c48_1730339193394679419.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["preciso-signatures", "popular"],
  },
  {
    id: "iced-horchata",
    name: "Iced Horchata",
    price: "₱190.00",
    description:
      "Sweetened rice milk mixed with whipped cream and milk, with cinnamon powder on top. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011756068217/detail/4d6e7a2718de4ee68cfe9f8225abd62d_1730339095438710382.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["non-coffee", "popular"],
  },
  {
    id: "black-sesame-latte",
    name: "Black Sesame Latte",
    price: "₱220.00",
    description:
      "Signture Preciso drink mixed with black sesame and charcoal infused milk and coffee. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011758051332/detail/142727e3ffa1450f8e7719c128f85668_1730338887592849376.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["preciso-signatures", "popular"],
  },
  {
    id: "seasalt-foam",
    name: "Seasalt Foam",
    price: "₱220.00",
    description:
      "Foamy sea salt milk with vanilla, white chocolate, and espresso. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011757053373/detail/89453603624d4a2b82ab06750d2201e0_1730339356306530506.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["foam-series", "popular"],
  },
  {
    id: "kohi-zeri",
    name: "Kohi Zeri",
    price: "₱220.00",
    description: "Coffee jelly blended with vanilla and caramel",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE2024112710361965591/detail/menueditor_item_52ad381532ed4f4880031240c5fa28d3_1732704603580559230.webp",
    popular: true,
    servedAs: "Iced",
    categories: ["blended-signatures", "popular"],
  },
  {
    id: "iced-long-black",
    name: "Iced Long Black",
    price: "₱160.00",
    description: "Classic black coffee, shot of espresso with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011755014922/detail/65f5caa7f31d4d8088ab55d662b7347d_1730339125679664656.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["classic-coffee"],
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    price: "₱190.00",
    description: "Classic espresso and steamed foamy milk served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011755022105/detail/61212220a416438091eb2320fb21524f_1730339110192542584.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["classic-coffee"],
  },
  {
    id: "iced-cappuccino",
    name: "Iced Cappuccino",
    price: "₱190.00",
    description:
      "Classic espresso, steamed milk, foam, with chocolate powder on top. Served with ice.",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011755036820/detail/f6c2a2681e7148498cf917f94e4bf305_1730339033697030798.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["classic-coffee"],
  },
  {
    id: "iced-flat-white",
    name: "Iced Flat White",
    price: "₱190.00",
    description: "Clasic espresso and milk. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011756013225/detail/46d6d90780754126b0a706e7b5f94147_1730339066837759893.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["classic-coffee"],
  },
  {
    id: "iced-mocha",
    name: "Iced Mocha",
    price: "₱205.00",
    description: "Espresso mixed with milk and dark chocolate. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011756029305/detail/f6a8d59b4a7d414b8df752d94dd76e5a_1730339161654657997.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["sweet-fix-coffee"],
  },
  {
    id: "iced-caramel",
    name: "Iced Caramel",
    price: "₱205.00",
    description: "Espresso mixed with milk and caramel. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011756034905/detail/da975efcc24e4abdaaf68e7824e75bb1_1730339046597834589.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["sweet-fix-coffee"],
  },
  {
    id: "iced-vanilla",
    name: "Iced Vanilla",
    price: "₱205.00",
    description: "Espresso mixed with milk and vanilla. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011756043775/detail/menueditor_item_720063519c6f497f862ebce61937525a_1731727235517012105.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["sweet-fix-coffee"],
  },
  {
    id: "iced-white-mocha",
    name: "Iced White Mocha",
    price: "₱205.00",
    description:
      "Espresso mixed with milk and white chocolate. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011756054350/detail/d5a7d9e94c5b4d3bb1201940a860e753_1730339237093177759.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["sweet-fix-coffee"],
  },
  {
    id: "signature-batirol",
    name: "Signature Batirol",
    price: "₱190.00",
    description: "Chocolate batirol with nuts. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011757029996/detail/3f8ca6d973ea4ba39250afe6b337652f_1730339375320557019.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["non-coffee"],
  },
  {
    id: "signature-batirol",
    name: "Signature Batirol",
    price: "₱190.00",
    description: "Chocolate batirol with nuts. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011757029996/detail/3f8ca6d973ea4ba39250afe6b337652f_1730339375320557019.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["non-coffee"],
  },
  {
    id: "roasted-almond-foam",
    name: "Roasted Almond Foam",
    price: "₱220.00",
    description:
      "Foamy roasted almond milk with white chocolate and espresso. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011757035677/detail/235d52fc0a0641c8ae2ec36b15343527_1730339347427758722.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["foam-series"],
  },
  {
    id: "tiramisu-foam",
    name: "Tiramisu Foam",
    price: "₱220.00",
    description:
      "Foamy tiramisu milk with chocolate, brown sugar and espresso. Lady finger biscuit on top. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011757040927/detail/2cb556add3cb417c90645c1efcba9dcd_1730339414413931481.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["foam-series"],
  },
  {
    id: "cascara-house-tea-16oz",
    name: "Cascara House Tea 16oz",
    price: "₱175.00",
    description: "Coffee husk tea with tamarind. Shakened. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011758067649/detail/73120d468b47426cb37c24fe7e104b61_1730338921477339193.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["refreshers"],
  },
  {
    id: "passionfruit-hibiscus-16oz",
    name: "Passionfruit Hibiscus 16oz",
    price: "₱175.00",
    description: "Hibiscus teas with passionfruit. Shakened. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011759013676/detail/caba48b076bf45358b18643fc8e91d66_1730339282047413534.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["refreshers"],
  },
  {
    id: "cooper-punch-16oz",
    name: "Cooper Punch 16oz",
    price: "₱175.00",
    description:
      "Thai tea with grapefruit and pomelo. Shakened. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011759027415/detail/menueditor_item_c6aeed32ba4c492c9f584f37fa057c15_1731727263162528415.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["refreshers"],
  },
  {
    id: "green-hornet-16oz",
    name: "Green Hornet 16oz",
    price: "₱175.00",
    description: "Green tea with apple and melon. Shakened. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011759034498/detail/17548c6d62bb46908d3e2ad84589cbbf_1730339010778193404.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["refreshers"],
  },
  {
    id: "citrus-berry-16oz",
    name: "Citrus Berry 16oz",
    price: "₱175.00",
    description: "Lemon and berries. Shakened. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011759041045/detail/18e79744e50c4c4b83c471d81abeeb89_1730338963760860809.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["refreshers"],
  },
  {
    id: "lychee-coco-16oz",
    name: "Lychee Coco 16oz",
    price: "₱175.00",
    description: "Lychee with coconut water. Shakened. Served with ice",
    image:
      "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011759054067/detail/7682603a221448cd84145c3b1d6640fe_1730339255884730253.webp",
    popular: false,
    servedAs: "Iced",
    categories: ["refreshers"],
  },
];

// Filter categories
const coffeeFilters: FilterItem[] = [
  { id: "popular", label: "Popular" },
  { id: "classic-coffee", label: "Classic Coffee" },
  { id: "sweet-fix-coffee", label: "Sweet Fix Coffee" },
  { id: "non-coffee", label: "Non-Coffee" },
  { id: "foam-series", label: "Foam Series" },
  { id: "preciso-signatures", label: "Preciso Signatures" },
  { id: "refreshers", label: "Refreshers" },
  { id: "fruit-swirl", label: "Fruit Swirl" },
  { id: "matcha", label: "Matcha" },
  { id: "cream-fizz-soda", label: "Cream Fizz Soda" },
  { id: "blended-signatures", label: "Blended Signatures" },
];

// Food items data
const foodItems: MenuItem[] = [
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    price: "₱445",
    description:
      "Sourdough toast topped with smashed avocado, cherry tomatoes, microgreens, and a sprinkle of everything bagel seasoning.",
    image:
      "https://images.unsplash.com/photo-1588137378633-dea1336ce1e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popular: true,
    servedAs: "Served all day",
  },
  {
    id: "granola-bowl",
    name: "Granola Bowl",
    price: "₱375",
    description:
      "House-made granola with Greek yogurt, fresh berries, banana slices, and a drizzle of local honey.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    servedAs: "Available until 2pm",
  },
  {
    id: "breakfast-sandwich",
    name: "Breakfast Sandwich",
    price: "₱460",
    description:
      "Cage-free egg, white cheddar, avocado, and tomato on a toasted everything bagel.",
    image:
      "https://images.unsplash.com/photo-1600699290300-8eac43a309c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popular: true,
    servedAs: "Breakfast & lunch",
  },
  {
    id: "croissant",
    name: "Butter Croissant",
    price: "₱195",
    description: "Flaky, buttery pastry made fresh daily in our bakery.",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    servedAs: "Freshly baked daily",
  },
];

// Subway items data
const subwayItems: MenuItem[] = [
  {
    id: "turkey-pastrami",
    name: "TURKEY PASTRAMI",
    price: "₱325",
    description:
      "Delicious turkey pastrami on fresh-baked bread with your choice of toppings, vegetables, and sauces.",
    image:
      "https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popular: true,
    servedAs: "6-inch or footlong",
  },
  {
    id: "smoked-ham",
    name: "SMOKED HAM",
    price: "₱299",
    description:
      "Classic smoked ham on our signature bread with your favorite fresh vegetables and condiments.",
    image:
      "https://images.unsplash.com/photo-1542488246-1311a1b68346?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popular: true,
    servedAs: "6-inch or footlong",
  },
];

// Desserts data
const dessertItems: MenuItem[] = [
  {
    id: "chocolate-chip-cookie",
    name: "Chocolate Chip Cookie",
    price: "₱175",
    description:
      "A classic chocolate chip cookie with a crisp edge and soft center, made with high-quality chocolate.",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popular: true,
    servedAs: "Baked fresh daily",
  },
  {
    id: "coffee-cake",
    name: "Coffee Cake",
    price: "₱245",
    description:
      "Moist cinnamon-infused cake with a crumbly streusel topping, perfect for pairing with your favorite coffee.",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    servedAs: "Slice or whole cake",
  },
  {
    id: "tiramisu",
    name: "Tiramisu Cup",
    price: "₱325",
    description:
      "Italian dessert made with espresso-soaked ladyfingers, layered with mascarpone cheese and dusted with cocoa powder.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    popular: true,
    servedAs: "Chilled",
  },
  {
    id: "almond-biscotti",
    name: "Almond Biscotti",
    price: "₱145",
    description:
      "Twice-baked Italian cookie with almonds, perfect for dipping in coffee or espresso.",
    image:
      "https://images.unsplash.com/photo-1619021099853-33e36760799a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    servedAs: "Perfect for dipping",
  },
];

interface FullMenuModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FullMenuModal({ open, onOpenChange }: FullMenuModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Use our custom dialog content with hideCloseButton prop */}
      <DialogContent
        className="sm:max-w-5xl max-h-[90vh] overflow-hidden flex flex-col p-0"
        hideCloseButton={true}
      >
        {/* Custom close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 rounded-full h-10 w-10 flex items-center justify-center bg-black text-white hover:bg-zinc-800 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 pt-10 pb-4">
          <DialogHeader>
            <DialogTitle className="text-2xl">Preciso Coffee Menu</DialogTitle>
            <DialogDescription>
              Our complete menu features carefully selected ingredients and
              crafted recipes
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex-1 overflow-hidden">
          <Tabs defaultValue="coffee" className="w-full h-full flex flex-col">
            <div className="px-6">
              <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 mb-6">
                <TabsTrigger
                  value="coffee"
                  className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
                >
                  Coffee
                </TabsTrigger>
                <TabsTrigger
                  value="food"
                  className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
                >
                  Pastries
                </TabsTrigger>
                <TabsTrigger
                  value="specialty"
                  className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
                >
                  Subways
                </TabsTrigger>
                <TabsTrigger
                  value="desserts"
                  className="data-[state=active]:bg-zinc-900 data-[state=active]:text-white"
                >
                  Desserts
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="flex-1 overflow-hidden">
              <ScrollArea className="h-[calc(90vh-12rem)] w-full">
                <div className="px-6 pb-6">
                  <TabsContent
                    value="coffee"
                    className="mt-0 data-[state=active]:block"
                  >
                    {/* <h3 className="text-xl mb-4 font-medium">Coffee Selections</h3> */}
                    <MenuCategory
                      items={coffeeItems}
                      hasCategory={true}
                      filters={coffeeFilters}
                    />
                  </TabsContent>

                  <TabsContent
                    value="food"
                    className="mt-0 data-[state=active]:block"
                  >
                    <h3 className="text-xl mb-4 font-medium">
                      Food & Breakfast
                    </h3>
                    <MenuCategory items={foodItems} />
                  </TabsContent>

                  <TabsContent
                    value="specialty"
                    className="mt-0 data-[state=active]:block"
                  >
                    <h3 className="text-xl mb-4 font-medium">
                      Subway Sandwiches
                    </h3>
                    <MenuCategory items={subwayItems} />
                  </TabsContent>

                  <TabsContent
                    value="desserts"
                    className="mt-0 data-[state=active]:block"
                  >
                    <h3 className="text-xl mb-4 font-medium">
                      Desserts & Pastries
                    </h3>
                    <MenuCategory items={dessertItems} />
                  </TabsContent>
                </div>
              </ScrollArea>
            </div>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}
