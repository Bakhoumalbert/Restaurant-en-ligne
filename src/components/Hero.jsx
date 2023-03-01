import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        {/* overlay : superposition */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/20 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Les <span className="text-orange-500">meilleurs</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">plats </span>livrés
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="images/plats.jpg"
          alt="plats délicieux😋"
        />
      </div>
    </div>
  );
}

export default Hero