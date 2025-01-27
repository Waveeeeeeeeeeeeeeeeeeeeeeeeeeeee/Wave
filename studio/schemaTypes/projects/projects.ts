export default {
  name: 'projects',
  title: 'Проекты',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название коллекции проектов',
      type: 'string',
    },
    {
      name: 'projectsList',
      title: 'Список проектов',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Дата публикации',
      type: 'datetime',
    },
  ],
}
