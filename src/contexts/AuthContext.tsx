/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react'

// 1. Definimos a "forma" das informações que nosso contexto terá.
// É como o RG do nosso usuário. Terá uma propriedade 'isAuthenticated'
// e duas funções, 'login' e 'logout'.
interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

// 2. Criamos o Contexto, informando o formato que ele terá.
// O valor inicial é 'null' porque ele só terá um valor real
// quando estiver dentro do "Provider".
const AuthContext = createContext<AuthContextType | null>(null);

// 3. Criamos o "Provider" (Provedor).
// Ele é o componente que vai "abraçar" nossa aplicação e
// fornecer as informações de autenticação para todos.
// 'children' representa todos os componentes filhos que ele abraçará.
export function AuthProvider({ children }: { children: ReactNode }) {
    // Usamos o 'useState' para guardar a informação se o usuário
    // está ou não logado. A memória de curto prazo do nosso provedor.
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // Função que simula o login. No futuro, ela chamaria a API.
    const login = () => setIsAuthenticated(true)

    // Função que simula o logout.
    const logout = () => setIsAuthenticated(false)

    // O Provider "disponibiliza" o valor (value) para todos os seus filhos.
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// 4. Criamos um "Hook" customizado.
// É um atalho para não termos que digitar 'useContext(AuthContext)'
// toda vez que quisermos usar as informações. É uma boa prática.
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}