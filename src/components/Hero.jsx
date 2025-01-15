import React from "react";
import { useEffect } from "react";
import { GoSearch } from "react-icons/go";
import BackdropImage from "./BackdropImage";

const Hero = () => {
  useEffect(() => {});

  return (
    <BackdropImage>
      <div className="mt-16 scale-75 md:scale-100 md:mt-48 md:mb-16 flex justify-center opacity-45 ">
        <svg
          width="257"
          height="156"
          viewBox="0 0 257 156"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M114.454 127.349C115.667 129.546 114.869 132.312 112.671 133.525V133.525C90.6926 145.655 63.0417 137.672 50.9109 115.694L2.58851 28.1444C1.37543 25.9465 2.17373 23.1814 4.37156 21.9684V21.9684C26.3499 9.83758 54.0008 17.8206 66.1316 39.7989L114.454 127.349Z"
            fill="white"
          />
          <path
            d="M184.454 127.349C185.667 129.546 184.869 132.312 182.671 133.525V133.525C160.693 145.655 133.042 137.672 120.911 115.694L72.5885 28.1444C71.3754 25.9465 72.1737 23.1814 74.3716 21.9684V21.9684C96.3499 9.83758 124.001 17.8206 136.132 39.7989L184.454 127.349Z"
            fill="white"
          />
          <path
            d="M254.454 127.349C255.667 129.546 254.869 132.312 252.671 133.525V133.525C230.693 145.655 203.042 137.672 190.911 115.694L142.588 28.1444C141.375 25.9465 142.174 23.1814 144.372 21.9684V21.9684C166.35 9.83758 194.001 17.8206 206.132 39.7989L254.454 127.349Z"
            fill="white"
          />
        </svg>
      </div>
      <h1 className="font-bold font-jakarta text-xl md:text-3xl my-2 text-white">
        The Best Streaming Experience
      </h1>
      <p className="font-light font-urbanist md:w-3/4 text-xs md:text-sm my-2 text-gray-200">
        Movienism is the best streaming experience for watching your favorite
        movies and shows on demand, anytime, anywhere. With Movienism, you can
        enjoy a wide variety of content, including the latest blockbusters,
        classic movies, popular TV shows, and more. You can also create your own
        watchlists, so you can easily find the content you want to watch.
      </p>
      <div className="flex my-5 border  border-white px-3 w-2/3 rounded-md py-3">
        <input
          type="text"
          className="text-white font-thin bg-transparent focus:outline-none placeholder:text-white placeholder:opacity-35 w-full"
          placeholder="Search for a Movie, TV Shows, or actors......"
        />
        <GoSearch className="cursor-pointer size-6" />
      </div>
    </BackdropImage>
  );
};

export default Hero;
