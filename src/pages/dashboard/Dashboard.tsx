import NewsCard from '../../components/dashboard/NewsCard';

function Dashboard() {// 2. Simulação de dados de notícias que viriam de uma API
    const mockNewsData = [
        {
            category: 'Nova Atualização',
            title: 'Versão 2.0 Lançada! Conheça o Novo Módulo de IA',
            date: '14 de agosto, 2025',
            summary: 'Nossa maior atualização do ano está no ar, trazendo um módulo de inteligência artificial para automatizar ainda mais suas tarefas...'
        },
        {
            category: 'Tendência de Mercado',
            title: 'O Futuro do Trabalho Remoto e as Ferramentas de Colaboração',
            date: '10 de agosto, 2025',
            summary: 'Analisamos as principais tendências para 2026 e como o MeuSoftware se encaixa nesse novo cenário de trabalho híbrido...'
        },
        {
            category: 'Dica Rápida',
            title: 'Você Conhecia o Atalho Secreto para Exportar Relatórios?',
            date: '05 de agosto, 2025',
            summary: 'Aprenda a usar a combinação de teclas Ctrl+Shift+E para exportar seus relatórios em PDF com apenas um clique. Economize tempo!'
        },
    ];

    return (
        <div>
            <section className="mt-12">
                <h2 className="text-3xl font-bold text-titulo mb-6">
                    Últimas Notícias e Atualizações
                </h2>

                {/* Grid responsivo para os cards de notícias */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockNewsData.map((newsItem, index) => (
                        <NewsCard
                            key={index}
                            category={newsItem.category as never} // 'as any' para simplificar no nosso exemplo
                            title={newsItem.title}
                            date={newsItem.date}
                            summary={newsItem.summary}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Dashboard