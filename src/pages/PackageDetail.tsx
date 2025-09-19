import { useParams, Navigate } from "react-router-dom";
import { Star, Clock, Users, MapPin, Check} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { packages } from "@/data/packages";
import { BookingCard } from "@/components/Booking/Booking";

export const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const packageData = packages.find(pkg => pkg.id === parseInt(id || "0"));

  if (!packageData) {
    return <Navigate to="/packages" replace />;
  }

  const {
    title,
    category,
    duration,
    price,
    originalPrice,
    image,
    description,
    highlights,
    includes,
    itinerary
  } = packageData;

  const savings = originalPrice - price;
  const savingsPercent = Math.round((savings / originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                -{savingsPercent}% OFF
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-4">
              {title}
            </h1>
            <div className="flex items-center space-x-6 text-white/90">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>2-8 People</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span>4.8 (124 reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">Package Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">Package Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Includes */}
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-6">Detailed Itinerary</h2>
              <div className="space-y-6">
                {itinerary.map((day, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {day.day}
                        </div>
                        <span>Day {day.day}: {day.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {day.activities.map((activity, actIndex) => (
                          <li key={actIndex} className="flex items-center space-x-3">
                            <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                            <span className="text-muted-foreground">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
          <BookingCard />
          
        </div>
      </div>
    </div>
  );
};