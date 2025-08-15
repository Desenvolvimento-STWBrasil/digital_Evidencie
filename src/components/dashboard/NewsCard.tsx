// Definimos a "forma" dos dados que este card espera receber
interface NewsCardProps {
    category: 'Nova Atualização' | 'Tendência de Mercado' | 'Dica Rápida';
    title: string;
    date: string;
    summary: string;
}

function NewsCard({ category, title, date, summary }: NewsCardProps) {

    // Função para definir a cor do "badge" da categoria
    const getCategoryStyle = () => {
        switch (category) {
            case 'Nova Atualização':
                return 'bg-principal text-white'; // Nossa cor principal
            case 'Tendência de Mercado':
                return 'bg-secundaria text-white'; // Nossa cor secundária
            case 'Dica Rápida':
                return 'bg-aviso text-titulo'; // Nossa cor de aviso
            default:
                return 'bg-gray-200 text-gray-800';
        }
    }

    return (
        // 'flex-col' para que o card se estique verticalmente se o conteúdo for diferente
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow flex-col">
            {/* Imagem do Card (Placeholder) - Opcional */}
            {/* <img src="https://via.placeholder.com/400x200" alt={title} className="rounded-t-lg" /> */}

            <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${getCategoryStyle()}`}>
                        {category}
                    </span>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>

                <h3 className="text-xl font-bold text-titulo mt-2 flex-grow">
                    {title}
                </h3>

                <p className="text-texto mt-2 text-sm">
                    {summary}
                </p>
                <a href="#" className="text-principal font-semibold mt-4 self-start hover:underline">
                    Leia Mais →
                </a>
            </div>
        </div>
    )
}

export default NewsCard