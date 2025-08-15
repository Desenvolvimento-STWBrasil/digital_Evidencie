import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import Modal from "../ui/Modal";
import { useState } from "react";

function SecuritySettings() {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const navigate = useNavigate()
    const { logout } = useAuth();

    function handleDeleteAccount() {
        // Lógica para chamar a API e excluir a conta
        console.log('CONTA EXCLUÍDA');
        // Fecha o modal
        setIsModalOpen(false)
        // Desloga o usuário e o envia para a home
        logout()
        navigate('/')
    }

    return (
        <>
            <div className="max-w-lg">
                <h2 className="text-2xl font-semibold text-titulo mb-6">Segurança da Conta</h2>
                <div className="bg-red-50 border-red-200 p-4 rounded-lg">
                    <h3 className="font-bold text-green-800">Excluir Conta</h3>
                    <p className="text-red-700 mt-2 text-sm">
                        Esta ação é permanente e não pode ser desfeita. Todos os seus dados, incluindo chaves de licença e histórico de suporte, serão removidos para sempre.
                    </p>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="mt-4 bg-red-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-red-700 transition-all">Eu entendo, quero excluir minha conta</button>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Tem certeza absoluta">
                <p className="text-texto mb-6">
                    Para confirmar, por favor, clique no botão abaixo. Lembre-se, esta ação não pode ser revertida.
                </p>
                <div className="flex justify-end space-x-4">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="py-4 px-8 rounded-lg bg-gray-600 text-white hover:bg-gray-300"
                    >Cancelar</button>
                    <button
                        onClick={handleDeleteAccount}
                        className="py-4 px-8 rounded-lg bg-red-600 text-white hover:bg-red-700"
                    >
                        Confirmar Exclusão
                    </button>
                </div>
            </Modal>
        </>
    )
}

export default SecuritySettings