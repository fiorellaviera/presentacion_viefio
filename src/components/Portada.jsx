import { Shield, Sparkles } from 'lucide-react'

function Portada() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-10 animate-fade-in">
      <div className="relative mb-8">
        <div className="absolute -inset-4 bg-pink-200 blur-xl opacity-50 rounded-full animate-pulse"></div>
        <div className="relative p-6 bg-white border-4 border-pink-100 rounded-full shadow-xl">
          <Shield size={80} className="text-pink-400" />
        </div>
        <Sparkles className="absolute -top-2 -right-4 text-violet-400 animate-bounce" size={32} />
      </div>
      
      <h1 className="text-5xl font-extrabold text-slate-700 tracking-tight mb-4 drop-shadow-sm">
        Análisis de Ciberseguridad
      </h1>
      <h2 className="text-3xl font-bold text-violet-500 mb-8">
        El Caso EMCO
      </h2>
      
      <div className="bg-white/60 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 shadow-sm max-w-lg w-full">
        <p className="text-slate-600 font-medium text-lg">
          Fundamentos de Seguridad de la Información
        </p>
        <div className="w-16 h-1 bg-pink-300 mx-auto my-4 rounded-full"></div>
        <p className="text-slate-500">
          Presentado por: <span className="font-bold text-pink-500">Fiorella Viera</span>
        </p>
      </div>
    </div>
  )
}

export default Portada