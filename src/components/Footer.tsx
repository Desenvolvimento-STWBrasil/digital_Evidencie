import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

import logo from "../../public/Desktop_logo_Digital_evidence.png"

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-texto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-lg font-bold">
              <img className="w-1/3" src={logo} alt="Logo da Digital Evidencie, empresa especializada em perícia digital e tecnologia" />
            </h3>
            <p className="mt-2 text-texto text-sm">
              Revolucionando a forma como você trabalha.
            </p>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h3 className="text-lg font-bold">Navegação</h3>
            <ul className="mt-2 space-y-2 text-sm text-texto">
              <li><Link to="/faq" className="hover:text-principal">FAQ</Link></li>
              <li><Link to="/sobre" className="hover:text-principal">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-principal">Contato</Link></li>
              <li><Link to="/termos" className="hover:text-principal">Termos de Uso</Link></li>
              <li><Link to="/privacidade" className="hover:text-principal">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div>
            <h3 className="text-lg font-bold">Siga-nos</h3>
            <div className="mt-2 flex space-x-4 text-texto">
              <a href="#" className="hover:text-principal"><Instagram /></a>
              <a href="#" className="hover:text-principal"><Facebook /></a>
              <a href="#" className="hover:text-principal"><Twitter /></a>
            </div>
          </div>
        </div>

        <hr className="my-8" />

        <div className="text-center text-sm text-gray-500">
          &copy; {currentYear} MeuSoftware. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}