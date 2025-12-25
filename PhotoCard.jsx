import { useState } from "react";
import "./PhotoCard.css";

const PhotoCard = ({ image, isFavorite, toggleFavorite }) => {
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <div className="photo-card">
        {/* IMAGE */}
        <img
          src={image.url}
          alt="gallery"
          onClick={() => setZoom(true)}
        />

        {/* HEART */}
        <button
          className="fav-btn"
          onClick={(e) => {
            e.stopPropagation(); // IMAGE CLICK BLOCK NA HO
            toggleFavorite(image);
          }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>

      {/* ZOOM MODAL */}
      {zoom && (
        <div className="modal" onClick={() => setZoom(false)}>
          <img src={image.url} alt="zoom" />
        </div>
      )}
    </>
  );
};

export default PhotoCard;
