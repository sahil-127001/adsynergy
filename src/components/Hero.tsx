import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-tools.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://www.shutterstock.com/shutterstock/photos/2492762443/display_1500/stock-photo-a-construction-worker-wearing-a-yellow-hard-hat-and-safety-vest-is-working-on-a-building-site-at-2492762443.jpg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark/90 via-industrial-dark/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="block text-primary">Tools & Hardware</span>
          </h1>
          
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Your trusted partner for premium quality tools, safety equipment, and hardware solutions. 
            Built for professionals, designed for excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="tool" size="lg" className="text-lg px-8 py-6">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              View Catalog
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Premium Quality</h3>
                <p className="text-sm text-gray-300">Professional-grade tools</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Warranty Protected</h3>
                <p className="text-sm text-gray-300">Comprehensive coverage</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white">
              <div className="p-2 bg-primary/20 rounded-lg">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Fast Delivery</h3>
                <p className="text-sm text-gray-300">Same-day shipping available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;