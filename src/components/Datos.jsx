import { Database, FileText, Activity, ShieldAlert } from 'lucide-react'

function Datos() {
  return (
    <div className="h-full flex flex-col justify-center p-12 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        6. Tratamiento de Datos (ARCO)
      </h2>
      <div className="w-20 h-1.5 bg-emerald-400 rounded-full mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contexto de la filtración */}
        <div className="bg-white border-2 border-emerald-100 p-8 rounded-3xl shadow-sm hover:border-emerald-200 transition-colors">
          <h3 className="text-2xl font-bold text-emerald-600 mb-4 flex items-center gap-3">
            <Database className="text-emerald-400" />
            Información Expuesta
          </h3>
          <p className="text-slate-600 mb-5 text-sm leading-relaxed">
            La exfiltración no solo incluyó inteligencia militar, sino datos regulados por la Ley N° 19.628, afectando gravemente a los funcionarios de la institución.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4 text-sm text-slate-700 bg-emerald-50/50 p-4 rounded-2xl border border-emerald-50">
              <FileText className="text-emerald-500 shrink-0" size={24}/>
              <span><b>Datos Personales:</b> Nombres completos, RUT, domicilios y correos electrónicos institucionales.</span>
            </li>
            <li className="flex items-center gap-4 text-sm text-slate-700 bg-emerald-100/40 p-4 rounded-2xl border border-emerald-100">
              <Activity className="text-emerald-600 shrink-0" size={24}/>
              <span><b>Datos Sensibles:</b> Fichas médicas, diagnósticos y tratamientos psicológicos del personal.</span>
            </li>
          </ul>
        </div>

        {/* Vulneración de Derechos ARCO */}
        <div className="bg-emerald-700 text-white p-8 rounded-3xl shadow-md relative overflow-hidden flex flex-col justify-center">
          <div className="absolute -right-6 -top-6 text-emerald-600/40">
            <ShieldAlert size={160} />
          </div>
          
          <h3 className="text-2xl font-bold text-emerald-50 mb-3 relative z-10">
            Vulneración ARCO
          </h3>
          <p className="text-emerald-100/90 mb-6 text-sm leading-relaxed relative z-10">
            El Estado Mayor Conjunto, al no proteger sus bases de datos, arrebató a sus trabajadores el control de sus derechos fundamentales:
          </p>
          
          <div className="grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-emerald-800/50 p-4 rounded-2xl backdrop-blur-sm border border-emerald-600/50 hover:bg-emerald-800/70 transition-colors">
              <p className="font-bold text-emerald-50">A - Acceso</p>
              <p className="text-xs text-emerald-200/80 mt-1">Pérdida de control sobre quién ve la información.</p>
            </div>
            <div className="bg-emerald-800/50 p-4 rounded-2xl backdrop-blur-sm border border-emerald-600/50 hover:bg-emerald-800/70 transition-colors">
              <p className="font-bold text-emerald-50">R - Rectificación</p>
              <p className="text-xs text-emerald-200/80 mt-1">Imposibilidad de corregir los datos ya filtrados.</p>
            </div>
            <div className="bg-emerald-800/50 p-4 rounded-2xl backdrop-blur-sm border border-emerald-600/50 hover:bg-emerald-800/70 transition-colors">
              <p className="font-bold text-emerald-50">C - Cancelación</p>
              <p className="text-xs text-emerald-200/80 mt-1">El EMCO ya no puede eliminar los datos de la red.</p>
            </div>
            <div className="bg-emerald-800/50 p-4 rounded-2xl backdrop-blur-sm border border-emerald-600/50 hover:bg-emerald-800/70 transition-colors">
              <p className="font-bold text-emerald-50">O - Oposición</p>
              <p className="text-xs text-emerald-200/80 mt-1">Negligencia al no detener el tratamiento ilícito.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Datos