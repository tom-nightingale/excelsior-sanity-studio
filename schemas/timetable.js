import slugify from '../utils/slugify'

export default {
    title: 'Timetable',
    name: 'timetable',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Timetable',
            description: 'Add classes to the day\' timetable',
            name: 'timetable',
            type: 'array',
            of: [
                {type: 'dayAndTime'},
            ]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'This is required for page routing and can be auto-generated by pressing "generate"',
            options: {
                source: 'title',
                maxLength: 96,
                slugify: title => slugify(title)
            },
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

