import { useParams, Link, useNavigate } from "react-router-dom";
import { MapPin, Star, Clock, ArrowLeft, Calendar, Users, Compass } from "lucide-react";
import { destinations } from "@/data/destinations";
import { Card, CardContent } from "@/components/ui/card";

interface Destination {
    id: string;
    name: string;
    subdescription: string;
    image: string;
    difficulty: string;
    activities: string[];
}

export const DestinationDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

  // Find the destination across all regions
    let destination: Destination | null = null;
    let regionName = "";

  // Log untuk debugging
    console.log("Looking for destination with ID:", id);
    console.log("Available destinations:", destinations);

    for (const [region, dests] of Object.entries(destinations)) {
        const found = dests.find((d: Destination) => {
        console.log(`Checking ${d.id} against ${id}`);
        return d.id === id || d.id === Number(id) || String(d.id) === id;
    });
    if (found) {
        destination = found;
        regionName = region;
        console.log("Found destination:", destination);
        break;
    }
    }

    if (!destination) {
        return (
        <div className="min-h-screen bg-background pt-16 flex items-center justify-center">
            <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Destination not found</h1>
            <p className="text-muted-foreground mb-6">
                We couldn&apos;t find the destination you&apos;re looking for (ID: {id})
            </p>
            <Link 
                to="/destinations" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to destinations
            </Link>
            </div>
        </div>
        );
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
        case "easy": return "bg-accent";
        case "moderate": return "bg-secondary";
        case "challenging": return "bg-destructive";
        default: return "bg-muted";
        }
    };

    return (
        <div className="min-h-screen bg-background pt-16">
        {/* Hero Image Section */}
        <div className="relative h-96 overflow-hidden">
            <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium text-white ${getDifficultyColor(destination.difficulty)}`}>
                    {destination.difficulty}
                </span>
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                    {regionName}
                </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-3">
                {destination.name}
                </h1>
                <div className="flex items-center gap-6 text-white/90">
                <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.7 / 5.0</span>
                </div>
                <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Popular destination</span>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
                <Card className="shadow-lg">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground font-poppins mb-4">
                    About This Destination
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                    {destination.subdescription}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                    Located in the beautiful region of {regionName}, {destination.name} offers visitors an unforgettable experience combining natural beauty, cultural richness, and adventure. Whether you&apos;re seeking relaxation or excitement, this destination has something for everyone.
                    </p>
                </CardContent>
                </Card>

                <Card className="shadow-lg">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground font-poppins mb-6 flex items-center gap-3">
                    <Compass className="h-6 w-6 text-primary" />
                    Activities & Experiences
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                    {destination.activities.map((activity: string, index: number) => (
                        <div 
                        key={index}
                        className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-foreground font-medium">{activity}</span>
                        </div>
                    ))}
                    </div>
                </CardContent>
                </Card>

                <Card className="shadow-lg">
                <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-foreground font-poppins mb-6">
                    Visitor Information
                    </h2>
                    <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <Clock className="h-6 w-6 text-primary mt-1" />
                        <div>
                        <h3 className="font-semibold text-foreground mb-1">Opening Hours</h3>
                        <p className="text-muted-foreground">Open daily from 8:00 AM to 6:00 PM</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <Calendar className="h-6 w-6 text-primary mt-1" />
                        <div>
                        <h3 className="font-semibold text-foreground mb-1">Best Time to Visit</h3>
                        <p className="text-muted-foreground">April to October (dry season)</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                        <h3 className="font-semibold text-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">{regionName}, Bali, Indonesia</p>
                        </div>
                    </div>
                    </div>
                </CardContent>
                </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
                <Card className="shadow-lg top-24">
                <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground font-poppins mb-4">
                    Quick Facts
                    </h3>
                    <div className="space-y-4">
                    <div className="pb-4 border-b border-border">
                        <span className="text-sm text-muted-foreground">Difficulty Level</span>
                        <p className="text-lg font-semibold text-foreground mt-1">
                        {destination.difficulty}
                        </p>
                    </div>
                    <div className="pb-4 border-b border-border">
                        <span className="text-sm text-muted-foreground">Region</span>
                        <p className="text-lg font-semibold text-foreground mt-1">
                        {regionName}
                        </p>
                    </div>
                    <div className="pb-4 border-b border-border">
                        <span className="text-sm text-muted-foreground">Activities Available</span>
                        <p className="text-lg font-semibold text-foreground mt-1">
                        {destination.activities.length}+
                        </p>
                    </div>
                    <div>
                        <span className="text-sm text-muted-foreground">Visitor Rating</span>
                        <div className="flex items-center gap-2 mt-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-semibold text-foreground">4.7</span>
                        <span className="text-sm text-muted-foreground">(2,450 reviews)</span>
                        </div>
                    </div>
                    </div>

                    <button className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Plan Your Visit
                    </button>
                </CardContent>
                </Card>

                <Card className="shadow-lg bg-gradient-to-br from-primary/10 to-accent/10">
                <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground font-poppins mb-3">
                    Need Help Planning?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                    Get personalized recommendations and travel tips from local experts.
                    </p>
                    <Link 
                    to="/contact"
                    className="text-primary font-medium hover:underline text-sm"
                    >
                    Contact us →
                    </Link>
                </CardContent>
                </Card>
            </div>
            </div>
        </div>

        {/* Related Destinations */}
        <section className="py-16 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground font-poppins mb-8">
                More from {regionName}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                {destinations[regionName as keyof typeof destinations]
                .filter((d: Destination) => d.id !== destination.id)
                .slice(0, 3)
                .map((dest: Destination) => (
                    <Link 
                    key={dest.id}
                    to={`/destinations/${dest.id}`}
                    className="group"
                    >
                    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="relative h-48 overflow-hidden">
                        <img
                            src={dest.image}
                            alt={dest.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        </div>
                        <CardContent className="p-4">
                        <h3 className="text-lg font-bold text-foreground font-poppins mb-2 group-hover:text-primary transition-colors">
                            {dest.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                            {dest.subdescription}
                        </p>
                        </CardContent>
                    </Card>
                    </Link>
                ))}
            </div>
            </div>
        </section>
        </div>
    );
};