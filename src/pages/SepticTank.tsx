import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Clock, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import septicTankMain from "@/assets/septic-tank-main.jpg";
import septicTankCrossSection from "@/assets/septic-tank-cross-section.jpg";

const SepticTank = () => {
  const productSizes = [
    {
      size: "1000L",
      dimensions: "2.0m x 1.2m x 1.0m",
      capacity: "1000 Liters",
      household: "1-2 People",
      price: "Contact for Quote"
    },
    {
      size: "1500L",
      dimensions: "2.5m x 1.2m x 1.0m",
      capacity: "1500 Liters",
      household: "2-3 People",
      price: "Contact for Quote"
    },
    {
      size: "2000L",
      dimensions: "3.0m x 1.2m x 1.0m",
      capacity: "2000 Liters",
      household: "3-4 People",
      price: "Contact for Quote"
    },
    {
      size: "2500L",
      dimensions: "3.5m x 1.2m x 1.0m",
      capacity: "2500 Liters",
      household: "4-5 People",
      price: "Contact for Quote"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Durable Construction",
      description: "Made from high-grade materials resistant to corrosion and environmental factors"
    },
    {
      icon: CheckCircle,
      title: "Eco-Friendly",
      description: "Environmentally safe waste treatment that protects groundwater and soil"
    },
    {
      icon: Clock,
      title: "Long-Lasting",
      description: "Designed for decades of reliable service with minimal maintenance requirements"
    },
    {
      icon: Wrench,
      title: "Easy Installation",
      description: "Professional installation service available with comprehensive warranty"
    }
  ];

  // WhatsApp redirect function
  const handleWhatsAppRedirect = (productName = "Professional Septic Tank System") => {
    const phoneNumber = "917206168767";
    const message = `Hi! I'm interested in purchasing the ${productName}. Could you please provide me with more details and pricing information?`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  // Scroll to specifications section
  const scrollToSpecs = () => {
    const specsSection = document.getElementById('product-specifications');
    if (specsSection) {
      specsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                  Professional Septic Tank Systems
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  High-quality septic tanks designed for residential and commercial waste management. 
                  Our durable, eco-friendly systems provide reliable wastewater treatment for years to come.
                </p>
                <Button 
                  size="lg" 
                  className="mr-4"
                  onClick={() => handleWhatsAppRedirect()}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={scrollToSpecs}
                >
                  Technical Specs
                </Button>
              </div>
              <div className="relative">
                <img 
                  src={septicTankMain} 
                  alt="Professional septic tank installation" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={septicTankCrossSection} 
                  alt="Septic tank cross-section diagram" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Advanced Waste Management Technology
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                  Engineered for Strength. Powered by Nature. Built to Last."
Our Bio-Digestive Septic Tank is not just a sanitation solution — it's a rugged, long-term investment in cleaner living and environmental protection. Designed for heavy-duty performance, this next-generation system uses advanced anaerobic bacterial technology to naturally digest and decompose human waste, eliminating the need for chemicals, electricity, or frequent manual cleaning.
Crafted from high-grade, weather-resistant materials, the tank stands strong against corrosion, pressure, and long-term usage — making it ideal for homes, farmhouses, commercial facilities, institutions, and remote locations. Unlike conventional septic systems that overflow, clog, or pollute the soil, our solution offers odorless operation, minimal sludge output, and zero groundwater contamination.
Simple to install, maintenance-free, and built with sustainability in mind, this bio-digester is your go-to choice for durable, eco-conscious, and hassle-free waste management. Whether you're upgrading your current setup or starting fresh, choose a system that works as hard as you do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Septic Tanks */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Choose Our Septic Tank Systems?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our septic tanks combine cutting-edge technology with proven reliability to deliver 
                superior waste management solutions for your property.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Product Specifications Table */}
        <section id="product-specifications" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Product Specifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the right size septic tank for your needs
              </p>
            </div>
            
            <Card className="max-w-6xl mx-auto">
              <CardHeader>
                <CardTitle>Available Sizes & Specifications</CardTitle>
                <CardDescription>
                  All models feature the same high-quality construction with varying capacities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Volumetric Size</TableHead>
                      <TableHead className="font-semibold">Dimensions (L x W x H)</TableHead>
                      <TableHead className="font-semibold">Capacity</TableHead>
                      <TableHead className="font-semibold">Recommended For</TableHead>
                      {/* <TableHead className="font-semibold">Price</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {productSizes.map((product, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium text-primary">
                          {product.size}
                        </TableCell>
                        <TableCell>{product.dimensions}</TableCell>
                        <TableCell>{product.capacity}</TableCell>
                        <TableCell>{product.household}</TableCell>
                        {/* <TableCell>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleWhatsAppRedirect(`${product.size} Septic Tank`)}
                          >
                            Get Quote
                          </Button>
                        </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SepticTank;
