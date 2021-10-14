export default {
    title: 'Global Settings',
    name: 'global',
    type: 'document',
    __experimental_actions: ['update', 'create', 'delete', 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            initialValue: 'Global Settings',
            readOnly: true,
            hidden: true,
            validation: Rule => Rule.required()
        },
        {
            title: 'Address',
            description: 'The main Excelsior address',
            name: 'address',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Phone Number',
            description: 'The main Excelsior phone number',
            name: 'phoneNumber',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Email Address',
            description: 'The main Excelsior email address',
            name: 'emailAddress',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            title: 'Youtube URL',
            description: 'The Excelsior Youtube URL',
            name: 'youtubeUrl',
            type: 'url',
            validation: Rule => Rule.required()
        },
        {
            title: 'Facebook URL',
            description: 'The Excelsior Facebook URL',
            name: 'facebookUrl',
            type: 'url',
            validation: Rule => Rule.required()
        },
        {
            title: 'Instagram URL',
            description: 'The Excelsior Instagram URL',
            name: 'instagramUrl',
            type: 'url',
            validation: Rule => Rule.required()
        },
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

