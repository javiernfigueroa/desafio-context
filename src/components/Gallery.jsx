import IconHeart from "./IconHeart";
import { useAppContext } from "../context/Context";

const Gallery = ({ photos }) => {
  const { likedPhotos, addLikedPhoto, removeLikedPhoto } = useAppContext();

  const handleLikeClick = (photo) => {
    if (photo.liked) {
      removeLikedPhoto(photo);
    } else {
      addLikedPhoto(photo);
    }
    photo.liked = !photo.liked;
  };

  return (
    <div className="gallery grid-columns-5 p-3">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="photo"
          style={{ backgroundImage: `url(${photo.src.small})` }}
        >
          <IconHeart
            filled={likedPhotos.some(
              (likedPhoto) => likedPhoto.id === photo.id
            )}
            onClick={() => handleLikeClick(photo)}
          />
          <p>{photo.photographer}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
