import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold font-poppins">BaliExplorer</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner for authentic Balinese experiences. We create unforgettable journeys that showcase the beauty, culture, and spirit of Bali.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-primary-foreground/60 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-accent transition-colors">Home</Link>
              <Link to="/packages" className="block text-primary-foreground/80 hover:text-accent transition-colors">Tour Packages</Link>
              <Link to="/destinations" className="block text-primary-foreground/80 hover:text-accent transition-colors">Destinations</Link>
              <Link to="/transport" className="block text-primary-foreground/80 hover:text-accent transition-colors">Transportation</Link>
              <Link to="/blog" className="block text-primary-foreground/80 hover:text-accent transition-colors">Travel Blog</Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Our Services</h3>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">Cultural Tours</p>
              <p className="text-primary-foreground/80">Adventure Packages</p>
              <p className="text-primary-foreground/80">Honeymoon Specials</p>
              <p className="text-primary-foreground/80">Car & Motorbike Rental</p>
              <p className="text-primary-foreground/80">Custom Itineraries</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-poppins">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">Jl. Raya Ubud No. 123, Gianyar, Bali 80571, Indonesia</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">+62 361 975 123</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80">info@baliexplorer.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} BaliExplorer. All rights reserved. | 
            <span className="hover:text-accent cursor-pointer"> Privacy Policy</span> | 
            <span className="hover:text-accent cursor-pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};