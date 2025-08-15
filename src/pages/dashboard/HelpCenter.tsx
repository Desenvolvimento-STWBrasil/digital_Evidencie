import { BookOpen, Search } from 'lucide-react'

function HelpCenter() {

    // Dados simulados de categorias e artigos 
    const categorias = [
        { name: "Primeiros Passos", articles: ["Criando seu primeiro projeto", "Configurando sua conta"] },
        { name: "Recursos Avançados", articles: ["Usando a automação", "Gerando relatórios"] },
        { name: "Faturamento e Assinatura", articles: ["Como atualizar seu plano", "Entendendo sua fatura"] },
    ]

    return (
        <div>
            <h1 className='text-3xl font-bold text-titulo'>Central de Ajuda</h1>
            <p className='mt-2 text-texto'>
                Encontre guias, tutoriais e respostas para suas perguntas.
            </p>

            {/* Barra de Busca (Apenas visual por enquanto) */}
            <div className='relative mb-10'>
                <input type="search" placeholder='Como podemos ajudar?' className='w-full p-4 pl-12 border rounded-lg focus:right-2 focus:ring-principal' />
                <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400' />
            </div>

            {/* Grid de Categorias */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {categorias.map((categoria, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'>
                        <h2 className='text-xl font-semibold text-principal flex items-center'>
                            <BookOpen className='mr-2' />{categoria.name}
                        </h2>
                        <ul className='mt-4 space-y-2'>
                            {categoria.articles.map((article, aIndex) => (
                                <li key={aIndex}>
                                    <a href="#" className='text-texto hover:underline hover:text-principal'>
                                        {article}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HelpCenter