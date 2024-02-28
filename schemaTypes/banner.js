export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'titleH1',
      title: 'TitleH1',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
  ],
}
