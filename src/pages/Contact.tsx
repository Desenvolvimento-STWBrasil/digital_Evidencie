import { useState, type FormEvent } from "react"

function Contact() {

    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        // Lógica de envio para uma API ou serviço de email (ex: Formspree, Netlify Forms)
        console.log('Formulario de contato enviado');
        setIsSubmitted(true)
    }

    // Se o formulário foi enviado, mostra uma mensagem de sucesso.
    if (isSubmitted) {
        return (
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 max-w-2xl text-center bg-gray-50 p-12 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-titulo">Mensagem Enviada!</h1>
                    <p className="mt-4 text-texto">
                        Obrigado por entrar em contato. Responderemos o mais breve possível.
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full bg-white py-12">
            <div className="container mx-auto md:px-6 max-w-2xl">
                <h1 className="text-4xl font-bold text-center text-titulo mb-2">
                    Entre em Contato
                </h1>
                <p className="text-center text-lg text-texto mb-10">
                    Tem alguma dúvida ou sugestão? Preencha o formulário abaixo.
                </p>
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-texto mb-2 font-semibold text-start">Seu Nome</label>
                        <input type="text" id="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-texto mb-2 font-semibold text-start">E-mail</label>
                        <input type="text" id="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-texto mb-2 font-semibold text-start">Sua Mensagem</label>
                        <textarea id="message" rows={6} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-principal text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div >
    )
}

export default Contact