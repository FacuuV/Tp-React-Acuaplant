import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    // Usamos un Fragment (<>...</>) para no añadir un div extra al DOM
    <>
      <Header />
      <main className="main-content">
        {/* Aquí irá el resto del contenido de la página */}
      </main>
    </>
  );
}

export default App;
