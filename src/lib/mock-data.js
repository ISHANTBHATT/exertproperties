// // Generate mock data for the property transformations
// export function generateMockProperties(count) {
//   const categories = ["residential", "commercial", "luxury", "historical"];
//   const locations = [
//     "New York, NY",
//     "Los Angeles, CA",
//     "Chicago, IL",
//     "Houston, TX",
//     "Miami, FL",
//     "Seattle, WA",
//     "Denver, CO",
//     "Austin, TX",
//     "Boston, MA",
//     "San Francisco, CA",
//   ];

//   const renovationTypes = [
//     "Complete Renovation",
//     "Kitchen Remodel",
//     "Bathroom Upgrade",
//     "Exterior Makeover",
//     "Interior Redesign",
//     "Addition",
//     "Restoration",
//     "Modernization",
//   ];

//   const properties = [];

//   for (let i = 1; i <= count; i++) {
//     const categoryIndex = Math.floor(Math.random() * categories.length);
//     const locationIndex = Math.floor(Math.random() * locations.length);
//     const renovationIndex = Math.floor(Math.random() * renovationTypes.length);

//     // Generate random width and height for placeholder images
//     const width = 400 + Math.floor(Math.random() * 200);
//     const height = 300 + Math.floor(Math.random() * 100);

//     const property = {
//       id: i,
//       title: `${getRandomPropertyName()} ${i}`,
//       category: categories[categoryIndex],
//       location: locations[locationIndex],
//       beforeImage: `/images/1.jpg`,
//       afterImage: `/images/2.jpg`,
//       galleryImages: [
//         `/images/1.jpg`,
//         `/images/2.jpg`,
//         `/images/3.jpg`,
//         `/images/4.jpg`,
//         `/images/5.jpg`,
//       ],
//       duration: `${Math.floor(Math.random() * 11) + 2} months`,
//       renovationType: renovationTypes[renovationIndex],
//       description: getRandomDescription(),
//       improvements: getRandomImprovements(),
//     };

//     properties.push(property);
//   }

//   return properties;
// }

// function getRandomPropertyName() {
//   const adjectives = [
//     "Sunny",
//     "Modern",
//     "Cozy",
//     "Elegant",
//     "Rustic",
//     "Urban",
//     "Classic",
//     "Charming",
//     "Luxurious",
//     "Tranquil",
//   ];

//   const nouns = [
//     "Villa",
//     "Cottage",
//     "Loft",
//     "Estate",
//     "Residence",
//     "Mansion",
//     "Bungalow",
//     "Apartment",
//     "Townhouse",
//     "Retreat",
//   ];

//   const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
//   const nounIndex = Math.floor(Math.random() * nouns.length);

//   return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
// }

// function getRandomDescription() {
//   const descriptions = [
//     "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
//     "A complete overhaul of this vintage property restored its original charm while adding modern amenities and functionality.",
//     "This renovation project transformed a neglected building into a beautiful, energy-efficient home with contemporary styling and smart features.",
//     "The transformation of this property focused on preserving historical elements while updating essential systems and adding luxury touches.",
//     "This dramatic before-and-after showcases how thoughtful design can completely reinvent a space without changing the footprint.",
//   ];

//   return descriptions[Math.floor(Math.random() * descriptions.length)];
// }

// function getRandomImprovements() {
//   const allImprovements = [
//     "Open concept floor plan",
//     "Updated kitchen with custom cabinetry",
//     "Modernized bathrooms",
//     "New energy-efficient windows",
//     "Hardwood flooring throughout",
//     "Smart home technology integration",
//     "Improved insulation and HVAC",
//     "Custom lighting design",
//     "Expanded outdoor living space",
//     "Restored original architectural details",
//     "New roof and exterior siding",
//     "Updated electrical and plumbing systems",
//     "Custom built-ins for additional storage",
//     "Eco-friendly appliances",
//     "Landscaping redesign",
//   ];

//   // Randomly select 4-6 improvements
//   const count = Math.floor(Math.random() * 3) + 4;
//   const selectedImprovements = [];
//   const usedIndexes = new Set();

//   while (selectedImprovements.length < count) {
//     const index = Math.floor(Math.random() * allImprovements.length);
//     if (!usedIndexes.has(index)) {
//       selectedImprovements.push(allImprovements[index]);
//       usedIndexes.add(index);
//     }
//   }

//   return selectedImprovements;
// }

const properties = [
  {
    id: 1,
    title: "2 Bedroom Shotlet",
    category: "residential",
    location: "Lekki phase 1, Nigeria",
    beforeImage: `/images/h1-1.jpeg`,
    afterImage: `/images/h1-2.jpeg`,
    beforeMedia: [],
    afterMedia: [
      { type: "image", src: "/images/h1-1.jpeg" },
      { type: "image", src: "/images/h1-2.jpeg" },
      { type: "image", src: "/images/h1-3.jpeg" },
      { type: "image", src: "/images/h1-4.jpeg" },
      { type: "image", src: "/images/h1-5.jpeg" },
      { type: "image", src: "/images/h1-6.jpeg" },
      { type: "image", src: "/images/h1-7.jpeg" },
      { type: "image", src: "/images/h1-8.jpeg" },
      { type: "image", src: "/images/h1-9.jpeg" },
      { type: "image", src: "/images/h1-10.jpeg" },
      { type: "image", src: "/images/h1-11.jpeg" },
      { type: "image", src: "/images/h1-12.jpeg" },
      { type: "image", src: "/images/h1-13.jpeg" },
      { type: "image", src: "/images/h1-14.jpeg" },
      { type: "image", src: "/images/h1-15.jpeg" },
      { type: "image", src: "/images/h1-16.jpeg" },
      { type: "image", src: "/images/h1-17.jpeg" },
      { type: "image", src: "/images/h1-18.jpeg" },
      {
        type: "video",
        src: "/videos/p4av-1.mp4",
        // thumbnail: "/images/p2-1.jpeg",
      },
    ],
    // duration: `6 months`,
    // renovationType: renovationTypes[renovationIndex],
    // description:
    //   "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    // improvements: getRandomImprovements(),
  },
  {
    id: 2,
    title: `FIX & FLIP OF A FIRE DAMAGED CONDO`,
    category: "residential",
    location: "United States",
    beforeImage: `/images/p2-1.jpg`,
    afterImage: `/images/p2-4.jpg`,
    beforeMedia: [
      { type: "image", src: "/images/p2b-1.jpeg" },
      { type: "image", src: "/images/p2b-2.jpeg" },
      { type: "image", src: "/images/p2b-3.jpeg" },
      {
        type: "video",
        src: "/videos/p2bv-1.mp4",
        // thumbnail: "/images/p2b-1.jpeg",
      },
      {
        type: "video",
        src: "/videos/p2bv-2.mp4",
      },
      {
        type: "video",
        src: "/videos/p2bv-3.mp4",
      },
      {
        type: "video",
        src: "/videos/p2bv-4.mp4",
      },
      {
        type: "video",
        src: "/videos/p2bv-5.mp4",
      },
    ],
    afterMedia: [
      { type: "image", src: "/images/p2-1.jpg" },
      { type: "image", src: "/images/p2-2.jpg" },
      { type: "image", src: "/images/p2-3.jpg" },
      { type: "image", src: "/images/p2-4.jpg" },
      { type: "image", src: "/images/p2-5.jpg" },
      { type: "image", src: "/images/p2-6.jpg" },
      { type: "image", src: "/images/p2-7.jpg" },
      { type: "image", src: "/images/p2-8.jpg" },
      { type: "image", src: "/images/p2-9.jpg" },
      { type: "image", src: "/images/p2-10.jpg" },
      { type: "image", src: "/images/p2-11.jpg" },
      { type: "image", src: "/images/p2-12.jpg" },
      { type: "image", src: "/images/p2-13.jpg" },
      { type: "image", src: "/images/p2-14.jpg" },
      { type: "image", src: "/images/p2-15.jpg" },
      { type: "image", src: "/images/p2-16.jpg" },
      { type: "image", src: "/images/p2-17.jpg" },
      { type: "image", src: "/images/p2-18.jpg" },
      { type: "image", src: "/images/p2-19.jpg" },
      { type: "image", src: "/images/p2-20.jpg" },
      { type: "image", src: "/images/p2-21.jpg" },
      { type: "image", src: "/images/p2-22.jpg" },
      { type: "image", src: "/images/p2-23.jpg" },
      { type: "image", src: "/images/p2-24.jpg" },
      { type: "image", src: "/images/p2-25.jpg" },
      { type: "image", src: "/images/p2-26.jpg" },
      { type: "image", src: "/images/p2-27.jpg" },
      { type: "image", src: "/images/p2-28.jpg" },
      { type: "image", src: "/images/p2-29.jpg" },
      { type: "image", src: "/images/p2-30.jpg" },
      { type: "image", src: "/images/p2-31.jpg" },
      { type: "image", src: "/images/p2-32.jpg" },
      { type: "image", src: "/images/p2-33.jpg" },
    ],
    // galleryImages: [
    //   { type: "image", src: "/images/p2-1.jpg" },
    //   { type: "image", src: "/images/p2-2.jpg" },
    //   { type: "image", src: "/images/p2-3.jpg" },
    //   { type: "image", src: "/images/p2-4.jpg" },
    //   { type: "image", src: "/images/p2-5.jpg" },
    //   { type: "image", src: "/images/p2-6.jpg" },
    //   { type: "image", src: "/images/p2-7.jpg" },
    //   { type: "image", src: "/images/p2-8.jpg" },
    //   { type: "image", src: "/images/p2-9.jpg" },
    //   { type: "image", src: "/images/p2-10.jpg" },
    //   { type: "image", src: "/images/p2-11.jpg" },
    //   { type: "image", src: "/images/p2-12.jpg" },
    //   { type: "image", src: "/images/p2-13.jpg" },
    //   { type: "image", src: "/images/p2-14.jpg" },
    //   { type: "image", src: "/images/p2-15.jpg" },
    //   { type: "image", src: "/images/p2-16.jpg" },
    //   { type: "image", src: "/images/p2-17.jpg" },
    //   { type: "image", src: "/images/p2-18.jpg" },
    //   { type: "image", src: "/images/p2-19.jpg" },
    //   { type: "image", src: "/images/p2-20.jpg" },
    //   { type: "image", src: "/images/p2-21.jpg" },
    //   { type: "image", src: "/images/p2-22.jpg" },
    //   { type: "image", src: "/images/p2-23.jpg" },
    //   { type: "image", src: "/images/p2-24.jpg" },
    //   { type: "image", src: "/images/p2-25.jpg" },
    //   { type: "image", src: "/images/p2-26.jpg" },
    //   { type: "image", src: "/images/p2-27.jpg" },
    //   { type: "image", src: "/images/p2-28.jpg" },
    //   { type: "image", src: "/images/p2-29.jpg" },
    //   { type: "image", src: "/images/p2-30.jpg" },
    //   { type: "image", src: "/images/p2-31.jpg" },
    //   { type: "image", src: "/images/p2-32.jpg" },
    //   { type: "image", src: "/images/p2-33.jpg" },
    // ],
    // duration: `4 months`,
    //  renovationType: renovationTypes[renovationIndex],
    // description:
    //   "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    // improvements: getRandomImprovements(),
  },
  {
    id: 3,
    title: `ENUGU LAND DEVELOPMENT`,
    category: "residential",
    location: "Ukuta Close off Valley Crescent off Nza, Nigeria",
    beforeImage: `/images/p3b-1.jpeg`,
    afterImage: `/images/2.jpg`,
    beforeMedia: [
      { type: "image", src: "/images/p3b-1.jpeg" },
      { type: "image", src: "/images/p3b-2.jpeg" },
      {
        type: "video",
        src: "/videos/p3bv-1.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-2.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-3.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-4.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-5.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-6.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-7.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-8.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-9.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-10.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-11.mp4",
      },
      {
        type: "video",
        src: "/videos/p3bv-12.mp4",
      },
    ],
    afterMedia: [
      {
        type: "video",
        src: "/videos/p3av-1.mp4",
      },
      {
        type: "video",
        src: "/videos/p3av-2.mp4",
      },
    ],
    // galleryImages: [
    //   `/images/1.jpg`,
    //   `/images/2.jpg`,
    //   `/images/3.jpg`,
    //   `/images/1.jpg`,
    //   `/images/2.jpg`,
    // ],
    // duration: `20 months`,
    //  renovationType: renovationTypes[renovationIndex],
    // description:
    //   "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    // improvements: getRandomImprovements(),
  },
  {
    id: 4,
    title: `GAINS HEIGHTS`,
    category: "residential",
    location: "Lekki Foreshore Estate Lekki Phase 1 Lagos, Nigeria",
    beforeImage: `/images/p4a-1.jpeg`,
    afterImage: `/images/2.jpg`,
    beforeMedia: [
      { type: "image", src: "/images/p4b-1.jpeg" },
      { type: "image", src: "/images/p4b-2.jpeg" },
      { type: "image", src: "/images/p4b-3.jpeg" },
      { type: "image", src: "/images/p4b-4.jpeg" },
      // { type: "image", src: "/images/p2b-2.jpeg" },
      // { type: "image", src: "/images/p2b-3.jpeg" },
      {
        type: "video",
        src: "/videos/p4bv-1.mp4",
      },
      {
        type: "video",
        src: "/videos/p4bv-2.mp4",
      },
    ],
    afterMedia: [{ type: "image", src: "/images/p4a-1.jpeg" }],
    // duration: `32 months`,
    // renovationType: renovationTypes[renovationIndex],
    // description:
    //   "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    // improvements: getRandomImprovements(),
  },
  {
    id: 5,
    title: `3 in 1 FULL DETACHED HOUSES`,
    category: "residential",
    location: "Vitoria Crest 2 Estate Orchid Lekki Lagos, Nigeria",
    beforeImage: `/images/p1a-1.jpeg`,
    afterImage: `/images/p1-8.jpeg`,
    beforeMedia: [
      { type: "image", src: "/images/p1b-1.jpeg" },
      { type: "image", src: "/images/p1b-2.jpeg" },
      { type: "image", src: "/images/p1b-3.jpeg" },
      { type: "image", src: "/images/p1b-4.jpeg" },
      { type: "image", src: "/images/p1b-5.jpeg" },
      { type: "image", src: "/images/p1b-6.jpeg" },
      { type: "image", src: "/images/p1b-7.jpeg" },
      { type: "image", src: "/images/p1b-8.jpeg" },
    ],
    afterMedia: [
      { type: "image", src: "/images/p1a-1.jpg" },
      { type: "image", src: "/images/p1a-2.jpeg" },
      { type: "image", src: "/images/p1a-3.jpeg" },
      { type: "image", src: "/images/p1a-4.jpeg" },
      { type: "image", src: "/images/p1-1.jpeg" },
      { type: "image", src: "/images/p1-2.jpeg" },
      { type: "image", src: "/images/p1-3.jpeg" },
      { type: "image", src: "/images/p1-4.jpeg" },
      { type: "image", src: "/images/p1-5.jpeg" },
      { type: "image", src: "/images/p1-6.jpeg" },
      { type: "image", src: "/images/p1-7.jpeg" },
      { type: "image", src: "/images/p1-8.jpeg" },
      { type: "image", src: "/images/p1-9.jpeg" },
      { type: "image", src: "/images/p1-10.jpeg" },
      { type: "image", src: "/images/p1-11.jpeg" },
      { type: "image", src: "/images/p1-12.jpeg" },
      { type: "image", src: "/images/p1-13.jpeg" },
      { type: "image", src: "/images/p1-14.jpeg" },
      { type: "image", src: "/images/p1-15.jpeg" },
      { type: "image", src: "/images/p1-16.jpeg" },
    ],
    // duration: `18 months`,
    // renovationType: renovationTypes[renovationIndex],
    // description:
    //   "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    // improvements: getRandomImprovements(),
  },
];

// function getRandomImprovements() {
//   const allImprovements = [
//     "Open concept floor plan",
//     "Updated kitchen with custom cabinetry",
//     "Modernized bathrooms",
//     "New energy-efficient windows",
//     "Hardwood flooring throughout",
//     "Smart home technology integration",
//     "Improved insulation and HVAC",
//     "Custom lighting design",
//     "Expanded outdoor living space",
//     "Restored original architectural details",
//     "New roof and exterior siding",
//     "Updated electrical and plumbing systems",
//     "Custom built-ins for additional storage",
//     "Eco-friendly appliances",
//     "Landscaping redesign",
//   ];

//   // Randomly select 4-6 improvements
//   const count = Math.floor(Math.random() * 3) + 4;
//   const selectedImprovements = [];
//   const usedIndexes = new Set();

//   while (selectedImprovements.length < count) {
//     const index = Math.floor(Math.random() * allImprovements.length);
//     if (!usedIndexes.has(index)) {
//       selectedImprovements.push(allImprovements[index]);
//       usedIndexes.add(index);
//     }
//   }
//   return selectedImprovements;
// }
export default properties;
