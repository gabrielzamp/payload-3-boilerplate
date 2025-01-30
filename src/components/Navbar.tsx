import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-4 text-black">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/quem-somos">Quem Somos</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
        <li>
          <Link href="/area-do-aluno">Área do Aluno</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
