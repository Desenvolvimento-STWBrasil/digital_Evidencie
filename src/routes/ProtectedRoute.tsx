import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function ProtectedRoute() {
    // Usamos nosso hook para perguntar à "central de segurança" se o usuário está logado.
    const { isAuthenticated } = useAuth()

    //Se estiver autenticado, mostre o conteúdo da página (o <Outlet />).
    if (isAuthenticated) {
        return <Outlet />
    }

    // Se NÃO estiver autenticado, redirecione o usuário para a página de login.
    // A propriedade 'replace' evita que o usuário possa clicar em "voltar" no navegador
    // e acabar na página protegida novamente.
    return (
        <Navigate to='/login' replace />
    )
}
