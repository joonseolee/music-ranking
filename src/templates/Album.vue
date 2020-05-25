<template>
    <div>
        <ul v-if="albums.length != 0">
            <li v-for="(album, index) in albums" :key="index">
                {{ album.name }}
            </li>
        </ul>
    </div>
</template>

<script>
    import getTopAlbums from "../api/AlbumApi"

    export default {
        name: "Album",
        data() {
            return {
                albums: []
            }
        },
        created() {
            let _this = this
            getTopAlbums().then(res => {
                _this.albums = res.albums.album
            })
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
