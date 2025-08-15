import { useState, type FormEvent } from "react";

function ChangePasswordForm() {

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (newPassword !== confirmPassword) {
      setError("A nova senha e a confirmação não coincidem")
      return
    }
    // Lógica para enviar para a API
    console.log("Senha alterada!");
    setSuccess('Senha alterada com sucesso!')

    // Limpa os campos
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg">
      <h2 className="text-2xl font-semibold text-titulo mb-6">Alterar Senha</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}
      <div className="space-y-4">
        <div>
          <label className="block text-texto mb-1 font-semibold">Senha Atual</label>
          <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-texto mb-1 font-semibold">Nova Senha</label>
          <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-texto mb-1 font-semibold">Confirmar Senha</label>
          <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border rounded-lg" required />
        </div>
      </div>
      <button type="submit" className="mt-6 bg-principal text-white py-4 px-8 rounded-lg font-semibold hover:bg-opacity-90">
        Alterar Senha
      </button>
    </form>
  )
}

export default ChangePasswordForm