import Layout from '@components/Layout'
import ProjectCard from '@components/ProjectCard'
import { getProjects } from '@data/projects'
import Link from 'next/link'

export default function HomePage() {
  const projects = getProjects()
  return (
    <Layout>
      <section className="py-10">
        <h1 className="text-5xl font-bold mb-2">Projetos: Estudos de Caso Mobile</h1>
        <p className="text-gray-400">Diogo Pimentel • Desenvolvedor Mobile</p>
        <div className="mt-8">
          <Link href="/projects" className="inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white shadow-lg hover:shadow-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400">Ver Projetos</Link>
        </div>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['React Native','Flutter','SwiftUI','Kotlin','TypeScript'].map(s => (
            <span key={s} className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-200">{s}</span>
          ))}
        </div>
      </section>
      <section className="py-10">
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-slate-200 to-purple-300 bg-clip-text text-transparent">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
