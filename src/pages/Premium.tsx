import { Check } from "lucide-react"

// Dados dos planos (no futuro, isso poderia vir de uma API)
const plans = [
    {
        name: "Básico",
        price: "R$ 29",
        billing: "/mês",
        features: ["Recurso A", "Recurso B", "Suporte via E-mail"],
        isFeatured: false,
    },
    {
        name: "Profissional",
        price: "R$ 59",
        billing: "/mês",
        features: ["Tudo do Básico", "Recurso C Avançado", "Recurso D", "Suporte Prioritário"],
        isFeatured: true, // Para destacar este plano
    },
    {
        name: "Enterprise",
        price: "Contato",
        billing: "",
        features: ["Tudo do Profissional", "Dashboard de Admin", "Integrações Customizadas", "Gerente de Conta Dedicado"],
        isFeatured: false,
    }
]

function Premium() {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl text-texto max-w-2xl mx-auto">
                        Escolha o Plano Perfeito para Você
                    </h1>
                    <p className="mt-4 text-lg text-texto max-w-2xl mx-auto">
                        Desbloqueie todo o potencial do MeuSoftware com nossos planos premium.
                    </p>
                </div>

                {/* Grid de Planos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            // Adiciona uma borda e sombra diferentes se o plano for 'featured'
                            className={`bg-white rounded-lg shadow-md p-8 flex flex-col ${plan.isFeatured ? 'border-2 border-principal transform md:scale-105' : 'border'}`}>
                            {plan.isFeatured && (
                                <span className="bg-principal text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">MAIS POPULAR</span>
                            )}
                            <h2 className="text-2xl font-bold text-titulo">{plan.name}</h2>
                            <p className="mt-4">
                                <span className="text-4xl font-bold text-principal">{plan.price}</span>
                                <span className="text-texto">{plan.billing}</span>
                            </p>

                            <ul className="mt-6 space-y-3 text-texto flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center">
                                        <Check className="w-5 h-5 text-green-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full mt-8 px-4 py-4 rounded-lg font-semibold transition-colors ${plan.isFeatured ? 'bg-principal text-white hover:bg-opacity-90' : 'bg-gray-200 text-texto hover:bg-gray-300'}`}>
                                {plan.price === 'Contato' ? 'Entrar em Contato' : 'Assinar Agora'}
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Premium