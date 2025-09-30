import Banner from "./Componentes/Banner";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import MovieSection from "./Componentes/MovieSection";
import Newsletter from "./Componentes/Newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner src="./banner.png" alt="Banner" />
      <MovieSection />
      <Banner src="./combo.png" alt="Combo" />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
