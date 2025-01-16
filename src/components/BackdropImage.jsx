import React, { useEffect, useState } from "react";
import { fetchData } from "../services/api";

const BackdropImage = ({ children, query }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchData(query)
      .then((data) => {
        if (data?.results?.length > 0) {
          setImage(data.results[13].backdrop_path);
        } else {
          console.warn("No results found in API response");
        }
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [query]);

  return (
    <div
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${image}')`,
      }}
      className="relative h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-[rgba(26,26,26,0.6)] via-[30%] to-[rgba(20,20,20,1)] to-[75%]"></div>

      <div className="scale-90 md:scale-100 relative z-10 text-center flex items-center flex-col">
        {children}
      </div>
    </div>
  );
};

export default BackdropImage;
