'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const cursos = [
  {
    categoria: 'Especializados',
    cursos: [
      {
        titulo: 'Atualização MOPP - Produtos Perigosos',
        preco: 'R$169,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-1.webp',
      },
      {
        titulo: 'Transporte Coletivo de Passageiros',
        preco: 'R$169,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-2.webp',
      },
      {
        titulo: 'Transporte de Cargas Indivisíveis',
        preco: 'R$229,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-5.webp',
      },
      {
        titulo: 'Veículos de Emergência',
        preco: 'R$229,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-6.webp',
      },
    ],
  },
  {
    categoria: 'Reciclagem',
    cursos: [
      {
        titulo: 'Reciclagem para Condutores',
        preco: 'R$99,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-3.webp',
      },
      {
        titulo: 'Atualização para Transporte Escolar',
        preco: 'R$169,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-7.webp',
      },
    ],
  },
  {
    categoria: 'Cursos Livres',
    cursos: [
      {
        titulo: 'Direção Defensiva',
        preco: 'R$69,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-4.webp',
      },
      {
        titulo: 'Primeiros Socorros',
        preco: 'R$69,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-8.webp',
      },
      {
        titulo: 'Trabalho em Altura',
        preco: 'R$69,00',
        imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-9.webp',
      },
    ],
  },
]

export default function Cursos() {
  const [filtro, setFiltro] = React.useState('')

  const categorias = ['Todos', 'Cursos Livres', 'Especializados', 'Reciclagem']

  const cursosFiltrados =
    filtro === 'Todos' || !filtro
      ? cursos.flatMap((categoria) => categoria.cursos)
      : cursos
          .filter((categoria) => categoria.categoria === filtro)
          .flatMap((categoria) => categoria.cursos)

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white h-full">
      <section className="py-12 bg-green-200">
        <div className="container mx-auto px-6 text-center h-full">
          <h1 className="text-4xl font-bold text-green-700">Para trânsito e transporte</h1>
          <p className="mt-4 text-lg text-gray-700">
            Nossos cursos são desenvolvidos por profissionais especializados na área de trânsito,
            oferecendo vivência prática para o ambiente de aprendizado.
          </p>
        </div>
      </section>

      <section className="py-12 bg-blue-100 w-full flex justify-center">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 md:mx-14">
            {categorias.map((tipo, index) => (
              <button
                key={index}
                onClick={() => setFiltro(tipo === 'Todos' ? '' : tipo)}
                className={`bg-white text-blue-900 font-semibold rounded-lg py-2 px-4 shadow hover:bg-blue-200 ${
                  filtro === tipo ? 'bg-blue-200' : ''
                }`}
              >
                {tipo}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
            {cursosFiltrados.map((curso, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full max-w-xs"
              >
                <Image
                  src={curso.imagem}
                  alt={curso.titulo}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover w-full h-48"
                  unoptimized
                />
                <h3 className="text-lg font-semibold text-gray-800 mt-4">{curso.titulo}</h3>
                <p className="text-green-700 font-bold mt-2">{curso.preco}</p>
                <p className="text-sm text-gray-500 mt-1">No boleto ou PIX</p>
                <Link
                  href="/cursos/reciclagem/curso-de-reciclagem-detran/"
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                >
                  Comece Já
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
