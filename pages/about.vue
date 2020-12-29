<template lang="pug">
.about
  h1.about__title
    |About
  h2.about__subtitle
    |このページ is 何
  p.about__detail
    |contentful + Nuxt.js + Netlifyでドラフト記事を確認した。
  h2.about__subtitle
    |どうやったのか
  p.about__detail
    |contentfulにはdraftを表示できるpreview APIがあるのでそれを使用した。基本的には通常のdelivery APIと使い方が一緒だが、唯一 host の指定が必要。
    br
    |hostは、実のところdelivery APIでも使用しているが、defaultなので省略しているに過ぎない。
    br
    |わざわざ別のURLを充てるのもなんだったので、ブランチを切って、preview用のwebhookを使用した。
  h2.about__subtitle
    |注意点
  p.about__detail
    ol
      li Netlifyには process.env.context という環境変数があるが、これはbuild時にしか参照できない。つまり、pluginの中でcontentful.jsを作っている人がほとんどだと思うが、そこからは参照できない。
      li netlify.toml で [context.ブランチ名.environment] とやろうとしたが、build中にエラーが発生した。[context.branch-deploy.environment]で値を設定することで解決した。
      li webhookだが、autosaveだと回数が多すぎる。saveはassetsに対しては存在しない。悲しい。
  h2.about__subtitle
    |特記事項
  p.about__detail
    |このほか、何か思いついたことがあれば追記すること。
    br
    |未来の私へ。このページは静的ページの動作確認のために念のために設置されている。API実行確認の際に有効に活用すること。
</template>
<script></script>
<style lang="scss">
.about {
  padding: 1em;
  &__subtitle {
    margin-top: 0.5em;
  }
}
</style>
