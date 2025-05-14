"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TransformationModal({ property, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("comparison");
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = (src) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl sm:max-w-5xl p-0 sm:overflow-auto h-screen sm:h-screen overflow-scroll">
          {/* <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute z-50 right-4 top-4 bg-black/20 hover:bg-black/40 text-white rounded-full"
        >
          <X className="w-4 h-4" />
        </Button> */}

          <div className="grid md:grid-cols-2">
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold">{property.title}</h2>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">{property.category}</Badge>
                <span className="text-sm text-slate-500">
                  {property.location}
                </span>
              </div>

              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="w-full">
                  <TabsTrigger value="comparison" className="flex-1">
                    Comparison
                  </TabsTrigger>
                  <TabsTrigger value="before" className="flex-1">
                    Before
                  </TabsTrigger>
                  <TabsTrigger value="after" className="flex-1">
                    After
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="comparison" className="mt-4">
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    <div className="absolute inset-0 w-1/2 z-10 border-r border-white">
                      <Image
                        src={property.beforeImage || "/placeholder.svg"}
                        alt="Before renovation"
                        className="object-cover w-full h-full"
                        width={600}
                        height={400}
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Before
                      </div>
                    </div>

                    <div className="absolute inset-0">
                      <Image
                        src={property.afterImage || "/placeholder.svg"}
                        alt="After renovation"
                        className="object-cover w-full h-full"
                        width={600}
                        height={400}
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        After
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="before" className="mt-4">
                  <div className="overflow-hidden rounded-lg aspect-video">
                    <Image
                      src={property.beforeImage || "/placeholder.svg"}
                      alt="Before renovation"
                      className="object-cover w-full h-full"
                      width={600}
                      height={400}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="after" className="mt-4">
                  <div className="overflow-hidden rounded-lg aspect-video">
                    <Image
                      src={property.afterImage || "/placeholder.svg"}
                      alt="After renovation"
                      className="object-cover w-full h-full"
                      width={600}
                      height={400}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="grid grid-cols-3 gap-2 mt-4">
                {property.galleryImages?.map((image, index) => (
                  // <div
                  //   key={index}
                  //   className="overflow-hidden rounded-md aspect-square"
                  // >
                  //   <Image
                  //     src={image || "/placeholder.svg"}
                  //     alt={`Gallery image ${index + 1}`}
                  //     className="object-cover w-full h-full transition-transform hover:scale-110"
                  //     width={200}
                  //     height={200}
                  //   />
                  // </div>
                  <button
                    key={index}
                    onClick={() => openLightbox(image)}
                    className="overflow-hidden rounded-md aspect-square"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      className="object-cover w-full h-full transition-transform hover:scale-110"
                      width={200}
                      height={200}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-900">
              <h3 className="mb-4 text-lg font-semibold">
                Transformation Details
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-slate-500">
                    Project Duration
                  </h4>
                  <p>{property.duration}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-500">
                    Description
                  </h4>
                  <p className="text-sm">{property.description}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-slate-500">
                    Key Improvements
                  </h4>
                  <ul className="pl-5 mt-2 text-sm list-disc">
                    {property.improvements.map((improvement, index) => (
                      <li key={index}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={!!lightboxImage} onOpenChange={closeLightbox}>
        <DialogContent className="p-0 bg-black/80 ">
          {/* <button
            onClick={closeLightbox}
            className="absolute z-50 right-4 top-4 p-2 text-white"
          >
            <X className="w-6 h-6" />
          </button> */}
          {lightboxImage && (
            <div className="relative ">
              <Image
                src={lightboxImage}
                alt="Full-size image"
                width={1200}
                height={800}
                className="object-contain rounded-lg w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
