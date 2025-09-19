import {Star} from "lucide-react";
import { testimonials } from "@/data/testimonials";


export const Testimonials = () => {
    return (
        <>  
            {/* Testimonials */}
            <section className="py-20 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-foreground font-poppins mb-4">
                    What Our Travelers Say
                    </h2>
                    <p className="text-lg text-muted-foreground">
                    Read testimonials from our satisfied customers who experienced the magic of Bali with us.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(0, 3).map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        </div>
                        <p className="text-muted-foreground mb-4 italic leading-relaxed">
                        "{testimonial.text}"
                        </p>
                        <div className="border-t pt-4">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                        <div className="text-sm text-primary font-medium mt-1">{testimonial.package}</div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    )
}