import { MapPin, Users, Award, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ target, duration = 4000 }) => {
    const [count, setCount] = useState(0);

    const suffix = target.includes("%") ? "%" : "+";
    const end = parseInt(target.replace(/\D/g, "")); // ambil angka murni

    useEffect(() => {
        let start = 0;
        if (start === end) return;

        let startTime = null;

        const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
            requestAnimationFrame(step);
        }
        };

        requestAnimationFrame(step);
    }, [end, duration]);

    return (
        <>
        {count.toLocaleString()}
        {suffix}
        </>
    );
    };

    export const Stats = () => {
    const stats = [
        { icon: Users, value: "10000+", label: "Happy Travelers" },
        { icon: Award, value: "50+", label: "Tour Packages" },
        { icon: MapPin, value: "100+", label: "Destinations" },
        { icon: Heart, value: "99%", label: "Satisfaction Rate" },
    ];

    return (
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-between items-center gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="text-center group flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary font-poppins mb-2">
                    <Counter target={stat.value} duration={2000} />
                </div>
                <div className="text-muted-foreground font-medium">
                    {stat.label}
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
};
