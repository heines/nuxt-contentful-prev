<template lang="pug">
.home
  .home__head
    h1 テストprev
  .home__body
    .home__body-title
      h2 記事一覧
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
      NuxtLink.home__item(
        to="/about/"
        )
        |アバウトページ
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
  &__body {
    padding-top: 1em;
    &-title {
      padding-bottom: 1em;
    }
  }
  &__item {
    display: inline-block;
    margin-right: 1em;
  }
  &__links {
    margin-top: 1em;
    padding-top: 1em;
    border-top: 1px solid #ccc;
  }
}
</style>
