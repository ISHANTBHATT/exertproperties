// "use client";
// import Image from "next/image";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { X } from "lucide-react";

// export default function ProjectModal({
//   isOpen,
//   onClose,
//   title,
//   location,
//   date,
//   beforeImage,
//   afterImage,
//   description,
// }) {
//   return (
//     <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
//       <DialogContent className="max-w-4xl p-0 overflow-auto h-screen">
//         <DialogHeader className="p-6 pb-0">
//           <div className="flex justify-between items-start">
//             <div>
//               <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
//                 {location}
//               </div>
//               <DialogTitle className="text-2xl font-light mb-2">
//                 {title}
//               </DialogTitle>
//               <div className="text-sm text-gray-500">{date}</div>
//             </div>
//             {/* <button
//               onClick={onClose}
//               className="rounded-full p-2 hover:bg-gray-100 transition-colors"
//             >
//               <X className="h-5 w-5" />
//             </button> */}
//           </div>
//         </DialogHeader>

//         <Tabs defaultValue="before" className="w-full mt-4">
//           <div className="px-6">
//             <TabsList className="grid w-full grid-cols-2 mb-4">
//               <TabsTrigger value="before">Before</TabsTrigger>
//               <TabsTrigger value="after">After</TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="before" className="mt-0">
//             <div className="relative h-[400px] w-full">
//               <Image
//                 src={beforeImage || "/placeholder.svg"}
//                 alt={`${title} - Before`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-lg font-medium mb-2">Before Renovation</h3>
//               <p className="text-sm text-gray-700">{description}</p>
//             </div>
//           </TabsContent>

//           <TabsContent value="after" className="mt-0">
//             <div className="relative h-[400px] w-full">
//               <Image
//                 src={afterImage || "/placeholder.svg"}
//                 alt={`${title} - After`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="p-6">
//               <h3 className="text-lg font-medium mb-2">After Renovation</h3>
//               <p className="text-sm text-gray-700">{description}</p>
//             </div>
//           </TabsContent>
//         </Tabs>
//       </DialogContent>
//     </Dialog>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

export default function ProjectGalleryModal({
  isOpen,
  onClose,
  title,
  location,
  date,
  beforeMedia,
  afterMedia,
}) {
  const [currentBeforeIndex, setCurrentBeforeIndex] = useState(0);
  const [currentAfterIndex, setCurrentAfterIndex] = useState(0);

  const navigateMedia = (type, direction) => {
    if (type === "before") {
      const mediaLength = beforeMedia.length;
      setCurrentBeforeIndex((prev) =>
        direction === "next"
          ? (prev + 1) % mediaLength
          : (prev - 1 + mediaLength) % mediaLength
      );
    } else {
      const mediaLength = afterMedia.length;
      setCurrentAfterIndex((prev) =>
        direction === "next"
          ? (prev + 1) % mediaLength
          : (prev - 1 + mediaLength) % mediaLength
      );
    }
  };

  const renderMedia = (media, index) => {
    if (media.type === "video") {
      return (
        <div className="relative h-[500px] w-full bg-black flex items-center justify-center">
          <video
            src={media.src}
            controls
            className="max-h-full max-w-full"
            autoPlay={false}
          />
        </div>
      );
    } else {
      return (
        <div className="relative h-[500px] w-full">
          <Image
            src={media.src || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      );
    }
  };

  const renderThumbnails = (mediaArray, currentIndex, setIndex, type) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4 px-6 overflow-x-auto">
        {mediaArray.map((media, idx) => (
          <div
            key={idx}
            className={`relative h-16 w-full cursor-pointer rounded-md overflow-hidden border-2 ${
              idx === currentIndex ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() =>
              type === "before"
                ? setCurrentBeforeIndex(idx)
                : setCurrentAfterIndex(idx)
            }
          >
            {media.type === "video" ? (
              <div className="relative h-full w-full bg-gray-200">
                {media.thumbnail ? (
                  <Image
                    src={media.thumbnail || "/placeholder.svg"}
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-6 w-6 text-gray-500" />
                  </div>
                )}
              </div>
            ) : (
              <Image
                src={media.src || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl sm:max-w-7xl p-0 overflow-auto h-screen">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-between items-start">
            <div>
              <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
                {location}
              </div>
              <DialogTitle className="text-2xl font-light mb-2">
                {title}
              </DialogTitle>
              <div className="text-sm text-gray-500">{date}</div>
            </div>
            {/* <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button> */}
          </div>
        </DialogHeader>

        <Tabs defaultValue="before" className="w-full mt-4">
          <div className="px-6">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              {beforeMedia.length > 1 && (
                <TabsTrigger value="before">Before</TabsTrigger>
              )}
              <TabsTrigger value="after">After</TabsTrigger>
            </TabsList>
          </div>

          {beforeMedia.length > 1 && (
            <TabsContent value="before" className="mt-0">
              <div className="relative">
                {renderMedia(
                  beforeMedia[currentBeforeIndex],
                  currentBeforeIndex
                )}

                {beforeMedia.length > 1 && (
                  <>
                    <button
                      onClick={() => navigateMedia("before", "prev")}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={() => navigateMedia("before", "next")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}
              </div>

              {beforeMedia.length > 1 &&
                renderThumbnails(
                  beforeMedia,
                  currentBeforeIndex,
                  setCurrentBeforeIndex,
                  "before"
                )}
            </TabsContent>
          )}

          <TabsContent value="after" className="mt-0">
            <div className="relative">
              {renderMedia(afterMedia[currentAfterIndex], currentAfterIndex)}

              {afterMedia.length > 1 && (
                <>
                  <button
                    onClick={() => navigateMedia("after", "prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => navigateMedia("after", "next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {afterMedia.length > 1 &&
              renderThumbnails(
                afterMedia,
                currentAfterIndex,
                setCurrentAfterIndex,
                "after"
              )}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
