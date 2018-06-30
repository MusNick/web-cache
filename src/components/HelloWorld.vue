<template>
  <div>
    <div>{{ haha.a }}</div>
  </div>
</template>

<script>
// import chalk from 'chalk'
export default {
  name: 'HelloWorld',
  directives: {
    bg: {
      update (el, binding) {
        el.style.backgroundColor = binding.value.color
      }
    }
  },
  data () {
    return {
      sha: true,
      haha: {},
      a: {}
    }
  },
  mounted () {
    setTimeout(() => {
      console.log(this.$el.textContent)
      this.$nextTick(() => {
        console.log(this.$el.textContent)
      })
      return 'expire__soon'
      // this.haha = Object.assign({}, this.haha, { a: 1 })
    }, 1000)
  },
  methods: {
    toggle () {
      alert('haha')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  .red {
    color red
    display block
    position relative
    width 10px
  }
  /* .item
  height 30px
  background-color skyblue
  margin-bottom 10px */
</style>
