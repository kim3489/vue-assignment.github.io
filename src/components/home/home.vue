<template>
  <div id="app">
    <header-component></header-component>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderComponent from '../../layout/header/header.vue'

export default defineComponent({
  name: 'HomeComponent',
  components: {
    HeaderComponent
  }
  // 여기에 추가적인 컴포넌트 로직을 작성할 수 있습니다.
})
</script>

<style scoped>
#app {
  width: 95vw;
  height: 95vh;
  overflow-x: hidden;
  margin: auto;
}
</style>