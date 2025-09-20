import {defineType} from 'sanity'

export const quizQuestion = defineType({
  name: 'quizQuestion',
  title: 'Quiz Question',
  type: 'document',
  fields: [
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Use this to control the default sequence of questions.',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'shortId',
      title: 'Question ID',
      type: 'string',
      description: 'Human-readable ID for clients, e.g., Q1, Q2…',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Option',
          fields: [
            {
              name: 'text',
              title: 'Option Text',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'next',
              title: 'Next Step',
              type: 'reference',
              to: [
                {type: 'quizQuestion'},
                {type: 'leadCapture'}, // email capture screen
              ],
              description: 'Select the next question or lead capture screen.',
            },
          ],
          preview: {
            select: {
              title: 'text',
              nextType: 'next._type',
              nextShortId: 'next.shortId',
              nextTitle: 'next.title',
            },
            prepare({title, nextType, nextShortId, nextTitle}) {
              let subtitle = ''
              if (nextType === 'quizQuestion') subtitle = nextShortId
              else if (nextType === 'leadCapture') subtitle = nextTitle
              return {title, subtitle}
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
  orderings: [
    {
      title: 'Order Ascending',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'shortId',
      subtitle: 'question',
    },
  },
})
