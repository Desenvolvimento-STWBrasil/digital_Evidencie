import { Download, Instagram, Linkedin, ShoppingCart, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {

  /*   const mainFeatures = [
      'Recruso Incrivel 1',
      'Automoção Inteligente',
      'Relatórios Detalhados',
      'Integração com Ferramentas Populares'
    ]; */

  return (
    <div className="font-sans text-texto">
      {/* --- Seção Herói (A primeira impressão) --- */}
      <section className="bg-white md:py-20 p-4 gap-8 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col space-y-6 m-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-titulo leading-tight mb-4">
              Digital Evidence
            </h1>
            <p className="mb-6 text-lg md:text-xl max-w-3xl mx-auto">
              Desenvolvido para quem busca performance, segurança e evolução constante. A versão Premium do Digital Evidence garante acesso às últimas atualizações, novos recursos, integração facilitada e suporte profissional.
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <Link to='/premium' className="w-full flex items-center justify-center bg-principal text-white px-4 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                <ShoppingCart className="mr-2" />
                Adquirir Versão Premium
              </Link>
              <Link to='/download' className="w-full flex items-center justify-center border border-principal text-principal px-4 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all">
                <Download className="mr-2" /> Download OpenSource
              </Link>
            </div>
          </div>
          <div className="bg-principal rounded-lg p-8 flex items-center justify-center">
            <p className="text-white text-2xl"><img src="https://placehold.co/600x400" alt="" /></p>
          </div>
        </div>
      </section>

      {/* --- Seção de Recursos Avançados --- */}
      <section className="md:py-20 py-6 bg-gray-50">
        <div className="container mx-auto md:px-6">
          <div className="text-start mb-6">
            <h2 className="text-3xl md:text-3xl font-bold text-titulo">
              Recursos Avançados
            </h2>
            {/*  <p className="mt-2 text-lg text-texto">
              Explore os recursos que fazem do MeuSoftware a escolha certa.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Imagem ou Placeholder do Software */}
            <div className="bg-[#12273A] text-white rounded-lg p-8">
              <p className="text-sm text-gray-400 mb-1">Recurso</p>
              <h2 className="text-xl font-semibold mb-3">Desbloqueie Todo o Potencial</h2>
              <p className="text-sm text-gray-300 mb-4">
                Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
              </p>
              {/*   <img
                src="/path/to/Frame 15.png" // substitua com o caminho correto da imagem
                alt="Painel tecnológico futurista"
                className="rounded-lg mb-5"
              /> */}
              <div className="rounded-lg my-8 flex justify-center w-full">
                <img className="w-full" src="https://placehold.co/600x400" alt="" />
              </div>
              <Link to='/premium'>
                <button className="w-full border border-principal text-white font-medium px-4 py-4 hover:text-blue-300 rounded-lg transition duration-200">
                  Conheça a Versão Premium
                </button>
              </Link>
            </div>
            <div className="bg-[#12273A] text-white rounded-lg p-8">
              <p className="text-sm text-gray-400 mb-1">Recurso</p>
              <h2 className="text-xl font-semibold mb-3">Desbloqueie Todo o Potencial</h2>
              <p className="text-sm text-gray-300 mb-4">
                Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
              </p>
              {/*   <img
                src="/path/to/Frame 15.png" // substitua com o caminho correto da imagem
                alt="Painel tecnológico futurista"
                className="rounded-lg mb-5"
              /> */}
              <div className="rounded-lg my-8 flex justify-center w-full">
                <img className="w-full" src="https://placehold.co/600x400" alt="" />
              </div>
              <Link to='/premium'>
                <button className="w-full border border-principal text-white font-medium px-4 py-4 hover:text-blue-300 rounded-lg transition duration-200">
                  Conheça a Versão Premium
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <hr className="my-8" />

      {/* --- Seção de Recursos Principais */}
      <section className="md:py-16 bg-gray-50">
        <div className="container mx-auto md:px-6 p-4">
          <div className="text-start mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-titulo">
              Recursos Principais
            </h2>
            {/*  <p className="mt-2 text-lg text-texto">
              Explore os recursos que fazem do MeuSoftware a escolha certa.
            </p> */}
          </div>

          {/* Cards rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            {/* Imagem ou Placeholder do Software */}
            <div className="shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-6 md:items-end">
              <div className="text-texto md:w-1/2">
                <p className="text-sm mb-2 tracking-[.3em]">Recurso</p>
                <h2 className="text-xl font-semibold mb-2">Desbloqueie Todo o Potencial</h2>
                <p className="text-sm md:text-base mb-8">
                  Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
                </p>

                <Link to='/premium'>
                  <button className="w-full border border-principal text-principal font-medium px-4 py-4 hover:text-principalhover rounded-lg transition duration-200">
                    Conheça a Versão Premium
                  </button>
                </Link>
              </div>

              <div className="rounded-lg flex justify-center md:w-1/2">
                <img
                  className="w-full h-auto object-contain"
                  src="https://placehold.co/600x400"
                  alt=""
                />
              </div>
            </div>

            <div className="shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-6 md:items-end">
              <div className="text-texto md:w-1/2">
                <p className="text-sm mb-2 tracking-[.3em]">Recurso</p>
                <h2 className="text-xl font-semibold mb-2">Desbloqueie Todo o Potencial</h2>
                <p className="text-sm md:text-base mb-8">
                  Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
                </p>

                <Link to='/premium'>
                  <button className="w-full border border-principal text-principal font-medium px-4 py-4 hover:text-principalhover rounded-lg transition duration-200">
                    Conheça a Versão Premium
                  </button>
                </Link>
              </div>

              <div className="rounded-lg flex justify-center md:w-1/2">
                <img
                  className="w-full h-auto object-contain"
                  src="https://placehold.co/600x400"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Cards Col */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {/* Imagem ou Placeholder do Software */}
            <div className="shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-6">
              <div className="rounded-lg md:my-8 mx-auto flex flex-col justify-between w-full">
                <div>
                  <p className="text-sm text-texto mb-4 tracking-[.3em]">Recurso</p>
                  <h2 className="text-xl text-texto font-semibold mb-6">Desbloqueie Todo o Potencial</h2>
                  <p className="text-sm text-texto mb-4 md:text-base">
                    Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
                  </p>
                </div>
                <Link to='/premium'>
                  <button className="w-full border border-principal text-principal font-medium px-4 py-4 hover:text-principalhover rounded-lg transition duration-200">
                    Conheça a Versão Premium
                  </button>
                </Link>
              </div>
              <div className="rounded-lg md:my-8 mx-auto flex justify-center w-full">
                <img src="https://placehold.co/600x400" alt="" />
              </div>
            </div>

            <div className="shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-6">
              <div className="rounded-lg md:my-8 mx-auto flex flex-col justify-between w-full">
                <div>
                  <p className="text-sm text-texto mb-4 tracking-[.3em]">Recurso</p>
                  <h2 className="text-xl text-texto font-semibold mb-6">Desbloqueie Todo o Potencial</h2>
                  <p className="text-sm text-texto mb-4 md:text-base">
                    Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
                  </p>
                </div>
                <Link to='/premium'>
                  <button className="w-full border border-principal text-principal font-medium px-4 py-4 hover:text-principalhover rounded-lg transition duration-200">
                    Conheça a Versão Premium
                  </button>
                </Link>
              </div>
              <div className="rounded-lg md:my-8 mx-auto flex justify-center w-full">
                <img src="https://placehold.co/600x400" alt="" />
              </div>
            </div>

            <div className="shadow-md rounded-lg p-8 flex flex-col md:flex-row gap-6">
              <div className="rounded-lg md:my-8 mx-auto flex flex-col justify-between w-full">
                <div>
                  <p className="text-sm text-texto mb-4 tracking-[.3em]">Recurso</p>
                  <h2 className="text-xl text-texto font-semibold mb-6">Desbloqueie Todo o Potencial</h2>
                  <p className="text-sm text-texto mb-4 md:text-base">
                    Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
                  </p>
                </div>
                <button className="w-full border border-principal text-principal font-medium px-4 py-4 hover:text-principalhover rounded-lg transition duration-200">
                  <Link to='/premium'>
                    Conheça a Versão Premium
                  </Link>
                </button>
              </div>
              <div className="rounded-lg md:my-8 mx-auto flex justify-center w-full">
                <img src="https://placehold.co/600x400" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisor */}
      <hr className="my-8" />

      {/* Seção da ferramenta */}
      <div className="md:py-16">
        <div className="shadow-md rounded-lg md:p-16 p-4 flex flex-col md:flex-row gap-1 mt-8 bg-[#E0EAF2]">
          <div className="rounded-lg md:my-8 m-auto flex flex-col w-full justify-center my-6">
            <h2 className="md:text-5xl text-xl text-texto font-semibold md:mb-6 mb-2">Uma ferramenta.</h2>
            <h2 className="md:text-5xl text-xl text-texto font-semibold md:mb-6 mb-2">Muitas possibilidades.</h2>
            <h2 className="md:text-5xl text-xl text-texto font-semibold md:mb-6 mb-2">Experimente agora.</h2>
          </div>
          <div className="rounded-lg md:my-8 mx-auto flex flex-col justify-center w-full md:gap-8 gap-4">
            <div className="flex flex-col md:flex-row md:gap-8 gap-4">
              <div className="w-full h-full rounded-lg p-6 bg-white shadow text-texto">
                <p className="uppercase tracking-[.3em] text-sm">Vamos começar</p>
                <h2 className="font-bold text-base py-4">Descubra o Poder da Ferramenta</h2>
                <p>Instale, configure e comece a explorar todos os recursos com facilidade. Uma experiência pensada para ser simples desde o início.</p>
              </div>
              <div className="w-full h-full rounded-lg p-6 bg-white shadow text-texto">
                <p className="uppercase tracking-[.3em] text-sm">Experimente agora</p>
                <h2 className="font-bold text-base py-4">Uma Ferramenta. Muitas Possibilidades.</h2>
                <p>Descubra o poder da versão Premium e leve sua experiência para o próximo nível. Simples, intuitiva e completa.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-8 gap-4">
              <div className="w-full h-full rounded-lg p-6 bg-white shadow text-texto">
                <p className="uppercase tracking-[.3em] text-sm">Totalmente seu</p>
                <h2 className="font-bold text-base py-4">Adapte ao Seu Fluxo de Trabalho</h2>
                <p> Configure como quiser: temas, atalhos, painéis, modos. A ferramenta se molda a você, não o contrário.</p>
              </div>
              <div className="w-full h-full rounded-lg p-6 bg-white shadow text-texto">
                <p className="uppercase tracking-[.3em] text-sm">Recurso Premium</p>
                <h2 className="font-bold text-base py-4">Desbloqueie Funcionalidades Avançadas</h2>
                <p>Acesse automações, integrações e ferramentas que elevam seu desempenho. Tudo em um só lugar, sempre atualizado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divisor */}
      <hr className="my-8" />

      <div className="shadow-md rounded-lg p-8 flex flex-col justify-between md:flex-row gap-6">
        <div className="rounded-lg md:my-8 mx-auto flex flex-col justify-between w-full md:order-2">
          <div>
            <p className="text-sm text-texto mb-4 tracking-[.3em]">Recurso</p>
            <h2 className="text-xl text-texto font-semibold mb-6">Desbloqueie Todo o Potencial</h2>
            <p className="text-sm text-texto mb-4">
              Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
            </p>
          </div>
          <div className="mt-8 mb-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <Link to='/premium' className="w-full flex items-center justify-center bg-principal text-white px-4 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              <ShoppingCart className="mr-2" />
              Adquirir Versão Premium
            </Link>
            <Link to='/download' className="w-full flex items-center justify-center border border-principal text-principal px-4 py-4 rounded-md font-semibold hover:bg-opacity-90 transition-all">
              <Download className="mr-2" /> Download OpenSource
            </Link>
          </div>
          <div>
            <p className="text-sm text-texto mb-4">
              Acesso a funcionalidades exclusivas que aumentam sua produtividade, otimizam fluxos e desbloqueiam o verdadeiro potencial da ferramenta.
            </p>
          </div>
        </div>
        <div className="rounded-lg md:my-8 mx-auto flex justify-center w-full md:order-1">
          <img src="https://placehold.co/600x400" alt="" />
        </div>
      </div>

      {/* Divisor */}
      <hr className="my-8" />

      {/* Redes Sociais */}
      <div className="w-full flex justify-around my-8">
        <Link to='/#'>
          <Twitter className="mr-2" size={32} />
        </Link>
        <Link to='/#'>
          <Instagram className="mr-2" size={32} />
        </Link>
        <Link to='/#'>
          <Linkedin className="mr-2" size={32} />
        </Link>
      </div>
      {/* Divisor */}
      <hr className="my-8" />

      {/* --- Seção de Tudo o que você precisa --- */}
      {/* <section className="md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-titulo">
              Tudo o que você precisa, em um só lugar
            </h2>
            <p className="mt-2 text-lg text-texto">
              Explore os recursos que fazem do MeuSoftware a escolha certa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
            <div className="bg-principal rounded-lg p-8 flex items-center justify-center">
              <p className="text-white text-2xl"><img src="https://placehold.co/600x400" alt="" /></p>
            </div>
            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                {mainFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-neutro w-6 h-6 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* --- Seção de Chamada para Ação (Call to Action) --- */}
      {/*  <section id="download" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center bg-titulo text-white p-12 rounded-lg">
          <h2 className="text-3xl font-bold">Pronto para Começar?</h2>
          <p className="mt-4 max-w-2xl mx-auto">
            Faça o download da versão OpenSource para experimentar, ou adquira a versão completa para desbloquear todo o potencial.
          </p>
          <div className="mt-8">
            <Link
              to="/comprar"
              className="bg-aviso text-titulo px-10 py-3 rounded-md font-semibold text-lg hover:bg-opacity-90 transition-all"
            >
              Ver Planos e Preços
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Home