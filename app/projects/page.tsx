import Layout from '@components/Layout'
import { getProjects } from '@data/projects'
import ProjectCard from '@components/ProjectCard'

export default function ProjectsIndexPage() {
  const projects = getProjects()
  return (
    <Layout>
      <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-slate-200 to-purple-300 bg-clip-text text-transparent">Projetos</h1>
      <p className="text-xl text-gray-400 mb-12">Estudos de Caso Mobile & Web</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </Layout>
  )
}
