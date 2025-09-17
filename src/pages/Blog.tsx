import { useState } from "react";
import { Search, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/ui/blog-card";
import { blogPosts, featuredPosts } from "@/data/blog";

export const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Travel Guide", "Travel Tips", "Culture", "Food & Cuisine", "Adventure"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Travel Blog
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover insider tips, hidden gems, and cultural insights to make your Bali journey truly unforgettable.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-8">
              <Tag className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground font-poppins">Featured Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary hover:bg-primary-hover" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground font-poppins">
                  {filteredPosts.length} Article{filteredPosts.length !== 1 ? 's' : ''} Found
                </h2>
                <p className="text-muted-foreground">
                  Showing {selectedCategory === "All" ? "all" : selectedCategory.toLowerCase()} articles
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-white/80" />
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Subscribe to our newsletter for the latest travel tips, destination guides, and exclusive offers for your Bali adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email"
              className="bg-white text-foreground"
            />
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};