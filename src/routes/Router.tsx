
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MainLayout from "../components/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Support from "../pages/dashboard/Support";
import FaqPage from "../pages/Faq";
import Contact from "../pages/Contact";
import TermsPage from "../pages/Terms";
import PrivacyPage from "../pages/Privacy";
import ForgotPassword from "../pages/ForgotPassword";
import SettingsPage from "../pages/dashboard/SettingsPage";
import Premium from "../pages/Premium";
import Download from "../pages/Download";
import About from "../pages/About";
import HelpCenter from "../pages/dashboard/HelpCenter";
import Key from "../pages/dashboard/key";
import Dashboard from "../pages/dashboard/Dashboard";
import NotFoundPage from "../pages/NotFoundPage";

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/cadastro',
                element: <Register />
            },

            /* Novas Rotas públicas */
            {
                path: '/faq',
                element: <FaqPage />
            },
            {
                path: '/contato',
                element: <Contact />
            },
            {
                path: '/termos',
                element: <TermsPage />
            },
            {
                path: '/privacidade',
                element: <PrivacyPage />
            },
            {
                path: '/recuperar-senha',
                element: <ForgotPassword />
            },
            {
                path: '/premium',
                element: <Premium />
            },
            {
                path: '/download',
                element: <Download />
            },
            {
                path: '/sobre',
                element: <About />
            },
            
            // ROTA CORINGA - DEVE SER A ÚLTIMA ROTA DESTE GRUPO!
            // Ela vai capturar qualquer outra rota que não seja as definidas acima.
            {
                path: "*",
                element: <NotFoundPage />
            },

        ]
    },
    // Nova rota "pai" para as rotas protegidas
    {
        element: <ProtectedRoute />,
        children: [{

            // 2. A rota PAI agora usa o DashboardLayout
            element: <DashboardLayout />,
            children: [
                // 3. Estas são as páginas que aparecerão DENTRO do DashboardLayout
                {
                    path: '/dashboard/home',
                    element: <Dashboard />
                },
                {
                    path: '/dashboard/key',
                    element: <Key />
                },
                {
                    path: '/dashboard/suporte',
                    element: <Support />
                },
                {
                    path: '/dashboard/configuracao',
                    element: <SettingsPage />
                },
                {
                    path: '/dashboard/central-de-ajuda',
                    element: <HelpCenter />
                },
                {
                    path: '/dashboard/sobre',
                    element: <About />
                },
            ]
        }
        ]
    }
]);

export function AppRouter() {
    return <RouterProvider router={router} />
}