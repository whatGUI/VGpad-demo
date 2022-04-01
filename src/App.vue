<template>
  <component :is="connected ? 'UniversalLayout' : 'SocketConnect'" @socketConnect="connected=$event"></component>
</template>

<script>
import UniversalLayout from '@/view/UniversalLayout.vue';
import SocketConnect from '@/view/SocketConnect.vue';

export default {
  name: 'App',
  components: { UniversalLayout, SocketConnect },
  data() {
    return {
      connected: false,
    }
  },
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
