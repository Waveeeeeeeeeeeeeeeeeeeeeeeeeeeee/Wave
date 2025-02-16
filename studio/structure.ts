import {StructureResolver} from 'sanity/structure'

const customTitles = {
  project: {singular: 'Новый проект', plural: 'Новые проекты'},
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Портфолио')
    .items([
      ...S.documentTypeListItems().map((item) => {
        if (item.getTitle() === 'Проекты') {
          return item.child(
            S.documentTypeList('projects') // Тут мы создаем список типа документа
              .title(customTitles['project'].plural)
              .child(
                S.document()
                  .schemaType('projects') // Указываем тип документа
                  .title(customTitles['project'].plural)
                  .views([S.view.form()]), // Кастомизация представления документа
              ),
          )
        }
        return item // Возвращаем остальные элементы без изменений
      }),
    ])
