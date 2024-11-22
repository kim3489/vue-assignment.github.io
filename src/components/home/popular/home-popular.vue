<template>
  <div class="popular-container">
    <div class="view-toggle">
      <button @click="() => {
        setView('grid');
        disableScroll();
      }" :class="{ active: currentView === 'grid' }">
        <font-awesome-icon :icon="['fas', 'th']" />
      </button>
      <button @click="() => {
        setView('list');
        enableScroll();
      }" :class="{ active: currentView === 'list' }">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
    <MovieGrid
        v-if="currentView === 'grid'"
        title="인기 영화"
        :fetchUrl="fetchURL"
    />
    <MovieInfiniteScroll
        v-if="currentView === 'list'"
        title="인기 영화"
        :fetchUrl="fetchURL"
    />
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'; // computed를 추가로 import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import MovieGrid from '../../../views/views/movie-grid.vue';
import MovieInfiniteScroll from '../../../views/views/movie-infinite-scroll.vue';
import { getURL4PopularMovies } from '../../../util/movie/URL/URL';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faTh, faBars);

defineComponent({
  components: {
    FontAwesomeIcon
  }
});

const apiKey = localStorage.getItem('TMDb-Key') || '';
const fetchURL = getURL4PopularMovies(apiKey);

const currentView = ref('grid');

const setView = (view: string) => {
  currentView.value = view;
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = 'auto';
};

onMounted(() => {
  disableScroll();
})

</script>

<style scoped>
.view-toggle {
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
}

.view-toggle button {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-left: 10px;
  cursor: pointer;
  border-radius: 4px;
}

.view-toggle button.active {
  background-color: #535bf2;
}

@media (max-width: 768px) {
  .view-toggle {
    margin-top: 80px;
  }
}
</style>