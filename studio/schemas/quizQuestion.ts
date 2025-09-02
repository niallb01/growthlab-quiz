import {defineType} from 'sanity'

export const quizQuestion = defineType({
  name: 'quizQuestion',
  title: 'Quiz Question',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'branch',
      title: 'Branching Logic (optional)',
      type: 'number',
    },
  ],
})
