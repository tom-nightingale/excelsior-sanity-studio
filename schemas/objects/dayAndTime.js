export default {
  name: 'dayAndTime',
  title: 'Day and Time',
  type: 'object',

  fields: [
    {
      // 5. Enable editors to input a string from a predefined list (days)
      name: 'title',
      title: 'Class Name',
      description: 'Enter the name of the class',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      // 7. Same time input as above, but assigned to a different field
      name: 'description',
      title: 'Description',
      description: 'Add a brief class description',
      type: 'string',
    },
    {
      // 7. Same time input as above, but assigned to a different field
      name: 'price',
      title: 'Price',
      description: 'How much is this class?',
      type: 'string',
    },
    {
      // 6. Enable editors to input a point in time using a custom input component
      name: 'startsAt',
      title: 'Starts at',
      description: 'Choose when the class starts',
      type: 'string',
    },
    {
      // 7. Same time input as above, but assigned to a different field
      name: 'finishesAt',
      title: 'Finishes at',
      description: 'Choose when the class finishes',
      type: 'string',
    }
  ],

  // 8. Define how the dayAndTime object will render in the Studio 
  preview: {
    select: {
      title: 'title',
      startsAt: 'startsAt',
      finishesAt: 'finishesAt'
    },
    prepare({title, startsAt, finishesAt}) {
      return {
        title: title,
        subtitle: `${startsAt} - ${finishesAt}`
      }
    }
  }
}