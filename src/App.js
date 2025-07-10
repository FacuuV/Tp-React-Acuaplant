import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';

function App() {
  return (
    // Usamos un Fragment (<>...</>) para no añadir un div extra al DOM
    
    <div className="App">
      <Header />
      <main className="main-content">
        <Banner />
        <FeaturesSection />
      </main>
    </div>
  );
}

export default App;
