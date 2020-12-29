<template lang="pug">
.category
  .category__title
    h1 カテゴリ一覧
  .blog__info
    .category__info-link
      NuxtLink(
        to="/"
        )
        |HOME
  .category__body
    NuxtLink.category__item(
      v-for="category in categories"
      :key="category.fields.slug"
      :to="{ path: `/category/${category.fields.slug}` }"
      )
      |{{ category.fields.name }}
</template>
<script>
import client from '~/plugins/contentful.js';
export default {
  async asyncData({ payload }) {
    const categories = await client.getEntries({
      content_type: 'category',
    });
    return {
      categories: categories.items,
    };
  },
};
</script>
<style lang="scss">
.category {
  padding: 1em;
  &__info {
    border-bottom: 1px solid #ccc;
  }
  &__body {
    padding-top: 1em;
  }
  &__item {
    display: inline-block;
    margin-right: 1em;
  }
}
</style>
