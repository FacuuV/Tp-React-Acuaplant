import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';

function App() {
  return (
    // Usamos un Fragment (<>...</>) para no añadir un div extra al DOM
    <>
      <Header />
      <main className="main-content">
        <Banner />
      </main>
    </>
  );
}

export default App;
