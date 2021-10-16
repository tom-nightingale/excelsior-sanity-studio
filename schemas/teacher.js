export default {
    title: 'Teacher',
    name: 'teacher',
    type: 'document',
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Position',
            description: 'The teacher\'s position within the company',
            name: 'position',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Profile Photo',
            name: 'profilePhoto',
            description: 'The teacher\'s profile photo',
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
            title: 'name'
        },
        prepare({ title }) {
            return {
                title
            }
        }
    }
}

