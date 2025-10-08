import { useState, useEffect } from "react";
import { Search, Filter, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PackageCard } from "@/components/ui/package-card";
import { packages } from "@/data/packages";
import { CTA } from "@/components/Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

export const Packages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [searchTerm, selectedCategory, viewMode]);

  const categories = ["All", "Cultural", "Romance", "Adventure", "Nature", "Family"];

  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header Section */}
      <section className="text-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
            data-aos="fade-down"
          >
            Tour Packages
          </h1>
          <p
            className="text-xl text-gray-500 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Choose from our carefully curated selection of Bali tour packages, each designed to create unforgettable memories.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div
              className="relative flex-1 max-w-md"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div
              className="flex flex-wrap gap-2"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {categories.map((category, index) => (
                <div
                  key={category}
                  data-aos="zoom-in"
                  data-aos-delay={300 + index * 50}
                >
                  <Button
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary hover:bg-primary-hover" : ""}
                  >
                    {category}
                  </Button>
                </div>
              ))}
            </div>

            {/* View Toggle */}
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

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPackages.length === 0 ? (
            <div
              className="text-center py-12"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">No packages found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div
                className="flex items-center justify-between mb-8"
                data-aos="fade-down"
              >
                <h2 className="text-2xl font-bold text-foreground font-poppins">
                  {filteredPackages.length} Package{filteredPackages.length !== 1 ? 's' : ''} Found
                </h2>
                <p className="text-muted-foreground">
                  Showing {selectedCategory === "All" ? "all" : selectedCategory.toLowerCase()} packages
                </p>
              </div>

              <div className={`grid gap-8 ${
                viewMode === "grid" 
                  ? "md:grid-cols-2 lg:grid-cols-3" 
                  : "grid-cols-1 max-w-4xl mx-auto"
              }`}>
                {filteredPackages.map((pkg, index) => (
                  <div
                    key={pkg.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <PackageCard {...pkg} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <CTA />
      
    </div>
  );
};