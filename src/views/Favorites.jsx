import { useContext } from "react";
import { AppContext } from "../context/Context";

const Favorites = () => {
  const { likedPhotos } = useContext(AppContext);

  return (
    <div>
      <h1 className="App">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-5">
        {likedPhotos
          .filter((photo) => photo.liked)
          .map((photo) => (
            <div
              key={photo.id}
              className="photo"
              style={{ backgroundImage: `url(${photo.src.small})` }}
            >
              <p></p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Favorites;
