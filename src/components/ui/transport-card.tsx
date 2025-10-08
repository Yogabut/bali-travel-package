import { Star, Users, Fuel, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface TransportCardProps {
  id: number;
  name: string;
  type: string;
  category: string;
  capacity: string;
  transmission: string;
  fuel: string;
  pricePerDay: number;
  originalPrice: number;
  image: string;
  description: string;
  features: string[];
}

export const TransportCard = ({ 
  id,
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
  features 
}: TransportCardProps) => {
  const savings = originalPrice - pricePerDay;
  const savingsPercent = Math.round((savings / originalPrice) * 100);

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader className="p-0 relative">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
              {type}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
              -{savingsPercent}%
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">4.9</span>
          </div>
        </div>

        <p className="text-sm font-medium text-muted-foreground">{category}</p>
        <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{capacity}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Settings className="h-4 w-4" />
            <span>{transmission}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Fuel className="h-4 w-4" />
            <span>{fuel}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-baseline space-x-2">
            <span className="text-2xl font-bold text-primary font-poppins">${pricePerDay}</span>
            <span className="text-lg text-muted-foreground line-through">${originalPrice}</span>
          </div>
          <p className="text-sm text-muted-foreground">per day</p>
        </div>
        
        <Link to={`/transport/${id}`}>
          <Button className="bg-primary hover:bg-primary-hover text-white group/btn">
            View Details
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};