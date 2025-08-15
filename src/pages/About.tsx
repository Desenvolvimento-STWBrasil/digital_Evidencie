function About() {
    return (
        <div className="bg-white py-12 h-screen">
            <div className="container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-center text-titulo mb-10">
                    Nossa Missão é Simplificar o Complexo
                </h1>
                <div className="prose lg:prose-xl max-w-full text-texto text-justify">
                    <p>
                        O MeuSoftware nasceu da crença de que as ferramentas mais poderosas devem ser também as mais intuitivas. Em um mundo cada vez mais acelerado, a complexidade não pode ser uma barreira para a produtividade. Nossa equipe é formada por desenvolvedores, designers e especialistas apaixonados por criar soluções que não apenas funcionam, mas que encantam e capacitam nossos usuários.
                    </p>
                    <p>
                        Desde o início, focamos em um design limpo, funcionalidades que realmente importam e um compromisso com o código aberto, acreditando no poder da comunidade para construir um software melhor para todos.
                    </p>
                    {/* Adicione mais conteúdo sobre a equipe, a história, etc. */}
                </div>
            </div>
        </div>
    )
}

export default About