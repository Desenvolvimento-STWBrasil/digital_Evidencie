import { Eye, EyeOff } from "lucide-react"
import { useState, type FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {

    // --- ESTADOS (A "memória" do nosso componente) ---
    // Para cada campo do formulário, criamos um estado para guardar seu valor.
    // Começam como uma string vazia.

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    // Estados para controlar a visibilidade das senhas
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Estado para guardar qualquer mensagem de erro que queiramos mostrar.
    const [error, setError] = useState('')

    // Hook para nos permitir redirecionar o usuário após o cadastro.
    const navigate = useNavigate()

    // --- FUNÇÕES (O "comportamento" do nosso componente) ---
    async function handleRegister(e: FormEvent) {
        // 1. Previne o comportamento padrão do formulário de recarregar a página.
        e.preventDefault();
        setError('')

        // 2. Validação Simples: Verificamos se as senhas coincidem.
        if (password !== confirmPassword) {
            setError('As senhas não coincidem')
            return;
        }

        // 3. Validação de força da senha (exemplo)
        if (password.length < 8) {
            setError('A senha precisa ter no mínimo 8 caracteres.')
            return;
        }

        if (name.length < 3) {
            setError('Nome inválido. Insira pelo menos 3 letras.')
            return
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError('E-mail inválido. Verifique o formato.');
            return;
        }

        // 4. Aqui viria a lógica para chamar a API
        // const userData = { name, email, phone, password };
        // try {
        //   await api.post('/users', userData);
        //   // Se deu tudo certo, redireciona para o login
        //   navigate('/login');
        // } catch (err) {
        //   setError('Ocorreu um erro ao criar a conta. Tente novamente.');
        // }

        console.log('Dados do formulario:', { name, email, phone, password });
        alert('Cadastro realizado com sucesso! (Simulação)')
        navigate('/login')

    }

    return (
        <div className="flex justify-center items-center mt-10 md:px-4">
            <form onSubmit={handleRegister} className="bg-white md:p-8 p-4 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-titulo">Crie sua conta</h2>

                {/* Campo Nome */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-texto mb-2 text-left">Nome</label>
                    <input
                        type="text"
                        id="name" value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-texto mb-2 text-left">E-mail</label>
                    <input
                        type="email"
                        id="email" value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
                        required
                    />
                </div>

                {/* Campo Celular com Máscara */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-texto mb-2 text-left">Celular</label>
                    <input
                        id="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
                        required
                    />
                </div>

                {/* Campo Senha */}
                <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-texto mb-2 text-left">Senha</label>
                    <input type={showPassword ? 'text' : 'password'} id="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-10 text-gray-500">
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {/* Campo Confirmar Senha */}
                <div className="mb-6 relative">
                    <label htmlFor="confirmPassword" className="block text-texto mb-2 text-left">Confirmar Senha</label>
                    <input type={showConfirmPassword ? 'text' : 'password'} id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" required />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-10 text-gray-500">
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {/* Exibição da mensagem de erro */}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                        <p>{error}</p>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-principal text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
                >
                    Cadastrar
                </button>


                <p className="text-center text-sm text-texto mt-14">
                    Já tem uma conta?{' '}
                    <Link to="/login" className="text-principal hover:underline">
                        Faça o login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register