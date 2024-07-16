import React from "react";
import banner from "../assets/banner.png"

const Banner = () => (
  <main class="relative h-screen">
    <img class="h-full w-full " src={banner} alt="Banner" />
    <div class="absolute inset-0 flex flex-col items-center justify-center font-bold space-y-2">
      <h2 class="text-5xl text-customYellow">Rincón</h2>
      <h1 class="text-6xl text-white">Gastronomico</h1>
      <button class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        <a href="">Ver menú</a>
      </button>
    </div>
  </main>
);

export default Banner;
