import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { FullMenuModal } from "./FullMenuModal";
import food4 from "@/assets/images/food-4.png";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
};

export function Menu() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  // const [] = useState("coffee");

  const coffeeItems: MenuItem[] = [
    {
      id: "dubai-chocolate-drink",
      name: "Dubai Chocolate Drink",
      description:
        "Beverage that combines the nutty flavor of pistachios with chocolate drizzle on side",
      price: "₱220.00",
      image:
        "https://food-cms.grab.com/compressed_webp/items/PHITE2025022510484680032/detail/menueditor_item_11e14e1aaa6e4ab481e2bacd053b7ebb_1740481884296893382.webp",
      popular: true,
    },
    {
      id: "mudslide-chocolate-chips",
      name: "Mudslide Chocolate Chips",
      description: "Signature blend of chocolate chip and vanilla",
      price: "₱220",
      image:
        "https://food-cms.grab.com/compressed_webp/items/PHITE2024112710375939353/detail/menueditor_item_231f16f195db4f72af98bab500021c4f_1732704870898450322.webp",
    },
    {
      id: "black-sesame-latte",
      name: "Black Sesame Latte",
      description:
        "Signture Preciso drink mixed with black sesame and charcoal infused milk and coffee. Served with ice",
      price: "₱220.00",
      image:
        "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011758051332/detail/142727e3ffa1450f8e7719c128f85668_1730338887592849376.webp",
      popular: true,
    },
    {
      id: "blackberries",
      name: "Blackberries",
      description: "Blackberry blend with ice and milk",
      price: "₱200.00",
      image:
        "https://food-cms.grab.com/compressed_webp/items/PHITE20241031011801011858/detail/menueditor_item_559b262996d349089a65fd7008cefeec_1731727298317519258.webp",
    },
  ];

  const foodItems: MenuItem[] = [
    {
      id: "turkey-pastrami",
      name: "TURKEY PASTRAMI",
      description: "Delicious turkey pastrami on fresh-baked bread with your choice of toppings, vegetables, and sauces.",
      price: "₱325",
      image: food4,
      popular: true,
    },
  ];

  return (
    <section id="menu" className="py-20 bg-zinc-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-zinc-200 bg-zinc-50 text-zinc-800 hover:bg-zinc-100"
          >
            Our Menu
          </Badge>
          <h2 className="text-3xl md:text-4xl mb-6">Crafted With Precision</h2>
          <p className="text-zinc-600">
            Each item on our menu is crafted with meticulous attention to
            detail, from our signature coffee drinks to our delicious food
            offerings.
          </p>
        </div>

        <Tabs defaultValue="coffee" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
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
              Subways
            </TabsTrigger>
          </TabsList>

          <TabsContent value="coffee" className="mt-0">
            <div className="grid sm:grid-cols-2 gap-8">
              {coffeeItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="flex flex-row">
                    <div className="w-1/3 min-w-[120px] h-[120px] relative bg-zinc-100">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="object-cover w-full h-full absolute inset-0"
                      />
                      {item.popular && (
                        <div className="absolute top-2 left-2 z-10">
                          <Badge className="bg-zinc-900">Popular</Badge>
                        </div>
                      )}
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-center min-h-[120px]">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-zinc-700 ml-2 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-zinc-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food" className="mt-0">
            <div className="grid sm:grid-cols-2 gap-8">
              {foodItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div className="flex flex-row">
                    <div className="w-1/3 min-w-[120px] h-[120px] relative bg-zinc-100">
                      {/* For granola bowl specifically, use direct img with better error handling */}
                      {item.id === "granola-bowl" ? (
                        <>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full h-full absolute inset-0"
                            onError={(e) => {
                              // Fallback to a different image if this one fails
                              (e.target as HTMLImageElement).src =
                                "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80";
                            }}
                          />
                          {item.popular && (
                            <div className="absolute top-2 left-2 z-10">
                              <Badge className="bg-zinc-900">Popular</Badge>
                            </div>
                          )}
                        </>
                      ) : (
                        <>
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="object-cover w-full h-full absolute inset-0"
                          />
                          {item.popular && (
                            <div className="absolute top-2 left-2 z-10">
                              <Badge className="bg-zinc-900">Popular</Badge>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    <div className="w-2/3 p-4 flex flex-col justify-center min-h-[120px]">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-zinc-700 ml-2 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-zinc-600 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-zinc-900 hover:bg-zinc-700"
            onClick={() => setIsFullMenuOpen(true)}
          >
            View Full Menu
          </Button>

          {/* Full Menu Modal */}
          <FullMenuModal
            open={isFullMenuOpen}
            onOpenChange={setIsFullMenuOpen}
          />
        </div>
      </div>
    </section>
  );
}
