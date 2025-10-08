import { useState, useEffect } from "react";
import { Search, Filter, Grid, List, Car, Bike } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TransportCard } from "@/components/ui/transport-card";
import { transport } from "@/data/transport";
import AOS from "aos";
import "aos/dist/aos.css";

export const Transport = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Refresh AOS when filters change
  useEffect(() => {
    AOS.refresh();
  }, [searchTerm, selectedType, viewMode]);

  const types = ["All", "Car", "Motorbike"];

  const filteredTransport = transport.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
            data-aos="fade-down"
          >
            Transport Rental
          </h1>
          <p
            className="text-xl text-gray-500 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore Bali with freedom and comfort. Choose from our wide selection of cars and motorbikes for the perfect island adventure.
          </p>
        </div>
      </section>

      <section className="py-8 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div
              className="relative flex-1 max-w-md"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search vehicles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div
              className="flex flex-wrap gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {types.map((type, index) => (
                <div
                  key={type}
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 50}
                >
                  <Button
                    variant={selectedType === type ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type)}
                    className={`flex items-center space-x-2 ${selectedType === type ? "bg-primary hover:bg-primary-hover" : ""}`}
                  >
                    {type === "Car" && <Car className="h-4 w-4" />}
                    {type === "Motorbike" && <Bike className="h-4 w-4" />}
                    <span>{type}</span>
                  </Button>
                </div>
              ))}
            </div>

            <div
              className="flex items-center space-x-2"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTransport.length === 0 ? (
            <div
              className="text-center py-12"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">No vehicles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div
                className="flex items-center justify-between mb-8"
                data-aos="fade-down"
              >
                <h2 className="text-2xl font-bold text-foreground font-poppins">
                  {filteredTransport.length} Vehicle{filteredTransport.length !== 1 ? 's' : ''} Available
                </h2>
                <p className="text-muted-foreground">
                  Showing {selectedType === "All" ? "all" : selectedType.toLowerCase()} vehicles
                </p>
              </div>

              <div className={`grid gap-8 ${
                viewMode === "grid"
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}>
                {filteredTransport.map((vehicle, index) => (
                  <div
                    key={vehicle.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <TransportCard {...vehicle} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold text-foreground font-poppins mb-4"
              data-aos="fade-down"
            >
              Why Rent With Us?
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Experience the freedom to explore Bali at your own pace with our reliable and well-maintained vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Well-Maintained Fleet</h3>
              <p className="text-muted-foreground">All our vehicles undergo regular maintenance and safety checks to ensure your comfort and safety.</p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full Insurance Coverage</h3>
              <p className="text-muted-foreground">Comprehensive insurance included with every rental for your peace of mind during your Bali adventure.</p>
            </div>

            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock customer support and roadside assistance whenever you need help during your rental period.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};