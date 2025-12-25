import images from "../data/images";
import PhotoCard from "./PhotoCard";
import "./Gallery.css";

const Gallery = ({ favorites, toggleFavorite }) => {
  return (
    <div className="gallery">
      {images.map((img) => (
        <PhotoCard
          key={img.id}
          image={img}
          isFavorite={favorites.some((fav) => fav.id === img.id)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default Gallery;
