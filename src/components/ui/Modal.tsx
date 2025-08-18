import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        // Fundo semi-transparente (backdrop)
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            {/* Container do Modal */}
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md m-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-titulo">{title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        <X />
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>


    )
}
