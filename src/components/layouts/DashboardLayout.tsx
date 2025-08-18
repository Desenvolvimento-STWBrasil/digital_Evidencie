/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAuth } from "../../contexts/AuthContext";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { KeyRound, LogOut, Home, Menu, X, HelpCircle, Headset, Github, Info, Cog, SquareArrowOutUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from '../../../public/Desktop_logo_Digital_evidence.png';

export default function DashboardLayout() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    function handleLogout() {
        logout();
        navigate("/home");
        setMenuOpen(false);
    }

    const userName = "Rodrigo";

    // Fecha menu ao clicar fora
    useEffect(() => {
        function handleClickOutside(event: { target: any; }) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Header Mobile */}
            <header className="flex items-center justify-between bg-white shadow-md px-4 py-2 md:hidden fixed top-0 left-0 right-0 z-50">
                <Link to="/dashboard/home" onClick={() => setMenuOpen(false)}>
                    <img src={logo} alt="Logo Digital Evidence" className="h-10" />
                </Link>
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </header>

            {/* Menu lateral mobile */}
            {menuOpen && (
                <div
                    ref={menuRef}
                    className="fixed top-14 left-0 w-2/3 h-[calc(100vh-56px)] bg-white shadow-md z-40 p-4 flex flex-col justify-between"
                >
                    <div className="my-2">
                        <p className="mb-6 text-lg text-texto md:size-6 font-bold"><span className="font-normal">Olá,</span> {userName}</p>
                        <nav className="flex flex-col space-y-6">
                            <Link to='/dashboard/home' onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                                <Home /><span>Home</span>
                            </Link>

                            <Link to='https://github.com/Desenvolvimento-STWBrasil?tab=repositories' target="_blank" onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                                <Github />
                                <span className="flex items-center space-x-2 text-texto hover:text-principal">GitHub
                                    <span className="hidden md:flex">(Versão Open Source)</span>
                                </span>
                                <SquareArrowOutUpRight className="w-4 items-end" />
                            </Link>
                            <Link to='/dashboard/key' onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                                <KeyRound /><span>Minha Chave</span>
                            </Link>
                            <Link to='/dashboard/sobre' onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                                <Info /><span>Sobre</span>
                            </Link>

                            <hr className="my-4" />

                            <Link to='/dashboard/central-de-ajuda' onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                                <HelpCircle /><span>Central de Ajuda</span>
                            </Link>
                            <Link to='/dashboard/suporte' onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                                <Headset /><span>Fale com o Suporte</span>
                            </Link>

                        </nav>
                    </div>

                    <div className="flex flex-col w-full text-texto hover:text-principal md:space-x-3 md:bottom-4 md:absolute gap-6">
                        <hr className="w-full border-t-2" />

                        <Link to='/dashboard/configuracao' onClick={() => setMenuOpen(false)} className="flex items-center space-x-2 text-texto hover:text-principal">
                            <Cog />
                            <span>Configurações</span>
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center m-auto border border-principal text-principal font-medium py-2 px-2 gap-2 hover:text-blue-300 rounded-lg transition duration-200"
                        >
                            <LogOut />
                            <span>Sair</span>
                        </button>
                    </div>
                </div>
            )}


            <div className="md:flex pt-14 md:pt-0">
                {/* Menu Desktop lateral */}
                <aside className="fixed bottom-0 left-0 right-0 bg-white shadow-lg 
    md:fixed md:top-0 md:left-0 md:w-64 md:h-screen md:shadow-none">
                    <div className="flex justify-around p-2 md:flex-col md:p-4 md:mt-4 md:space-y-4">
                        <div className="hidden md:block mb-4">
                            <Link to='/dashboard/home'>
                                <img className="w-10/12 m-auto" src={logo} alt="Logo da Digital Evidence" />
                            </Link>
                            <p className="text-sm text-texto md:mt-6 font-bold md:text-lg m-auto"><span className="font-normal">Olá,</span> {userName}</p>
                        </div>

                        <div className="w-full flex md:flex-col justify-between m-auto md:gap-6">
                            <Link to='/dashboard/home' className="w-full flex flex-col items-center text-texto hover:text-principal md:flex-row md:space-x-3">
                                <Home /><span className="text-xs mt-1 md:text-base md:mt-0">Home</span>
                            </Link>
                            <Link to='https://github.com/Desenvolvimento-STWBrasil?tab=repositories' target="_blank" className="w-full flex flex-col items-center text-texto hover:text-principal md:flex-row md:space-x-3">
                                <Github />
                                <span className="text-xs mt-1 md:text-base md:mt-0">GitHub
                                    <span className="hidden md:flex">(Versão Open Source)</span>
                                </span>
                                <SquareArrowOutUpRight className="w-5 items-end hidden md:flex" />
                            </Link>
                            <Link to='/dashboard/key' className="w-full flex flex-col items-center text-texto hover:text-principal md:flex-row md:space-x-3">
                                <KeyRound /><span className="text-xs mt-1 md:text-base md:mt-0">Minha Chave</span>
                            </Link>
                            <Link to='/dashboard/sobre' className="w-full flex flex-col items-center text-texto hover:text-principal md:flex-row md:space-x-3">
                                <Info /><span className="text-xs mt-1 md:text-base md:mt-0">Sobre</span>
                            </Link>

                            <hr className="my-4" />

                            <Link to='/dashboard/central-de-ajuda' className="hidden md:flex flex-col items-center text-texto hover:text-principal md:flex-row md:space-x-3">
                                <HelpCircle /><span className="text-xs mt-1 md:text-base md:mt-0">Central de Ajuda</span>
                            </Link>
                            <Link to='/dashboard/suporte' className="hidden md:flex flex-col items-center text-texto hover:text-principal md:flex-row md:space-x-3">
                                <Headset /><span className="text-xs mt-1 md:text-base md:mt-0">Fale com o Suporte</span>
                            </Link>

                            <div className="hidden md:flex flex-col text-texto hover:text-principal md:space-x-3 md:bottom-4 md:absolute gap-6">
                                <hr className="my-4 w-full border-t-2" />

                                <Link
                                    to="/dashboard/configuracao"
                                    className="flex flex-col items-center text-texto hover:text-principal md:flex-row md:space-x-3"
                                >
                                    <Cog />
                                    <span className="text-xs mt-1 md:text-base md:mt-0">Configurações</span>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="w-full flex justify-center border border-principal text-principal font-medium py-2 px-2 gap-2 hover:text-blue-400 rounded-lg transition duration-200"
                                >
                                    <LogOut />
                                    <span>Sair</span>
                                </button>
                            </div>


                        </div>
                    </div>
                </aside>

                {/* Conteúdo */}
                <main className="flex-1 p-4 md:p-8 pb-20 md:pb-8 md:ml-64">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
