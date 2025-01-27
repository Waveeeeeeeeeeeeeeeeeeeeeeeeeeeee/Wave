import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Портфолио')
    .items([...S.documentTypeListItems()])
