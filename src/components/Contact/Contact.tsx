import { Button } from "@/components/ui/button";


export const CTA = () => {
    return(
        <>  
            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold font-poppins mb-6">
                    Ready for Your Bali Adventure?
                </h2>
                <p className="text-xl mb-8 text-white/90">
                    Let us create an unforgettable journey tailored just for you. Contact our travel experts today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-poppins text-lg px-8 py-4">
                    Get Custom Quote
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-poppins text-lg px-8 py-4">
                    Call Us Now
                    </Button>
                </div>
                </div>
            </section>
        </>
    )
}