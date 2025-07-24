import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    {
      id: "roofing",
      title: "Roofing",
      description: "Complete roofing solutions and materials",
      image: "https://thearchitectsdiary.com/wp-content/uploads/2019/10/roofing-1024x680.jpg",
      subcategories: [
        { name: "Metal Shingles", href: "/roofing/metal-shingles" },
        { name: "Asphalt Shingles", href: "/roofing/asphalt-shingles" },
        { name: "PVC Roofing Sheets", href: "/roofing/pvc-sheets" },
        { name: "Thatch Roofing", href: "/roofing/thatch" }
      ],
      featured: true
    },
    {
      id: "construction-polymers",
      title: "Construction Polymers",
      description: "High-performance polymer solutions for construction",
      image: "https://image.shutterstock.com/image-photo/epoxy-resin-flooring-application-industrial-600nw-1654783456.jpg",
      subcategories: [
        { name: "Epoxy Coil", href: "/construction-polymers/epoxy-coil" },
        { name: "Epoxy Paint", href: "/construction-polymers/epoxy-paint" },
        { name: "Epoxy Build", href: "/construction-polymers/epoxy-build" },
        { name: "Acrylic Bonding Agent", href: "/construction-polymers/acrylic-bonding" },
        { name: "Epoxy Bonding Agent", href: "/construction-polymers/epoxy-bonding" },
        { name: "Epoxy Stopper Plug", href: "/construction-polymers/stopper-plug" },
        { name: "Epoxy SBR Undercoating", href: "/construction-polymers/sbr-undercoating" },
        { name: "Epoxy Moulheal", href: "/construction-polymers/moulheal" }
      ]
    },
    {
      id: "waterproofing",
      title: "Water Proofing Solutions",
      description: "Comprehensive waterproofing systems and materials",
      image: "https://www.ascolite.in/blog/wp-content/uploads/2024/12/Untitled-design-7-1024x583.jpg",
      subcategories: [
        { name: "Roof Seal", href: "/waterproofing/roof-seal" },
        { name: "App Membrane", href: "/waterproofing/app-membrane" },
        { name: "Elastoplastic Repair", href: "/waterproofing/elastoplastic-repair" }
      ]
    },
    {
      id: "flooring",
      title: "Flooring",
      description: "Premium flooring solutions for all applications",
      image: "https://www.colibrirealestate.com/wp-content/uploads/2024/03/hardwood-flooring.webp",
      subcategories: [
        { name: "SPC Flooring", href: "/flooring/spc" },
        { name: "Self Adhesive LVT Flooring", href: "/flooring/lvt-adhesive" }
      ]
    },
    {
      id: "interior-exterior",
      title: "Interior Exterior Decor Products",
      description: "Decorative solutions for interior and exterior spaces",
      image: "https://thearchitectsdiary.com/wp-content/uploads/2018/11/Interior-Exterior.jpg",
      subcategories: [
        { name: "PVC Panels", href: "/interior-exterior/pvc-panels" },
        { name: "Charcoal Wall Panels", href: "/interior-exterior/charcoal-panels" },
        { name: "Artificial Grass", href: "/interior-exterior/artificial-grass" },
        { name: "WPC Decking Tiles", href: "/interior-exterior/wpc-decking" },
        { name: "WPC Laminates", href: "/interior-exterior/wpc-laminates" }
      ]
    },
    {
      id: "damp-treat",
      title: "Damp Treatment",
      description: "Specialized solutions for damp and moisture control",
      image: "https://www.permagard.co.uk/media/mageplaza/blog/post/resize/850x/blog/main_image/Damp-proofing-walls-with-membrane.jpeg",
      subcategories: [
        { name: "Damp Proof Course", href: "/damp-treat/proof-course" },
        { name: "Anti-Moisture Solutions", href: "/damp-treat/anti-moisture" }
      ]
    },
    {
      id: "septic-tank",
      title: "Septic Tank Systems",
      description: "Professional waste management solutions",
      image: "https://www.shutterstock.com/shutterstock/photos/2485791901/display_1500/stock-photo-two-copies-of-a-plastic-septic-tank-for-a-domestic-sewage-treatment-plant-2485791901.jpg",
      subcategories: [
        { name: "Residential Systems", href: "/septic-tank/residential" },
        { name: "Commercial Systems", href: "/septic-tank/commercial" },
        { name: "Maintenance Services", href: "/septic-tank/maintenance" }
      ]
    }
  ];

  const filteredCategories = categories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.subcategories.some(sub => 
                           sub.name.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    const matchesCategory = selectedCategory === "all" || category.id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSubcategoryClick = (href) => {
    navigate(href);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-industrial-dark to-industrial-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Browse Our Categories
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Explore our comprehensive range of professional products across all categories
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-300"
            />
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === "all" ? "default" : "outline"}
              onClick={() => setSelectedCategory("all")}
              className="mb-2"
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <Card key={category.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0">
                  {/* Category Header */}
                  <div className="relative h-64">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                    </div>
                    
                    <div className="relative h-full flex flex-col justify-end p-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-200 text-lg">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Subcategories List */}
                  <div className="p-6 bg-white">
                    <h4 className="text-lg font-semibold text-industrial-dark mb-4">
                      Product Subcategories:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <Button
                          key={subIndex}
                          variant="ghost"
                          className="justify-start p-3 h-auto text-left hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                          onClick={() => handleSubcategoryClick(subcategory.href)}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="text-sm font-medium">
                              {subcategory.name}
                            </span>
                            <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          </div>
                        </Button>
                      ))}
                    </div>
                    
                    {/* View All Button for Category */}
                    <div className="mt-6 pt-4 border-t">
                      <Button 
                        variant="industrial" 
                        className="w-full"
                        onClick={() => navigate(`/category/${category.id}`)}
                      >
                        View All {category.title} Products
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-gray-600 mb-4">
                No categories found
              </h3>
              <p className="text-gray-500 mb-6">
                Try adjusting your search terms or category filter
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-industrial-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Finding the Right Product?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you choose the perfect products for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="tool" size="lg" onClick={() => navigate("/contact")}>
              Contact Our Experts
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-industrial-dark">
              Download Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
