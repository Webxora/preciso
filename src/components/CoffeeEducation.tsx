import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowRight, Book, Coffee, Info, Timer, Scale } from "lucide-react";

export function CoffeeEducation() {
  const [activeTab, setActiveTab] = useState("brewing");
  const [activeMethod, setActiveMethod] = useState("frenchpress");
  const [activeDictionary, setActiveDictionary] = useState("arabica");

  const brewingMethods = [
    {
      id: "pourover",
      name: "Pour Over",
      description:
        "A clean, flavorful method that highlights coffee's nuanced characteristics.",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      totalTime: "3-4 minutes",
      ratio: "1:15",
      difficulty: "Medium",
      steps: [
        {
          title: "Coffee Grounds",
          instruction: "Use medium-fine grind, 20g of coffee for 300ml water.",
        },
        {
          title: "Blooming",
          instruction:
            "Pour 50ml water, wait 30 seconds to allow gases to escape.",
        },
        {
          title: "Pouring Technique",
          instruction: "Pour in slow, circular motions from center outward.",
        },
        {
          title: "Water Temperature",
          instruction:
            "Use water at 195-205°F (90-96°C) for optimal extraction.",
        },
      ],
    },
    {
      id: "frenchpress",
      name: "French Press",
      description:
        "Full-bodied with rich mouthfeel, perfect for those who enjoy robust flavors.",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      totalTime: "4-5 minutes",
      ratio: "1:15",
      difficulty: "Easy",
      steps: [
        {
          title: "Coffee Grounds",
          instruction: "Use coarse grind, 30g of coffee for 450ml water.",
        },
        {
          title: "Steeping",
          instruction: "Pour hot water, stir gently, steep for 4 minutes.",
        },
        {
          title: "Press Down",
          instruction: "Press plunger down slowly with steady, even pressure.",
        },
        {
          title: "Serve Immediately",
          instruction: "Pour into cups right away to prevent over-extraction.",
        },
      ],
    },
    {
      id: "aeropress",
      name: "AeroPress",
      description:
        "Versatile brewing method that produces a smooth, rich cup with low acidity.",
      image:
        "https://images.unsplash.com/photo-1545665225-b23b99e4d45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      totalTime: "1-2 minutes",
      ratio: "1:15",
      difficulty: "Easy",
      steps: [
        {
          title: "Coffee Grounds",
          instruction: "Use medium-fine grind, 17g of coffee for 250ml water.",
        },
        {
          title: "Add Water",
          instruction: "Pour hot water to the #4 mark, stir 10 seconds.",
        },
        {
          title: "Steep",
          instruction: "Attach plunger, let steep for 1-2 minutes.",
        },
        {
          title: "Press",
          instruction: "Press down with steady pressure for 30 seconds.",
        },
      ],
    },
    {
      id: "espresso",
      name: "Espresso",
      description:
        "Concentrated coffee served in small, strong shots or as a base for various drinks.",
      image:
        "https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      totalTime: "25-30 seconds",
      ratio: "1:2",
      difficulty: "Advanced",
      steps: [
        {
          title: "Coffee Grounds",
          instruction: "Use fine grind, 18-20g of coffee for a double shot.",
        },
        {
          title: "Distribute & Tamp",
          instruction:
            "Evenly distribute grounds, tamp with 30lbs of pressure.",
        },
        {
          title: "Extraction",
          instruction: "Pull shot for 25-30 seconds, aim for 1:2 ratio.",
        },
        {
          title: "Serve Immediately",
          instruction: "Enjoy right away while crema is intact.",
        },
      ],
    },
  ];

  const coffeeDictionary = [
    {
      id: "arabica",
      name: "Arabica",
      description:
        "The most popular coffee species, known for its sweet, complex flavors and higher acidity.",
    },
    {
      id: "robusta",
      name: "Robusta",
      description:
        "Hardy coffee species with higher caffeine content and stronger, often bitter flavor.",
    },
    {
      id: "extraction",
      name: "Extraction",
      description:
        "The process of dissolving desirable coffee flavors from the grounds into water.",
    },
    {
      id: "cupping",
      name: "Cupping",
      description:
        "Professional tasting technique used to evaluate coffee quality and flavor profiles.",
    },
  ];

  // Get the current active method/term
  const currentMethod =
    brewingMethods.find((method) => method.id === activeMethod) ||
    brewingMethods[1];
  const currentDictionary =
    coffeeDictionary.find((term) => term.id === activeDictionary) ||
    coffeeDictionary[0];

  return (
    <section className="py-16 bg-coffee-foam/10">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Coffee Education</h2>
            <p className="text-zinc-600 max-w-2xl mx-auto">
              Enhance your coffee journey with our brewing guides and
              educational resources.
            </p>
          </div>

          {/* Main Tab Navigation */}
          <div className="bg-white rounded-lg shadow-md mb-8 mx-auto max-w-md">
            <div className="p-1 flex">
              <button
                onClick={() => setActiveTab("brewing")}
                className={`flex-1 py-2 text-center rounded-md text-sm font-medium transition-all ${
                  activeTab === "brewing"
                    ? "bg-zinc-900 text-white border border-coffee-medium/30 shadow-sm text-coffee-medium"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                Brewing Methods
              </button>
              <button
                onClick={() => setActiveTab("dictionary")}
                className={`flex-1 py-2 text-center rounded-md text-sm font-medium transition-all ${
                  activeTab === "dictionary"
                    ? "bg-zinc-900 text-white border border-coffee-medium/30 shadow-sm text-coffee-medium"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                Coffee Dictionary
              </button>
            </div>
          </div>

          {/* Content Area */}
          {activeTab === "brewing" && (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Method Sidebar */}
              <div className="w-full lg:w-1/4">
                <div className="space-y-1">
                  {brewingMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setActiveMethod(method.id)}
                      className={`w-full text-left px-4 py-3 flex items-center rounded-md border transition-all ${
                        method.id === activeMethod
                          ? "bg-zinc-900 text-white shadow-sm border-coffee-medium/30 text-coffee-medium"
                          : "bg-white/60 border-transparent hover:bg-white"
                      }`}
                    >
                      <Coffee className="h-4 w-4 mr-2 text-coffee-medium" />
                      <span>{method.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full lg:w-3/4 lg:ml-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Container */}
                    <div className="lg:w-2/5">
                      <div className="relative h-64 lg:h-full">
                        <img
                          src={currentMethod.image}
                          alt={currentMethod.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                          <div className="p-4 text-white">
                            <h3 className="text-xl font-bold mb-2">
                              {currentMethod.name}
                            </h3>
                            <p className="text-sm text-white/90">
                              {currentMethod.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/5 p-6">
                      {/* Stats Row */}
                      <div className="flex space-x-6 mb-6">
                        <div className="flex items-center space-x-2">
                          <Timer className="h-4 w-4 text-coffee-medium" />
                          <span className="text-sm">
                            <strong>Time:</strong> {currentMethod.totalTime}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Scale className="h-4 w-4 text-coffee-medium" />
                          <span className="text-sm">
                            <strong>Ratio:</strong> {currentMethod.ratio}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Coffee className="h-4 w-4 text-coffee-medium" />
                          <span className="text-sm">
                            <strong>Difficulty:</strong>{" "}
                            {currentMethod.difficulty}
                          </span>
                        </div>
                      </div>

                      {/* Brewing Guide */}
                      <div className="mb-6">
                        <h4 className="flex items-center text-lg font-medium mb-4">
                          <Book className="h-4 w-4 mr-2 text-coffee-medium" />
                          Brewing Guide
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {currentMethod.steps.map((step, index) => (
                            <div
                              key={index}
                              className="border border-zinc-100 rounded-lg p-3 hover:shadow-sm transition-all"
                            >
                              <h5 className="font-medium text-coffee-dark mb-1">
                                {step.title}
                              </h5>
                              <p className="text-zinc-600 text-sm">
                                {step.instruction}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pro Tips */}
                      <div className="bg-zinc-50 rounded-lg p-4 mb-4">
                        <h5 className="flex items-center font-medium text-coffee-dark mb-2">
                          <Info className="h-4 w-4 mr-2 text-coffee-medium" />
                          Pro Tips
                        </h5>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-600">
                          <li>
                            Use freshly roasted beans, ideally 7-21 days after
                            roast date
                          </li>
                          <li>Grind your coffee just before brewing</li>
                          <li>
                            Use filtered water for the cleanest flavor profile
                          </li>
                        </ul>
                      </div>

                      {/* Action Button */}
                      <div className="text-right">
                        <Button className="bg-coffee-medium hover:bg-coffee-dark text-white">
                          Full Guide
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dictionary Content */}
          {activeTab === "dictionary" && (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Term Sidebar */}
              <div className="w-full lg:w-1/4">
                <div className="space-y-1">
                  {coffeeDictionary.map((term) => (
                    <button
                      key={term.id}
                      onClick={() => setActiveDictionary(term.id)}
                      className={`w-full text-left px-4 py-3 flex items-center rounded-md border transition-all ${
                        term.id === activeDictionary
                          ? "bg-zinc-900 text-white shadow-sm border-coffee-medium/30 text-coffee-medium"
                          : "bg-white/60 border-transparent hover:bg-white"
                      }`}
                    >
                      <Book className="h-4 w-4 mr-2 text-coffee-medium" />
                      <span>{term.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dictionary Content */}
              <div className="w-full lg:w-3/4 lg:ml-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">
                      {currentDictionary.name}
                    </h3>
                    <p className="text-zinc-600 mb-4">
                      {currentDictionary.description}
                    </p>

                    {/* Placeholder content for the dictionary - would be filled with actual data */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="border border-zinc-100 rounded-lg p-4">
                        <h5 className="font-medium text-coffee-dark mb-1">
                          Origin
                        </h5>
                        <p className="text-zinc-600 text-sm">
                          Information about where this coffee type originated.
                        </p>
                      </div>
                      <div className="border border-zinc-100 rounded-lg p-4">
                        <h5 className="font-medium text-coffee-dark mb-1">
                          Characteristics
                        </h5>
                        <p className="text-zinc-600 text-sm">
                          Flavor profile and unique characteristics.
                        </p>
                      </div>
                      <div className="border border-zinc-100 rounded-lg p-4">
                        <h5 className="font-medium text-coffee-dark mb-1">
                          Growing Conditions
                        </h5>
                        <p className="text-zinc-600 text-sm">
                          Ideal climate and altitude requirements.
                        </p>
                      </div>
                      <div className="border border-zinc-100 rounded-lg p-4">
                        <h5 className="font-medium text-coffee-dark mb-1">
                          Processing Methods
                        </h5>
                        <p className="text-zinc-600 text-sm">
                          Common processing techniques and their effects.
                        </p>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="text-right">
                      <Button className="bg-coffee-medium hover:bg-coffee-dark text-white">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
