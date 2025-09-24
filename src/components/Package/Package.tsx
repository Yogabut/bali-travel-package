import { ArrowRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/ui/package-card";
import { featuredPackages } from "@/data/packages";


export const Package = () => {
    return(
        <>  
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
        </>
    )
}