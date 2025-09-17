export const packages = [
  {
    id: 1,
    title: "Temple & Culture Explorer",
    category: "Cultural",
    duration: "3 Days 2 Nights",
    price: 299,
    originalPrice: 399,
    image: "/src/assets/temple-package.jpg",
    description: "Discover the spiritual heart of Bali with visits to ancient temples, traditional villages, and cultural performances.",
    highlights: [
      "Visit Tanah Lot & Uluwatu Temple",
      "Traditional Balinese dance performance",
      "Local village tour & cooking class",
      "Professional tour guide",
      "Comfortable accommodation"
    ],
    includes: ["Hotel accommodation", "Daily breakfast", "Transportation", "English-speaking guide", "Entrance fees"],
    itinerary: [
      { day: 1, title: "Arrival & Tanah Lot Temple", activities: ["Airport pickup", "Hotel check-in", "Tanah Lot sunset tour"] },
      { day: 2, title: "Cultural Village Tour", activities: ["Traditional village visit", "Cooking class", "Local market tour"] },
      { day: 3, title: "Uluwatu & Departure", activities: ["Uluwatu Temple", "Kecak dance performance", "Airport transfer"] }
    ]
  },
  {
    id: 2,
    title: "Romantic Honeymoon Escape",
    category: "Romance",
    duration: "5 Days 4 Nights",
    price: 799,
    originalPrice: 999,
    image: "/src/assets/beach-romance.jpg",
    description: "Perfect romantic getaway with private dinners, couples spa treatments, and stunning sunset views.",
    highlights: [
      "Private beachfront villa",
      "Couples spa treatment",
      "Romantic candlelit dinner",
      "Sunset cruise",
      "Professional photographer session"
    ],
    includes: ["Luxury villa accommodation", "Daily breakfast & dinner", "Private transportation", "Spa treatments", "Photography session"],
    itinerary: [
      { day: 1, title: "Arrival & Villa Check-in", activities: ["Airport pickup", "Villa tour", "Welcome dinner"] },
      { day: 2, title: "Spa & Beach Day", activities: ["Couples massage", "Beach relaxation", "Sunset dinner"] },
      { day: 3, title: "Adventure Day", activities: ["Temple visit", "Rice terrace tour", "Traditional performance"] },
      { day: 4, title: "Sunset Cruise", activities: ["Private boat tour", "Snorkeling", "Romantic dinner on boat"] },
      { day: 5, title: "Photography & Departure", activities: ["Photo session", "Last-minute shopping", "Airport transfer"] }
    ]
  },
  {
    id: 3,
    title: "Adventure & Nature Trek",
    category: "Adventure",
    duration: "4 Days 3 Nights",
    price: 549,
    originalPrice: 699,
    image: "/src/assets/rice-terraces.jpg",
    description: "Thrilling outdoor adventures including volcano hiking, white water rafting, and jungle trekking.",
    highlights: [
      "Mount Batur sunrise hike",
      "White water rafting",
      "Rice terrace trekking",
      "Waterfall exploration",
      "Adventure equipment included"
    ],
    includes: ["Hotel accommodation", "Daily meals", "Adventure equipment", "Professional guide", "Transportation"],
    itinerary: [
      { day: 1, title: "Arrival & Rafting", activities: ["Airport pickup", "White water rafting", "Hotel check-in"] },
      { day: 2, title: "Volcano Sunrise Hike", activities: ["Early morning Mount Batur hike", "Hot springs relaxation", "Local breakfast"] },
      { day: 3, title: "Rice Terraces & Waterfalls", activities: ["Jatiluwih rice terraces trek", "Sekumpul waterfall visit", "Traditional lunch"] },
      { day: 4, title: "Jungle Trek & Departure", activities: ["Monkey forest sanctuary", "Final adventure activity", "Airport transfer"] }
    ]
  }
];

export const featuredPackages = packages.slice(0, 3);