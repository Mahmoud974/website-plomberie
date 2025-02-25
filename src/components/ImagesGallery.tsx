"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  "/page-pompes-a-chaleur/img-gallery/pompe-1.jpg",
  "/page-pompes-a-chaleur/img-gallery/pompe-2.jpg",
  "/page-pompes-a-chaleur/img-gallery/pompe-3.jpg",
];

export default function ImagesGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const selectedImageRef = useRef(selectedImage);

  useEffect(() => {
    selectedImageRef.current = selectedImage;
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageRef.current === null) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      } else if (event.key === "ArrowRight") {
        setSelectedImage((prev) =>
          prev !== null && prev < images.length - 1 ? prev + 1 : prev
        );
      } else if (event.key === "ArrowLeft") {
        setSelectedImage((prev) =>
          prev !== null && prev > 0 ? prev - 1 : prev
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="flex justify-center flex-wrap gap-4">
      {images.map((img, index) => (
        <Image
          key={index}
          width={500}
          height={500}
          src={img}
          alt={`Installation ${index + 1}`}
          className="w-80 h-80 object-cover cursor-pointer rounded-md"
          onClick={() => setSelectedImage(index)}
        />
      ))}

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[80%] max-w-3xl h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Carousel
              selectedItem={selectedImage}
              onChange={setSelectedImage}
              showThumbs={false}
              className="w-full h-full flex items-center justify-center"
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="h-full flex items-center justify-center"
                >
                  <Image
                    width={700}
                    height={700}
                    src={img}
                    className="h-auto max-h-[80vh] object-contain rounded-lg"
                    alt={`Installation ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}
