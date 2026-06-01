import { Terminal, HardDrive, Cpu } from 'lucide-react'

function Tipificacion() {
  return (
    <div className="h-full flex flex-col justify-center p-12 animate-fade-in">
      <h2 className="text-4xl font-extrabold text-slate-700 mb-2">
        3. Tipificación de Delitos
      </h2>
      <div className="w-20 h-1.5 bg-fuchsia-400 rounded-full mb-8"></div>

      <p className="text-slate-600 mb-8 text-lg font-medium bg-fuchsia-50/50 p-4 rounded-xl inline-block border border-fuchsia-100 w-fit">
        Aplicación de la <span className="text-fuchsia-600 font-bold">Ley N° 21.459</span> a las acciones del colectivo Guacamaya:
      </p>

      <div className="space-y-5">
        {/* Artículo 2 */}
        <div className="bg-white border border-pink-100 p-5 rounded-2xl flex items-center gap-5 shadow-sm hover:shadow-md hover:border-pink-300 transition-all group">
          <div className="p-4 bg-pink-50 text-pink-500 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
            <Terminal size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-700">Artículo 2: Acceso Ilícito</h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Vulneración de los servidores Microsoft Exchange del EMCO sin autorización, superando (o aprovechando la falta de) las barreras de seguridad existentes.
            </p>
          </div>
        </div>

        {/* Artículo 6 */}
        <div className="bg-white border border-fuchsia-100 p-5 rounded-2xl flex items-center gap-5 shadow-sm hover:shadow-md hover:border-fuchsia-300 transition-all group">
          <div className="p-4 bg-fuchsia-50 text-fuchsia-500 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
            <HardDrive size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-700">Artículo 6: Receptación de Datos</h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Extracción, apropiación y posterior difusión masiva (publicación en internet) de los 350 GB de información confidencial y correos electrónicos institucionales.
            </p>
          </div>
        </div>

        {/* Artículo 8 */}
        <div className="bg-white border border-violet-100 p-5 rounded-2xl flex items-center gap-5 shadow-sm hover:shadow-md hover:border-violet-300 transition-all group">
          <div className="p-4 bg-violet-50 text-violet-500 rounded-xl shrink-0 group-hover:scale-110 transition-transform">
            <Cpu size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-700">Artículo 8: Abuso de Dispositivos</h3>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              Utilización de scripts y exploits específicos diseñados para aprovechar la vulnerabilidad <span className="italic">ProxyShell</span> y cometer la intrusión.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tipificacion