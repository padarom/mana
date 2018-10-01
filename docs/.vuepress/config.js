module.exports = {
    themeConfig: {
        sidebar: [
            '/',
            ['/changelog', 'Changelog'],
            {
                title: 'Administration',
                collapsable: false,
                children: [
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
