import { useParams, Navigate } from "react-router-dom";
import { Star, Users, Fuel, Settings, Check, Calendar, Phone, Mail, User, Car, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { transport } from "@/data/transport";

export const TransportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vehicleData = transport.find(vehicle => vehicle.id === parseInt(id || "0"));

  if (!vehicleData) {
    return <Navigate to="/transport" replace />;
  }

  const {
    name,
    type,
    category,
    capacity,
    transmission,
    fuel,
    pricePerDay,
    originalPrice,
    image,
    description,
    features,
    includes,
    specifications
  } = vehicleData;

  const savings = originalPrice - pricePerDay;
  const savingsPercent = Math.round((savings / originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="py-10 bg-muted/20 flex justify-center items-center text-center">
        <div className="max-w-5xl w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
          {/* Image Gallery */}
          <div className="space-y-4 flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={image}
                alt={name}
                className="w-[900px] h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 max-w-[600px]">
              <img src={image} alt={name} className="rounded-lg object-cover h-28 w-f cursor-pointer hover:opacity-80" />
              <img src={image} alt={name} className="rounded-lg object-cover h-28 w-full cursor-pointer hover:opacity-80" />
              <img src={image} alt={name} className="rounded-lg object-cover h-28 w-full cursor-pointer hover:opacity-80" />
            </div>
          </div>
        </div>
      </section>




      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">Vehicle Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{description}</p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">Specifications</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="font-medium text-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-muted-foreground">
                          {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
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
            <section>
              <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">Rental Terms</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Valid driving license required (International license for foreign visitors)</li>
                    <li>• Minimum age: 21 years for cars, 18 years for motorbikes</li>
                    <li>• Security deposit required (refundable)</li>
                    <li>• Fuel tank returned in same level as pickup</li>
                    <li>• Any damages or fines are tenant's responsibility</li>
                    <li>• Free delivery within 5km radius</li>
                    <li>• 24/7 emergency support included</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                  <CardTitle className="text-center">
                    <div className="space-y-2">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-3xl font-bold">${pricePerDay}</span>
                        <span className="text-lg line-through opacity-75">${originalPrice}</span>
                      </div>
                      <p className="text-sm opacity-90">per day</p>
                      <p className="text-sm bg-white/20 rounded-full px-3 py-1 inline-block">
                        Save ${savings} ({savingsPercent}% OFF)
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="pickupDate">Pickup Date</Label>
                        <Input type="date" id="pickupDate" />
                      </div>
                      <div>
                        <Label htmlFor="returnDate">Return Date</Label>
                        <Input type="date" id="returnDate" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="pickupTime">Pickup Time</Label>
                      <Input type="time" id="pickupTime" defaultValue="09:00" />
                    </div>

                    <div>
                      <Label htmlFor="location">Pickup Location</Label>
                      <Input id="location" placeholder="Hotel, airport, or address" />
                    </div>

                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input type="email" id="email" placeholder="Enter your email" />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input type="tel" id="phone" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <Label htmlFor="license">Driving License Number</Label>
                      <Input id="license" placeholder="Enter license number" />  
                    </div>

                    <div>
                      <Label htmlFor="message">Special Requests</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Any special requirements or pickup instructions?"
                        rows={3}
                      />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary-hover text-white font-poppins text-lg py-3">
                      Book Vehicle
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      <p>✓ Free cancellation up to 24 hours</p>
                      <p>✓ Full insurance coverage</p>
                      <p>✓ 24/7 roadside assistance</p>
                    </div>
                  </form>

                  <div className="border-t pt-6 space-y-3">
                    <h3 className="font-semibold text-foreground">Need Help?</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4" />
                        <span>+62 123 456 7890</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4" />
                        <span>transport@baliexplorer.com</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>24/7 Support Available</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};