import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Maximize, Minimize, Download } from 'lucide-react'
import Portada from './components/Portada'
import Resumen from './components/Resumen'
import MarcoNormativo from './components/MarcoNormativo'
import Tipificacion from './components/Tipificacion'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Cierre from './components/Cierre' // <-- NUEVA LÍNEA

function App() {
  const [slideActual, setSlideActual] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const proyectorRef = useRef(null) // Referencia para saber qué elemento hacer pantalla completa

const diapositivas = [
  <Portada key="0" />,
  <Resumen key="1" />,
  <MarcoNormativo key="2" />,
  <Tipificacion key="3" />,
  <Comparacion key="4" />,
  <Responsabilidades key="5" />,
  <Datos key="6" />,
  <Conclusiones key="7" />,
  <Cierre key="8" /> // <-- NUEVA LÍNEA
]
  // Controladores de diapositivas
  const avanzar = () => {
    if (slideActual < diapositivas.length - 1) setSlideActual(slideActual + 1)
  }

  const retroceder = () => {
    if (slideActual > 0) setSlideActual(slideActual - 1)
  }

  // Controlador de Pantalla Completa
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      proyectorRef.current.requestFullscreen().catch(err => {
        console.error("Error al iniciar pantalla completa:", err)
      })
    } else {
      document.exitFullscreen()
    }
  }

  // Detectar si el usuario sale de pantalla completa con la tecla ESC
  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  // Controlador para PDF
  const descargarPDF = () => {
    window.print()
  }

  return (
    <>
      {/* === VISTA NORMAL DE PRESENTACIÓN (Se oculta al imprimir) === */}
      <div className="print:hidden min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4 sm:p-8 py-12 font-sans">
        
        {/* Contenedor del Proyector con Referencia */}
        <div 
          ref={proyectorRef} 
          className={`w-full max-w-6xl flex flex-col transition-all duration-500 relative overflow-hidden ${
            isFullscreen 
              ? 'h-screen bg-rose-50 border-0 rounded-none max-w-none' 
              : 'min-h-[80vh] h-auto bg-white/40 border-2 border-white shadow-2xl rounded-3xl'
          }`}
        >
          
          <div className="flex-1 w-full relative flex flex-col justify-center">
            {diapositivas[slideActual]}
          </div>

          {/* Barra de Controles Actualizada */}
          <div className="bg-white/90 backdrop-blur-md border-t border-pink-100 px-6 py-4 flex items-center justify-between shrink-0 z-10">
            <button 
              onClick={retroceder}
              disabled={slideActual === 0}
              className="p-2 rounded-full bg-pink-50 text-pink-500 hover:bg-pink-100 disabled:opacity-30 transition-all flex items-center gap-2 font-bold cursor-pointer"
            >
              <ChevronLeft size={24} /> <span className="hidden sm:inline">Anterior</span>
            </button>

            {/* Controles Centrales: PDF, Contador y Pantalla Completa */}
            <div className="flex items-center gap-4 sm:gap-8">
              <button 
                onClick={descargarPDF}
                className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors"
                title="Descargar como PDF"
              >
                <Download size={22} />
              </button>

              <span className="text-slate-500 font-bold">
                {slideActual + 1} / {diapositivas.length}
              </span>

              <button 
                onClick={toggleFullscreen}
                className="p-2 text-slate-400 hover:text-violet-500 hover:bg-violet-50 rounded-full transition-colors"
                title="Pantalla Completa"
              >
                {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
              </button>
            </div>

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

      {/* === VISTA SECRETA PARA PDF (Solo visible al abrir la ventana de impresión) === */}
      <div className="hidden print:block w-full bg-white">
        {diapositivas.map((diapositiva, index) => (
          <div key={index} className="w-full h-screen break-after-page flex flex-col items-center justify-center p-10 print:bg-white print:m-0 print:p-0">
            {/* Renderizamos todas las diapositivas una tras otra con un salto de página entre ellas */}
            <div className="transform scale-[0.85] transform-origin-top">
              {diapositiva}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App