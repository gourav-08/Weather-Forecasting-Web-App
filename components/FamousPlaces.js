import React from "react";
import Image from "next/image";
import Link from "next/link";

// import images
import Bengaluruimage from "../public/images/Bengaluruimage.jpg";
import Delhiimage from "../public/images/Delhiimage.jpg";
import Mumbaiimage from "../public/images/Mumbaiimage.jpg";
import Kolkataimage from "../public/images/Kolkataimage.jpg";

const places = [
  {
    name: "Bengaluru",
    image: Bengaluruimage,
    url: "/location/bengaluru-1277333",
  },
  {
    name: "Mumbai",
    image: Mumbaiimage,
    url: "/location/mumbai-1275339",
  },
  {
    name: "Delhi",
    image: Delhiimage,
    url: "/location/delhi-1273294",
  },
  {
    name: "Kolkata",
    image: Kolkataimage,
    url: "/location/kolkata-1275004",
  },
];

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image
                      src={place.image}
                      alt={`${place.name} Image`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <span>{place.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
