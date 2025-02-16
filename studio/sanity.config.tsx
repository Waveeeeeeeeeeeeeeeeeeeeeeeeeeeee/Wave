import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {ruKZLocale} from '@sanity/locale-ru-kz'

export default defineConfig({
  name: 'default',
  title: 'Wave',

  projectId: '6hh9v2ph',
  dataset: 'production',

  plugins: [
    structureTool({
      structure,
    }),
    visionTool(),
    ruKZLocale(),
  ],

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {},
  },
})
