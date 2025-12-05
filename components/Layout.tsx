import NavBar from './NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <NavBar />
      <main className="max-w-6xl mx-auto px-8 py-12">{children}</main>
      <footer id="contato" className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-800 text-gray-400">
        <span>Disponível para novos projetos</span>
      </footer>
    </div>
  )
}
