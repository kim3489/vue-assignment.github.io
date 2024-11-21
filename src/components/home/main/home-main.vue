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

<script setup >
import { ref, onMounted, onUnmounted } from 'vue';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import {  fetchFeaturedMovie,
  getURL4PopularMovies,
  getURL4ReleaseMovies,
  getURL4GenreMovies } from '@/util/movie/URL/URL';
import Banner from '../../../views/home-main/banner.vue';
import MovieRow from '../../../views/home-main/movie-row.vue';
import { library } from '@fortawesome/fontawesome-svg-core';

  library.add(faSearch, faUser);

const apiKey = ref(localStorage.getItem('TMDb-Key') || '');
const featuredMovie = ref(null);
const popularMoviesUrl = ref('');
const newReleasesUrl = ref('');
const actionMoviesUrl = ref('');

popularMoviesUrl.value = getURL4PopularMovies(apiKey.value);
newReleasesUrl.value = getURL4ReleaseMovies(apiKey.value);
actionMoviesUrl.value = getURL4GenreMovies(apiKey.value, '28');

fetchFeaturedMovie(apiKey.value).then((movie) => {
  featuredMovie.value = movie;
});

    const handleScroll = () => {
      const header = document.querySelector('.app-header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  setInterval(() => {
    // TODO: Implement function
  }, 1000);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<style scoped>

html, body {
  overflow-y: scroll !important;
}

body {
  background-color: #141414 !important;
}

</style>