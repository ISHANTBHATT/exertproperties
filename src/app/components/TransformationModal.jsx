// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export function TransformationModal({ property, isOpen, onClose }) {
//   const [activeTab, setActiveTab] = useState("comparison");
//   const [lightboxImage, setLightboxImage] = useState(null);

//   const openLightbox = (src) => setLightboxImage(src);
//   const closeLightbox = () => setLightboxImage(null);

//   return (
//     <>
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="max-w-4xl sm:max-w-5xl p-0 sm:overflow-auto h-screen sm:h-screen overflow-scroll">
//           {/* <Button
//           variant="ghost"
//           size="icon"
//           onClick={onClose}
//           className="absolute z-50 right-4 top-4 bg-black/20 hover:bg-black/40 text-white rounded-full"
//         >
//           <X className="w-4 h-4" />
//         </Button> */}

//           <div className="grid md:grid-cols-2">
//             <div className="p-6">
//               <h2 className="mb-2 text-2xl font-bold">{property.title}</h2>
//               <div className="flex items-center gap-2 mb-4">
//                 <Badge variant="outline">{property.category}</Badge>
//                 <span className="text-sm text-slate-500">
//                   {property.location}
//                 </span>
//               </div>

//               <Tabs
//                 value={activeTab}
//                 onValueChange={setActiveTab}
//                 className="w-full"
//               >
//                 <TabsList className="w-full">
//                   <TabsTrigger value="comparison" className="flex-1">
//                     Comparison
//                   </TabsTrigger>
//                   <TabsTrigger value="before" className="flex-1">
//                     Before
//                   </TabsTrigger>
//                   <TabsTrigger value="after" className="flex-1">
//                     After
//                   </TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="comparison" className="mt-4">
//                   <div className="relative overflow-hidden rounded-lg aspect-video">
//                     <div className="absolute inset-0 w-1/2 z-10 border-r border-white">
//                       <Image
//                         src={property.beforeImage || "/placeholder.svg"}
//                         alt="Before renovation"
//                         className="object-cover w-full h-full"
//                         width={600}
//                         height={400}
//                       />
//                       <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                         Before
//                       </div>
//                     </div>

//                     <div className="absolute inset-0">
//                       <Image
//                         src={property.afterImage || "/placeholder.svg"}
//                         alt="After renovation"
//                         className="object-cover w-full h-full"
//                         width={600}
//                         height={400}
//                       />
//                       <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                         After
//                       </div>
//                     </div>
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="before" className="mt-4">
//                   <div className="overflow-hidden rounded-lg aspect-video">
//                     <Image
//                       src={property.beforeImage || "/placeholder.svg"}
//                       alt="Before renovation"
//                       className="object-cover w-full h-full"
//                       width={600}
//                       height={400}
//                     />
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="after" className="mt-4">
//                   <div className="overflow-hidden rounded-lg aspect-video">
//                     <Image
//                       src={property.afterImage || "/placeholder.svg"}
//                       alt="After renovation"
//                       className="object-cover w-full h-full"
//                       width={600}
//                       height={400}
//                     />
//                   </div>
//                 </TabsContent>
//               </Tabs>

//               <div className="grid grid-cols-3 gap-2 mt-4">
//                 {property.galleryImages?.map((image, index) => (
//                   // <div
//                   //   key={index}
//                   //   className="overflow-hidden rounded-md aspect-square"
//                   // >
//                   //   <Image
//                   //     src={image || "/placeholder.svg"}
//                   //     alt={`Gallery image ${index + 1}`}
//                   //     className="object-cover w-full h-full transition-transform hover:scale-110"
//                   //     width={200}
//                   //     height={200}
//                   //   />
//                   // </div>
//                   <button
//                     key={index}
//                     onClick={() => openLightbox(image)}
//                     className="overflow-hidden rounded-md aspect-square"
//                   >
//                     <Image
//                       src={image || "/placeholder.svg"}
//                       alt={`Gallery image ${index + 1}`}
//                       className="object-cover w-full h-full transition-transform hover:scale-110"
//                       width={200}
//                       height={200}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="p-6 bg-slate-50 dark:bg-slate-900">
//               <h3 className="mb-4 text-lg font-semibold">
//                 Transformation Details
//               </h3>

//               <div className="space-y-4">
//                 <div>
//                   <h4 className="text-sm font-medium text-slate-500">
//                     Project Duration
//                   </h4>
//                   <p>{property.duration}</p>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-medium text-slate-500">
//                     Description
//                   </h4>
//                   <p className="text-sm">{property.description}</p>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-medium text-slate-500">
//                     Key Improvements
//                   </h4>
//                   <ul className="pl-5 mt-2 text-sm list-disc">
//                     {property.improvements.map((improvement, index) => (
//                       <li key={index}>{improvement}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//       <Dialog open={!!lightboxImage} onOpenChange={closeLightbox}>
//         <DialogContent className="p-0 bg-black/80 ">
//           {/* <button
//             onClick={closeLightbox}
//             className="absolute z-50 right-4 top-4 p-2 text-white"
//           >
//             <X className="w-6 h-6" />
//           </button> */}
//           {lightboxImage && (
//             <div className="relative ">
//               <Image
//                 src={lightboxImage}
//                 alt="Full-size image"
//                 width={1200}
//                 height={800}
//                 className="object-contain rounded-lg w-full h-full"
//               />
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { X } from "lucide-react";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export function TransformationModal({ property, isOpen, onClose }) {
//   const [activeTab, setActiveTab] = useState("comparison");
//   const [lightboxImage, setLightboxImage] = useState(null);

//   const openLightbox = (src) => setLightboxImage(src);
//   const closeLightbox = () => setLightboxImage(null);

//   return (
//     <>
//       <Dialog open={isOpen} onOpenChange={onClose}>
//         <DialogContent className="max-w-4xl sm:max-w-5xl p-0 sm:overflow-auto h-screen sm:h-screen overflow-scroll">
//           {/* <Button
//           variant="ghost"
//           size="icon"
//           onClick={onClose}
//           className="absolute z-50 right-4 top-4 bg-black/20 hover:bg-black/40 text-white rounded-full"
//         >
//           <X className="w-4 h-4" />
//         </Button> */}

//           <div className="grid">
//             <div className="p-6">
//               <h2 className="mb-2 text-2xl font-bold">{property.title}</h2>
//               <div className="flex items-center gap-2 mb-4">
//                 <Badge variant="outline">{property.category}</Badge>
//                 <span className="text-sm text-slate-500">
//                   {property.location}
//                 </span>
//               </div>

//               <Tabs
//                 value={activeTab}
//                 onValueChange={setActiveTab}
//                 className="w-full"
//               >
//                 <TabsList className="w-full">
//                   {/* <TabsTrigger value="comparison" className="flex-1">
//                     Comparison
//                   </TabsTrigger> */}
//                   <TabsTrigger value="before" className="flex-1">
//                     Before
//                   </TabsTrigger>
//                   <TabsTrigger value="after" className="flex-1">
//                     After
//                   </TabsTrigger>
//                 </TabsList>

//                 <TabsContent value="comparison" className="mt-4">
//                   <div className="relative overflow-hidden rounded-lg aspect-video">
//                     <div className="absolute inset-0 w-1/2 z-10 border-r border-white">
//                       <Image
//                         src={property.beforeImage || "/placeholder.svg"}
//                         alt="Before renovation"
//                         className="object-cover w-full h-full"
//                         width={600}
//                         height={400}
//                       />
//                       <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                         Before
//                       </div>
//                     </div>

//                     <div className="absolute inset-0">
//                       <Image
//                         src={property.afterImage || "/placeholder.svg"}
//                         alt="After renovation"
//                         className="object-cover w-full h-full"
//                         width={600}
//                         height={400}
//                       />
//                       <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
//                         After
//                       </div>
//                     </div>
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="before" className="mt-4">
//                   <div className="overflow-hidden rounded-lg aspect-video">
//                     <Image
//                       src={property.beforeImage || "/placeholder.svg"}
//                       alt="Before renovation"
//                       className="object-cover w-full h-full"
//                       width={600}
//                       height={400}
//                     />
//                   </div>
//                 </TabsContent>

//                 <TabsContent value="after" className="mt-4">
//                   <div className="overflow-hidden rounded-lg aspect-video">
//                     <Image
//                       src={property.afterImage || "/placeholder.svg"}
//                       alt="After renovation"
//                       className="object-cover w-full h-full"
//                       width={600}
//                       height={400}
//                     />
//                   </div>
//                 </TabsContent>
//               </Tabs>

//               <div className="grid grid-cols-3 gap-2 mt-4">
//                 {property.galleryImages?.map((image, index) => (
//                   // <div
//                   //   key={index}
//                   //   className="overflow-hidden rounded-md aspect-square"
//                   // >
//                   //   <Image
//                   //     src={image || "/placeholder.svg"}
//                   //     alt={`Gallery image ${index + 1}`}
//                   //     className="object-cover w-full h-full transition-transform hover:scale-110"
//                   //     width={200}
//                   //     height={200}
//                   //   />
//                   // </div>
//                   <button
//                     key={index}
//                     onClick={() => openLightbox(image)}
//                     className="overflow-hidden rounded-md aspect-square"
//                   >
//                     <Image
//                       src={image || "/placeholder.svg"}
//                       alt={`Gallery image ${index + 1}`}
//                       className="object-cover w-full h-full transition-transform hover:scale-110"
//                       width={200}
//                       height={200}
//                     />
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//       <Dialog open={!!lightboxImage} onOpenChange={closeLightbox}>
//         <DialogContent className="p-0 bg-black/80 ">
//           {/* <button
//             onClick={closeLightbox}
//             className="absolute z-50 right-4 top-4 p-2 text-white"
//           >
//             <X className="w-6 h-6" />
//           </button> */}
//           {lightboxImage && (
//             <div className="relative ">
//               <Image
//                 src={lightboxImage}
//                 alt="Full-size image"
//                 width={1200}
//                 height={800}
//                 className="object-contain rounded-lg w-full h-full"
//               />
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TransformationModal({ property, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState(() => {
    // Set default tab based on available media
    if (property?.beforeMedia && property.beforeMedia.length > 0) {
      return "before";
    }
    return "after";
  });
  const [lightboxMedia, setLightboxMedia] = useState(null);

  const openLightbox = (media) => setLightboxMedia(media);
  const closeLightbox = () => setLightboxMedia(null);

  const hasBeforeMedia =
    property?.beforeMedia && property.beforeMedia.length > 0;
  const hasAfterMedia = property?.afterMedia && property.afterMedia.length > 0;

  const MediaGrid = ({ mediaItems, title }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[55vh] overflow-auto">
        {mediaItems?.map((media, index) => (
          <div key={index} className="relative group">
            {media.type === "image" ? (
              <button
                onClick={() => openLightbox(media)}
                className="overflow-hidden rounded-lg aspect-square w-full block"
              >
                <Image
                  src={media.src || "/placeholder.svg"}
                  alt={`${title} ${index + 1}`}
                  className="object-cover w-full h-full transition-transform hover:scale-110"
                  width={200}
                  height={200}
                />
              </button>
            ) : (
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <video
                  src={media.src}
                  className="object-contain w-full h-full"
                  controls
                  preload="metadata"
                  poster={media.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <Play className="w-8 h-8 text-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl sm:max-w-5xl p-0 max-h-[90vh] overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="p-6 border-b">
              <h2 className="mb-2 text-2xl font-bold">{property?.title}</h2>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{property?.category}</Badge>
                <span className="text-sm text-slate-500">
                  {property?.location}
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              <div className="p-6">
                {/* Show tabs only if we have media to display */}
                {(hasBeforeMedia || hasAfterMedia) && (
                  <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="w-full mb-6">
                      {hasBeforeMedia && (
                        <TabsTrigger value="before" className="flex-1">
                          Before Renovation
                        </TabsTrigger>
                      )}
                      {hasAfterMedia && (
                        <TabsTrigger value="after" className="flex-1">
                          After Renovation
                        </TabsTrigger>
                      )}
                    </TabsList>

                    {hasBeforeMedia && (
                      <TabsContent value="before" className="mt-0">
                        <MediaGrid
                          mediaItems={property.beforeMedia}
                          title="Before Renovation Gallery"
                        />
                      </TabsContent>
                    )}

                    {hasAfterMedia && (
                      <TabsContent value="after" className="mt-0">
                        <MediaGrid
                          mediaItems={property.afterMedia}
                          title="After Renovation Gallery"
                        />
                      </TabsContent>
                    )}
                  </Tabs>
                )}

                {/* Fallback if no media available */}
                {!hasBeforeMedia && !hasAfterMedia && (
                  <div className="text-center py-12">
                    <p className="text-slate-500">
                      No media available for this project.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Lightbox for full-size images */}
      <Dialog open={!!lightboxMedia} onOpenChange={closeLightbox}>
        <DialogContent className="p-0 bg-black/90 max-w-full max-h-full border-0">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute z-50 right-4 top-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
          >
            <X className="w-4 h-4" />
          </Button> */}

          {lightboxMedia && (
            <div className="relative flex items-center justify-center max-h-full">
              {lightboxMedia.type === "image" ? (
                <Image
                  src={lightboxMedia.src || "/placeholder.svg"}
                  alt="Full-size image"
                  width={1200}
                  height={800}
                  className="object-contain max-w-full max-h-full rounded-lg"
                  priority
                />
              ) : (
                <video
                  src={lightboxMedia.src}
                  className="max-w-full max-h-[90vh] rounded-lg"
                  controls
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
