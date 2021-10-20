export default {
    title: 'Home Page',
    name: 'home',
    type: 'document',
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            initialValue: 'Homepage Settings',
            readOnly: true,
            hidden: true,
            validation: Rule => Rule.required()
        },
        {
            title: 'Hero Images',
            description: 'The images that appear as carousel in the hero section',
            name: 'heroImages',
            type: 'array',
            options: {
                layout: 'grid'
            },
            of: [{
                type: 'image'
            }],
            validation: Rule => Rule.min(1)
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
            title: 'About Content Heading',
            description: 'The heading for the "About Excelsior" section',
            name: 'aboutContentHeading',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'About Content',
            description: 'The content for the "About Excelsior" section',
            name: 'aboutContent',
            type: 'array', 
            of: [{type: 'block'}],
            validation: Rule => Rule.required()
        },        
        {
            title: 'Inspirational Quote',
            description: 'The start of the inspirational quote',
            name: 'inspirationalQuote',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Inspirational Quote Highlight',
            description: 'The part of the quote shown in the highlight colour',
            name: 'inspirationalQuoteHighlight',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Page Image',
            name: 'pageImage',
            description: 'The image shown below the teachers and above the class list.',
            type: "image",
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

