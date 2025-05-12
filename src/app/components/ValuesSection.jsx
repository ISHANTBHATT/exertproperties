import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Flag,
  LightbulbIcon,
  MessageCircle,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import React from "react";

function ValuesSection() {
  return (
    <section className="flex flex-col lg:flex-row py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-12 w-full">
        {/* <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 mb-6">
          <Star className="h-4 w-4 mr-2 text-gray-500" />
          <span className="text-sm font-medium">Our values</span>
        </div> */}
        <div className="inline-flex items-center p-2 gap-2 bg-[#EEEFF1]  text-gray-700 rounded-full font-semibold text-sm mb-4">
          <div className="rounded-full bg-gray-400 p-2">
            <Star className="h-3 w-3 text-white" />
          </div>
          Our values
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          The values that drive <br className="hidden md:block" />
          everything we do
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur et ullamcorper morbi lectus
          fermentum viverra malesuada consequat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 ">
        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <LightbulbIcon className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Innovation</h3>
          <p className="text-gray-600">
            Aenean viverra non mauris a ultrices pharetra libero varius ut
            adipiscing fusce velit.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <Star className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Excellence</h3>
          <p className="text-gray-600">
            Mi sollicitudin eu sem feugiat ultricies dictum amet purus eget
            viverra tortor odio mattis.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <TrendingUp className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Growth</h3>
          <p className="text-gray-600">
            Sed hendrerit ac donec egestas orci lacinia porta ut egestas quisque
            nibh egestas sodales.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <Users className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Team work</h3>
          <p className="text-gray-600">
            Non ut mauris libero tellus vel sed turpis hendrerit eu quam sed at
            ipsum elit bibendum est.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <MessageCircle className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Communication</h3>
          <p className="text-gray-600">
            Lobortis eget cursus tempus venenatis enim sit placerat sit rutrum
            dui praesent vel.
          </p>
        </div>

        <div className="space-y-4 border-b-2 md:border-b-0 border-neutral-300 pb-4 md:pb-0">
          <Flag className="h-8 w-8" />
          <h3 className="text-2xl font-semibold">Ownership</h3>
          <p className="text-gray-600">
            Pretium quis amet dolor justo consequat risus mauris eget nulla non
            enim lacus pharetra.
          </p>
        </div>
      </div>

      {/* <div className="mt-12">
        <Button variant="default" className="rounded-full px-6 py-6 h-auto">
          Start exploring
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div> */}
    </section>
  );
}

export default ValuesSection;
