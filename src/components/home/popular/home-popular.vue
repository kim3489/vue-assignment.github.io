<template>
  <div class="popular-container">
    <div class="view-toggle">
      <button
        :class="{ active: currentView === 'grid' }"
        @click="setView('grid')"
      >
        <font-awesome-icon :icon="faTh" />
      </button>
      <button
        :class="{ active: currentView === 'list' }"
        @click="setView('list')"
      >
        <font-awesome-icon :icon="faBars" />
      </button>
    </div>

    <MovieGrid
      v-if="currentView === 'grid'"
      title="인기 영화"
      :fetch-url="fetchURL"
    />

    <MovieInfiniteScroll
      v-if="currentView === 'list'"
      :api-key="apiKey"
      genre-code="28"
      sorting-order="all"
      :vote-everage="-1"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'; // computed를 추가로 import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTh, faBars } from '@fortawesome/free-solid-svg-icons';
import MovieGrid from '../../../views/views/movie-grid.vue';
import MovieInfiniteScroll from '../../../views/views/movie-infinite-scroll.vue';
import { URLService } from '../../../util/movie/URL/URL.ts';

const apiKey = ref(localStorage.getItem('f908ad8e7f8d05fafc1072a51caaab1e') || '');
const currentView = ref('grid');
const urlService = new URLService();

const setView = (view: string) => {
  currentView.value = view;
  if (view === 'grid') {
    disableScroll();
  } else {
    enableScroll();
  }
};

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = 'auto';
};

const fetchURL = computed(() => {
  return urlService.getURL4PopularMovies(apiKey.value);
});

onMounted(() => {
  disableScroll();
});
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