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
    title: "Modern",
    category: "residential",
    location: "New York, NY",
    beforeImage: `/images/1.jpg`,
    afterImage: `/images/2.jpg`,
    galleryImages: [
      `/images/1.jpg`,
      `/images/2.jpg`,
      `/images/3.jpg`,
      `/images/1.jpg`,
      `/images/2.jpg`,
    ],
    duration: `6 months`,
    // renovationType: renovationTypes[renovationIndex],
    description:
      "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    improvements: getRandomImprovements(),
  },
  {
    id: 2,
    title: `Elegant`,
    category: "residential",
    location: "Los Angeles, CA",
    beforeImage: `/images/1.jpg`,
    afterImage: `/images/2.jpg`,
    galleryImages: [
      `/images/1.jpg`,
      `/images/2.jpg`,
      `/images/3.jpg`,
      `/images/1.jpg`,
      `/images/2.jpg`,
    ],
    duration: `4 months`,
    // renovationType: renovationTypes[renovationIndex],
    description:
      "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    improvements: getRandomImprovements(),
  },
  {
    id: 3,
    title: `Urban`,
    category: "residential",
    location: "San Francisco, CA",
    beforeImage: `/images/1.jpg`,
    afterImage: `/images/2.jpg`,
    galleryImages: [
      `/images/1.jpg`,
      `/images/2.jpg`,
      `/images/3.jpg`,
      `/images/1.jpg`,
      `/images/2.jpg`,
    ],
    duration: `20 months`,
    // renovationType: renovationTypes[renovationIndex],
    description:
      "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    improvements: getRandomImprovements(),
  },
  {
    id: 4,
    title: `Luxurious`,
    category: "residential",
    location: "San Francisco, CA",
    beforeImage: `/images/1.jpg`,
    afterImage: `/images/2.jpg`,
    galleryImages: [
      `/images/1.jpg`,
      `/images/2.jpg`,
      `/images/3.jpg`,
      `/images/1.jpg`,
      `/images/2.jpg`,
    ],
    duration: `32 months`,
    // renovationType: renovationTypes[renovationIndex],
    description:
      "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    improvements: getRandomImprovements(),
  },
  {
    id: 5,
    title: `Cozy`,
    category: "residential",
    location: "San Francisco, CA",
    beforeImage: `/images/1.jpg`,
    afterImage: `/images/2.jpg`,
    galleryImages: [
      `/images/1.jpg`,
      `/images/2.jpg`,
      `/images/3.jpg`,
      `/images/1.jpg`,
      `/images/2.jpg`,
    ],
    duration: `18 months`,
    // renovationType: renovationTypes[renovationIndex],
    description:
      "This stunning transformation turned an outdated property into a modern masterpiece. The renovation focused on opening up the space and bringing in natural light.",
    improvements: getRandomImprovements(),
  },
];

function getRandomImprovements() {
  const allImprovements = [
    "Open concept floor plan",
    "Updated kitchen with custom cabinetry",
    "Modernized bathrooms",
    "New energy-efficient windows",
    "Hardwood flooring throughout",
    "Smart home technology integration",
    "Improved insulation and HVAC",
    "Custom lighting design",
    "Expanded outdoor living space",
    "Restored original architectural details",
    "New roof and exterior siding",
    "Updated electrical and plumbing systems",
    "Custom built-ins for additional storage",
    "Eco-friendly appliances",
    "Landscaping redesign",
  ];

  // Randomly select 4-6 improvements
  const count = Math.floor(Math.random() * 3) + 4;
  const selectedImprovements = [];
  const usedIndexes = new Set();

  while (selectedImprovements.length < count) {
    const index = Math.floor(Math.random() * allImprovements.length);
    if (!usedIndexes.has(index)) {
      selectedImprovements.push(allImprovements[index]);
      usedIndexes.add(index);
    }
  }
  return selectedImprovements;
}
export default properties;
