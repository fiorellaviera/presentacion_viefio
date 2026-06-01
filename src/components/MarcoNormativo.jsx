import { Scale, Lock, BookOpen } from 'lucide-react'

function MarcoNormativo() {
  return (
    <div className="h-full flex flex-col justify-center p-12 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        2. Marco Normativo Aplicable
      </h2>
      <div className="w-20 h-1.5 bg-violet-400 rounded-full mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Tarjeta Ley 21.459 */}
        <div className="bg-white border-2 border-pink-100 p-8 rounded-3xl hover:border-pink-300 hover:shadow-md transition-all group">
          <div className="p-4 bg-pink-50 text-pink-500 rounded-2xl w-fit mb-6 group-hover:bg-pink-100 transition-colors">
            <Lock size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-700 mb-2">Ley N° 21.459</h3>
          <p className="text-sm font-bold text-pink-500 uppercase tracking-wider mb-4">Delitos Informáticos</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Sanciona el acceso ilícito, la intercepción y el daño a sistemas informáticos. Es la normativa clave para tipificar el actuar criminal del grupo Guacamaya (Arts. 2, 6 y 8).
          </p>
        </div>

        {/* Tarjeta Ley 19.628 */}
        <div className="bg-white border-2 border-violet-100 p-8 rounded-3xl hover:border-violet-300 hover:shadow-md transition-all group">
          <div className="p-4 bg-violet-50 text-violet-500 rounded-2xl w-fit mb-6 group-hover:bg-violet-100 transition-colors">
            <Scale size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-700 mb-2">Ley N° 19.628</h3>
          <p className="text-sm font-bold text-violet-500 uppercase tracking-wider mb-4">Vida Privada</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Regula el tratamiento de datos personales. El EMCO falló en su deber de resguardar bases de datos que contenían información sensible y médica de sus funcionarios.
          </p>
        </div>

        {/* Tarjeta ISO 27001 */}
        <div className="bg-white border-2 border-emerald-100 p-8 rounded-3xl hover:border-emerald-300 hover:shadow-md transition-all group">
          <div className="p-4 bg-emerald-50 text-emerald-500 rounded-2xl w-fit mb-6 group-hover:bg-emerald-100 transition-colors">
            <BookOpen size={32} />
          </div>
          <h3 className="text-2xl font-bold text-slate-700 mb-2">ISO/IEC 27001</h3>
          <p className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-4">Estándar Global</p>
          <p className="text-slate-600 leading-relaxed text-sm">
            Marco de buenas prácticas para Sistemas de Gestión de Seguridad de la Información (SGSI). Su inobservancia facilitó la intrusión a través de la vulnerabilidad "ProxyShell".
          </p>
        </div>

      </div>
    </div>
  )
}

export default MarcoNormativo