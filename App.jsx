import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Favorites from "./components/Favorites";

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (image) => {
    const isFav = favorites.some((fav) => fav.id === image.id);

    if (isFav) {
      setFavorites(favorites.filter((fav) => fav.id !== image.id));
    } else {
      setFavorites([...favorites, image]);
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Gallery
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
