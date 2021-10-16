export default {
    title: 'Class',
    name: 'class',
    type: 'document',
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
        {
            title: 'Class Name',
            name: 'className',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Content Heading',
            name: 'contentHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}],
            validation: Rule => Rule.required()
        },    
        {
            title: 'Class Image',
            name: 'classImage',
            description: 'An image of the class-type in action',
            type: "image",
        },     
        {
            title: 'SEO / Share Settings',
            name: 'seo',
            type: 'seo'
        }
    ],
    preview: {
        select: {
            title: 'className'
        },
        prepare({ title }) {
            return {
                title
            }
        }
    }
}

