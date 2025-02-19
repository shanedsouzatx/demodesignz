"use client";
import Image from "next/image";

export default function Marquee() {
  const images = [
    "/images/tes1.png",
    "/images/tes2.png",
    "/images/tes3.png",
  ];
  // Repeat the images three times
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden relative w-full py-16">
      {/* Original Heading and Paragraph (unchanged) */}
      <h2 className="text-3xl text-center md:text-5xl font-bold text-blue-700 py-3">Behavioral Health for Philly Schools</h2>
      <p className="text-gray-600 text-md mt-2 text-center max-w-3xl mx-auto pb-5 pt-">
      As a regionalized provider of behavioral health services for students, we have a contract with Community Behavioral Health (CBH) for a cluster of  schools in the South Philadelphia area. 
      </p>

      <div className="flex items-center w-full gap-28 animate-marquee">
        {repeatedImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Brand Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
