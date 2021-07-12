export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60eb9bfd35cf884550fae838',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6wp8tpx2',
                  apiId: '562f2399-3480-40b8-be96-4a0cd679cd54'
                },
                {
                  buildHookId: '60eb9bfe1939564916a0e5dd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5s1w2dq7',
                  apiId: '10e106ed-2c6b-44a5-bd0a-3975500a1f57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rememberlenny/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5s1w2dq7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
