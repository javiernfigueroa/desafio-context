import Gallery from "../components/Gallery";

const Home = ({ photos }) => {
  return (
    <div className="App">
      <h1>Natural Pic</h1>
      <Gallery photos={photos} />
    </div>
  );
};
export default Home;
