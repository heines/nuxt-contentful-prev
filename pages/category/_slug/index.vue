<template lang="pug">
.category-slug
  .category-slug__title
    h1 カテゴリ：{{ posts[0].fields.category.fields.name }}
  .category-slug__info
    .category-slug__info-link
      NuxtLink(
        to="/category"
        )
        |カテゴリページに戻る
  .category-slug__body
    NuxtLink.category-slug__item(
      v-for="post in posts"
      :key="post.fields.slug"
      :to="{ path: `/blog/${post.fields.slug}` }"
      )
      |{{ post.fields.title }}
</template>
<script>
import client from '~/plugins/contentful.js';
export default {
  async asyncData({ params, payload }) {
    const slug = params.slug;
    const category = await client.getEntries({
      content_type: 'category',
      'fields.slug': slug,
    });
    const posts = await client.getEntries({
      content_type: 'post',
      'fields.category.sys.id': category.sys.id,
    });
    return {
      posts: posts.items,
    };
  },
};
</script>
<style lang="scss">
.category-slug {
  padding: 1em;
  &__info {
    border-bottom: 1px solid #ccc;
  }
  &__body {
    padding-top: 1em;
  }
}
</style>
