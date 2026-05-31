import React, { useState } from "react";

export default function LunchLuckApp() {
  const restaurants = [
    {
      name: "NU Sentral Food Court",
      cuisine: "Mixed Local",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=NU+Sentral+Food+Court",
    },
    {
      name: "Nasi Lemak Tanglin",
      cuisine: "Malaysian",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Nasi+Lemak+Tanglin+KL+Sentral",
    },
    {
      name: "Mr. Tuk Tuk",
      cuisine: "Thai",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Mr+Tuk+Tuk+NU+Sentral",
    },
    {
      name: "Din Tai Fung",
      cuisine: "Taiwanese",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Din+Tai+Fung+NU+Sentral",
    },
    {
      name: "Madam Kwan's",
      cuisine: "Local Fusion",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Madam+Kwans+NU+Sentral",
    },
    {
      name: "Q Bistro",
      cuisine: "Mamak",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Q+Bistro+KL+Sentral",
    },
    {
      name: "KyoChon 1991",
      cuisine: "Korean Fried Chicken",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=KyoChon+NU+Sentral",
    },
    {
      name: "Boat Noodle",
      cuisine: "Thai",
      image: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Boat+Noodle+NU+Sentral",
    },
    {
      name: "Menya Musashi",
      cuisine: "Japanese Ramen",
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Menya+Musashi+NU+Sentral",
    },
    {
      name: "Sushi Zanmai",
      cuisine: "Japanese",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Sushi+Zanmai+NU+Sentral",
    },
    {
      name: "Nando's",
      cuisine: "Peri-Peri Chicken",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Nandos+NU+Sentral",
    },
    {
      name: "4Fingers",
      cuisine: "Korean Chicken",
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=4Fingers+NU+Sentral",
    },
    {
      name: "Dolly Dim Sum",
      cuisine: "Dim Sum",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Dolly+Dim+Sum+NU+Sentral",
    },
    {
      name: "Texas Chicken",
      cuisine: "Fast Food",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Texas+Chicken+NU+Sentral",
    },
    {
      name: "Burger King",
      cuisine: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Burger+King+NU+Sentral",
    },
    {
      name: "Subway",
      cuisine: "Sandwiches",
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Subway+KL+Sentral",
    },
    {
      name: "Secret Recipe",
      cuisine: "Cafe",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Secret+Recipe+NU+Sentral",
    },
    {
      name: "Pelita Nasi Kandar",
      cuisine: "Nasi Kandar",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Pelita+Nasi+Kandar+KL+Sentral",
    },
    {
      name: "ABC Bistro Cafe",
      cuisine: "Mamak",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=ABC+Bistro+Cafe+KL+Sentral",
    },
    {
      name: "Nam Heong",
      cuisine: "Chinese",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Nam+Heong+NU+Sentral",
    },
    {
      name: "Padi House",
      cuisine: "Asian Fusion",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Padi+House+KL+Sentral",
    },
  ];

  const [selected, setSelected] = useState(restaurants[0]);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const colors = [
    "#FF6B6B", // Red
    "#FF8E72", // Orange-red
    "#FFA500", // Orange
    "#FFD700", // Gold
    "#FFED4E", // Yellow
    "#FF1493", // Pink
  ];

  const sliceAngle = 360 / restaurants.length;

  const spinRoulette = () => {
    if (spinning) return;

    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const winner = restaurants[randomIndex];

    const extraSpins = 360 * 5;
    const targetRotation = -(randomIndex * sliceAngle) + 90;
    const finalRotation = rotation + extraSpins + targetRotation;

    setRotation(finalRotation);

    setTimeout(() => {
      setSelected(winner);
      setSpinning(false);
    }, 4000);
  };

  const openMaps = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 flex flex-col items-center justify-start pt-4 md:pt-8 pb-6 px-4 overflow-x-hidden">
      {/* Header */}
      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 flex items-center justify-center gap-2">
          🍜 LunchLuck
        </h1>
        <p className="text-gray-700 text-sm md:text-base mt-1">
          Spin the wheel and let fate decide lunch.
        </p>
      </div>

      {/* Wheel Container */}
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-2xl flex-1">
        {/* Pointer */}
        <div className="h-8 md:h-12 flex justify-center items-end">
          <div className="flex flex-col items-center z-20">
            <div className="w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full shadow-lg"></div>
            <div className="w-0 h-0 border-l-2 md:border-l-3 border-r-2 md:border-r-3 border-t-5 md:border-t-6 border-l-transparent border-r-transparent border-t-red-600 drop-shadow-lg"></div>
          </div>
        </div>

        {/* Wheel */}
        <div className="flex justify-center items-center flex-1">
          <div
            className="relative rounded-full border-8 md:border-10 border-white shadow-2xl"
            style={{
              width: "min(85vw, 340px)",
              height: "min(85vw, 340px)",
              transform: `rotate(${rotation}deg)`,
              transition: spinning ? "transform 4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
            }}
          >
            {/* Wheel Segments */}
            {restaurants.map((restaurant, index) => {
              const startAngle = index * sliceAngle;
              const color = colors[index % colors.length];
              const midAngle = startAngle + sliceAngle / 2;
              const x = 50 + 45 * Math.cos((midAngle - 90) * (Math.PI / 180));
              const y = 50 + 45 * Math.sin((midAngle - 90) * (Math.PI / 180));

              return (
                <div
                  key={restaurant.name}
                  className="absolute w-full h-full"
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((startAngle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((startAngle - 90) * (Math.PI / 180))}%, ${50 + 50 * Math.cos((startAngle + sliceAngle - 90) * (Math.PI / 180))}% ${50 + 50 * Math.sin((startAngle + sliceAngle - 90) * (Math.PI / 180))})`,
                    backgroundColor: color,
                  }}
                />
              );
            })}

            {/* Text Labels - Radially positioned */}
            {restaurants.map((restaurant, index) => {
              const midAngle = (index * sliceAngle + sliceAngle / 2) * (Math.PI / 180);
              const x = 50 + 32 * Math.cos(midAngle - Math.PI / 2);
              const y = 50 + 32 * Math.sin(midAngle - Math.PI / 2);

              return (
                <div
                  key={`label-${restaurant.name}`}
                  className="absolute text-white text-xs font-bold drop-shadow-lg text-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: `translate(-50%, -50%) rotate(${index * sliceAngle + sliceAngle / 2}deg)`,
                    width: "50px",
                    maxWidth: "50px",
                  }}
                >
                  <p className="line-clamp-2">{restaurant.name}</p>
                </div>
              );
            })}

            {/* Center Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                onClick={spinRoulette}
                disabled={spinning}
                className="w-20 md:w-28 h-20 md:h-28 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white text-lg md:text-xl font-black shadow-2xl hover:scale-110 active:scale-95 transition-transform disabled:opacity-75 border-4 md:border-6 border-white"
              >
                {spinning ? "🎲" : "SPIN"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Card */}
      <div className="w-full max-w-md md:max-w-2xl mt-4 md:mt-6 bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-32 md:h-48 object-cover"
        />

        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            <div className="flex-1">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {selected.name}
              </h2>
              <p className="text-orange-600 text-sm md:text-base font-semibold mt-1">
                {selected.cuisine}
              </p>
            </div>

            <button
              onClick={() => openMaps(selected.maps)}
              className="px-4 md:px-6 py-2 md:py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-lg transition-all hover:scale-105 active:scale-95 text-xs md:text-sm whitespace-nowrap"
            >
              📍 Open Google Maps
            </button>
          </div>

          <div className="mt-3 md:mt-4 bg-amber-50 border border-amber-200 rounded-2xl p-3 md:p-4">
            <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
              Feeling indecisive? LunchLuck randomly picks one of the most popular lunch spots around KL Sentral and NU Sentral.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs md:text-sm text-gray-500 mt-4 text-center">
        Built for hungry office warriors around KL Sentral 🍛
      </p>
    </div>
  );
}
