<template>
  <div>
    <div>
      <div class="main">
        Hello!
      </div>
      <div class="extra">

      </div>
    </div>
    <div class="input">
      <input>
    </div> 
  </div>
</template>

<script>
  export default {
    created () {
      // Set $route values that are not preset during unit testing
      if (process.env.NODE_ENV === 'testing') {
        this.$route = {
          name: 'game-view',
          path: '/game-view'
        }
      }
    },
    name: 'game-view'
  }
</script>

<style scoped>
  div {
    font-family: "Inconsolata", monospace;
    color: red;
  }
  input {
    font-size: 1.5em;
    border-radius: 5px;
  }
</style>
