import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";


function Login() {
    // Pegamos a função 'login' do nosso contexto de autenticação.
    const { login } = useAuth();

    // 'useNavigate' é um hook que nos permite redirecionar o usuário programaticamente.
    const navigate = useNavigate();

    // 1. Criar um estado para controlar a visibilidade da senha
    const [showPassword, setShowPassword] = useState(false);

    function handleLogin(e: FormEvent) {
        e.preventDefault()

        // Lógica de Validação e Chamada de API viria aqui.
        // Por exemplo:
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        // await api.post('/login', { email, password });

        console.log('Formulario enviado');

        // Por enquanto, vamos apenas chamar nossa função de login simulada.
        login();

        // Após o login, redirecionamos o usuário para a dashboard.
        navigate('/dashboard/home')
    }

    return (
        <div className="flex justify-center items-center mt-20">
            <form
                onSubmit={handleLogin}
                className="bg-white md:p-8 p-4 rounded-lg shadow-md w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-titulo">Acessar sua Conta</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-texto mb-2 text-left">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div className="mb-6 relative">
                    <label htmlFor="password" className="block text-texto mb-2 text-left">Senha</label>
                    <input
                        // 2. O tipo do input agora é dinâmico
                        type={showPassword ? 'text' : 'password'} // O input do tipo password já esconde o que é digitado!
                        id="password"
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {/* 3. Botão para alternar a visibilidade */}
                    <button type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-10 text-gray-500"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                <div className="mb-4 text-end">
                    <Link to="/recuperar-senha" className="text-sm text-principal hover:underline">
                        Esqueceu sua senha?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full bg-principal hover:bg-principalhover text-white py-2 rounded-lg font-semibold transition-colors"
                >
                    Entrar
                </button>

                <div className="mb-4 text-end">

                </div>

                <div className="mt-14 flex justify-center">
                    <Link to="/cadastro" className="w-full text-texto text-center">
                        Não tem uma conta? <span className="text-principal">Cadastre-se</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login