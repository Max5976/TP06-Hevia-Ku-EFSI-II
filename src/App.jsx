import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Feed from './components/Feed/Feed';
import Perfil from './components/Perfil/Perfil';
import Historia from './components/Historia/Historia';
import ModalPublicacion from './components/ModalPublicacion/ModalPublicacion';
import './index.css';
import './App.css';
import api from './api/the-cat-api';

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [perfilCat, setPerfilCat] = useState('');
  const [error, setError] = useState('');
  const [publicacionSeleccionada, setPublicacionSeleccionada] = useState(null);

  useEffect(() => {
    cargarPublicaciones();
  }, []);
const cargarPublicaciones = async () => {
    try {

      const peticiones = [
        api.get('images/search?limit=10'),
        api.get('images/search?limit=10'),
        api.get('images/search?limit=10')
      ];
      
      const respuestas = await Promise.all(peticiones);
      

      const todosLosGatos = [
        ...respuestas[0].data, 
        ...respuestas[1].data, 
        ...respuestas[2].data
      ];


      const gatosConDatosExtra = todosLosGatos.map((gato) => {
        return {
          ...gato,
          likes: Math.floor(Math.random() * 500) + 20 
        };
      });
      

      setPublicaciones(gatosConDatosExtra);
      
      if (gatosConDatosExtra.length > 0) {
        setPerfilCat(gatosConDatosExtra[gatosConDatosExtra.length - 1].url);
      }
    } catch (err) {
      setError('Error cargando gatos');
    }
  };
  return (
    <div className='pagina'>
      <Header />

      <div className='layout-principal'>
        
        {}
        <aside className='sidebar-izquierdo'>
          <Perfil avatarApi={perfilCat} />
        </aside>

        {}
        <main className='contenido-central'>
          
          {}
          <section className='historias-container'>
            <h2 className='seccion-titulo'>STORIES</h2>
            <div className='historias-scroll'>
              {}
              {publicaciones.slice(0, 8).map((publi, index) => (
                <Historia key={`story-${publi.id}`} usuario={`cat_user_${index}`} avatar={publi.url} />
              ))}
            </div>
          </section>
     {}
          <section className='publicaciones-feed'>
            <h2 className='seccion-titulo'>TRENDING</h2>
            {error && <p className="error">{error}</p>}
                    
            {!error && publicaciones.length === 0 && <p>Cargando publicaciones...</p>}
            
            {}
            {!error && publicaciones.length > 0 && (
              <Feed publicaciones={publicaciones.slice(8)} seleccionar={(publicacion) => setPublicacionSeleccionada(publicacion)} />
            )}
          </section>
        </main>
        
      </div>

      {}
      {publicacionSeleccionada && (
        <ModalPublicacion publicacion={publicacionSeleccionada} cerrarModal={() => setPublicacionSeleccionada(null)} />
      )}
      
    </div>
  )
};

export default App; 