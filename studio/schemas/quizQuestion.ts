// import {defineType} from 'sanity'

// export const quizQuestion = defineType({
//   name: 'quizQuestion',
//   title: 'Quiz Question',
//   type: 'document',
//   fields: [
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [{type: 'string'}],
//     },
//     {
//       name: 'branch',
//       title: 'Branching Logic (optional)',
//       type: 'number',
//     },
//   ],
// })

//////////////////////////////////////////////
// import {defineType} from 'sanity'

// export const quizQuestion = defineType({
//   name: 'quizQuestion',
//   title: 'Quiz Question',
//   type: 'document',
//   fields: [
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             {
//               name: 'text',
//               title: 'Option Text',
//               type: 'string',
//               validation: (Rule) => Rule.required(),
//             },
//             {
//               name: 'next',
//               title: 'Next Question ID (optional)',
//               type: 'string',
//               description: 'Enter the ID of the next question, or "email"/"completion"',
//             },
//           ],
//         },
//       ],
//       validation: (Rule) => Rule.required().min(1),
//     },
//   ],
// })
////////////////////////////////////

// import {defineType} from 'sanity'

// export const quizQuestion = defineType({
//   name: 'quizQuestion',
//   title: 'Quiz Question',
//   type: 'document',
//   fields: [
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           title: 'Option',
//           fields: [
//             {
//               name: 'text',
//               title: 'Option Text',
//               type: 'string',
//               validation: (Rule) => Rule.required(),
//             },
//             {
//               name: 'next',
//               title: 'Next Question',
//               type: 'reference', // ✅ reference to another Quiz Question
//               to: [{type: 'quizQuestion'}],
//               description: 'Select the next question, or leave empty for "completion".',
//             },
//           ],
//           preview: {
//             select: {
//               title: 'text',
//               subtitle: 'next.question',
//             },
//           },
//         },
//       ],
//       validation: (Rule) => Rule.required().min(1),
//     },
//   ],
// })
//////////////////////////////

// import {defineType} from 'sanity'

// export const quizQuestion = defineType({
//   name: 'quizQuestion',
//   title: 'Quiz Question',
//   type: 'document',
//   fields: [
//     {
//       name: 'order',
//       title: 'Order',
//       type: 'number',
//       description: 'Use this to control the default sequence of questions.',
//       validation: (Rule) => Rule.required().min(1),
//     },
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           title: 'Option',
//           fields: [
//             {
//               name: 'text',
//               title: 'Option Text',
//               type: 'string',
//               validation: (Rule) => Rule.required(),
//             },
//             {
//               name: 'next',
//               title: 'Next Question',
//               type: 'reference', // ✅ reference to another Quiz Question
//               to: [{type: 'quizQuestion'}],
//               description: 'Select the next question, or leave empty for "completion".',
//             },
//           ],
//           preview: {
//             select: {
//               title: 'text',
//               subtitle: 'next.question',
//             },
//           },
//         },
//       ],
//       validation: (Rule) => Rule.required().min(1),
//     },
//   ],
//   orderings: [
//     {
//       title: 'Order Ascending',
//       name: 'orderAsc',
//       by: [{field: 'order', direction: 'asc'}],
//     },
//   ],
// })

/////////////////////////////

// import {defineType} from 'sanity'

// export const quizQuestion = defineType({
//   name: 'quizQuestion',
//   title: 'Quiz Question',
//   type: 'document',
//   fields: [
//     {
//       name: 'order',
//       title: 'Order',
//       type: 'number',
//       description: 'Use this to control the default sequence of questions.',
//       validation: (Rule) => Rule.required().min(1),
//     },
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           title: 'Option',
//           fields: [
//             {
//               name: 'text',
//               title: 'Option Text',
//               type: 'string',
//               validation: (Rule) => Rule.required(),
//             },
//             {
//               name: 'next',
//               title: 'Next Question',
//               type: 'reference',
//               to: [{type: 'quizQuestion'}],
//               description: 'Select the next question, or leave empty for "completion".',
//             },
//           ],
//           preview: {
//             select: {
//               title: 'text',
//               subtitle: 'next.question',
//             },
//           },
//         },
//       ],
//       validation: (Rule) => Rule.required().min(1),
//     },
//   ],
//   orderings: [
//     {
//       title: 'Order Ascending',
//       name: 'orderAsc',
//       by: [{field: 'order', direction: 'asc'}],
//     },
//   ],
// })
//////////////////////////////////////////////

// import {defineType} from 'sanity'

// export const quizQuestion = defineType({
//   name: 'quizQuestion',
//   title: 'Quiz Question',
//   type: 'document',
//   fields: [
//     {
//       name: 'order',
//       title: 'Order',
//       type: 'number',
//       description: 'Use this to control the default sequence of questions.',
//       validation: (Rule) => Rule.required().min(1),
//     },
//     {
//       name: 'shortId',
//       title: 'Question ID',
//       type: 'string',
//       description: 'Human-readable ID for clients, e.g., Q1, Q2…',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           title: 'Option',
//           fields: [
//             {
//               name: 'text',
//               title: 'Option Text',
//               type: 'string',
//               validation: (Rule) => Rule.required(),
//             },
//             {
//               name: 'next',
//               title: 'Next Question',
//               type: 'reference',
//               to: [{type: 'quizQuestion'}],
//               description:
//                 'Branching logic, select the next question (Q2, Q3…) or (leadCapture) for user name, email.',
//             },
//           ],
//           preview: {
//             select: {
//               title: 'text',
//               subtitle: 'next.shortId',
//             },
//           },
//         },
//       ],
//       validation: (Rule) => Rule.required().min(1),
//     },
//   ],
//   orderings: [
//     {
//       title: 'Order Ascending',
//       name: 'orderAsc',
//       by: [{field: 'order', direction: 'asc'}],
//     },
//   ],
// })

////////////////////////////

// import {defineType} from 'sanity'

// export const quizQuestion = defineType({
//   name: 'quizQuestion',
//   title: 'Quiz Question',
//   type: 'document',
//   fields: [
//     {
//       name: 'order',
//       title: 'Order',
//       type: 'number',
//       description: 'Use this to control the default sequence of questions.',
//       validation: (Rule) => Rule.required().min(1),
//     },
//     {
//       name: 'shortId',
//       title: 'Question ID',
//       type: 'string',
//       description: 'Human-readable ID for clients, e.g., Q1, Q2…',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'question',
//       title: 'Question',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'options',
//       title: 'Options',
//       type: 'array',
//       of: [
//         {
//           type: 'object',
//           title: 'Option',
//           fields: [
//             {
//               name: 'text',
//               title: 'Option Text',
//               type: 'string',
//               validation: (Rule) => Rule.required(),
//             },
//             {
//               name: 'next',
//               title: 'Next Step',
//               type: 'reference',
//               to: [
//                 {type: 'quizQuestion'},
//                 {type: 'leadCapture'}, // email capture screen
//               ],
//               description: 'Select the next question or lead capture screen.',
//             },
//           ],
//           preview: {
//             select: {
//               title: 'text',
//               subtitle: 'next.shortId',
//             },
//           },
//         },
//       ],
//       validation: (Rule) => Rule.required().min(1),
//     },
//   ],
//   orderings: [
//     {
//       title: 'Order Ascending',
//       name: 'orderAsc',
//       by: [{field: 'order', direction: 'asc'}],
//     },
//   ],
//   preview: {
//     select: {
//       title: 'shortId',
//       subtitle: 'question',
//     },
//   },
// })
/////////////////////////////////////////

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
