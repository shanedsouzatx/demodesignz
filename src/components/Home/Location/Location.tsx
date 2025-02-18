"use client";
import Image from "next/image";

export default function Location() {
  const locations = [
    {
      city: "Bala Cynwyd Office",
      address: "139 Montgomery Avenue, #110  Bala Cynwyd, PA 19004  ",
      number: "610-664-6200",
      fax:"610-664-6200",
      image: "/images/l3.jpg",
    },
    {
      city: "Philadelphia Office ",
      address: "1930 S. Broad Street, #26  Philadelphia, PA 19145 ",
      number:'267-507-2719',
      fax:'267-507-2720',
      image: "/images/l4.jpg",
    },
    {
      city: "South Philadelphia satellite Office",
      address: "2132 South 10th St. Philadelphia, PA 19148  ",
      
      image: "/images/l5.jpg",
    },
  ];

  return (
    <div className="py-16 px-8">
      <h2 className="text-3xl font-bold uppercase text-blue-700 md:text-4xl mb-11 text-center">
        Our Locations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {locations.map((location, index) => (
          <div
            key={index}
            className="relative rounded-xl hover:rounded-xl overflow-hidden shadow-lg group"
          >
            <Image
              src={location.image}
              alt={location.city}
              width={500}
              height={350}
              className="w-full constrast-75  backdrop-blur-[20px] h-64 object-cover transition-transform duration-700 group-hover:scale-150"
            /> <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"></div>

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4">
              <h3 className="text-white text-xl font-semibold">{location.city}</h3>
              <p className="text-gray-300 text-base">Address: <span className="contrast-150">{location.address}</span></p>
              {location.number && (
  <p className="text-gray-300 text-sm">
    Phone: <span className="font-bold">{location.number}</span>
  </p>
)}

{location.fax && (
  <p className="text-gray-300 text-sm">
    Fax: <span className="font-bold">{location.fax}</span>
  </p>
)}
  </div>
          </div>
        ))}
      </div>
    </div>
  );
}
