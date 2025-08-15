import { DownloadIcon, TerminalSquare } from 'lucide-react'

function Download() {
    return (
        <div className='bg-white py-20'>
            <div className='container mx-auto px-6 max-w-4xl text-center'>
                <div className='bg-gray-50 rounded-lg shadow-lg p-10'>
                    <h1 className='text-4xl md:text-5xl font-bold text-titulo'>
                        Download da Versão OpenSource
                    </h1>
                    <p className='mt-4 text-lg text-texto max-w-2xl mx-auto'>
                        Comece a usar o MeuSoftware hoje mesmo, de graça. Perfeito para estudantes, desenvolvedores e pequenos projetos.
                    </p>
                    <div className='mt-8'>
                        <a
                            href="/path/para/seu/arquivo.zip" // Link para o arquivo de download real
                            download
                            className="inline-flex items-center justify-center bg-secundaria text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-opacity-90 transition-all shadow-lg"
                        >
                            <DownloadIcon className='mr-3' />Baixar Agora
                        </a>
                        <p className='mt-4 text-sm text-gray-500'>Versão 1.2.3 para Windows, Mac & Linux</p>
                    </div>

                    <div className='mt-12 text-left border-t pt-8'>
                        <h2 className='text-2xl font-semibold text-titulo flex items-center'>
                            <TerminalSquare className='mr-2' />O que está incluído?
                        </h2>

                        <ul className='list-disc list-inside mt-4 space-y-2 text-texto'>
                            <li>Funcionalidades essenciais de produtividade.</li>
                            <li>Código-fonte completo disponível no GitHub.</li>
                            <li>Comunidade de suporte ativa.</li>
                            <li>Livre para uso pessoal e comercial, sob a licença MIT.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Download