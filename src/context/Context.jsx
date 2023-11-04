import { createContext, useContext, useState, useCallback } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const addLikedPhoto = useCallback((photo) => {
    setLikedPhotos((prevLikedPhotos) => [...prevLikedPhotos, photo]);
  }, []);

  const removeLikedPhoto = useCallback((photo) => {
    setLikedPhotos((prevLikedPhotos) =>
      prevLikedPhotos.filter((likedPhoto) => likedPhoto.id !== photo.id)
    );
  }, []);

  return (
    <AppContext.Provider
      value={{ likedPhotos, addLikedPhoto, removeLikedPhoto }}
    >
      {children}
    </AppContext.Provider>
  );
}
export function useAppContext() {
  return useContext(AppContext);
}
