import { useParams, Navigate, Link } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogCard } from "@/components/ui/blog-card";
import { blogPosts, recentPosts } from "@/data/blog";

export const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const {
    title,
    content,
    image,
    author,
    authorRole,
    authorImage,
    publishedAt,
    readTime,
    category,
    tags
  } = post;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const relatedPosts = recentPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-16">
      <section className="relative h-[50vh] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                {category}
              </span>
              {tags.slice(0, 2).map((tag, index) => (
                <span key={index} className="bg-accent/80 text-white px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
              {title}
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link to="/blog" className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover mb-8">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Meta */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b border-border">
          <div className="flex items-center space-x-6 mb-4 sm:mb-0">
            <div className="flex items-center space-x-3">
              <img 
                src={authorImage} 
                alt={author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-foreground">{author}</p>
                <p className="text-sm text-muted-foreground">{authorRole}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(publishedAt)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
          
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Share2 className="h-4 w-4" />
            <span>Share Article</span>
          </Button>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none mb-12">
          <div 
            className="text-foreground leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>').replace(/^/, '<p>').replace(/$/, '</p>').replace(/## (.*?)(?=<)/g, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>').replace(/### (.*?)(?=<)/g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-foreground">$1</h3>') }}
          />
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-border">
          <Tag className="h-5 w-5 text-muted-foreground mr-2" />
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Author Bio */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img 
                src={authorImage} 
                alt={author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{author}</h3>
                <p className="text-sm text-muted-foreground mb-3">{authorRole}</p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about sharing the beauty and culture of Bali with travelers from around the world. 
                  With years of experience exploring every corner of the island, I bring insider knowledge and 
                  authentic experiences to help you make the most of your Bali adventure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-foreground font-poppins mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-poppins mb-4">
            Ready to Experience Bali?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Turn your travel dreams into reality with our expertly crafted tour packages and local insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/packages">View Tour Packages</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};