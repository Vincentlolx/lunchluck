# LunchLuck 🍜

A fun, interactive React app that helps you decide where to eat lunch! Spin the wheel and let fate pick a restaurant for you from popular lunch spots around **KL Sentral** and **NU Sentral**.

## 🎡 Features

- **Interactive Spinning Wheel** - Smooth, animated roulette wheel with 30+ restaurants
- **Google Maps Integration** - Open directions to selected restaurants
- **Responsive Design** - Works great on mobile and desktop
- **Beautiful UI** - Gradient backgrounds, smooth animations, and Tailwind CSS styling
- **Multiple Cuisines** - Malaysian, Thai, Japanese, Korean, Fast Food, and more!

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Vincentlolx/lunchluck.git
cd lunchluck
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will open at `http://localhost:3000`

## 🌐 Live Demo

Visit the deployed app: [LunchLuck](https://Vincentlolx.github.io/lunchluck/)

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

This will build the app and push it to the `gh-pages` branch, making it live at `https://Vincentlolx.github.io/lunchluck/`

## 🏢 Restaurants

The app includes 30+ popular restaurants around KL Sentral and NU Sentral:
- NU Sentral Food Court
- Nasi Lemak Tanglin
- Mr. Tuk Tuk
- Din Tai Fung
- KyoChon 1991
- Menya Musashi
- And many more!

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS** - Styling
- **Create React App** - Build tool
- **GitHub Pages** - Hosting

## 🎨 Customization

To add or modify restaurants, edit the `restaurants` array in `src/App.jsx`:

```javascript
const restaurants = [
  {
    name: "Restaurant Name",
    cuisine: "Cuisine Type",
    image: "image-url",
    maps: "google-maps-url",
  },
  // ... more restaurants
];
```

## 📱 UI Components

- **Spinning Wheel** - Conic gradient with restaurant names
- **Pointer** - Bouncing indicator at top
- **Spin Button** - Center button to start the wheel
- **Restaurant Card** - Shows selected restaurant details with image and Google Maps link

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built by [Vincentlolx](https://github.com/Vincentlolx)

---

**Have fun picking your lunch! 🍛🍜🍱**
