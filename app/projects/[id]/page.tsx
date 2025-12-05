import Layout from '@components/Layout'
import { getProject } from '@data/projects'
import Image from 'next/image'
import Link from 'next/link'

type Params = { params: { id: string } }

export default function ProjectDetailPage({ params }: Params) {
  const project = getProject(params.id)
  if (!project) return <Layout><p className="text-gray-300">Projeto não encontrado</p></Layout>

  return (
    <Layout>
      <section className="py-6">
        <div className="flex items-center gap-6">
          <div className="relative w-20 h-20">
            <Image src={project.image} alt={project.title} fill className="object-cover object-top rounded-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#8AA8BF] to-[#0D3B66] bg-clip-text text-transparent">{project.title}</h1>
            <p className="text-gray-400">{project.subtitle}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map(t => (
                <span key={t} className="px-2.5 py-1 bg-gray-800 border border-gray-700 rounded-full text-xs text-gray-200">{t}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              {project.links.github && (
                <Link className="px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700 transition-colors" href={project.links.github}>GitHub</Link>
              )}
              {project.links.demo && (
                <Link className="px-4 py-2 rounded-xl bg-purple-600 text-white hover:bg-purple-500 shadow-lg hover:shadow-xl transition-colors" href={project.links.demo}>Demo</Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-rose-500"/>O Desafio</h2>
            <p className="text-gray-300">{project.fullDescription.challenge}</p>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2"><span className="inline-block w-2 h-2 rounded-full bg-purple-500"/>A Solução</h2>
            <p className="text-gray-300">{project.fullDescription.solution}</p>
          </div>
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-xl font-semibold mb-4">Galeria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-4 flex items-center justify-center">
            <div className="rounded-[32px] bg-gray-800 ring-1 ring-gray-700 p-2">
              <div className="relative w-[220px] h-[440px]">
                <Image src={project.image} alt="mockup" fill className="object-cover rounded-[28px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
