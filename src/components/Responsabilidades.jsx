import { Users, Landmark, UserCog } from 'lucide-react'

function Responsabilidades() {
  return (
    <div className="h-full flex flex-col justify-center p-12 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        5. Análisis de Responsabilidades
      </h2>
      <div className="w-20 h-1.5 bg-rose-400 rounded-full mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Atacantes */}
        <div className="bg-white border-2 border-rose-100 p-6 rounded-3xl hover:-translate-y-1 transition-transform shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-rose-100 text-rose-500 rounded-xl">
              <Users size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-700">Grupo "Guacamaya"</h3>
          </div>
          <p className="text-sm font-bold text-rose-500 uppercase tracking-wider mb-3">Penal / Criminal</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Autores materiales del ciberataque. Responsabilidad directa bajo la Ley N° 21.459 por acceso ilícito y robo de datos. Sin embargo, su carácter anónimo e internacional dificulta la persecución legal en la práctica.
          </p>
        </div>

        {/* Institución */}
        <div className="bg-white border-2 border-violet-100 p-6 rounded-3xl hover:-translate-y-1 transition-transform shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-violet-100 text-violet-500 rounded-xl">
              <Landmark size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-700">Estado (EMCO)</h3>
          </div>
          <p className="text-sm font-bold text-violet-500 uppercase tracking-wider mb-3">Civil / Institucional</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Responsabilidad civil por "Falta de Servicio". Existe la obligación de indemnizar a los funcionarios por no resguardar adecuadamente sus datos personales, infringiendo directamente la Ley N° 19.628.
          </p>
        </div>

        {/* Jefaturas */}
        <div className="bg-white border-2 border-fuchsia-100 p-6 rounded-3xl hover:-translate-y-1 transition-transform shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-fuchsia-100 text-fuchsia-500 rounded-xl">
              <UserCog size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-700">Alto Mando y TI</h3>
          </div>
          <p className="text-sm font-bold text-fuchsia-500 uppercase tracking-wider mb-3">Admin. / Disciplinaria</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Responsabilidad administrativa por omisión de deberes. Incurren en faltas graves a la probidad e incumplimiento militar al haber ignorado las alertas previas de ciberseguridad sobre la vulnerabilidad.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Responsabilidades