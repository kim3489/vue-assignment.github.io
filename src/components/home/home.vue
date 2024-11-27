<template>
  <div id="container">
    <Header />
    <router-view/>
  </div>
</template>

<script >
import { defineComponent } from 'vue'
import Header from '@/layout/header/header.vue'

export default defineComponent({
  components: {
    Header,
  }
})
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  overflow-x: hidden;
  background-color: #2b2b2b;
}

#app {
  width: 95svw;
  overflow-x: hidden;
  min-height: 85svh;
}
</style>