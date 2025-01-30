import { CollectionConfig } from 'payload/types'

export const Courses: CollectionConfig = {
  slug: 'courses',
  labels: {
    singular: 'Course',
    plural: 'Courses',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Especializados',
          value: 'especializados',
        },
        {
          label: 'Reciclagem',
          value: 'reciclagem',
        },
        {
          label: 'Cursos Livres',
          value: 'cursos-livres',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      label: 'Price',
    },
    {
      name: 'publishedAt',
      type: 'date',
      label: 'Published At',
    },
  ],
}

export default Courses
