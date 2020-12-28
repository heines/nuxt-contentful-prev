<template lang="pug">
.home
  .home__head
    h1 テストprev
  .home__body
    |{{ posts }}
</template>
<script>
import client from '~/plugins/contentful.js';
export default {
  async asyncData({ env, params }) {
    const posts = await client.getEntries({
      content_type: 'post',
      order: '-fields.date',
    });
    return {
      posts: posts.items,
    };
  },
};
</script>
<style lang="scss"></style>
