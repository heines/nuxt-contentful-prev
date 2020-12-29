<template lang="pug">
.home
  .home__head
    h1 テストprev
  .home__body
    NuxtLink.home__item(
      v-for="post in posts"
      :key="post.fields.slug"
      :to="{ path: `/blog/${post.fields.slug}/` }"
      )
      |{{ post.fields.title }}
  .home__links
    NuxtLink.home__item(
      to="/category/"
      )
      |カテゴリページ
</template>
<script>
import client from '~/plugins/contentful.js';
export default {
  async asyncData() {
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
<style lang="scss">
.home {
  padding: 1em;
}
</style>
