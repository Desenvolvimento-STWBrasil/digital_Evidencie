import { useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

function ForgotPassword() {

    // 'useSearchParams' nos permite ler e alterar os parâmetros de busca da URL (ex: ?step=1).
    const [searchParams, setSearchParams] = useSearchParams()
    const navigate = useNavigate()

    // Estados para os dados dos formulários de cada etapa
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState('')
    const [isSending, setIsSending] = useState(false)

    // Lê o parâmetro 'step' da URL, e se não existir, define o valor padrão como '1'
    const currentStep = searchParams.get('step') || '1';

    // Lógica para a primeira etapa: Enviar o e-mail
    async function handleSendEmail(e: FormEvent) {
        e.preventDefault();
        setError('')
        setIsSending(true)

        // Simulação de chamada de API: Envia o e-mail para o backend
        // await api.post('/password/request', { email });
        console.log(`Simulando envio de e-mail para: ${email}`);

        // Aguardamos 2 segundos para simular a resposta da API
        setTimeout(() => {
            setIsSending(false);
            // Após o sucesso, atualizamos a URL para ir para a próxima etapa
            setSearchParams({ step: '2', email: email });
        }, 2000)
    }

    // Lógica para a segunda etapa: Validar o código
    async function handleVerifyCode(e: FormEvent) {
        e.preventDefault();
        setError('')
        setIsSending(true)

        if (code !== '123456') { //Código de exemplo para a simulação
            setError('O código está incorreto. Tente novamente');
            setIsSending(false);
            return
        }

        // Simulação de chamada de API: Verifica o código
        // await api.post('/password/verify', { email, code });
        console.log(`Simulando verificação de código: ${code}`);

        setTimeout(() => {
            setIsSending(false);
            setSearchParams({ step: '3' });
        }, 2000);
    }

    // Lógica para a terceira etapa: Redefinir a senha
    async function handleResetPassword(e: FormEvent) {
        e.preventDefault()
        setError('')
        setIsSending(true)

        if (newPassword !== confirmPassword) {
            setError("As senhas não coincidem!")
            setIsSending(false)
            return
        }
        // Simulação de chamada de API: Redefine a senha
        // await api.post('/password/reset', { newPassword });
        console.log('Simulando redefinição de senha.');

        setTimeout(() => {
            setIsSending(false);
            alert('Sua senha foi redefinida com sucesso!');
            navigate('/login'); // Redireciona para a tela de login
        }, 2000);
    }

    // Esta função renderiza a UI correta com base no passo atual
    const renderStep = () => {
        switch (currentStep) {
            case '1': return (
                <form onSubmit={handleSendEmail} className="space-y-6">
                    <h2 className='text-2xl font-bold text-titulo'>Recuperar Senha</h2>
                    <p className='text-texto'>
                        Insira o e-mail associado à sua conta para receber um código de verificação.
                    </p>
                    <div className='space-y-2'>
                        <label htmlFor="email" className='block text-texto font-semibold'>E-mail</label>
                        <input type="email"
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={isSending}
                        className="w-full bg-principal text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50">
                        {isSending ? 'Enviando...' : "Enviar Código"}
                    </button>
                </form>
            );
            case '2': return (
                <form onSubmit={handleVerifyCode} className="space-y-6">
                    <h2 className='text-2xl font-bold text-titulo'>Verificar Código</h2>
                    <p className='text-texto'>
                        Um código foi enviado para seu e-mail. Insira-o abaixo para continuar.
                    </p>
                    <div className='space-y-2'>
                        <label htmlFor="code" className='block text-texto font-semibold'>Código de Verificação</label>
                        <input type="text"
                            id='code'
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className='w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-principal'
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-principal text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50"
                    >
                        {isSending ? 'Verificando...' : 'Verificar Código'}
                    </button>
                    <Link to="/recuperar-senha" className="block text-center text-principal hover:underline text-sm">
                        Voltar para o e-mail
                    </Link>
                </form>
            );
            case '3': return (
                <form onSubmit={handleResetPassword} className="space-y-6">
                    <h2 className='text-2xl font-bold text-titulo'>Redefinir Senha</h2>
                    <p className="text-texto">
                        Digite e confirme sua nova senha.
                    </p>
                    <div className='space-y-2'>
                        <label htmlFor="newPassword" className='block text-texto font-semibold'>Nova Senha</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-principal"
                            required
                        />
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="confirmPassword" className="block text-texto font-semibold mt-4">Confirmar Nova Senha</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-principal"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSending}
                        className="w-full bg-principal text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50"
                    >
                        {isSending ? 'Redefinindo...' : 'Redefinir Senha'}
                    </button>
                </form>
            );
            default:
                // Se a URL tiver um 'step' inválido, redirecionamos para o primeiro passo
                navigate('/recuperar-senha');
                return null;
        }
    }


    return (
        <div className="flex justify-center items-center mt-10 px-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                {renderStep()}
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ForgotPassword