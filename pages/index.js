import Head from "next/head";
import SearchBox from "../components/SearchBox";
import FamousPlaces from "../components/FamousPlaces";
import Image from "next/image";

import weather from "../public/images/weather.jpg";

export default function Home() {
  return (
    
    <div>
      <Head>
        <title>Weather App - Next</title>
      </Head>
      
      <div className="home"  style={{ backgroundImage: "url(/images/weather.jpg)",
                                      width : '100%',
                                      height : '200 px',
                                      backgroundSize: 'cover'}}>
        <div className="container">
          <SearchBox placeholder="Search for a city..." />

          <FamousPlaces />
        </div>
      </div>
    </div>
    
  );
}
