import * as React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface CursoProps {
  params: {
    slug: string
  }
}

export default function CursoSlug({ params }: CursoProps) {
  const { slug } = params

  const curso = {
    titulo: 'Reciclagem para Condutores',
    preco: 'R$99,00',
    imagem: 'https://www.soucondutor.com.br/wp-content/uploads/2024/11/course-detail.webp',
    modulos: '4 Módulos 100% on-line',
    duracao: '30 Horas / Aula',
    descricao:
      'O Curso de Reciclagem para Condutores foi desenvolvido para ajudar você a retornar às vias com mais consciência, conhecimento e responsabilidade.',
    objetivos: [
      'Revisar e atualizar conhecimentos sobre leis e normas de trânsito.',
      'Preparar o condutor para aplicar primeiros socorros em situações de emergência.',
      'Desenvolver uma nova perspectiva sobre o papel do condutor na sociedade.',
    ],
    requisitos: ['Estar com a Carteira Nacional de Habilitação (CNH) suspensa.'],
    passos: [
      'Inscrição no Curso: Complete o processo de inscrição pelo nosso portal.',
      'Participação no Curso: Acesse o ambiente virtual de ensino.',
      'Emissão do Certificado: Ao concluir, seu certificado será gerado automaticamente.',
      'Impressão do Certificado: Solicite a impressão se necessário.',
    ],
    observacoes: [
      'É necessário fazer validação facial no início e fim de cada acesso.',
      'O curso é autorizado pelo SENATRAN, garantindo validade nacional.',
      'O material está disponível 24 horas por dia.',
    ],
    grade: [
      'Módulo 1: Legislação de Trânsito',
      'Módulo 2: Direção Defensiva',
      'Módulo 3: Primeiros Socorros',
      'Módulo 4: Relacionamento Interpessoal',
    ],
  }

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <section className="py-12 bg-green-500 text-center">
        <h1 className="text-4xl font-bold text-white">{curso.titulo}</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Image
            src={curso.imagem}
            alt={curso.titulo}
            width={500}
            height={300}
            className="rounded-lg object-cover"
            unoptimized
          />
          <div className="bg-white shadow-lg rounded-lg p-6 text-left">
            <p className="text-xl font-bold text-green-600">Valor do Curso:</p>
            <p className="text-3xl font-extrabold text-blue-600 mt-2">{curso.preco}</p>
            <p className="mt-4">No boleto ou PIX</p>
            <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              Inscreva-se
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 container mx-auto px-6">
        <h2 className="text-2xl font-bold text-green-700">Sobre o Curso</h2>
        <p className="mt-4 text-gray-700">{curso.descricao}</p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-700">Objetivo</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {curso.objetivos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-700">Pré-requisitos</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {curso.requisitos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-700">Passo a passo</h3>
          <ol className="mt-4 list-decimal list-inside text-gray-700">
            {curso.passos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-700">Observações</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {curso.observacoes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-green-700">Grade do Curso</h3>
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {curso.grade.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
