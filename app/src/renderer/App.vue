<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'renderer/vuex/store'
  export default {
    store
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  #app {
    width: 100%;
    height: 100%;
  }

  body {
    align-items: center;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #1a1a1a;
    color: #ececec;
  }
</style>
