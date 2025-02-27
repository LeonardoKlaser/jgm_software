import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JGM Acessoria
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

