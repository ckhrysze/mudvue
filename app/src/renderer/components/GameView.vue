<template>
  <div class="game">
    <div class="output">
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
          name: 'game',
          path: '/game'
        }
      }
    },
    name: 'game'
  }
</script>

<style scoped>
  .game {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .output {
    flex: 1;
    text-align: left;
    padding: 5px;
  }
  div {
    font-family: "Inconsolata", monospace;
  }

  input {
    font-size: 1.2em;
    width: 100%;
  }
</style>
