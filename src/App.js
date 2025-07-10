import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import TopCategories from './components/TopCategories/TopCategories';
import ProductsSection from './components/ProductsSection/ProductsSection';
import Gallery from './components/Gallery/Gallery';
import AccessoriesSection from './components/AccessoriesSection/AccessoriesSection';


function App() {
  return (
    
    <div className="App">
      <Header />
      <main className="main-content">
        <Banner />
        <FeaturesSection />
        <TopCategories />
        <ProductsSection />
        <Gallery />
        <AccessoriesSection />
      </main>
    </div>
  );
}

export default App;
