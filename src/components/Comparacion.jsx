import { CheckCircle2 } from 'lucide-react'

function Comparacion() {
  return (
    <div className="h-full flex flex-col justify-center p-12 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        4. Comparación de Marcos
      </h2>
      <div className="w-20 h-1.5 bg-emerald-400 rounded-full mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Tarjeta Ley 21.459 */}
        <div className="bg-white border-2 border-pink-100 rounded-3xl p-6 shadow-sm hover:-translate-y-1 transition-transform">
          <h3 className="text-xl font-bold text-pink-500 mb-4 border-b border-pink-50 pb-3 flex items-center gap-2">
            Ley N° 21.459
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-600 leading-tight">
              <CheckCircle2 className="text-pink-400 shrink-0" size={20}/> 
              <span><b>Enfoque:</b><br/>Penal y Sancionatorio</span>
            </li>
            <li className="flex gap-3 text-slate-600 leading-tight">
              <CheckCircle2 className="text-pink-400 shrink-0" size={20}/> 
              <span><b>Bien Protegido:</b><br/>Sistemas de Información</span>
            </li>
            <li className="flex gap-3 text-slate-600 leading-tight bg-pink-50 p-2 rounded-xl">
              <CheckCircle2 className="text-pink-500 shrink-0" size={20}/> 
              <span><b>Aplicación al Caso:</b><br/>Penaliza a los atacantes del grupo Guacamaya.</span>
            </li>
          </ul>
        </div>

        {/* Tarjeta Ley 19.628 */}
        <div className="bg-white border-2 border-violet-100 rounded-3xl p-6 shadow-sm hover:-translate-y-1 transition-transform">
          <h3 className="text-xl font-bold text-violet-500 mb-4 border-b border-violet-50 pb-3 flex items-center gap-2">
            Ley N° 19.628
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-600 leading-tight">
              <CheckCircle2 className="text-violet-400 shrink-0" size={20}/> 
              <span><b>Enfoque:</b><br/>Administrativo y Civil</span>
            </li>
            <li className="flex gap-3 text-slate-600 leading-tight">
              <CheckCircle2 className="text-violet-400 shrink-0" size={20}/> 
              <span><b>Bien Protegido:</b><br/>Privacidad y Derechos ARCO</span>
            </li>
            <li className="flex gap-3 text-slate-600 leading-tight bg-violet-50 p-2 rounded-xl">
              <CheckCircle2 className="text-violet-500 shrink-0" size={20}/> 
              <span><b>Aplicación al Caso:</b><br/>Negligencia del EMCO al no resguardar las bases de datos.</span>
            </li>
          </ul>
        </div>

        {/* Tarjeta ISO 27001 (Tonos Matcha/Sage Green) */}
        <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 shadow-sm hover:-translate-y-1 transition-transform">
          <h3 className="text-xl font-bold text-emerald-600 mb-4 border-b border-emerald-50 pb-3 flex items-center gap-2">
            ISO/IEC 27001
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3 text-slate-600 leading-tight">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={20}/> 
              <span><b>Enfoque:</b><br/>Técnico y Preventivo (SGSI)</span>
            </li>
            <li className="flex gap-3 text-slate-600 leading-tight">
              <CheckCircle2 className="text-emerald-400 shrink-0" size={20}/> 
              <span><b>Bien Protegido:</b><br/>Confidencialidad, Integridad y Disponibilidad</span>
            </li>
            <li className="flex gap-3 text-slate-600 leading-tight bg-emerald-50/70 p-2 rounded-xl">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20}/> 
              <span><b>Aplicación al Caso:</b><br/>Ausencia de controles técnicos y falta de parcheo.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Comparacion