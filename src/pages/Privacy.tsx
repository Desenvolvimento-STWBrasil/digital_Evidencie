import type { ReactNode } from "react"

function PrivacyPage() {
    // Componente reutilizável para o layout de páginas de texto
    <StaticPageLayout title='Politica e Privacidade'>
        <p className="mb-4">
            Bem-vindo ao MeuSoftware. Ao acessar ou usar nosso site e serviços, você concorda em cumprir e se vincular aos seguintes termos e condições de uso. Por favor, leia-os com atenção.
        </p>

        <h2 className="text-2xl font-semibold text-titulo mt-6 mb-3">1. Uso da Licença</h2>
        <p className="mb-4">
            A versão paga do software concede a você uma licença revogável, não exclusiva e intransferível para usar o software estritamente de acordo com estes termos. O uso da versão OpenSource é regido pela licença MIT.
        </p>

        <h2 className="text-2xl font-semibold text-titulo mt-6 mb-3">2. Contas de Usuário</h2>
        <p className="mb-4">
            Você é responsável por manter a confidencialidade de sua conta e senha e por restringir o acesso ao seu computador. Você concorda em aceitar a responsabilidade por todas as atividades que ocorram sob sua conta ou senha.
        </p>

        {/* ... continue adicionando o resto do seu texto jurídico aqui ... */}

        <p className="mt-8 text-sm text-gray-500">
            Última atualização: 07 de agosto de 2025.
        </p>
    </StaticPageLayout>
    return (
        <div>Terms</div>
    )
}

// Pequeno componente auxiliar para evitar repetição de código
// Você pode colocar isso no final do arquivo ou em um arquivo separado.
function StaticPageLayout({ title, children }: { title: string, children: ReactNode }) {
    return (
        <div className=" bg-white py-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-center text-titulo mb-10">{title}</h1>
                <div className="prose lg:prose-xl max-w-full text-texto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage