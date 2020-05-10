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
        getAlbum: state => {
            return state.album
        },
        getArtist: state => {
            return state.artist
        },
        getTag: state => {
            return state.tag
        },
        getTrack: state => {
            return state.track
        },
        getWeeklyChart: state => {
            return state.weeklyChart
        },
        getAll: () => {
            return modulePaths.state()
        }
    },
    mutations: {},
    actions: {}
}

export default modulePaths
