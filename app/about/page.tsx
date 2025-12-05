import Layout from '@components/Layout'

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-8">
        <h1 className="text-3xl font-bold mb-2">Sobre</h1>
        <p className="text-gray-400 mb-6">Desenvolvedor Mobile Sênior focado em UX, performance e arquitetura offline-first.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Perfil</h2>
            <p className="text-gray-300 leading-relaxed">Experiência em apps multiplataforma, coleta de sensores em alta frequência, sincronização resiliente e design de interfaces com microinterações.</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Interesses</h2>
            <p className="text-gray-300 leading-relaxed">UX de alto nível, performance, acessibilidade, observabilidade, CI/CD e qualidade contínua.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
