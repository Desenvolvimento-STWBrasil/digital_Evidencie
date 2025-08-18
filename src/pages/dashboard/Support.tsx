import { useState, type FormEvent, } from "react"

function Support() {

    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        // Lógica para enviar o ticket para a API viria aqui
        console.log({ subject, message });

        setIsSubmitted(true)
        setSubject('')
        setMessage('')
    }

    if (isSubmitted) {
        return (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-titulo">Obrigado!</h1>
                <p className="mt-4 text-texto">
                    Seu chamado foi aberto com sucesso. Nossa equipe de suporte entrará em contato em breve.
                </p>
                <button
                    onClick={() => setIsSubmitted(false)} className="mt-6 bg-principal text-white py-2 px-6 rounded-lg font-semibold hover:bg-opacity-90">
                    Abrir novo chamado
                </button>
            </div>
        )
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-titulo">Abrir um Chamado</h1>
            <p className="mt-2 text-texto">
                Precisa de ajuda? Descreva seu problema abaixo e retornaremos o mais rápido possível.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-texto mb-2 font-semibold text-left">Assunto</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-texto mb-2 font-semibold text-left">Mensagem</label>
                    <textarea
                        id="message"
                        rows={6}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="flex md:w-fit w-full bg-principal text-white py-4 px-8 rounded-lg font-semibold hover:bg-opacity-90 transition-all text-center"
                >
                    Enviar Chamado
                </button>
            </form>
        </div>
    )
}

export default Support