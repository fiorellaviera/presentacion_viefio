import { Lightbulb, ShieldCheck, BookMarked } from 'lucide-react'

function Conclusiones() {
  return (
    <div className="h-full flex flex-col justify-center p-12 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        7. Conclusiones y Lecciones
      </h2>
      <div className="w-20 h-1.5 bg-pink-400 rounded-full mb-10"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Conclusión 1 */}
        <div className="bg-white border-2 border-pink-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center gap-3">
            <Lightbulb size={28} />
            La Falsa Sensación de Seguridad
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            El caso EMCO demostró que tener presupuesto no equivale a tener seguridad. La negligencia en la aplicación de parches básicos (como los de la vulnerabilidad ProxyShell) y la falta de una cultura preventiva dejaron expuestos los datos más críticos del país.
          </p>
        </div>

        {/* Conclusión 2 */}
        <div className="bg-white border-2 border-violet-100 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-bold text-violet-500 mb-4 flex items-center gap-3">
            <BookMarked size={28} />
            Evolución Normativa
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            Este incidente sirvió como catalizador para acelerar la promulgación de la <strong>Ley Marco sobre Ciberseguridad</strong>, obligando a las instituciones del Estado a adoptar medidas proactivas, reportar incidentes obligatoriamente y no esconder las brechas.
          </p>
        </div>

        {/* Recomendación Final */}
        <div className="md:col-span-2 bg-emerald-50 border-2 border-emerald-100 p-8 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:bg-emerald-100/50 transition-colors">
          <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl shrink-0">
            <ShieldCheck size={40} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-700 mb-2 text-center sm:text-left">
              Recomendación Clave: Arquitectura "Zero Trust"
            </h3>
            <p className="text-emerald-800/80 leading-relaxed text-sm text-center sm:text-left">
              Las instituciones deben abandonar el modelo perimetral tradicional. Implementar un enfoque de "Confianza Cero" (Zero Trust), exigir múltiple factor de autenticación (MFA) y mantener auditorías continuas basadas en la norma ISO/IEC 27001 es fundamental para evitar futuros desastres de esta magnitud.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Conclusiones