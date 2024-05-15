import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'codeChro',
  title: 'CodeChro',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'tech',
      type: 'string',
    }),
    defineField({
      name: 'post',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
  ],
})
