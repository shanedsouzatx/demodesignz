"use client";
import Image from "next/image";

export default function Marquee() {
  return (
    <div className="overflow-hidden relative w-full pt-11 bg-blue-100 pb-11 py-28">
       <h2 className="text-3xl text-center md:text-5xl font-bold text-blue-700 py-3">Behavioral Health for Philly Schools</h2>
      <p className="text-gray-600 mt-2 text-center max-w-2xl mx-auto py-5">
      As a regionalized provider of behavioral health services for students, we have a contract with Community Behavioral Health (CBH) for a cluster of  schools in the South Philadelphia area. 
      </p>
      <div className="flex items-center w-full gap-28 animate-marquee pt-4">
        {[
          "/images/tes1.png",
          "/images/tes2.png",
          "/images/tes3.png",
        ].map((src, index) => (
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
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
