import PhotoCard from "./PhotoCard";
import "./Gallery.css";

const Favorites = ({ favorites, toggleFavorite }) => {
  if (favorites.length === 0) {
    return <h3 style={{ textAlign: "center" }}>No favorites yet ❤️</h3>;
  }

  return (
    <div className="gallery">
      {favorites.map((img) => (
        <PhotoCard
          key={img.id}
          image={img}
          isFavorite={true}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default Favorites;
