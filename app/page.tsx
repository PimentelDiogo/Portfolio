import Layout from '@components/Layout'
import ProjectCard from '@components/ProjectCard'
import { getProjects } from '@data/projects'
import Link from 'next/link'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function HomePage() {
  const projects = getProjects()
  return (
    <Layout>
      <section className="py-10 flex flex-col items-center md:items-start md:flex-row gap-6">
        <div className="flex flex-col items-center flex-shrink-0">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl mb-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${BASE_PATH}/images/avatar.png`} alt="Diogo Pimentel" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-5xl font-bold mb-2">Projetos: Estudos de Caso Mobile</h1>
          <p className="text-gray-400">Diogo Pimentel • Desenvolvedor Mobile</p>
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
            <Link href="/projects" className="inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400">Ver Projetos</Link>
            <a href="https://www.linkedin.com/in/diogo-pimentel-24a4b8160/" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg hover:shadow-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['React Native', 'Flutter', 'SwiftUI', 'Kotlin', 'TypeScript', 'Ionic'].map(s => (
            <span key={s} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-200">{s}</span>
          ))}
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#8AA8BF] to-[#0D3B66] bg-clip-text text-transparent">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
