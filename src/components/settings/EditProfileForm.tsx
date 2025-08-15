import { useState, type FormEvent } from "react";

function EditProfileForm() {

  // Dados simulados que viriam da API
  const currentUser = { name: "Rodrigo", email: "rodrigo@email.com", phone: "(11) 99999-9999" };

  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [phone, setPhone] = useState(currentUser.phone);
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    // Lógica para enviar os dados atualizados para a API
    console.log("Perfil atualizado:", { name, email, phone });
    setMessage('Perfil atualizado com sucesso!')
    setTimeout(() => setMessage(''), 3000)
  }

  return (

    <form onSubmit={handleSubmit} className="max-w-lg">
      <h2 className="text-2xl font-semibold text-titulo mb-6">Seus Dados</h2>
      {message && <p className="text-gray-600 mb-4">{message}</p>}
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-texto mb-1 font-semibold">Nome</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" />
        </div>
        <div>
          <label htmlFor="email" className="block text-texto mb-1 font-semibold">E-mail</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-texto mb-1 font-semibold">Celular</label>
          <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-principal" />
        </div>
      </div>
      <button type="submit" className="mt-6 bg-principal text-white py-4 px-8 rounded-lg font-semibold hover:bg-opacity-90 transition-all">Salvar Alterações</button>
    </form>
  )
}

export default EditProfileForm