import { Github, Star } from 'lucide-react'

function Cierre() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-12 text-center animate-fade-in">
      
      {/* Gatito de GitHub con efecto de brillo (Octocat) */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-pink-200 blur-xl opacity-50 rounded-full animate-pulse"></div>
        <div className="relative p-5 bg-white border-4 border-pink-100 rounded-full shadow-lg">
          <Github size={64} className="text-slate-700" />
        </div>
      </div>

      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        ¡Gracias por su atención!
      </h2>
      <div className="w-20 h-1.5 bg-violet-400 rounded-full mb-8 mx-auto"></div>

      {/* Tarjeta de Contacto / Portfolio */}
      <div className="bg-white border-2 border-pink-100 p-8 rounded-3xl shadow-sm max-w-sm w-full flex flex-col items-center hover:shadow-md transition-all hover:-translate-y-1">
        <p className="text-slate-600 font-medium mb-5 flex items-center gap-2">
          <Star className="text-yellow-400" size={20} fill="currentColor" />
          Conoce más de mis proyectos
        </p>

        {/* Generador automático de QR hacia tu GitHub */}
        <div className="p-4 bg-white border-2 border-slate-100 rounded-2xl mb-6 shadow-inner">
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://github.com/fiorellaviera" 
            alt="Código QR a GitHub de Fiorella Viera" 
            className="w-40 h-40 object-contain hover:scale-105 transition-transform"
          />
        </div>

        <h3 className="text-2xl font-bold text-slate-700">Fiorella Viera</h3>
        <a 
          href="https://github.com/fiorellaviera" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-600 font-bold mt-1 transition-colors tracking-wide"
        >
          @fiorellaviera
        </a>
      </div>
      
    </div>
  )
}

export default Cierre
