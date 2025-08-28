import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-purple-700/30 bg-gradient-to-b from-black to-[#050014]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Image src="/skyfrex-logo.jpg" alt="Skyfrex" width={38} height={38} className="rounded-lg" />
            <span className="text-lg font-extrabold tracking-wide bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
              SKYFREX
            </span>
          </div>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Herramientas y desafíos de trading demo con enfoque profesional. Formación, disciplina y performance.
          </p>
        </div>

        {/* Producto */}
        <div>
          <h4 className="text-sm font-semibold text-gray-200">Producto</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link href="#planes" className="hover:text-purple-300">Planes</Link></li>
            <li><Link href="#challenge" className="hover:text-purple-300">Skyfrex Challenge</Link></li>
            <li><Link href="#trial" className="hover:text-purple-300">Free Trial</Link></li>
            <li><Link href="#academy" className="hover:text-purple-300">Academy</Link></li>
          </ul>
        </div>

        {/* Compañía */}
        <div>
          <h4 className="text-sm font-semibold text-gray-200">Compañía</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link href="#nosotros" className="hover:text-purple-300">Nosotros</Link></li>
            <li><Link href="#trabaja" className="hover:text-purple-300">Trabaja con nosotros</Link></li>
            <li><Link href="#contacto" className="hover:text-purple-300">Contacto</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-semibold text-gray-200">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li><Link href="/terminos" className="hover:text-purple-300">Términos & Condiciones</Link></li>
            <li><Link href="/privacidad" className="hover:text-purple-300">Política de Privacidad</Link></li>
            <li><Link href="/riesgo" className="hover:text-purple-300">Advertencia de Riesgo</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-purple-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Skyfrex. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            {/* Iconos simples en SVG (sin librerías) */}
            <a aria-label="Twitter" href="#" className="text-gray-400 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.5-4.187 11.84-11.84 11.84-2.35 0-4.53-.69-6.367-1.87.33.04.65.053.99.053 1.95 0 3.75-.66 5.18-1.78-1.82-.04-3.35-1.24-3.88-2.9.26.04.52.067.79.067.38 0 .77-.053 1.12-.147-1.9-.38-3.33-2.06-3.33-4.09v-.053c.55.31 1.2.5 1.88.52-1.12-.75-1.86-2.02-1.86-3.45 0-.76.2-1.47.55-2.08 2.02 2.48 5.04 4.11 8.45 4.28-.07-.3-.1-.62-.1-.95 0-2.28 1.85-4.13 4.13-4.13 1.19 0 2.27.5 3.02 1.3.94-.18 1.82-.53 2.61-1-.31.98-.98 1.8-1.85 2.32.84-.09 1.64-.32 2.38-.65-.56.83-1.27 1.56-2.09 2.15Z"/>
              </svg>
            </a>
            <a aria-label="LinkedIn" href="#" className="text-gray-400 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2Zm.02 3.5H1v15h4V7Zm7 0h-3.98v15H12v-7.5c0-2 2.5-2.17 2.5 0V22H19v-8.5c0-5.06-5.5-4.87-7-2.38V7Z"/>
              </svg>
            </a>
            <a aria-label="YouTube" href="#" className="text-gray-400 hover:text-white">
              <svg width="22" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.95-1.9-.96-2.36-1.02C17.6 2.5 12 2.5 12 2.5h-.01s-5.6 0-8.19.32c-.46.06-1.46.07-2.36 1.02C.73 4.56.5 6.2.5 6.2S.27 8.2.27 10.2v1.59c0 2 .23 4 .23 4s.23 1.64.94 2.36c.9.95 2.08.92 2.61 1.02 1.9.18 8 .31 8 .31s5.6 0 8.2-.32c.46-.06 1.46-.07 2.36-1.02.71-.72.94-2.36.94-2.36s.23-2 .23-4V10.2c0-2-.23-4-.23-4ZM9.75 13.5V7.5l6 3-6 3Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
