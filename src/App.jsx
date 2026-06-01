import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import import Portada from './components/Portada'
import Resumen from './components/Resumen'
import MarcoNormativo from './components/MarcoNormativo'
import Tipificacion from './components/Tipificacion'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos' // <-- NUEVO

function App() {
  const [slideActual, setSlideActual] = useState(0)

const diapositivas = [
  <Portada key="0" />,
  <Resumen key="1" />,
  <MarcoNormativo key="2" />,
  <Tipificacion key="3" />,
  <Comparacion key="4" />,
  <Responsabilidades key="5" />,
  <Datos key="6" /> // <-- NUEVO
]

  const avanzar = () => {
    if (slideActual < diapositivas.length - 1) {
      setSlideActual(slideActual + 1)
    }
  }

  const retroceder = () => {
    if (slideActual > 0) {
      setSlideActual(slideActual - 1)
    }
  }

  return (
    // Agregamos py-12 para dar margen arriba y abajo por si la diapositiva crece mucho
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 sm:p-8 py-12 font-sans">
      
      {/* EL PROYECTOR: Lo hicimos más ancho (max-w-6xl) y dejamos que su altura sea flexible (h-auto), asegurando un mínimo (min-h-[80vh]) */}
      <div className="w-full max-w-6xl min-h-[80vh] h-auto bg-white/40 border-2 border-white shadow-2xl rounded-3xl overflow-hidden relative flex flex-col transition-all duration-500">
        
        {/* ÁREA DE DIAPOSITIVA: Quitamos el scroll interno (overflow-y-auto) para que se estire según lo necesite */}
        <div className="flex-1 w-full relative flex flex-col justify-center">
          {diapositivas[slideActual]}
        </div>

        {/* BARRA DE CONTROLES: Siempre se mantendrá al final de la caja blanca */}
        <div className="bg-white/90 backdrop-blur-md border-t border-pink-100 px-6 py-4 flex items-center justify-between shrink-0 z-10">
          <button 
            onClick={retroceder}
            disabled={slideActual === 0}
            className="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 disabled:opacity-30 transition-all flex items-center gap-2 font-bold cursor-pointer"
          >
            <ChevronLeft size={24} /> <span className="hidden sm:inline">Anterior</span>
          </button>

          <span className="text-slate-500 font-bold">
            Diapositiva {slideActual + 1} de {diapositivas.length}
          </span>

          <button 
            onClick={avanzar}
            disabled={slideActual === diapositivas.length - 1}
            className="p-2 rounded-full bg-violet-50 text-violet-500 hover:bg-violet-100 disabled:opacity-30 transition-all flex items-center gap-2 font-bold cursor-pointer"
          >
            <span className="hidden sm:inline">Siguiente</span> <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App