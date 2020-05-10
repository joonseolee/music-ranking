<template>
  <div>
    <h1>Top Ranking</h1>
    <router-view>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  data: () => ({
    item: 1
  }),
};
</script>
