import { AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
    return (
        <div className='flex flex-col items-center justify-center text-center py-20'>
            <AlertTriangle className='w-24 h-24 text-aviso mb-6' />
            <h1 className='text-6xl font-bold text-titulo'>404</h1>
            <h2 className='text-3xl font-semibold text-titulo mt-4'>
                Oops! Página Não Encontrada
            </h2>
            <p className='text-texto max-w-md mt-4'>
                A página que você está procurando não existe, foi movida ou está temporariamente indisponível.
            </p>
            <Link to='/' className='mt-8 bg-principal text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all'>
                Voltar para a Home
            </Link>
        </div>
    )
}

export default NotFoundPage