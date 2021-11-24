export default {
    title: 'Classes Page',
    name: 'classes',
    type: 'document',
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            initialValue: 'Classes Settings',
            readOnly: true,
            hidden: true,
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Image',
            description: 'The image to appear in the hero',
            name: 'heroImage',
            type: "image",
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Sub Heading',
            name: 'heroSubHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Heading',
            name: 'heroHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },       
        {
            title: 'SEO / Share Settings',
            name: 'seo',
            type: 'seo'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title
            }
        }
    }
}

