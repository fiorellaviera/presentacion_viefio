import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Portada from './components/Portada'
import Resumen from './components/Resumen'
import MarcoNormativo from './components/MarcoNormativo' // <-- NUEVO 

function App() {
  // Aquí controlamos en qué diapositiva estamos (empezamos en la 0)
  const [slideActual, setSlideActual] = useState(0)

  // Aquí iremos agregando los componentes de tus diapositivas
// Aquí iremos agregando los componentes de tus diapositivas
const diapositivas = [
  <Portada key="0" />,
  <Resumen key="1" />, 
  <MarcoNormativo key="2" />
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
    <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      
      {/* Contenedor principal de la Diapositiva (El "Proyector") */}
      <div className="w-full max-w-5xl aspect-video bg-white/40 border-2 border-white shadow-2xl rounded-3xl overflow-hidden relative flex flex-col">
        
        {/* Contenido de la diapositiva actual */}
        <div className="flex-1 w-full h-full relative">
          {diapositivas[slideActual]}
        </div>

        {/* Barra de Controles Inferior */}
        <div className="bg-white/80 backdrop-blur-md border-t border-pink-100 px-6 py-4 flex items-center justify-between">
          <button 
            onClick={retroceder}
            disabled={slideActual === 0}
            className="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 disabled:opacity-30 transition-all flex items-center gap-2 font-bold"
          >
            <ChevronLeft size={24} /> <span className="hidden sm:inline">Anterior</span>
          </button>

          <span className="text-slate-400 font-medium">
            Diapositiva {slideActual + 1} de {diapositivas.length}
          </span>

          <button 
            onClick={avanzar}
            disabled={slideActual === diapositivas.length - 1}
            className="p-2 rounded-full bg-violet-50 text-violet-500 hover:bg-violet-100 disabled:opacity-30 transition-all flex items-center gap-2 font-bold"
          >
            <span className="hidden sm:inline">Siguiente</span> <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default App