export default {
  name: 'project',
  title: 'Проект',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название проекта',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
    },
    {
      name: 'portrait',
      title: 'Portrait',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'gallery',
      title: 'Галерея изображений',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'link',
      title: 'Ссылка на проект',
      type: 'url',
    },
    {
      name: 'technologies',
      title: 'Используемые технологии',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
    },
  ],
}
