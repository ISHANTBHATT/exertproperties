"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function TransformationCard({ property, onClick }) {
  return (
    <Card
      className="overflow-hidden transition-all duration-300 cursor-pointer group hover:shadow-lg py-0 pb-6"
      onClick={onClick}
    >
      <div className="relative">
        <div className="relative flex w-full h-48">
          <div
            className={cn(
              "absolute inset-0 z-10 transition-all duration-500 ease-in-out",
              "group-hover:w-1/2 w-full"
            )}
          >
            <Image
              src={property.beforeImage || "/placeholder.svg"}
              alt={`${property.title} before renovation`}
              className="object-cover w-full h-full"
              width={400}
              height={300}
            />
            {/* <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              Before
            </div> */}
          </div>

          <div className="absolute inset-0 w-full h-full">
            <Image
              src={property.afterImage || "/placeholder.svg"}
              alt={`${property.title} after renovation`}
              className="object-cover w-full h-full"
              width={400}
              height={300}
            />
            {/* <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
              After
            </div> */}
          </div>
        </div>

        <Badge className="absolute bottom-2 right-2 z-20" variant="secondary">
          {property.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="mb-1 font-semibold truncate">{property.title}</h3>
        <p className="text-sm text-slate-500">{property.location}</p>
      </CardContent>
    </Card>
  );
}
