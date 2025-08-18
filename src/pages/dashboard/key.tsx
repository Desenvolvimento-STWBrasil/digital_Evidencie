import { Check, Copy } from "lucide-react";
import { useState } from "react"

function Key() {
    // A chave de licença viria da API, mas vamos simular aqui
    const licenseKey = "B4C7-A1D9-E8F2-G6H3-I5J0"

    const [copied, setCopied] = useState(false)

    function handleCopy() {
        navigator.clipboard.writeText(licenseKey);
        setCopied(true)

        // Volta para o estado inicial após 2 segundos
        setTimeout(() => {
            setCopied(false)
        }, 2000);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-titulo">
                Minha Chave de Licença
            </h1>
            <p className="mt-2 text-texto">
                Use a chave abaixo para ativar a versão paga do seu software.
            </p>

            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold text-titulo"> Sua Chave:</h2>

                {/* Container da chave com o botão de copiar */}
                <div className="mt-2 flex items-center justify-between bg-gray-100 p-4 rounded-md">
                    <code className="text-principal font-mono text-lg tracking-widest">
                        {licenseKey}
                    </code>
                    <button onClick={handleCopy} className="p-2 rounded-md hover:bg-gray-200 transition-colors" title={copied ? "Copiado!" : "Copiar"}>
                        {copied ? (
                            <Check className="text-green-500" />
                        ) : (
                            <Copy className="text-texto" />
                        )}
                    </button>
                </div>
            </div>
            <div className="mt-4">
                {/* Aqui você pode adicionar links para download do software, etc. */}
                <a href="#" className="flex justify-center md:w-fit w-full bg-principal text-white py-4 px-8 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Baixar Software
                </a>
            </div>
        </div>
    )
}

export default Key