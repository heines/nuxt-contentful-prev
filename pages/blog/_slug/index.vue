<template lang="pug">
.blog
  .blog__title
    h1 {{ post.fields.title }}
  .blog__info
    NuxtLink.blog__info-link(
      to="/"
      )
      |HOME
    .blog__info-in
      .blog__info-date
        |{{ post.fields.date }}
      .blog__info-category
        |category: {{ post.fields.category.fields.name }}
  .blog__body
  |{{ post.fields.detail }}
</template>
<script>
import client from '~/plugins/contentful.js';
export default {
  async asyncData({ env, params, route, error, $convIso }) {
    const currentUrl = `${env.baseUrl}${route.path}/`;

    const post = await client.getEntries({
      content_type: 'post',
      'fields.slug': params.slug,
      include: 3,
    });
    if (!post.total) {
      return error({
        statusCode: 404,
        message: 'お探しのページは存在しません。',
      });
    }
    return {
      post: post.items[0],
      currentUrl,
    };
  },
};
</script>
<style lang="scss">
.blog {
  padding: 1em;
  &__info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    border-bottom: 1px solid #ccc;
    &-date {
      text-align: right;
    }
  }
  &__body {
    padding-top: 1em;
  }
}
</style>
