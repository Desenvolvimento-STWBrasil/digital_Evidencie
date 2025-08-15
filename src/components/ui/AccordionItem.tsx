// Definimos as "props" (propriedades) que nosso componente aceitará:
import { ChevronDown } from "lucide-react";
import type React from "react"
import { useState } from "react";

// um título (a pergunta) e o conteúdo (a resposta).
interface AccordionItemProps {
    title: string,
    children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {

    // Estado para controlar se este item específico do acordeão está aberto ou fechado.
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h3 className="text-lg font-semibold text-titulo">{title}</h3>
                {/* A seta gira 90 graus quando o item está aberto. - 'transition-transform' e 'duration-300' animam a rotação.*/}
                <ChevronDown
                    className={`w-6 text-principal transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>

            {/* O conteúdo só é renderizado se 'isOpen' for verdadeiro. */}
            {isOpen && (
                <div className="mt-4 text-texto">
                    {children}
                </div>
            )}
        </div>
    )
}

export default AccordionItem