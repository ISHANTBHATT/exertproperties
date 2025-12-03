"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

export default function ProgressReportModal({
  isOpen,
  onClose,
  title,
  location,
  date,
  sections, // Array of sections: [{ title: "Piling activities", media: [...] }, ...]
}) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState({});
  const [zoomedStates, setZoomedStates] = useState({});

  // Reset states when modal closes
  useEffect(() => {
    if (!isOpen) {
      setZoomedStates({});
      setCurrentMediaIndex({});
    }
  }, [isOpen]);

  const navigateMedia = (sectionIndex, direction) => {
    const section = sections[sectionIndex];
    const mediaLength = section.media.length;

    setCurrentMediaIndex((prev) => {
      const currentIndex = prev[sectionIndex] || 0;
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % mediaLength
          : (currentIndex - 1 + mediaLength) % mediaLength;
      return { ...prev, [sectionIndex]: newIndex };
    });

    setZoomedStates((prev) => ({ ...prev, [sectionIndex]: false }));
  };

  const toggleZoom = (sectionIndex) => {
    setZoomedStates((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const renderMedia = (media, sectionIndex) => {
    const isZoomed = zoomedStates[sectionIndex];

    if (media.type === "video") {
      return (
        <div className="relative h-[400px] w-full bg-black flex items-center justify-center rounded-lg overflow-hidden">
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
        <div
          className={`relative w-full rounded-lg overflow-hidden ${
            isZoomed
              ? "h-[70vh] cursor-zoom-out overflow-auto"
              : "h-[400px] cursor-zoom-in"
          }`}
          onClick={() => toggleZoom(sectionIndex)}
        >
          <div className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full">
            {isZoomed ? <ZoomOut size={20} /> : <ZoomIn size={20} />}
          </div>
          <Image
            src={media.src || "/placeholder.svg"}
            alt={media.alt || "Progress image"}
            fill
            className={`object-contain ${
              isZoomed ? "scale-150 transform-origin-top-left" : ""
            }`}
            unoptimized={isZoomed}
          />
        </div>
      );
    }
  };

  const renderThumbnails = (mediaArray, sectionIndex) => {
    const currentIndex = currentMediaIndex[sectionIndex] || 0;

    return (
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 mt-3">
        {mediaArray.map((media, idx) => (
          <div
            key={idx}
            className={`relative h-16 w-full cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
              idx === currentIndex
                ? "border-[#3A9188] shadow-md"
                : "border-gray-200 hover:border-gray-300"
            }`}
            onClick={() => {
              setCurrentMediaIndex((prev) => ({
                ...prev,
                [sectionIndex]: idx,
              }));
              setZoomedStates((prev) => ({ ...prev, [sectionIndex]: false }));
            }}
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
                alt={media.alt || "Thumbnail"}
                fill
                className="object-cover"
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-6xl w-full mx-4 max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white z-20 p-6 pb-4 border-b">
          <div className="flex justify-between items-start">
            <div>
              <div className="uppercase text-sm tracking-wider text-gray-500 mb-1">
                {location}
              </div>
              <h2 className="text-2xl font-light mb-2">{title}</h2>
              <div className="text-sm text-gray-500">{date}</div>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-2 hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {sections?.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              {/* Section Title */}
              <div className="border-l-4 border-[#3A9188] pl-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {section.title}
                </h3>
                {section.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {section.description}
                  </p>
                )}
              </div>

              {/* Media Display */}
              {section.media && section.media.length > 0 && (
                <div className="space-y-3">
                  <div className="relative">
                    {renderMedia(
                      section.media[currentMediaIndex[sectionIndex] || 0],
                      sectionIndex
                    )}

                    {section.media.length > 1 && (
                      <>
                        <button
                          onClick={() => navigateMedia(sectionIndex, "prev")}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button
                          onClick={() => navigateMedia(sectionIndex, "next")}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </button>

                        {/* Media counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          {(currentMediaIndex[sectionIndex] || 0) + 1} /{" "}
                          {section.media.length}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {section.media.length > 1 &&
                    renderThumbnails(section.media, sectionIndex)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
