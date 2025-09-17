export const transport = [
  {
    id: 1,
    name: "Toyota Avanza",
    type: "Car",
    category: "Family Car",
    capacity: "7 People",
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 45,
    originalPrice: 60,
    image: "/src/assets/hero-bali.jpg",
    description: "Perfect family car for exploring Bali with comfort and space for up to 7 people.",
    features: [
      "Air Conditioning",
      "GPS Navigation", 
      "Child Safety Locks",
      "Large Luggage Space",
      "Fuel Efficient"
    ],
    includes: ["Full Insurance", "24/7 Support", "Free Delivery", "Unlimited Mileage"],
    specifications: {
      engine: "1.5L",
      seats: 7,
      doors: 5,
      aircon: true,
      gps: true
    }
  },
  {
    id: 2,
    name: "Honda Vario",
    type: "Motorbike",
    category: "Scooter",
    capacity: "2 People",
    transmission: "Automatic",
    fuel: "Petrol",
    pricePerDay: 8,
    originalPrice: 12,
    image: "/src/assets/rice-terraces.jpg",
    description: "Popular automatic scooter, perfect for couples and easy navigation through Bali's streets.",
    features: [
      "Automatic Transmission",
      "Fuel Efficient",
      "Storage Compartment",
      "Easy to Handle",
      "Reliable Engine"
    ],
    includes: ["Helmet (2pcs)", "Basic Insurance", "Free Delivery", "Emergency Support"],
    specifications: {
      engine: "125cc",
      seats: 2,
      weight: "115kg",
      fuelTank: "5.5L",
      topSpeed: "90km/h"
    }
  },
  {
    id: 3,
    name: "Suzuki Ertiga",
    type: "Car",
    category: "MPV",
    capacity: "7 People", 
    transmission: "Manual",
    fuel: "Petrol",
    pricePerDay: 40,
    originalPrice: 55,
    image: "/src/assets/temple-package.jpg",
    description: "Spacious MPV ideal for large groups and families with excellent fuel economy.",
    features: [
      "Spacious Interior",
      "Good Fuel Economy",
      "Reliable Performance",
      "Comfortable Seating",
      "Large Boot Space"
    ],
    includes: ["Full Insurance", "GPS Navigation", "Free Delivery", "24/7 Roadside Assistance"],
    specifications: {
      engine: "1.4L",
      seats: 7,
      doors: 5,
      aircon: true,
      gps: true
    }
  },
  {
    id: 4,
    name: "Yamaha NMAX",
    type: "Motorbike",
    category: "Premium Scooter",
    capacity: "2 People",
    transmission: "CVT",
    fuel: "Petrol",
    pricePerDay: 12,
    originalPrice: 18,
    image: "/src/assets/beach-romance.jpg",
    description: "Premium scooter with modern features and superior comfort for city touring.",
    features: [
      "Anti-lock Braking System",
      "Smart Key System",
      "LED Lighting",
      "Premium Suspension",
      "Large Storage"
    ],
    includes: ["Premium Helmets (2pcs)", "Full Insurance", "GPS Tracker", "Emergency Support"],
    specifications: {
      engine: "155cc",
      seats: 2,
      weight: "128kg",
      fuelTank: "6.6L",
      topSpeed: "120km/h"
    }
  },
  {
    id: 5,
    name: "Toyota Innova",
    type: "Car",
    category: "SUV",
    capacity: "8 People",
    transmission: "Automatic",
    fuel: "Diesel",
    pricePerDay: 65,
    originalPrice: 85,
    image: "/src/assets/hero-bali.jpg",
    description: "Premium SUV perfect for large groups wanting comfort and reliability.",
    features: [
      "Premium Interior",
      "Powerful Engine",
      "Advanced Safety Features",
      "Spacious Cabin",
      "Smooth Ride"
    ],
    includes: ["Comprehensive Insurance", "Professional Driver Option", "GPS & Maps", "24/7 Support"],
    specifications: {
      engine: "2.4L Diesel",
      seats: 8,
      doors: 5,
      aircon: true,
      gps: true
    }
  },
  {
    id: 6,
    name: "Honda PCX",
    type: "Motorbike", 
    category: "Premium Scooter",
    capacity: "2 People",
    transmission: "CVT",
    fuel: "Petrol",
    pricePerDay: 15,
    originalPrice: 22,
    image: "/src/assets/rice-terraces.jpg",
    description: "Stylish and fuel-efficient premium scooter with advanced technology features.",
    features: [
      "Keyless Ignition",
      "Digital Display",
      "Anti-theft System",
      "Excellent Fuel Economy",
      "Comfortable Riding Position"
    ],
    includes: ["Quality Helmets (2pcs)", "Insurance Coverage", "GPS Tracking", "Maintenance Support"],
    specifications: {
      engine: "160cc",
      seats: 2,
      weight: "132kg",
      fuelTank: "8.1L",
      topSpeed: "130km/h"
    }
  }
];

export const featuredTransport = transport.slice(0, 4);