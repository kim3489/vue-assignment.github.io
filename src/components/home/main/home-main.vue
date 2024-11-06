<template>
  <div class="home">
    <Banner :movie="featuredMovie" />

    <MovieRow
      title="인기 영화"
      :fetch-url="popularMoviesUrl"
    />
    <MovieRow
      title="최신 영화"
      :fetch-url="newReleasesUrl"
    />
    <MovieRow
      title="액션 영화"
      :fetch-url="actionMoviesUrl"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { URLService } from '../../../util/movie/URL/URL.ts';
import Banner from '../../../views/home-main/banner.vue';
import MovieRow from '../../../views/home-main/movie-row.vue';

const apiKey = ref(localStorage.getItem('f908ad8e7f8d05fafc1072a51caaab1e') || '');
const featuredMovie = ref(null);
const popularMoviesUrl = ref('');
const newReleasesUrl = ref('');
const actionMoviesUrl = ref('');

const urlService = new URLService();

popularMoviesUrl.value = urlService.getURL4PopularMovies(apiKey.value);
newReleasesUrl.value = urlService.getURL4ReleaseMovies(apiKey.value);
actionMoviesUrl.value = urlService.getURL4GenreMovies(apiKey.value, '28');

const loadFeaturedMovie = async () => {
  featuredMovie.value = await urlService.fetchFeaturedMovie(apiKey.value);
};

const initializeScrollListener = () => {
  const scrollListener = () => {
    const header = document.querySelector('.app-header');
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', scrollListener);

  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListener);
  });
};

onMounted(() => {
  loadFeaturedMovie();
  initializeScrollListener();
});
</script>

<style scoped>
:host {
  display: block;
}

:global(html),
:global(body) {
  overflow-y: scroll !important;
}

:global(body) {
  background-color: #141414 !important;
}
</style>