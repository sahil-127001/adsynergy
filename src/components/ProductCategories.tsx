import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import powerToolsImage from "@/assets/power-tools.jpg";
import handToolsImage from "@/assets/hand-tools.jpg";
import safetyImage from "@/assets/safety-equipment.jpg";
import hardwareImage from "@/assets/measuring-hardware.jpg";
import septicTankImage from "@/assets/septic-tank-main.jpg";
import { Link, useNavigate } from "react-router-dom";

const ProductCategories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Septic Tank Systems",
      description: "Professional waste management solutions for residential and commercial use",
      image: septicTankImage,
      href: "/septic-tank",
      featured: true
    },
  ];

  const handleNavigation = (href) => {
    navigate(href);
  };

  // Add function to handle View All Categories navigation
  const handleViewAllCategories = () => {
    navigate("/categories");
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of professional tools and equipment, 
            carefully curated for tradespeople, contractors, and DIY enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                category.featured ? 'md:col-span-2 md:h-96' : 'md:h-80'
              }`}
            >
              <CardContent className="p-0 relative h-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="transform transition-transform duration-500 group-hover:translate-y-(-4)">
                    <h3 className={`font-bold text-white mb-3 ${
                      category.featured ? 'text-3xl md:text-4xl' : 'text-2xl'
                    }`}>
                      {category.title}
                    </h3>
                    <p className={`text-gray-200 mb-6 ${
                      category.featured ? 'text-lg' : 'text-base'
                    }`}>
                      {category.description}
                    </p>
                    
                    <Button 
                      variant="tool" 
                      className="group/btn transition-all duration-300 hover:shadow-lg"
                      size={category.featured ? "lg" : "default"}
                      onClick={() => handleNavigation(category.href)}
                    >
                      <span>Shop {category.title}</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Categories Button - Updated with navigation */}
        <div className="text-center mt-12">
          <Button 
            variant="industrial" 
            size="lg" 
            className="px-8 py-6 text-lg"
            onClick={handleViewAllCategories}
          >
            View All Categories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
