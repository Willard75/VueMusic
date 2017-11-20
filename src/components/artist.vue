<template lang="pug">
  .row.center-align
    .col.s12.m6.l4
      li.artist
        h2: a(v-bind:href="artist.url" target="_blank") {{ artist.name }}
        img(v-bind:src="artist.image[2]['#text']")
</template>

<script>
export default {
  name: 'artist',
  props: [ 'artist' ]
}
</script>

<style lang="stylus">
li.artist
  display block
  margin 10px 0
</style>
