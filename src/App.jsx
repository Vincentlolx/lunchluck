import React, { useState } from "react";

export default function LunchLuckApp() {
  const restaurants = [
    {
      name: "Nasi Lemak Tanglin",
      cuisine: "Malaysian",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Nasi+Lemak+Tanglin+KL+Sentral",
    },
    {
      name: "Mr. Tuk Tuk NU Sentral",
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
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Madam+Kwans+NU+Sentral",
    },
    {
      name: "Q Bistro",
      cuisine: "Mamak",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
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
      name: "The Chicken Rice Shop",
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
      name: "Texas Chicken",
      cuisine: "Fast Food",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Texas+Chicken+NU+Sentral",
    },
    {
      name: "Sushi Zanmai",
      cuisine: "Japanese",
      image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Sushi+Zanmai+NU+Sentral",
    },
    {
      name: "Village Park Nasi Lemak",
      cuisine: "Malaysian",
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Village+Park+Nasi+Lemak+KL",
    },
    {
      name: "Nando's",
      cuisine: "Peri-Peri Chicken",
      image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Nandos+NU+Sentral",
    },
    {
      name: "Pelita Nasi Kandar",
      cuisine: "Nasi Kandar",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Pelita+Nasi+Kandar+KL+Sentral",
    },
    {
      name: "Auntie Anne's",
      cuisine: "Snacks",
      image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Auntie+Annes+NU+Sentral",
    },
    {
      name: "Secret Recipe",
      cuisine: "Cafe",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Secret+Recipe+NU+Sentral",
    },
    {
      name: "Sopoong",
      cuisine: "Korean",
      image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Sopoong+NU+Sentral",
    },
    {
      name: "Burger King",
      cuisine: "Burgers",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Burger+King+NU+Sentral",
    },
    {
      name: "4Fingers",
      cuisine: "Korean Chicken",
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=4Fingers+NU+Sentral",
    },
    {
      name: "O'Briens",
      cuisine: "Sandwiches",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Obriens+KL+Sentral",
    },
    {
      name: "KFC",
      cuisine: "Fried Chicken",
      image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=KFC+KL+Sentral",
    },
    {
      name: "Subway",
      cuisine: "Sandwiches",
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Subway+KL+Sentral",
    },
    {
      name: "Dubuyo",
      cuisine: "Korean",
      image: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Dubuyo+NU+Sentral",
    },
    {
      name: "Padi House",
      cuisine: "Asian Fusion",
      image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Padi+House+KL+Sentral",
    },
    {
      name: "Marrybrown",
      cuisine: "Fast Food",
      image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Marrybrown+KL+Sentral",
    },
    {
      name: "Johnny's Restaurant",
      cuisine: "Steamboat",
      image: "https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Johnnys+Restaurant+NU+Sentral",
    },
    {
      name: "Dolly Dim Sum",
      cuisine: "Dim Sum",
      image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Dolly+Dim+Sum+NU+Sentral",
    },
    {
      name: "Jollibee",
      cuisine: "Fast Food",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Jollibee+NU+Sentral",
    },
    {
      name: "The Manhattan Fish Market",
      cuisine: "Seafood",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
      maps: "https://www.google.com/maps/search/?api=1&query=Manhattan+Fish+Market+NU+Sentral",
    },
  ];

  const [selected, setSelected] = useState(restaurants[0]);
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

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

  const spinRoulette = () => {
    if (spinning) return;

    setSpinning(true);

    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const winner = restaurants[randomIndex];

    const sliceAngle = 360 / restaurants.length;
    const pointerAngle = 270;

    const stopAngle =
      3600 + (pointerAngle - randomIndex * sliceAngle - sliceAngle / 2);

    setRotation((prev) => prev + stopAngle);

    setTimeout(() => {
      setSelected(winner);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-red-100 flex flex-col items-center justify-center p-6 overflow-visible">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-black text-orange-600 drop-shadow-lg tracking-tight">
          🍜 LunchLuck
        </h1>
        <p className="text-gray-700 text-lg mt-2 font-medium">
          Spin the roulette and let KL Sentral decide your lunch.
        </p>
      </div>

      <div className="relative flex items-center justify-center z-10">
        <div className="absolute -top-10 z-30 flex flex-col items-center animate-bounce">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-700 border-[5px] border-white shadow-2xl" />
          <div
            className="w-0 h-0 border-l-[22px] border-r-[22px] border-t-[42px] border-l-transparent border-r-transparent border-t-red-600 drop-shadow-[0_8px_8px_rgba(0,0,0,0.35)]"
          />
        </div>

        <div
          className="relative rounded-full border-[12px] border-white shadow-2xl overflow-hidden"
          style={{
            width: 420,
            height: 420,
            transform: `rotate(${rotation}deg)`,
            transition: spinning
              ? "transform 4s cubic-bezier(0.2, 0.8, 0.2, 1)"
              : "none",
            background: `conic-gradient(
              #fb923c 0deg 12deg,
              #facc15 12deg 24deg,
              #f87171 24deg 36deg,
              #fdba74 36deg 48deg,
              #fb923c 48deg 60deg,
              #facc15 60deg 72deg,
              #f87171 72deg 84deg,
              #fdba74 84deg 96deg,
              #fb923c 96deg 108deg,
              #facc15 108deg 120deg,
              #f87171 120deg 132deg,
              #fdba74 132deg 144deg,
              #fb923c 144deg 156deg,
              #facc15 156deg 168deg,
              #f87171 168deg 180deg,
              #fdba74 180deg 192deg,
              #fb923c 192deg 204deg,
              #facc15 204deg 216deg,
              #f87171 216deg 228deg,
              #fdba74 228deg 240deg,
              #fb923c 240deg 252deg,
              #facc15 252deg 264deg,
              #f87171 264deg 276deg,
              #fdba74 276deg 288deg,
              #fb923c 288deg 300deg,
              #facc15 300deg 312deg,
              #f87171 312deg 324deg,
              #fdba74 324deg 336deg,
              #fb923c 336deg 348deg,
              #facc15 348deg 360deg
            )`,
          }}
        >
          {restaurants.map((restaurant, index) => {
            const angle = (360 / restaurants.length) * index;

            return (
              <div
                key={restaurant.name}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  transform: `rotate(${angle}deg) translateX(8px)`,
                  width: "50%",
                }}
              >
                <div className="flex items-center justify-end pr-4">
                  <span className="text-[10px] md:text-xs font-bold text-white drop-shadow-lg max-w-[120px] truncate">
                    {restaurant.name}
                  </span>
                </div>
              </div>
            );
          })}

          <div className="absolute inset-[120px] rounded-full bg-white shadow-inner flex items-center justify-center">
            <button
              onClick={spinRoulette}
              disabled={spinning}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white text-2xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all"
            >
              {spinning ? "🎲" : "SPIN"}
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-20 mt-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full border border-white">
        <img
          src={selected.image}
          alt={selected.name}
          className="w-full h-72 object-cover"
        />

        <div className="p-6">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-3xl font-black text-gray-800">
                {selected.name}
              </h2>
              <p className="text-orange-600 font-semibold text-lg mt-1">
                {selected.cuisine}
              </p>
            </div>

            <button
              onClick={() => openMaps(selected.maps)}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold shadow-lg hover:scale-105 transition-transform inline-flex items-center gap-2 cursor-pointer border-0"
            >
              📍 Open Google Maps
            </button>
          </div>

          <div className="mt-5 bg-orange-50 rounded-2xl p-4 border border-orange-100">
            <p className="text-gray-700 leading-relaxed">
              Feeling lucky today? LunchLuck randomly picks from 30 popular food spots around KL Sentral and NU Sentral. Perfect for indecisive lunch squads. 😎
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-500 text-center max-w-lg">
        Built for hungry office warriors around KL Sentral 🍛
      </div>
    </div>
  );
}
