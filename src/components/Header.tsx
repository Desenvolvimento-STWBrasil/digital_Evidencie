import { Facebook, Instagram, Menu, SquareArrowOutUpRight, Twitter, X } from "lucide-react"
import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

/* Logo */
import logo from '../../public/Desktop_logo_Digital_evidence.png'

function Header() {

    // 1. Estado para controlar a visibilidade do menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const location = useLocation();

    return (
        // 'relative' é importante para que o menu overlay se posicione corretamente
        <header className="bg-white shadow-md relative">
            <nav className="container mx-auto p-4 flex justify-between items-center">
                <Link to='/' className="text-2xl font-bold text-principal py-2">
                    <img className="w-1/3" src={logo} alt="Logo da Digital Evidencie, empresa especializada em perícia digital e tecnologia" />
                </Link>

                {/* Botões de Ação para Telas Grandes (Desktop) */}
                {/*
                hidden': Por padrão (mobile-first), o menu de desktop fica escondido.
                'md:flex': A partir de telas médias ('md'), ele se torna visível e com 'display: flex'.
                */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* <Link to='/login' className="text-principal hover:text-principalhover transition-colors border px-6 py-2 text-center rounded">Login</Link> */}

                    {/* className="border border-principal text-principal text-center px-4 py-4 rounded-md font-semibold hover:bg-principal hover:text-white transition-colors" */}

                    {location.pathname === '/login' ? (
                        <Link to="/cadastro" onClick={() => setIsMenuOpen(false)} className="text-principal  border px-6 py-2 text-center rounded hover:bg-principal hover:text-white transition-colors">
                            Cadastre-se
                        </Link>
                    ) : (
                        <Link to='/login' className="text-principal  border px-6 py-2 text-center rounded hover:bg-principal hover:text-white transition-colors">Login</Link>
                    )}

                </div>

                {/* Ícone de Menu Hambúrguer para Telas Pequenas (Mobile) */}
                {/*
                'md:hidden': Em telas médias ou maiores, este ícone some.
                Ele só aparece em telas menores que 'md'.
                */}
                <div className="md:hidden">
                    {/* O botão agora alterna o estado 'isMenuOpen' */}
                    <button onClick={() => setIsMenuOpen(true)} className="text-texto hover:text-principal">
                        <Menu size={28} />
                    </button>
                </div>
            </nav>

            {/* --- MENU OVERLAY (A MÁGICA ACONTECE AQUI) --- */}
            {/* Este container do menu usa classes de transição para animar a propriedade 'transform'.
        - 'transform': Habilita a GPU para animações mais suaves.
        - 'transition-transform': Diz ao CSS para animar qualquer mudança na propriedade 'transform'.
        - 'duration-300 ease-in-out': Define a duração (300ms) e a curva de velocidade da animação.
        - com 'isMenuOpen' false: 'translate-x-full' joga o menu para FORA da tela, à direita.
        - com 'isMenuOpen' true: 'translate-x-0' traz o menu para sua posição original, DENTRO da tela.
      */}
            <div
                className={`
          md:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-lg p-6
          transform transition-transform duration-300 ease-in-out z-10
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                {/* Cabeçalho do Menu com Botão de Fechar */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-principal">Menu</h2>
                    <button onClick={() => setIsMenuOpen(false)} className="text-texto hover:text-principal">
                        <X size={28} />
                    </button>
                </div>

                {/* Links de Navegação do Menu Mobile */}
                <div className="flex flex-col space-y-4">
                    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="bg-principal text-white text-center py-2 rounded-md font-semibold hover:bg-opacity-90 transition-colors">
                        Login
                    </Link>
                    <Link to="/cadastro" onClick={() => setIsMenuOpen(false)} className="border border-principal text-principal text-center py-2 rounded-md font-semibold hover:bg-principal hover:text-white transition-colors">
                        Cadastre-se
                    </Link>
                </div>

                {/* Divisor */}
                <hr className="my-6" />

                {/* Links adicionais */}
                <div className="flex flex-col space-y-4 text-texto">
                    <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="hover:text-principal">Perguntas Frequentes (FAQ)</Link>
                    <Link to='https://github.com/Desenvolvimento-STWBrasil?tab=repositories' target="_blank" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                        <span className="flex items-center space-x-2 text-texto hover:text-principal">GitHub (Versão Open Source)
                        </span>
                        <SquareArrowOutUpRight className="w-4 items-end" />
                    </Link>
                    <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="hover:text-principal">Contato</Link>
                </div>

                {/* Ícones de Redes Sociais no final */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-6">
                    <a href="#" className="text-texto hover:text-principal"><Instagram /></a>
                    <a href="#" className="text-texto hover:text-principal"><Facebook /></a>
                    <a href="#" className="text-texto hover:text-principal"><Twitter /></a>
                </div>
            </div>
        </header>
    )
}

export default Header