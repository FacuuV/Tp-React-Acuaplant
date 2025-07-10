import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import TopCategories from './components/TopCategories/TopCategories';
import ProductsSection from './components/ProductsSection/ProductsSection';
import Gallery from './components/Gallery/Gallery';


function App() {
  return (
    // Usamos un Fragment (<>...</>) para no añadir un div extra al DOM
    
    <div className="App">
      <Header />
      <main className="main-content">
        <Banner />
        <FeaturesSection />
        <TopCategories />
        <ProductsSection />
        <Gallery />
      </main>
    </div>
  );
}

export default App;
