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
              title: 'Next Question',
              type: 'reference', // ✅ reference to another Quiz Question
              to: [{type: 'quizQuestion'}],
              description: 'Select the next question, or leave empty for "completion".',
            },
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'next.question',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
  ],
})
