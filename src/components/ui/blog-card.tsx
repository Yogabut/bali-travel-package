import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

export const BlogCard = ({ 
  id,
  title, 
  slug,
  excerpt, 
  image, 
  author,
  authorRole,
  publishedAt, 
  readTime,
  category,
  tags,
  featured = false
}: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader className="p-0 relative">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                Featured
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold font-poppins text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed line-clamp-3">{excerpt}</p>
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

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">{author}</p>
              <p className="text-xs text-muted-foreground">{authorRole}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <Link to={`/blog/${slug}`} className="flex-1">
          <Button className="w-full bg-primary hover:bg-primary-hover text-white group/btn">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};