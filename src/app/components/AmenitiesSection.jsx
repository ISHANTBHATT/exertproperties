import {
  PocketIcon as Pool,
  Dumbbell,
  Film,
  Gamepad2,
  SpaceIcon as Yoga,
  BatteryCharging,
  Building2,
  Utensils,
  BookOpen,
  Car,
  Users,
  ShieldCheck,
} from "lucide-react";

function AmenitiesSection() {
  const amenities = [
    { icon: <Pool className="h-8 w-8" />, name: "Rooftop pool" },
    { icon: <Dumbbell className="h-8 w-8" />, name: "Fitness studio" },
    { icon: <Film className="h-8 w-8" />, name: "Rooftop cinema" },
    { icon: <Gamepad2 className="h-8 w-8" />, name: "Kids play area" },
    { icon: <Yoga className="h-8 w-8" />, name: "Yoga studio" },
    {
      icon: <BatteryCharging className="h-8 w-8" />,
      name: "EV charging stations",
    },
    { icon: <Building2 className="h-8 w-8" />, name: "Elevator lobby lounge" },
    {
      icon: <Utensils className="h-8 w-8" />,
      name: "Outdoor grilling & dining area",
    },
    { icon: <BookOpen className="h-8 w-8" />, name: "Library & reading nook" },
    { icon: <Car className="h-8 w-8" />, name: "Valet parking" },
    { icon: <Users className="h-8 w-8" />, name: "Resident lounge" },
    { icon: <ShieldCheck className="h-8 w-8" />, name: "24/7 security" },
  ];

  return (
    <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="text-neutral-500 font-medium mb-2">
          // Luxury amenities
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Designed for your lifestyle
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="border border-amber-200 rounded-md p-4 mb-4 text-amber-800">
              {amenity.icon}
            </div>
            <span className="text-neutral-800">{amenity.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AmenitiesSection;
