import { MapPin, Star, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { destinations } from "@/data/destinations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AOS from "aos";
import "aos/dist/aos.css";

export const Destinations = () => {
  const regions = Object.keys(destinations);
  const [selectedRegion, setSelectedRegion] = useState<string>(regions[0]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Refresh AOS when region changes
  useEffect(() => {
    AOS.refresh();
  }, [selectedRegion]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "text-accent";
      case "moderate": return "text-secondary";
      case "challenging": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
            data-aos="fade-down"
          >
            Bali Destinations
          </h1>
          <p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore the diverse regions of Bali, each offering unique landscapes, cultures, and experiences waiting to be discovered.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {regions.map((region, index) => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  data-aos="zoom-in"
                  data-aos-delay={200 + index * 50}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedRegion === region
                      ? 'bg-primary text-white shadow-lg scale-105'
                      : 'bg-white text-foreground hover:bg-primary/10 shadow'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          <div
            className="mb-8"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2 className="text-3xl font-bold text-foreground font-poppins mb-4 flex items-center">
              <MapPin className="h-8 w-8 text-primary mr-3" />
              {selectedRegion}
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover the unique attractions and experiences that {selectedRegion} has to offer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations[selectedRegion as keyof typeof destinations].map((destination, index) => (
              <div
                key={destination.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="p-0 relative">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${
                          destination.difficulty === 'Easy' ? 'bg-accent' :
                          destination.difficulty === 'Moderate' ? 'bg-secondary' : 'bg-destructive'
                        }`}>
                          {destination.difficulty}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold text-foreground font-poppins group-hover:text-primary transition-colors">
                        {destination.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">4.7</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {destination.subdescription}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Activities:</span>
                        <span className={`text-sm font-medium ${getDifficultyColor(destination.difficulty)}`}>
                          {destination.difficulty}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {destination.activities.map((activity, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">Best time to visit</span>
                        <span className="text-sm font-medium text-foreground">Apr - Oct</span>
                      </div>
                      
                      <Link 
                        to={`/destinations/${destination.id}`}
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors group/button"
                      >
                        See Details
                        <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-foreground font-poppins mb-4"
              data-aos="fade-down"
            >
              Explore Bali's Regions
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Each region of Bali offers its own unique character, from the cultural heart of Ubud to the pristine beaches of the south.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div
                key={region}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground font-poppins mb-2">{region}</h3>
                <p className="text-muted-foreground mb-4">
                  {destinations[region as keyof typeof destinations].length} destinations
                </p>
                <div className="text-2xl font-bold text-primary">
                  {destinations[region as keyof typeof destinations].length}+
                </div>
                <div className="text-sm text-muted-foreground">attractions</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};