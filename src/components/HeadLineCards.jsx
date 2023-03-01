import React from 'react'

const HeadLineCards = () => {
  return (
    <div className="max-w-[1460px] mx-auto p-4 py-20 grid md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl md:text-xl lg:text-2xl px-2 pt-4">
            Thieb bou wekh
          </p>
          <p className="px-2 mb-4 sm:mb-6 md:mb-3 lg:mb-6">Avec légumes</p>
          <button className="rounded-xl border-black bg-white text-black mx-2 px-4 py-2 absolute botton-4">
            Commander maintenant
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="images/thieb2.jpg"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl md:text-xl lg:text-2xl px-2 pt-4">
            Maffé yapp
          </p>
          <p className="px-2 mb-4 sm:mb-6 md:mb-3 lg:mb-6">Du déggé pur</p>
          <button className="rounded-xl border-black bg-white text-black mx-2 absolute botton-4">
            Commander maintenat
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="images/maffé.jpg"
          alt="/"
        />
      </div>
      {/* Card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl md:text-xl lg:text-2xl px-2 pt-4">
            Riz au poisson
          </p>
          <p className="px-2 mb-4 sm:mb-6 md:mb-3 lg:mb-6">poisson fumé</p>
          <button className="rounded-xl border-black bg-white text-black mx-2 absolute botton-4">
            Commandez maintenat
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="images/thieb-dieun.jpg"
          alt="/"
        />
      </div>
    </div>
  );
}

export default HeadLineCards;