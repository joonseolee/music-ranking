<template>
    <div>
        <ul v-for="(router, index) in this.getAll" :key="index">
            <li>
                <router-link :to="router.path">
                    {{ router.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: "Home",
        computed: {
            ...mapGetters("path", ["getAlbum", "getAll"]),
        }
    }
</script>

<style scoped>

</style>
