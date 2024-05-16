import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .trim()
            .slice(0, 200),
      },
    }),
    defineField({
      name: 'date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'tech',
      type: 'string',
      options: {
        list: ['JS', 'REACT', 'NEXT', 'CSS', 'Node', 'FrontEnd', 'Backend', 'CompSci', 'HTML'],
        layout: 'radio',
      },
    }),
    // Add other fields as needed
  ],
})
