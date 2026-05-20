import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Perfil from './components/Perfil/Perfil';
import ModalPublicacion from './components/ModalPublicacion/ModalPublicacion';
import './index.css';
import './App.css';
import api from './api/the-cat-api';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  useEffect(() => {
    cargarPublicaciones();
  }, []);

  const cargarPublicaciones = async () => {
    try {
      const respuesta = await api.get(
        'images/search?limit=50'
      );
      setPublicaciones(respuesta.data);
    } catch (err) {
      setError('Error cargando gatos');
    }
  };

  return (
    <>

      <div className='pagina'>

        <Header />

        <div className='pagina-sin-header'>

          <div className='publicaciones'>
            {error && <p className="error">{error}</p>}
                    
            {!error && publicaciones.length === 0 && <p>Cargando publicaciones...</p>}
            {!error && publicaciones.length > 0 && (
              <Feed publicaciones={publicaciones} seleccionar={(publicacion) => setPublicacionSeleccionada(publicacion)} />
            )}
          </div>

          <div className='perfil-side'>
            <Perfil />
          </div>
        </div>
        {publicacionSeleccionada && (
          <ModalPublicacion publicacion={publicacionSeleccionada} cerrarModal={() => setPublicacionSeleccionada(null)} />
        )}
        
      </div>
    </>
  )
};

export default App;