const modulePaths = {
    namespaced: true,
    state: () => ({
        album : { path: '/album', name: 'Albums' },
        artist : { path: '/artist', name: 'Artists' },
        tag : { path: '/tag', name: 'Tags' },
        track : { path: '/track', name: 'Tracks' },
        weeklyChart : { path: '/weeklyChart', name: 'WeeklyCharts' }
    }),
    getters: {
        getAll: () => {
            return modulePaths.state()
        }
    },
    mutations: {},
    actions: {}
}

export default modulePaths
