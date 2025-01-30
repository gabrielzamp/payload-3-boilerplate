import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-green-200 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2 flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-extrabold text-green-700 ">
              Cursos online de <span className="text-green-800">trânsito e transporte</span>
            </h1>
            <p className="text-lg text-gray-700">
              A plataforma Sou Condutor oferece cursos 100% online, em um ambiente seguro e de fácil
              aprendizado.
            </p>
            <Link
              href="/cursos"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg self-start"
            >
              Conheça Nossos Cursos
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="https://images.pexels.com/photos/7144186/pexels-photo-7144186.jpeg"
              alt="Imagem de Condutor"
              width={500}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { title: 'Estude agora, pague depois', color: 'bg-blue-50' },
            { title: 'Cursos homologados pelo SENATRAN', color: 'bg-red-50' },
            { title: 'Ganhe tempo resolvendo online', color: 'bg-orange-50' },
          ].map((benefit, index) => (
            <div key={index} className={`p-6 ${benefit.color} rounded-lg shadow-sm`}>
              <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
              <p className="mt-2 text-sm text-gray-600">
                Facilidade e flexibilidade ao seu alcance.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses by Category */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Cursos por Categoria</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Especializados', 'Reciclagem', 'Cursos Livres'].map((categoria, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center">
                <Image
                  src={`/images/category-${index + 1}.jpg`}
                  alt={categoria}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full"
                />
                <h3 className="text-xl font-semibold text-green-700 mt-4">{categoria}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Cursos para diferentes necessidades de trânsito e transporte.
                </p>
                <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Ver Cursos
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Finder */}
      <section className="py-12 bg-blue-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Encontre seu curso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Transporte de Cargas', 'Coletivo de Passageiros', 'Reciclagem para Condutores'].map(
              (curso, index) => (
                <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800">{curso}</h3>
                  <p className="mt-2 text-sm text-gray-600">Curso com certificação e aprovação.</p>
                  <p className="mt-4 font-bold text-green-700">
                    R$ {index === 2 ? '99,00' : '229,00'}
                  </p>
                  <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                    Comece Já
                  </Button>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Blog do Condutor</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Curso MOPP', 'Notícias de Trânsito', 'Direção Defensiva'].map((titulo, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800">{titulo}</h3>
                <p className="mt-2 text-sm text-gray-600">Saiba mais sobre o tema...</p>
                <Link href="#">
                  <p className="text-green-600 mt-4 inline-block">Leia mais</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </main>
  )
}
