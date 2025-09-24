import { useParams, Navigate } from "react-router-dom";
import {Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { packages } from "@/data/packages";

export const BookingCard = () => {
    const { id } = useParams<{ id: string }>();
    const packageData = packages.find(pkg => pkg.id === parseInt(id || "0"));

    if (!packageData) {
        return <Navigate to="/packages" replace />;
    }
    const {
    price,
    originalPrice
    } = packageData;
    
    const savings = originalPrice - price;
    const savingsPercent = Math.round((savings / originalPrice) * 100);

    return(
        <>
            <div className="lg:col-span-1">
                <div className="sticky top-24">
                <Card className="shadow-xl border-0">
                    <CardHeader className="bg-gradient-to-r from-primary to-accent text-white">
                    <CardTitle className="text-center">
                        <div className="space-y-2">
                        <div className="flex items-baseline justify-center space-x-2">
                            <span className="text-3xl font-bold">${price}</span>
                            <span className="text-lg line-through opacity-75">${originalPrice}</span>
                        </div>
                        <p className="text-sm opacity-90">per person</p>
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
                            <Label htmlFor="checkin">Check-in Date</Label>
                            <Input type="date" id="checkin" />
                        </div>
                        <div>
                            <Label htmlFor="checkout">Check-out Date</Label>
                            <Input type="date" id="checkout" />
                        </div>
                        </div>
                        
                        <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input type="number" id="guests" min="1" max="8" defaultValue="2" />
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
                        <Label htmlFor="message">Special Requests</Label>
                        <Textarea 
                            id="message" 
                            placeholder="Any special requirements or questions?"
                            rows={3}
                        />
                        </div>

                        <Button className="w-full bg-primary hover:bg-primary-hover text-white font-poppins text-lg py-3">
                        Book Now
                        </Button>

                        <div className="text-center text-sm text-muted-foreground">
                        <p>✓ Free cancellation up to 24 hours</p>
                        <p>✓ Instant confirmation</p>
                        <p>✓ Best price guarantee</p>
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
                            <span>info@baliexplorer.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>24/7 Customer Support</span>
                        </div>
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </div>
            </div>
        </>
    )
}