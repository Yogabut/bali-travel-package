import { useState, useEffect } from "react";
import { Search, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/ui/blog-card";
import { blogPosts, featuredPosts } from "@/data/blog";
import AOS from "aos";
import "aos/dist/aos.css";

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);


  useEffect(() => {
    AOS.refresh();
  }, [searchTerm, selectedCategory]);

  const categories = ["All", "Travel Guide", "Travel Tips", "Culture", "Food & Cuisine", "Adventure"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-16" data-aos="fade">
      {/* Header Section */}
      <section 
        className="text-gray-800 py-16"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold font-poppins mb-4"
            data-aos="fade-down"
            data-aos-delay="100"
          >
            Travel Blog
          </h1>
          <p 
            className="text-xl text-gray-500 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover insider tips, hidden gems, and cultural insights to make your Bali journey truly unforgettable.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section 
        className="py-8 border-border"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="flex flex-col lg:flex-row gap-6 items-center justify-between"
            data-aos="fade-up"
          >
            {/* Search */}
            <div 
              className="relative flex-1 max-w-md"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>

            {/* Category Filters */}
            <div 
              className="flex flex-wrap gap-2"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              {categories.map((category, index) => (
                <div
                  key={category}
                  data-aos="zoom-in"
                  data-aos-delay={250 + index * 50}
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
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section 
        className="py-12"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div 
              className="text-center py-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 
                className="text-2xl font-semibold text-foreground mb-4"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                No articles found
              </h3>
              <p 
                className="text-muted-foreground"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <>
              <div 
                className="flex items-center justify-between mb-8"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                <h2 
                  className="text-2xl font-bold text-foreground font-poppins"
                  data-aos="fade-right"
                  data-aos-delay="150"
                >
                  {filteredPosts.length} Article{filteredPosts.length !== 1 ? 's' : ''} Found
                </h2>
                <p 
                  className="text-muted-foreground"
                  data-aos="fade-left"
                  data-aos-delay="150"
                >
                  Showing {selectedCategory === "All" ? "all" : selectedCategory.toLowerCase()} articles
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <div
                    key={post.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <BlogCard {...post} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};