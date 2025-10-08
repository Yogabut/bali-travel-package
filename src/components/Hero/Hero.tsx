import { useState, useEffect } from "react";
import { destinations } from "@/data/destinations";
import AOS from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
    const regions = Object.keys(destinations);
    const [activeRegion, setActiveRegion] = useState(regions[0]);
    const [selectedDestination, setSelectedDestination] = useState(
        destinations[regions[0]][0]
    );
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            mirror: false,
            useClassNames: true,
            animatedClassName: 'aos-animate', // supaya gak inject style inline
            });
    }, []);


    return (
    <>  
        <section className="relative w-full h-screen overflow-hidden">
        {/* Background */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{ backgroundImage: `url(${selectedDestination.image})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 flex h-full">
            {/* Sidebar Regions */}
            <div
            className="flex flex-col justify-center items-center w-12 bg-black/20 backdrop-blur-sm"
            data-aos="fade-right"
            data-aos-delay="300"
            >
            {regions.map((region) => (
                <button
                key={region}
                onClick={() => {
                    setActiveRegion(region);
                    setSelectedDestination(destinations[region][0]);
                }}
                className="group relative py-8 px-4 w-full flex items-center justify-center"
                >
                {/* Text */}
                <div className="flex flex-col items-center">
                    {region.split(" ").map((word, wordIndex) => (
                    <span
                        key={wordIndex}
                        className={`block text-sm font-semibold tracking-[0.2em] transition-all duration-300 ${
                        region === activeRegion
                            ? "text-white scale-90"
                            : "text-gray-400 group-hover:text-gray-200"
                        }`}
                        style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        }}
                    >
                        {word}
                    </span>
                    ))}
                </div>
                </button>
            ))}
            </div>

            {/* Main Content */}
            <div
            className="flex-1 flex flex-col justify-center px-12 lg:px-20"
            data-aos="fade-up"
            data-aos-delay="400"
            >
            <div className="space-y-8 max-w-3xl">
                <div className="space-y-4">
                <div className="flex items-center space-x-4" data-aos="zoom-in" data-aos-delay="500">
                    <div className="w-12 h-px bg-teal-400"></div>
                    <p className="uppercase tracking-[0.3em] text-sm text-teal-400 font-bold">
                    {activeRegion}
                    </p>
                </div>
                <h1
                    className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight"
                    data-aos="fade-up"
                    data-aos-delay="600"
                >
                    {selectedDestination.name}
                </h1>
                </div>

                <p
                className="text-gray-300 text-xl leading-relaxed max-w-2xl font-light"
                data-aos="fade-up"
                data-aos-delay="700"
                >
                {selectedDestination.subdescription}
                </p>

                {/* Buttons */}
                <div className="flex items-center space-x-6 pt-4" data-aos="fade-up" data-aos-delay="800">
                <button className="group relative inline-flex items-center px-10 py-5 bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 hover:shadow-teal-500/25 hover:scale-105 overflow-hidden">
                    <span className="relative z-10">Discover</span>
                    <svg className="relative z-10 ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                <button className="group flex items-center text-white hover:text-teal-400 transition-colors duration-300">
                    <div className="w-12 h-12 border-2 border-white group-hover:border-teal-400 rounded-full flex items-center justify-center mr-3 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    </div>
                    <span className="font-medium">Watch Video</span>
                </button>
                </div>
            </div>
            </div>

            {/* Thumbnails */}
            <div
            className="flex flex-col justify-center pr-8 space-y-6 min-w-[240px]"
            data-aos="fade-left"
            data-aos-delay="500"
            >
            {destinations[activeRegion].map((dest, index) => (
                <div
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                className={`group cursor-pointer rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:shadow-teal-500/20 ${
                    selectedDestination.id === dest.id
                    ? "ring-4 ring-teal-400 scale-105 shadow-teal-500/30"
                    : "opacity-90 hover:opacity-100 hover:scale-105"
                }`}
                >
                <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-40 w-56 object-cover transition-transform duration-700 group-hover:scale-125"
                />
                </div>
            ))}
            </div>
        </div>
        </section>

    </>
    );
}