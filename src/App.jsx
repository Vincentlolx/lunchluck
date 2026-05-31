const { useState, useEffect, useRef, useCallback } = React;

// ─── Data ────────────────────────────────────────────────────────────────────

const RESTAURANTS = [
  { name: "Bombay Talkies",               cuisine: "Indian Vegetarian",        rating: 4.8, address: "100, Jalan Tun Sambanthan, Brickfields",              placeId: "ChIJEWjtehNJzDERUKpiqKbAnnM", hours: "11:30 AM – 11:00 PM", price: "$$", emoji: "🥘" },
  { name: "TAZYEEN",                       cuisine: "Arabic & Mughal",           rating: 4.7, address: "82, Jalan Tun Sambanthan, Brickfields",               placeId: "ChIJ6YgeRRlJzDERiW3EY6pc8dk", hours: "10:30 AM – 11:30 PM", price: "$$", emoji: "🫕" },
  { name: "Nyonya Tingkat NU Sentral",     cuisine: "Peranakan",                 rating: 4.6, address: "Level 5, NU Sentral, Jalan Tun Sambanthan",           placeId: "ChIJpUCfoA5JzDER6LTnJuLibb8", hours: "10:00 AM – 10:00 PM", price: "$$", emoji: "🍲" },
  { name: "Mr. Tuk Tuk",                  cuisine: "Thai",                      rating: 4.6, address: "Level 4, Nu Sentral Mall, KL Sentral",                placeId: "ChIJu5IfTWRJzDERM4x-LW79jiE", hours: "10:00 AM – 10:00 PM", price: "$$", emoji: "🍜" },
  { name: "LUCK BROS KOPI",               cuisine: "Hainanese Kopitiam",        rating: 4.6, address: "Concourse Floor, Nu Sentral, KL Sentral",             placeId: "ChIJ_9JPnLNJzDERMCjMaIcbs-E", hours: "8:00 AM – 10:00 PM",  price: "$",  emoji: "☕" },
  { name: "Kakatoo @ Nu Sentral",         cuisine: "Malaysian",                 rating: 4.7, address: "Ground Floor, Nu Sentral, Jalan Tun Sambanthan",      placeId: "ChIJ1WWq-7FJzDERbJMeFIeu_io", hours: "7:30 AM – 9:00 PM",   price: "$",  emoji: "🍚" },
  { name: "Banana Bistro",                cuisine: "South Indian",              rating: 4.5, address: "Level 4, Nu Sentral, KL Sentral",                     placeId: "ChIJp69UWsJJzDERdIOpvPh2oo4", hours: "10:00 AM – 10:00 PM", price: "$$", emoji: "🍌" },
  { name: "Rasa Habibi",                  cuisine: "Arabian",                   rating: 4.8, address: "Level LG, Nu Sentral, Jalan Tun Sambanthan",          placeId: "ChIJ1bCJ1T1JzDERbot8Y11SiiI", hours: "7:00 AM – 10:30 PM",  price: "$$", emoji: "🥙" },
  { name: "Rollti",                       cuisine: "Roti Canai Wraps",          rating: 4.7, address: "Level LG, Nu Sentral, Jalan Tun Sambanthan",          placeId: "ChIJT6aGOgBJzDERkOXTYShk86A", hours: "8:00 AM – 10:00 PM",  price: "$",  emoji: "🫓" },
  { name: "Punjabi Rasoi",                cuisine: "North Indian",              rating: 4.8, address: "45, Jalan Thambipillay, Brickfields",                 placeId: "ChIJLds3NwBJzDERv3_TX_DFCw8", hours: "10:30 AM – 12:00 AM", price: "$$", emoji: "🫕" },
  { name: "Maya Mess",                    cuisine: "South Indian (Banana Leaf)",rating: 4.3, address: "146, Jalan Tun Sambanthan, Brickfields",              placeId: "ChIJGY-HbIdJzDER7uTIIZDYfCY", hours: "11:00 AM – 10:30 PM", price: "$$", emoji: "🍛" },
  { name: "Meals Station @ KL Sentral",   cuisine: "Malaysian",                 rating: 4.0, address: "KL Sentral Station, Kuala Lumpur Sentral",            placeId: "ChIJJWFND8BJzDERjJQ35orwyLI", hours: "7:00 AM – 9:00 PM",   price: "$",  emoji: "🍱" },
  { name: "Gastro Sentral",               cuisine: "Modern Malaysian",          rating: 4.2, address: "Le Méridien KL, 2 Jalan Stesen Sentral",             placeId: "ChIJrzBd58BJzDERe3SMVmox_rA", hours: "12:00 PM – 12:00 AM", price: "$$$",emoji: "🍽️" },
  { name: "Vasco's – Hilton KL",          cuisine: "International Buffet",      rating: 4.2, address: "Hilton KL, 3 Jalan Stesen Sentral",                  placeId: "ChIJtWTU7sBJzDERHvY0t-WEDi8", hours: "6:00 AM – 10:30 PM",  price: "$$$",emoji: "🌍" },
  { name: "Latest Recipe",                cuisine: "International Buffet",      rating: 3.9, address: "Le Méridien KL, Jalan Stesen Sentral 5",             placeId: "ChIJAfS83MBJzDERWycYRHsSMaQ", hours: "6:30 AM – 11:00 PM",  price: "$$$",emoji: "📖" },
  { name: "NJ Restaurant",                cuisine: "Bangladeshi / Indian",      rating: 4.8, address: "29, Jalan Thambipillaai, Brickfields",               placeId: "ChIJ62VeRcFJzDERJNVDXA6styA", hours: "7:00 AM – 11:00 PM",  price: "$",  emoji: "🥗" },
  { name: "Anna Nagar Brickfields",       cuisine: "Tamil Briyani",             rating: 4.1, address: "62, Jalan Padang Belia, Brickfields",                placeId: "ChIJ0VxV5rJJzDER3opuFpJe7K0", hours: "7:00 AM – 11:00 PM",  price: "$",  emoji: "🍚" },
  { name: "ABC Bistro Cafe",              cuisine: "Mamak",                     rating: 3.9, address: "106, Jalan Tun Sambanthan, Brickfields",             placeId: "ChIJO_ogxMFJzDER9et21oMspZ0", hours: "Open 24 hours",        price: "$",  emoji: "🍳" },
  { name: "ABC One Bistro",               cuisine: "Mamak / All-Day",           rating: 3.8, address: "33, Jalan Thambipillay, Brickfields",                placeId: "ChIJeYoV3MFJzDERGW-eI_AguQ0", hours: "Open 24 hours",        price: "$",  emoji: "🥚" },
  { name: "Mamak Tepi CIMB",             cuisine: "Mamak",                     rating: 4.0, address: "Jalan Tun Sambanthan, Brickfields",                  placeId: "ChIJY5h9PzNJzDERyywha2BfsRo", hours: "Open 24 hours",        price: "$",  emoji: "🧆" },
  { name: "Original Penang Kayu Nasi Kandar", cuisine: "Nasi Kandar",          rating: 3.2, address: "Level LG, Nu Sentral, Jalan Tun Sambanthan",         placeId: "ChIJ5xoPkh9JzDERGmgUlZw5bIg", hours: "7:00 AM – 10:00 PM",  price: "$$", emoji: "🍛" },
  { name: "Pak Jen @ Nu Sentral",         cuisine: "Malaysian / Local",         rating: 3.6, address: "Ground Floor, Nu Sentral, Jalan Tun Sambanthan",     placeId: "ChIJk2yAYgBJzDERth5SQlEubY8", hours: "10:00 AM – 10:00 PM", price: "$",  emoji: "🍽️" },
  { name: "Nasi Kandar Mamak Cafe",       cuisine: "Nasi Kandar / Mamak",       rating: 3.9, address: "150, Jalan Sultan Abdul Samad, Brickfields",         placeId: "ChIJo1BCwqlJzDERhfszZ9yHIkw", hours: "Open 24 hours",        price: "$",  emoji: "🥘" },
  { name: "The Chennai Mess",             cuisine: "South Indian",              rating: 4.5, address: "1, Jalan Thamby Abdullah 1, Brickfields",            placeId: "ChIJNe56WD5JzDERBhRzPIBr1QM", hours: "7:00 AM – 11:00 PM",  price: "$",  emoji: "🫔" },
  { name: "Brickfields Wonton Mee",       cuisine: "Chinese Noodles",           rating: 4.4, address: "Jalan Tun Sambanthan, Brickfields, KL",              placeId: null,                          hours: "7:00 AM – 3:00 PM",   price: "$",  emoji: "🍝" },
  { name: "Devi's Corner Brickfields",    cuisine: "Mamak / Indian",            rating: 4.3, address: "Jalan Thambipillay, Brickfields, KL",                placeId: null,                          hours: "Open 24 hours",        price: "$",  emoji: "🫓" },
  { name: "Restoran Sri Nirwana Maju",    cuisine: "Banana Leaf Rice",          rating: 4.4, address: "Jalan Tun Sambanthan 4, Brickfields",                placeId: null,                          hours: "11:00 AM – 10:30 PM", price: "$",  emoji: "🌿" },
  { name: "Santai Kitchen",               cuisine: "Malay / Nasi Campur",       rating: 4.2, address: "Brickfields, near KL Sentral",                       placeId: null,                          hours: "10:00 AM – 9:00 PM",  price: "$",  emoji: "🍛" },
  { name: "Noodle Station KL Sentral",    cuisine: "Asian Noodles",             rating: 4.1, address: "KL Sentral Station, Ground Level",                   placeId: null,                          hours: "7:30 AM – 9:30 PM",   price: "$",  emoji: "🍜" },
  { name: "Brickfields Social",           cuisine: "Café / Western",            rating: 4.3, address: "Jalan Tun Sambanthan, Brickfields",                  placeId: null,                          hours: "9:00 AM – 9:00 PM",   price: "$$", emoji: "☕" },
];

const COLORS = [
  "#D94F3D","#E8A830","#2D6A4F","#3D5A80","#7B2D8B",
  "#C0392B","#D4A017","#1E8449","#2E4057","#6B3FA0",
  "#E74C3C","#F39C12","#27AE60","#2980B9","#8E44AD",
  "#C0392B","#E67E22","#16A085","#1F618D","#76448A",
  "#D35400","#B7950B","#0E6655","#154360","#512E5F",
  "#A04000","#9A7D0A","#0B5345","#1B2631","#4A235A",
];

const FOOD_IMGS = {
  "Indian Vegetarian":        "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  "Arabic & Mughal":          "https://images.unsplash.com/photo-1529564879024-c54e7c2dd0e5?w=600&q=80",
  "Peranakan":                "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80",
  "Thai":                     "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80",
  "Hainanese Kopitiam":       "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
  "Malaysian":                "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  "South Indian":             "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  "Arabian":                  "https://images.unsplash.com/photo-1529564879024-c54e7c2dd0e5?w=600&q=80",
  "Roti Canai Wraps":         "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
  "North Indian":             "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  "South Indian (Banana Leaf)":"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  "Mamak":                    "https://images.unsplash.com/photo-1599487489073-2a20f2b60048?w=600&q=80",
  "Nasi Kandar":              "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  "Modern Malaysian":         "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
  "International Buffet":     "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "Bangladeshi / Indian":     "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  "Tamil Briyani":            "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  "Mamak / All-Day":          "https://images.unsplash.com/photo-1599487489073-2a20f2b60048?w=600&q=80",
  "Mamak / Indian":           "https://images.unsplash.com/photo-1599487489073-2a20f2b60048?w=600&q=80",
  "Chinese Noodles":          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
  "Banana Leaf Rice":         "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80",
  "Malay / Nasi Campur":      "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  "Asian Noodles":            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
  "Café / Western":           "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
  "Malaysian / Local":        "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
  "Nasi Kandar / Mamak":      "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80",
};

function mapsUrl(r) {
  if (r.placeId) return `https://www.google.com/maps/place/?q=place_id:${r.placeId}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + ' Brickfields Kuala Lumpur')}`;
}

// ─── CSS-in-JS styles ────────────────────────────────────────────────────────

const S = {
  // Layout
  app: { fontFamily: "'DM Sans', sans-serif", background: "#FBF6EE", color: "#2C1F08", minHeight: "100vh" },
  header: { background: "#1A1209", padding: "1.2rem 2rem", display: "flex", alignItems: "center", gap: 14, position: "sticky", top: 0, zIndex: 100, borderBottom: "3px solid #E8A830" },
  logoIcon: { width: 44, height: 44, background: "#E8A830", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 },
  logoTitle: { fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.7rem", color: "#fff", letterSpacing: "-0.5px", margin: 0 },
  logoSub: { fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: 1 },
  hero: { background: "#1A1209", textAlign: "center", padding: "3rem 2rem 4rem", position: "relative", overflow: "hidden" },
  heroBadge: { display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(232,168,48,0.12)", border: "1px solid rgba(232,168,48,0.3)", color: "#E8A830", fontSize: "0.75rem", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", padding: "5px 14px", borderRadius: 100, marginBottom: "1.2rem" },
  heroTitle: { fontFamily: "'Syne', sans-serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "0.8rem" },
  heroSub: { color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: 480, margin: "0 auto" },
  mainLayout: { display: "grid", gridTemplateColumns: "1fr 420px", gap: 0, maxWidth: 1200, margin: "0 auto", padding: "2.5rem 2rem", alignItems: "start" },
  listPanel: { paddingRight: "2rem" },
  listHeader: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "1.2rem" },
  listTitle: { fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#2C1F08" },
  listCount: { fontSize: "0.8rem", color: "#7A6040" },
  restaurantList: { display: "flex", flexDirection: "column", gap: 10 },
  restItem: (active) => ({ background: "#FFFDF8", border: active ? "1px solid #E8A830" : "1px solid rgba(180,140,60,0.18)", borderRadius: 14, padding: "12px 14px", display: "flex", gap: 12, alignItems: "center", cursor: "pointer", textDecoration: "none", color: "inherit", boxShadow: active ? "0 2px 16px rgba(232,168,48,0.2)" : "none", transition: "border-color 0.2s, box-shadow 0.2s" }),
  restNum: { width: 28, height: 28, borderRadius: "50%", background: "#1A1209", color: "#E8A830", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  restInfo: { flex: 1, minWidth: 0 },
  restName: { fontWeight: 600, fontSize: "0.88rem", color: "#2C1F08", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  restSub: { fontSize: "0.75rem", color: "#7A6040", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" },
  restRating: { fontSize: "0.8rem", fontWeight: 600, color: "#C4891A", flexShrink: 0, display: "flex", alignItems: "center", gap: 3 },
  // Wheel panel
  wheelPanel: { display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", position: "sticky", top: 88 },
  wheelContainer: { position: "relative", width: 380, height: 380 },
  wheelPointer: { position: "absolute", top: -18, left: "50%", transform: "translateX(-50%)", width: 0, height: 0, borderLeft: "16px solid transparent", borderRight: "16px solid transparent", borderTop: "36px solid #D94F3D", filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.3))", zIndex: 10 },
  wheelCenter: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 60, height: 60, background: "#1A1209", borderRadius: "50%", border: "4px solid #E8A830", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, zIndex: 10, cursor: "pointer" },
  spinBtn: (disabled) => ({ background: disabled ? "rgba(232,168,48,0.5)" : "#E8A830", color: "#1A1209", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.5px", border: "none", padding: "14px 48px", borderRadius: 100, cursor: disabled ? "not-allowed" : "pointer", boxShadow: "0 4px 16px rgba(232,168,48,0.35)", transition: "transform 0.15s, background 0.15s" }),
  spinHint: { fontSize: "0.78rem", color: "#7A6040", textAlign: "center" },
  // Result card
  resultCard: { width: "100%", maxWidth: 380, background: "#FFFDF8", border: "1px solid rgba(180,140,60,0.18)", borderRadius: 20, overflow: "hidden", animation: "slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)" },
  resultImg: { width: "100%", height: 180, objectFit: "cover", display: "block" },
  resultImgPlaceholder: { width: "100%", height: 180, background: "linear-gradient(135deg, #f5e8c8 0%, #ecddb0 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 },
  resultBody: { padding: "1.2rem 1.4rem 1.4rem" },
  resultCuisine: { fontSize: "0.7rem", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", color: "#C4891A", marginBottom: 4 },
  resultName: { fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "#2C1F08", lineHeight: 1.2, marginBottom: 6 },
  resultAddress: { fontSize: "0.82rem", color: "#7A6040", marginBottom: 12, lineHeight: 1.4 },
  resultMeta: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 },
  badgeGold: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.75rem", fontWeight: 500, padding: "3px 10px", borderRadius: 100, background: "rgba(232,168,48,0.12)", color: "#C4891A" },
  badgeGreen: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.75rem", fontWeight: 500, padding: "3px 10px", borderRadius: 100, background: "rgba(40,160,80,0.1)", color: "#1a7a3a" },
  badgeBlue: { display: "inline-flex", alignItems: "center", gap: 4, fontSize: "0.75rem", fontWeight: 500, padding: "3px 10px", borderRadius: 100, background: "rgba(40,100,200,0.1)", color: "#1a4aa0" },
  mapBtn: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: 11, background: "#1A1209", color: "#fff", borderRadius: 12, textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" },
  footer: { background: "#1A1209", textAlign: "center", padding: "1.5rem", color: "rgba(255,255,255,0.35)", fontSize: "0.78rem", marginTop: "3rem" },
};

// ─── Wheel Canvas Component ───────────────────────────────────────────────────

function SpinWheel({ angle }) {
  const canvasRef = useRef(null);
  const N = RESTAURANTS.length;
  const ARC = (2 * Math.PI) / N;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 380, 380);
    const cx = 190, cy = 190, r = 185;

    for (let i = 0; i < N; i++) {
      const start = angle + i * ARC;
      const end = start + ARC;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, r, start, end);
      ctx.closePath();
      ctx.fillStyle = COLORS[i % COLORS.length];
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(start + ARC / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.font = "bold 10px 'DM Sans', sans-serif";
      const label = RESTAURANTS[i].name.length > 18
        ? RESTAURANTS[i].name.substring(0, 17) + "…"
        : RESTAURANTS[i].name;
      ctx.fillText(label, r - 12, 3.5);
      ctx.restore();
    }

    // Center hub
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#1A1209";
    ctx.fill();
    ctx.strokeStyle = "#E8A830";
    ctx.lineWidth = 3;
    ctx.stroke();
  }, [angle]);

  return (
    <canvas
      ref={canvasRef}
      width={380}
      height={380}
      style={{ display: "block", borderRadius: "50%", filter: "drop-shadow(0 8px 30px rgba(0,0,0,0.25))" }}
    />
  );
}

// ─── Result Card Component ────────────────────────────────────────────────────

function ResultCard({ restaurant }) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = FOOD_IMGS[restaurant.cuisine] || "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80";

  // Reset error state when restaurant changes
  useEffect(() => { setImgError(false); }, [restaurant]);

  return (
    <div style={S.resultCard}>
      {imgError
        ? <div style={S.resultImgPlaceholder}>{restaurant.emoji}</div>
        : <img style={S.resultImg} src={imgSrc} alt={restaurant.name} onError={() => setImgError(true)} />
      }
      <div style={S.resultBody}>
        <div style={S.resultCuisine}>{restaurant.cuisine}</div>
        <div style={S.resultName}>{restaurant.name}</div>
        <div style={S.resultAddress}>{restaurant.address}</div>
        <div style={S.resultMeta}>
          {restaurant.rating && <span style={S.badgeGold}>⭐ {restaurant.rating}</span>}
          <span style={S.badgeGreen}>🕐 {restaurant.hours}</span>
          <span style={S.badgeBlue}>💰 {restaurant.price}</span>
        </div>
        <a style={S.mapBtn} href={mapsUrl(restaurant)} target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          View on Google Maps
        </a>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

function App() {
  const N = RESTAURANTS.length;
  const ARC = (2 * Math.PI) / N;
  const POINTER = -Math.PI / 2; // 12 o'clock

  const [angle, setAngle] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState(null);
  const angleRef = useRef(0);
  const rafRef = useRef(null);
  const listItemRefs = useRef([]);

  // Inject keyframe animation once
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(24px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0)     scale(1);    }
      }
      @media (max-width: 860px) {
        .main-layout { grid-template-columns: 1fr !important; }
        .wheel-panel { order: -1; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const spin = useCallback(() => {
    if (spinning) return;
    setSpinning(true);
    setWinner(null);

    const winIdx = Math.floor(Math.random() * N);
    // Compute angle so pointer (POINTER) lands at centre of winIdx segment
    let finalAngle = POINTER - winIdx * ARC - ARC / 2;
    const minSpin = angleRef.current - 6 * 2 * Math.PI;
    while (finalAngle > minSpin) finalAngle -= 2 * Math.PI;

    const duration = 4500 + Math.random() * 1500;
    const startAngle = angleRef.current;
    const startTime = performance.now();

    function easeOut(t) { return 1 - Math.pow(1 - t, 4); }

    function animate(now) {
      const t = Math.min((now - startTime) / duration, 1);
      const current = startAngle + (finalAngle - startAngle) * easeOut(t);
      angleRef.current = current;
      setAngle(current);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        angleRef.current = finalAngle;
        setSpinning(false);
        setWinner(winIdx);
        // Scroll matching list item into view
        setTimeout(() => {
          listItemRefs.current[winIdx]?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      }
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [spinning, N, ARC]);

  // Cleanup on unmount
  useEffect(() => () => rafRef.current && cancelAnimationFrame(rafRef.current), []);

  return (
    <div style={S.app}>
      {/* Header */}
      <header style={S.header}>
        <div style={S.logoIcon}>🍜</div>
        <div>
          <h1 style={S.logoTitle}>
            Lunch<span style={{ color: "#E8A830" }}>Luck</span>
          </h1>
          <p style={S.logoSub}>KL Sentral · Within 10 mins walk</p>
        </div>
      </header>

      {/* Hero */}
      <div style={S.hero}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(232,168,48,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={S.heroBadge}>🎰 Spin to decide</div>
        <h2 style={S.heroTitle}>
          Can't decide where to <span style={{ color: "#E8A830", fontStyle: "normal" }}>eat?</span>
        </h2>
        <p style={S.heroSub}>Let fate pick your lunch spot from 30 top restaurants around KL Sentral.</p>
      </div>

      {/* Main */}
      <div className="main-layout" style={S.mainLayout}>

        {/* Left: Restaurant list */}
        <div style={S.listPanel}>
          <div style={S.listHeader}>
            <span style={S.listTitle}>Restaurants on the wheel</span>
            <span style={S.listCount}>30 spots · ≤10 min walk</span>
          </div>
          <div style={S.restaurantList}>
            {RESTAURANTS.map((r, i) => (
              <a
                key={i}
                ref={el => listItemRefs.current[i] = el}
                href={mapsUrl(r)}
                target="_blank"
                rel="noopener noreferrer"
                style={S.restItem(winner === i)}
              >
                <div style={S.restNum}>{i + 1}</div>
                <div style={S.restInfo}>
                  <div style={S.restName}>{r.name}</div>
                  <div style={S.restSub}>{r.cuisine} · {r.hours}</div>
                </div>
                {r.rating && <div style={S.restRating}>⭐ {r.rating}</div>}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Wheel + result */}
        <div className="wheel-panel" style={S.wheelPanel}>
          <div style={S.wheelContainer}>
            <div style={S.wheelPointer} />
            <SpinWheel angle={angle} />
            <div style={S.wheelCenter} onClick={spin}>🍀</div>
          </div>

          <button
            style={S.spinBtn(spinning)}
            onClick={spin}
            disabled={spinning}
          >
            {spinning ? "SPINNING…" : "SPIN THE WHEEL"}
          </button>
          <p style={S.spinHint}>or click the clover to spin</p>

          {winner !== null && (
            <ResultCard key={winner} restaurant={RESTAURANTS[winner]} />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={S.footer}>
        Made with 🍜 for hungry folks around{" "}
        <span style={{ color: "#E8A830" }}>KL Sentral</span>
      </footer>
    </div>
  );
}

// Mount
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
