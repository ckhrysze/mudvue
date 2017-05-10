<template>
  <div>
    <h1>Welcome to MudVue!</h1>
    <p>Please enter the connection details to connect.</p>
    <form v-on:submit.prevent="establishConnection">
      <div>
        <input placeholder="url">
        <input placeholder="port">
      </div>
      <div>
        <input placeholder="name">
        <input placeholder="password" type="password">
      </div>
      <div>
        <button type="submit">Connect</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      establishConnection (e) {
        console.log(e)
        this.$router.replace(
          {name: 'game'},
          function (e) {
            console.log(e)
          },
          function (e) {
            console.log('Aborted')
            console.log(e)
          }
        )
        console.log('Router push was just called...')
      }
    },
    created () {
      // Set $route values that are not preset during unit testing
      if (process.env.NODE_ENV === 'testing') {
        this.$route = {
          name: 'landing-page',
          path: '/landing-page'
        }
      }
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  div {
    font-family: "Inconsolata", monospace;
    text-align: center;
    padding: 8px;
    background-color: #1a1a1a;
  }
  input {
    font-size: 1.5em;
    border-radius: 5px;
  }
  button {
    font-size: 1.5em;
    border-radius: 5px;
    padding: 5px;
    background-color: #ececec;
    color: #1a1a1a;
  }
</style>
