import React, { useState } from "react";

export default function LunchLuckApp() {
  const restaurants = [
    {
      name: "Nasi Lemak Tanglin",
      cuisine: "Malaysian",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Nasi+Lemak+Tanglin+KL+Sentral",
    },
    {
      name: "Mr. Tuk Tuk",
      cuisine: "Thai",
      image:
        "https://images.unsplash.com/photo-1559847844-5315695dadae?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Mr+Tuk+Tuk+NU+Sentral",
    },
    {
      name: "Din Tai Fung",
      cuisine: "Taiwanese",
      image:
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Din+Tai+Fung+NU+Sentral",
    },
    {
      name: "Q Bistro",
      cuisine: "Mamak",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Q+Bistro+KL+Sentral",
    },
    {
      name: "KyoChon 1991",
      cuisine: "Korean Fried Chicken",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=KyoChon+NU+Sentral",
    },
    {
      name: "Menya Musashi",
      cuisine: "Japanese",
      image:
        "https://images.unsplash.com/photo-1617093727343-374698b1b08d?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Menya+Musashi+NU+Sentral",
    },
    {
      name: "Chicken Rice Shop",
      cuisine: "Chicken Rice",
      image:
        "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Chicken+Rice+Shop+NU+Sentral",
    },
    {
      name: "Nando's",
      cuisine: "Peri Peri Chicken",
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Nandos+NU+Sentral",
    },
    {
      name: "Pelita Nasi Kandar",
      cuisine: "Nasi Kandar",
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Pelita+Nasi+Kandar+KL+Sentral",
    },
    {
      name: "Sopoong",
      cuisine: "Korean",
      image:
        "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1200&auto=format&fit=crop",
      maps:
        "https://www.google.com/maps/search/?api=1&query=Sopoong+NU+Sentral",
    },
  ];

  const [selected, setSelected] = useState(restaurants[0]);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const openMaps = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const spinRoulette = () => {
    if (spinning) return;

    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * restaurants.length);

    const winner = restaurants[randomIndex];

    setSelected(winner);

    const sliceAngle = 360 / restaurants.length;

    const targetAngle =
      270 - (randomIndex * sliceAngle + sliceAngle / 2);

    const spins = 360 * 5;

    setRotation((prev) => prev + spins + targetAngle);

    setTimeout(() => {
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 flex flex-col items-center justify-center p-6">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-black text-orange-600">
          🍜 LunchLuck
        </h1>

        <p className="text-gray-700 mt-3 text-lg">
          Spin the roulette and let KL Sentral decide lunch.
        </p>
      </div>

      <div className="relative flex items-center justify-center">
        {/* Arrow */}
        <div className="absolute -top-10 z-20 flex flex-col items-center">
          <div className="w-7 h-7 rounded-full bg-red-600 border-4 border-white shadow-2xl" />

          <div
            className="w-0 h-0 border-l-[22px] border-r-[22px] border-t-[42px]
            border-l-transparent border-r-transparent border-t-red-600 shadow-2xl"
          />
        </div>

        {/* Wheel */}
        <div
          className="relative rounded-full border-[12px] border-white shadow-2xl"
          style={{
            width: 420,
            height: 420,
            overflow: "visible",
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)"
              : "none",
            background: `conic-gradient(
              #fb923c 0deg 36deg,
              #facc15 36deg 72deg,
              #f87171 72deg 108deg,
              #fdba74 108deg 144deg,
              #fb923c 144deg 180deg,
              #facc15 180deg 216deg,
              #f87171 216deg 252deg,
              #fdba74 252deg 288deg,
              #fb923c 288deg 324deg,
              #facc15 324deg 360deg
            )`,
          }}
        >
          {restaurants.map((restaurant, index) => {
            const angle =
              (360 / restaurants.length) * index - 90;

            return (
              <div
                key={restaurant.name}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  width: "50%",
                  transform: `rotate(${angle}deg)`,
                }}
              >
                <div className="flex justify-end pr-5">
                  <span
                    style={{
                      fontSize: 12,
                      color: "white",
                      fontWeight: 700,
                      textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                    }}
                  >
                    {restaurant.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Center Button */}
          <div className="absolute inset-[120px] rounded-full bg-white shadow-inner flex items-center justify-center">
            <button
              onClick={spinRoulette}
              disabled={spinning}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white text-2xl font-black shadow-2xl hover:scale-105 transition-all"
            >
              {spinning ? "🎲" : "SPIN"}
            </button>
          </div>
        </div>
      </div>

      {/* Result Card */}
      <div className="mt-10 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h2 className="text-3xl font-black text-gray-800">
                {selected.name}
              </h2>

              <p className="text-orange-600 font-semibold mt-2">
                {selected.cuisine}
              </p>
            </div>

            <button
              onClick={() => openMaps(selected.maps)}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg hover:scale-105 transition-transform"
            >
              📍 Open Google Maps
            </button>
          </div>

          <div className="mt-5 bg-orange-50 rounded-2xl p-4">
            <p className="text-gray-700">
              Feeling lucky today? LunchLuck helps your office squad
              decide lunch around KL Sentral 😎
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        Built for hungry office warriors around KL Sentral! 🍛
      </div>
    </div>
  );
}
