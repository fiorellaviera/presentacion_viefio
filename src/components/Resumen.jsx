import { Calendar, Database, AlertTriangle, Bug } from 'lucide-react'

function Resumen() {
  return (
    <div className="h-full flex flex-col justify-center p-12 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        1. Resumen del Incidente
      </h2>
      <div className="w-20 h-1.5 bg-pink-400 rounded-full mb-10"></div>

      {/* Cuadrícula de 2 columnas para la información */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tarjeta 1: Fecha */}
        <div className="bg-rose-50/60 border border-pink-100 p-6 rounded-3xl flex gap-5 items-start hover:scale-[1.02] transition-transform">
          <div className="p-3 bg-pink-100 text-pink-500 rounded-2xl shadow-sm shrink-0">
            <Calendar size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-1">¿Cuándo ocurrió?</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Entre <strong>mayo y junio de 2022</strong>. Fue una exfiltración silenciosa descubierta meses después de que los datos ya habían sido extraídos.
            </p>
          </div>
        </div>

        {/* Tarjeta 2: Atacante */}
        <div className="bg-fuchsia-50/60 border border-fuchsia-100 p-6 rounded-3xl flex gap-5 items-start hover:scale-[1.02] transition-transform">
          <div className="p-3 bg-fuchsia-100 text-fuchsia-500 rounded-2xl shadow-sm shrink-0">
            <AlertTriangle size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-1">El Atacante</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Colectivo hacktivista <strong>"Guacamaya"</strong>, motivado por razones ideológicas contra instituciones militares y empresas extractivistas en Latinoamérica.
            </p>
          </div>
        </div>

        {/* Tarjeta 3: Impacto */}
        <div className="bg-violet-50/60 border border-violet-100 p-6 rounded-3xl flex gap-5 items-start hover:scale-[1.02] transition-transform">
          <div className="p-3 bg-violet-100 text-violet-500 rounded-2xl shadow-sm shrink-0">
            <Database size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-1">El Impacto</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Robo masivo de <strong>350 GB de datos</strong> (aprox. 400.000 correos). Incluyó planes de defensa nacional, reportes de inteligencia y fichas médicas (datos sensibles).
            </p>
          </div>
        </div>

        {/* Tarjeta 4: Vector */}
        <div className="bg-emerald-50/60 border border-emerald-100 p-6 rounded-3xl flex gap-5 items-start hover:scale-[1.02] transition-transform">
          <div className="p-3 bg-emerald-100 text-emerald-500 rounded-2xl shadow-sm shrink-0">
            <Bug size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-1">Vector de Ataque</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Explotación de las vulnerabilidades <strong>"ProxyShell"</strong> en servidores Microsoft Exchange de la institución, los cuales no habían sido actualizados (parcheados) a tiempo.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Resumen