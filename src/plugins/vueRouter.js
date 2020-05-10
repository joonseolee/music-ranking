import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../templates/Home";
import Album from "../templates/Album";
import Artist from "../templates/Artist";
import Tag from "../templates/Tag";
import Track from "../templates/Track";
import WeeklyChart from "../templates/WeeklyChart";
import modulePaths from "../store/Path";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: modulePaths.state().album.path, component: Album },
        { path: modulePaths.state().artist.path, component: Artist },
        { path: modulePaths.state().tag.path, component: Tag },
        { path: modulePaths.state().track.path, component: Track },
        { path: modulePaths.state().weeklyChart.path, component: WeeklyChart }
    ]
})
export default router;
