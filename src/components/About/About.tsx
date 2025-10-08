import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "/assets/hero-bali.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
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
        <section className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                <div className="space-y-4" data-aos="fade-right">
                    <h2 className="text-4xl font-bold text-foreground font-poppins">
                    Why Choose BaliExplorer?
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                    With over a decade of experience in Balinese tourism, we're
                    passionate about sharing the island's incredible beauty and
                    rich culture with travelers from around the world.
                    </p>
                </div>

                <div className="space-y-4">
                    <div
                    className="flex items-start space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">
                        Expert Local Guides
                        </h4>
                        <p className="text-muted-foreground">
                        Our certified guides provide authentic insights into
                        Balinese culture and hidden gems.
                        </p>
                    </div>
                    </div>

                    <div
                    className="flex items-start space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">
                        Customizable Packages
                        </h4>
                        <p className="text-muted-foreground">
                        Tailor your adventure to match your interests, budget, and
                        travel style.
                        </p>
                    </div>
                    </div>

                    <div
                    className="flex items-start space-x-4"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-foreground mb-1">
                        24/7 Support
                        </h4>
                        <p className="text-muted-foreground">
                        We're here to assist you before, during, and after your
                        Balinese adventure.
                        </p>
                    </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                    <Button className="bg-primary hover:bg-primary-hover text-white font-poppins">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
                </div>

                <div className="relative" data-aos="fade-left" data-aos-delay="200">
                <img
                    src={heroImage}
                    alt="Beautiful Bali landscape"
                    className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div
                    className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-xl shadow-xl"
                    data-aos="zoom-in"
                    data-aos-delay="500"
                >
                    <div className="text-2xl font-bold font-poppins">15+ Years</div>
                    <div className="text-secondary-foreground/90">
                    Experience in Tourism
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
};