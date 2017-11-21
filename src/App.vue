 <template lang="pug">
 #app
   img(src='https://willard75.github.io/VueMusic/dist/logo.png')
   h1 VueMusic
   select(v-model="selectedCountry")
     option(v-for="country in countries" v-bind:value="country.value") {{ country.name }}
   spinner(v-show="loading")
   .mask
    .container(v-for="artist in artists")
      artist(v-bind:artist="artist" v-bind:key="artist.mbid")
</template>

<script>
import getArtists from './api/index'

export default {
  name: 'app',
  data () {
    return {
      loading: true,
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina' },
        { name: 'Colombia', value: 'colombia' },
        { name: 'España', value: 'spain' },
      ],
      selectedCountry: 'argentina'
    }
  },
  methods: {
    refreshArtists() {
      const self = this
      this.artists = []
      this.loading = true
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.artists = artists
          self.loading = false
        })
    }
  },
  mounted() {
    this.refreshArtists()
  },
  watch: {
    selectedCountry() {
      this.refreshArtists()
    }
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #42b983
  margin-top 60px
  .container
      width 200px
      height 250px
      background-color white
      margin-top -10px
      overflow hidden
      float left
      text-align center

  .mask
    width 1200px
    overflow hidden
    position absolute
    top 55%
    left 8%

  select
    border 0 !important
    -webkit-appearance none
    -moz-appearance none
    width 150px
    height 30px
    text-indent 0.01px
    text-overflow ""
    color #FFF
    border-radius 0px
    padding 5px
    background-color #49e078
    font-size: 16px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
