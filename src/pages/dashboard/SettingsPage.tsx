import { useSearchParams } from "react-router-dom"
import EditProfileForm from "../../components/settings/EditProfileForm";
import ChangePasswordForm from "../../components/settings/ChangePasswordForm";
import SecuritySettings from "../../components/settings/SecuritySettings";

function SettingsPage() {

    const [searchParams, setSearchParams] = useSearchParams();

    // A aba padrão será 'perfil'
    const activeTab = searchParams.get('tab') || 'perfil'

    const renderTabContent = () => {
        switch (activeTab) {
            case 'perfil':
                return <EditProfileForm />;
            case 'senha':
                return <ChangePasswordForm />
            case 'seguranca':
                return <SecuritySettings />
            default:
                return <EditProfileForm />;
        }
    };

    // Função auxiliar para estilizar a aba ativa
    const getTabClassName = (tabName: string) => {
        return `px-4 py-2 font-semibold rounded-md transition-colors ${activeTab === tabName
            ? 'bg-principal text-white'
            : 'text-texto hover:bg-gray-200'
            }`
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-titulo mb-8">Configurações da Conta</h1>

            {/* Navegação por Abas */}
            <div className="flex space-x-2 md:space-x-4 border-b border-gray-200 mb-8">
                <button onClick={() => setSearchParams({ tab: 'perfil' })} className={getTabClassName('perfil')}>
                    Editar Perfil
                </button>
                <button onClick={() => setSearchParams({ tab: 'senha' })} className={getTabClassName('senha')}>
                    Alterar Senha
                </button>
                <button onClick={() => setSearchParams({ tab: 'seguranca' })} className={getTabClassName('seguranca')}>
                    Segurança
                </button>
            </div>

            {/* Conteúdo da Aba Ative */}
            <div>
                {renderTabContent()}
            </div>
        </div>
    )
}

export default SettingsPage