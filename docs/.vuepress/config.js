module.exports = {
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-task-checkbox'))
        }
    },
    themeConfig: {
        sidebar: [
            '/',
            ['/changelog', 'Changelog'],
            {
                title: 'Administration',
                collapsable: false,
                children: [
                    '/admin/introduction',
                    '/admin/installation',
                    '/admin/configuration',
                    '/admin/daemon',
                    '/admin/servers'
                ]
            },
            {
                title: 'Development',
                collapsable: false,
                children: [
                    '/developer/custom-game'
                ]
            }
        ]
    }
}
