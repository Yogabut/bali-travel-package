import { ArrowRight, Star, MapPin, Users, Award, Heart, Bot, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ChatBotSection = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out-cubic",
        });
    }, 
    []);

    return (
        <>
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <div
                    className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4"
                    data-aos="zoom-in"
                >
                    <Bot className="h-8 w-8 text-accent" />
                </div>
                <h2
                    className="text-4xl font-bold text-foreground font-poppins"
                    data-aos="fade-right"
                >
                    Need Help Choosing?
                </h2>
                <p
                    className="text-lg text-muted-foreground leading-relaxed"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    Let our AI-powered travel assistant help you find the perfect
                    vacation package based on your preferences, budget, and travel
                    style.
                </p>

                <div className="space-y-4">
                    <div
                    className="flex items-center space-x-3"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    >
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">
                        Personalized recommendations
                    </span>
                    </div>
                    <div
                    className="flex items-center space-x-3"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    >
                    <Star className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">
                        Real-time package suggestions
                    </span>
                    </div>
                    <div
                    className="flex items-center space-x-3"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    >
                    <Heart className="h-5 w-5 text-accent" />
                    <span className="text-muted-foreground">
                        Tailored to your interests
                    </span>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="500">
                    <Link to="/chatbot">
                    <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-white font-poppins mt-5"
                    >
                        Chat with AI Assistant
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    </Link>
                </div>
                </div>

                <div className="relative" data-aos="fade-left" data-aos-delay="200">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 border border-accent/20">
                    <div className="space-y-4">
                    <div
                        className="flex items-start space-x-3"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                        <p className="text-sm text-muted-foreground">
                            Hi! I can help you find the perfect Bali package. What
                            type of experience are you looking for?
                        </p>
                        </div>
                    </div>

                    <div
                        className="flex items-start space-x-3 flex-row-reverse space-x-reverse"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="h-4 w-4" />
                        </div>
                        <div className="bg-primary text-white p-3 rounded-lg shadow-sm">
                        <p className="text-sm">
                            I'm looking for a romantic getaway for my honeymoon
                        </p>
                        </div>
                    </div>

                    <div
                        className="flex items-start space-x-3"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-white p-3 rounded-lg shadow-sm flex-1">
                        <p className="text-sm text-muted-foreground">
                            Perfect! I recommend our "Romantic Honeymoon Escape"
                            package...
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};