import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import { AppContextProvider } from "./context/Context";

const PHOTO_URL = "/photos.json";

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(PHOTO_URL)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data.photos);
      })
      .catch((error) => {
        console.error("Error al obtener las fotos:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <AppContextProvider>
        <Routes>
          <Route path="/" element={<Home photos={photos} />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
};
export default App;
