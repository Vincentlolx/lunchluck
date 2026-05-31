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
    {
      name: "Johnny's",
      cuisine: "Steamboat",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Johnnys+Restaurant+NU+Sentral",
    },
    {
      name: "Jollibee",
      cuisine: "Fast Food",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Jollibee+NU+Sentral",
    },
    {
      name: "Manhattan Fish Market",
      cuisine: "Seafood",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Manhattan+Fish+Market+NU+Sentral",
    },
    {
      name: "Auntie Anne's",
      cuisine: "Snacks",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Auntie+Annes+NU+Sentral",
    },
    {
      name: "KFC",
      cuisine: "Fried Chicken",
      image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=KFC+KL+Sentral",
    },
    {
      name: "Chicken Rice Shop",
      cuisine: "Chicken Rice",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Chicken+Rice+Shop+NU+Sentral",
    },
    {
      name: "Pizza Hut",
      cuisine: "Pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Pizza+Hut+NU+Sentral",
    },
    {
      name: "O'Briens",
      cuisine: "Sandwiches",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Obriens+KL+Sentral",
    },
    {
      name: "OldTown White Coffee",
      cuisine: "Cafe",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=OldTown+White+Coffee+KL+Sentral",
    },
  ];

  const [selected, setSelected] = useState(restaurants[0]);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const colors = [
    "#f97316",
    "#ef4444",
    "#facc15",
    "#fb7185",
    "#fb923c",
    "#f43f5e",
  ];

  const conicGradient = restaurants
    .map((_, index) => {
      const start = (360 / restaurants.length) * index;
      const end = (360 / restaurants.length) * (index + 1);
      return `${colors[index % colors.length]} ${start}deg ${end}deg`;
    })
    .join(", ");

  const spinRoulette = () => {
    if (spinning) return;

    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const winner = restaurants[randomIndex];

    const sliceAngle = 360 / restaurants.length;
    const pointerOffset = 276;
    const normalizedRotation = rotation % 360;
    const targetRotation =
      pointerOffset -
      (randomIndex * sliceAngle + sliceAngle / 2);

    let delta = targetRotation - normalizedRotation;

    if (delta < 0) {
      delta += 360;
    }

    const extraSpins = 360 * 6;
    const finalRotation = rotation + extraSpins + delta;

    setRotation(finalRotation);

    setTimeout(() => {
      setSelected(winner);
      setSpinning(false);
    }, 4200);
  };

  const openMaps = (url) => {
    try {
      const newWindow = window.open(url, "_blank");

      if (newWindow) {
        newWindow.opener = null;
        newWindow.focus();
      } else {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error("Unable to open Google Maps", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
      <div className="text-center mb-8 md:mb-10">
        <h1 className="text-5xl md:text-7xl font-black text-orange-600 drop-shadow-xl tracking-tight">
          🍜 LunchLuck
        </h1>

        <p className="mt-2 md:mt-3 text-base md:text-lg text-gray-700 font-medium">
          Spin the wheel and let fate decide lunch.
        </p>
      </div>

      <div className="relative flex items-center justify-center mb-8 md:mb-12">
        {/* Pointer */}
        <div className="absolute -top-8 md:-top-10 z-30 flex flex-col items-center animate-bounce">
          <div className="w-5 md:w-7 h-5 md:h-7 rounded-full bg-red-600 border-2 md:border-4 border-white shadow-xl" />
          <div className="w-0 h-0 border-l-4 md:border-l-6 border-r-4 md:border-r-6 border-t-8 md:border-t-10 border-l-transparent border-r-transparent border-t-red-600 drop-shadow-xl" />
        </div>

        {/* Wheel */}
        <div
          className="relative rounded-full border-8 md:border-12 border-white shadow-2xl overflow-hidden"
          style={{
            width: "min(90vw, 350px)",
            height: "min(90vw, 350px)",
            maxWidth: "350px",
            maxHeight: "350px",
            background: `conic-gradient(${conicGradient})`,
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 4.2s cubic-bezier(0.15, 0.85, 0.2, 1)"
              : "none",
          }}
        >
          {restaurants.map((restaurant, index) => {
            const sliceAngle = 360 / restaurants.length;
            const angle = (360 / restaurants.length) * index;

            return (
              <div
                key={restaurant.name}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  transform: `rotate(${angle + sliceAngle / 2}deg) translateX(50%)`,
                  width: "40%",
                }}
              >
                <div className="flex justify-start pl-2">
                  <span className="text-[9px] md:text-xs font-bold text-white drop-shadow-lg line-clamp-2 max-w-[80px]">
                    {restaurant.name}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Center Button */}
          <div className="absolute inset-12 md:inset-20 rounded-full bg-white shadow-inner flex items-center justify-center border-4 md:border-8 border-orange-100">
            <button
              onClick={spinRoulette}
              disabled={spinning}
              className="w-20 md:w-32 h-20 md:h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white text-lg md:text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-75"
            >
              {spinning ? "🎲" : "SPIN"}
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Card */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white max-w-2xl w-full">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-48 md:h-72 object-cover"
        />

        <div className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-800">
                {selected.name}
              </h2>

              <p className="text-orange-600 text-base md:text-lg font-semibold mt-1">
                {selected.cuisine}
              </p>
            </div>

            <a
              href={selected.maps}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                openMaps(selected.maps);
              }}
              className="px-4 md:px-6 py-2 md:py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg hover:scale-105 transition-transform inline-flex items-center justify-center text-sm md:text-base whitespace-nowrap"
            >
              📍 Maps
            </a>
          </div>

          <div className="mt-4 md:mt-5 bg-orange-50 border border-orange-100 rounded-2xl p-3 md:p-4">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Feeling indecisive? LunchLuck randomly picks one of the most popular lunch spots around KL Sentral and NU Sentral.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 md:mt-8 text-xs md:text-sm text-gray-500 text-center">
        Built for hungry office warriors around KL Sentral 🍛
      </div>
    </div>
  );
}
