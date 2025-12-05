import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="py-6 px-8 flex justify-end items-center">
      <nav className="space-x-8 text-lg">
        <Link href="/projects" prefetch={false} className="text-gray-200 hover:text-purple-400 transition-colors">Projetos</Link>
        <Link href="/about" prefetch={false} className="text-gray-200 hover:text-purple-400 transition-colors">Sobre</Link>
        <Link href="#contato" prefetch={false} className="text-gray-200 hover:text-purple-400 transition-colors">Contato</Link>
      </nav>
    </header>
  )
}
