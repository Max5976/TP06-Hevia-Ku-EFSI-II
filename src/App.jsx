import { useState } from 'react';
import { ListaPublicaciones } from './components/listaPublicaciones';
import { ListaHistorias } from './components/listaHistorias';
import { ListaSugerencias } from './components/listaSugerencias';
import { ListaBotones } from './components/listaBotones';
import './index.css'
import './App.css'

function App() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [historias, setHistorias] = useState([]);
  const [sugerencias, setSugerencias] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [publicacionSeleccionadaId, setPublicacionSeleccionadaId] = useState(null);

const busquedaPublicacion = async (query) => {
    setCargando(true);
    setError('');
    
    try {
      
    }
    catch {

    }
  };

  return (
    <>

      <div className='pagina'>

        <div className='izquierda'>
          <h1>Instagram</h1>
          <ListaBotones /> 
        </div>

        <div className='historias'>
          {!cargando && !error && historias.length > 0 && (
            <ListaHistorias />
          )}
        </div>

        <div className='sugerencias'>
          {!cargando && !error && sugerencias.length > 0 && (
            <ListaSugerencias />
          )}
        </div>

        <div className='publicaciones'> 
          {!cargando && !error && publicaciones.length > 0 && (
          <ListaPublicaciones />
          )}
        </div>
          
      </div>
    </>
  )
};