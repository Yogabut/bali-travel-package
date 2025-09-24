import { useState } from "react";
import { destinations } from "@/data/destinations";


export const Hero = () => {
    const regions = Object.keys(destinations);
    const [activeRegion, setActiveRegion] = useState(regions[0]);
    const [selectedDestination, setSelectedDestination] = useState(
        destinations[regions[0]][0]
    );

    return (
    <>  
        <section className="relative w-full h-screen overflow-hidden">
        <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
            style={{
            backgroundImage: `url(${selectedDestination.image})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 flex h-full">
            <div className="flex flex-col justify-center items-center w-12 bg-black/20 backdrop-blur-sm">
            {regions.map((region, index) => (
                <button
                key={region}
                onClick={() => {
                    setActiveRegion(region);
                    setSelectedDestination(destinations[region][0]);
                }}
                className="group relative py-8 px-4 w-full flex items-center justify-center"
                >
                <div className="flex flex-col items-center">
                    {region.split(' ').map((word, wordIndex) => (
                    <span
                        key={wordIndex}
                        className={`block text-sm font-semibold tracking-[0.2em] transition-all duration-300 ${
                        region === activeRegion
                            ? "text-white scale-90"
                            : "text-gray-400 group-hover:text-gray-200"
                        }`}
                        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
                    >
                        {word}
                    </span>
                    ))}
                </div>

                {region === activeRegion && (
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-teal-400 rounded-l-full animate-pulse"></div>
                )}
                

                <div className="absolute inset-0 bg-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </button>
            ))}
            </div>


            <div className="flex-1 flex flex-col justify-center px-12 lg:px-20">
            <div className="space-y-8 max-w-3xl">
                <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-px bg-teal-400"></div>
                    <p className="uppercase tracking-[0.3em] text-sm text-teal-400 font-bold">
                    {activeRegion}
                    </p>
                </div>
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                    {selectedDestination.name}
                </h1>
                </div>
                
                <p className="text-gray-300 text-xl leading-relaxed max-w-2xl font-light">
                {selectedDestination.description}
                </p>

                <div className="flex items-center space-x-6 pt-4">
                <button className="group relative inline-flex items-center px-10 py-5 bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 hover:shadow-teal-500/25 hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Discover</span>
                    <svg className="relative z-10 ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </button>
                
                <button className="group flex items-center text-white hover:text-teal-400 transition-colors duration-300">
                    <div className="w-12 h-12 border-2 border-white group-hover:border-teal-400 rounded-full flex items-center justify-center mr-3 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                    </div>
                    <span className="font-medium">Watch Video</span>
                </button>
                </div>
            </div>
            </div>

            <div className="flex flex-col justify-center pr-8 space-y-6 min-w-[240px]">
            {destinations[activeRegion].map((dest, index) => (
                <div
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                className={`group cursor-pointer rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:shadow-teal-500/20 ${
                    selectedDestination.id === dest.id
                    ? "ring-4 ring-teal-400 scale-105 shadow-teal-500/30"
                    : "opacity-90 hover:opacity-100 hover:scale-105"
                }`}
                style={{
                    animationDelay: `${index * 0.15}s`
                }}
                >
                <div className="relative overflow-hidden">
                    <img
                    src={dest.image}
                    alt={dest.name}
                    className="h-40 w-56 object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-base font-bold leading-tight drop-shadow-lg mb-1">
                        {dest.name}
                    </h3>
                    <p className="text-gray-300 text-xs opacity-80">
                        {activeRegion}
                    </p>
                    </div>
                    
                    {selectedDestination.id === dest.id && (
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                    )}
                    
                    <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-4 left-4 text-white/40 font-black text-sm">
                    0{index + 1}
                    </div>
                </div>
                </div>
            ))}
            
            <div className="flex justify-center space-x-4 pt-4">
                <button className="w-10 h-10 rounded-full border border-white/30 hover:border-teal-400 text-white/70 hover:text-teal-400 flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                </button>
                <button className="w-10 h-10 rounded-full border border-white/30 hover:border-teal-400 text-white/70 hover:text-teal-400 flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                </button>
            </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {regions.map((region) => (
            <button
                key={region}
                onClick={() => {
                setActiveRegion(region);
                setSelectedDestination(destinations[region][0]);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                region === activeRegion
                    ? "bg-teal-400 scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
            />
            ))}
        </div>
        </section>
    </>
    );
}