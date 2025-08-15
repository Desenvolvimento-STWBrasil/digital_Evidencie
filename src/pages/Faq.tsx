import AccordionItem from "../components/ui/AccordionItem"

function FaqPage() {

    const faqData = [
        {
            question: "Como funciona a versão OpenSource?",
            answer: "A versão OpenSource inclui todos os recursos essenciais para uso pessoal e em pequenos projetos. Ela não possui alguns recursos avançados e o suporte prioritário que estão disponíveis na versão paga."
        },
        {
            question: "Posso cancelar minha assinatura a qualquer momento?",
            answer: "Sim, você pode cancelar sua assinatura quando quiser através do seu painel de controle. Você manterá o acesso aos recursos pagos até o final do seu ciclo de faturamento atual."
        },
        {
            question: "Quais são as formas de pagamento aceitas?",
            answer: "Aceitamos os principais cartões de crédito (Visa, MasterCard, American Express) e pagamentos via PayPal."
        },
        {
            question: "Como obtenho minha chave de licença após a compra?",
            answer: "Imediatamente após a confirmação do pagamento, sua chave de licença estará disponível na sua Dashboard, na seção 'Minha Chave'."
        }
    ]

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto md:px-6 max-w-4xl">
                <h1 className="text-4xl font-bold text-center text-titulo mb-2">
                    Perguntas Frequentes
                </h1>
                <p className="text-center text-lg text-texto mb-10">
                    Encontre aqui as respostas para as dúvidas mais comuns.
                </p>
                <div className="bg-white rounded-lg shadow-md p-6">
                    {faqData.map((item, index) => (
                        <AccordionItem key={index} title={item.question}>
                            <p className="text-start">{item.answer}</p>
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FaqPage