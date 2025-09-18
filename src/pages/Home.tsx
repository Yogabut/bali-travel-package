import { ArrowRight, Star, MapPin, Users, Award, Heart, Bot, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/ui/package-card";
import { featuredPackages } from "@/data/packages";
import { testimonials } from "@/data/testimonials";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bali.jpg";

export const Home = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Travelers" },
    { icon: Award, value: "50+", label: "Tour Packages" },
    { icon: MapPin, value: "100+", label: "Destinations" },
    { icon: Heart, value: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-accent/60" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-tight">
            Discover the Magic of 
            <span className="block text-accent">Bali</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Experience authentic Balinese culture, breathtaking landscapes, and unforgettable adventures with our expertly crafted tour packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary-hover text-white text-lg px-8 py-4 font-poppins">
              Explore Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-4 font-poppins">
              Watch Video
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary font-poppins mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground font-poppins">
                  Why Choose BaliExplorer?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over a decade of experience in Balinese tourism, we're passionate about sharing the island's incredible beauty and rich culture with travelers from around the world.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Expert Local Guides</h4>
                    <p className="text-muted-foreground">Our certified guides provide authentic insights into Balinese culture and hidden gems.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Customizable Packages</h4>
                    <p className="text-muted-foreground">Tailor your adventure to match your interests, budget, and travel style.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">24/7 Support</h4>
                    <p className="text-muted-foreground">We're here to assist you before, during, and after your Balinese adventure.</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-primary hover:bg-primary-hover text-white font-poppins">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Beautiful Bali landscape" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl">
                <div className="text-2xl font-bold font-poppins">15+ Years</div>
                <div className="text-secondary-foreground/90">Experience in Tourism</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              Featured Tour Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular tours, carefully crafted to showcase the best of Bali's culture, nature, and adventure.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-white font-poppins">
              View All Packages
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Read testimonials from our satisfied customers who experienced the magic of Bali with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-sm text-primary font-medium mt-1">{testimonial.package}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                <Bot className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-4xl font-bold text-foreground font-poppins">
                Need Help Choosing?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Let our AI-powered travel assistant help you find the perfect vacation package based on your preferences, budget, and travel style.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Personalized recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Real-time package suggestions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">Tailored to your interests</span>
                </div>
              </div>
              
              <Link to="/chatbot">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-poppins">
                  Chat with AI Assistant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                      <p className="text-sm text-muted-foreground">
                        Hi! I can help you find the perfect Bali package. What type of experience are you looking for?
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 flex-row-reverse space-x-reverse">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div className="bg-primary text-white p-3 rounded-lg shadow-sm">
                      <p className="text-sm">
                        I'm looking for a romantic getaway for my honeymoon
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                      <p className="text-sm text-muted-foreground">
                        Perfect! I recommend our "Romantic Honeymoon Escape" package...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-poppins mb-6">
            Ready for Your Bali Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let us create an unforgettable journey tailored just for you. Contact our travel experts today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-poppins text-lg px-8 py-4">
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-poppins text-lg px-8 py-4">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};