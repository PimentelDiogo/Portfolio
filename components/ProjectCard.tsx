"use client"
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '@data/projects'

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export default function ProjectCard({ project }: { project: Project }) {
  // Collect preview images: up to 2 from gallery, fallback to cover
  const previewImages = project.gallery
    ? project.gallery.filter(g => g.type === 'image').slice(0, 2).map(g => g.src)
    : [project.image]

  const [imgIndex, setImgIndex] = useState(0)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border border-gray-700 hover:-translate-y-[3px] hover:shadow-2xl hover:ring-1 hover:ring-purple-500/20 hover:brightness-105"
    >
      {/* Card image area with mini carousel */}
      <div className="relative h-80 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}${previewImages[imgIndex]}`}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-opacity duration-300"
        />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-tr from-purple-500/30 via-transparent to-transparent" />

        {/* Dot navigation — only shown when there are multiple preview images */}
        {previewImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
            {previewImages.map((_, i) => (
              <button
                key={i}
                onClick={e => { e.preventDefault(); setImgIndex(i) }}
                aria-label={`Ver imagem ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${i === imgIndex ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/70'
                  }`}
              />
            ))}
          </div>
        )}
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
