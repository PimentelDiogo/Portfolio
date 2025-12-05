"use client"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '@data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-700 hover:-translate-y-[3px] hover:shadow-2xl hover:ring-1 hover:ring-purple-500/20 hover:brightness-105"
    >
      <div className="relative h-80">
        <Image src={project.image} alt={project.title} fill sizes="(max-width: 900px) 100vw, 600px" className="w-full h-full object-cover object-top" />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-purple-500/30 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map(t => (
            <span key={t} className="px-3 py-1 bg-purple-900 text-purple-200 text-sm rounded-full">{t}</span>
          ))}
        </div>
        <Link href={`/projects/${project.id}`} className="inline-block text-purple-400 hover:text-purple-300 font-semibold transition-colors">Ver Estudo de Caso →</Link>
      </div>
    </motion.article>
  )
}
