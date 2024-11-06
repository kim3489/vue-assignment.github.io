<!-- MovieInfiniteScroll.vue -->
<template>
  <div>
    <div ref="gridContainer" class="grid-container">
      <div v-for="(group, groupIndex) in visibleMovieGroups" :key="groupIndex" class="movie-row">
        <div v-for="movie in group" :key="movie.id" class="movie-card">
          <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" />
          <h3>{{ movie.title }}</h3>
          <button @click="toggleWishlist(movie)">
            {{ isInWishlist(movie.id) ? 'Remove from Wishlist' : 'Add to Wishlist' }}
          </button>
        </div>
      </div>
    </div>
    <div ref="loadingTrigger" v-if="hasMore">Loading more...</div>
    <button v-if="showTopButton" @click="scrollToTopAndReset">Back to Top</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onUnmounted, watch } from 'vue';
import axios from 'axios';
import { Movie, APIResponse } from '@/models/types';
import { useWishlistService } from '@/util/auth/wishlist.service';

export default defineComponent({
  name: 'MovieInfiniteScroll',
  props: {
    genreCode: {
      type: String,
      required: true,
    },
    apiKey: {
      type: String,
      required: true,
    },
    sortingOrder: {
      type: String,
      default: 'all',
    },
    voteAverage: {
      type: Number,
      default: 100,
    },
  },
  setup(props) {
    const gridContainer = ref<HTMLDivElement | null>(null);
    const loadingTrigger = ref<HTMLDivElement | null>(null);
    const movies = ref<Movie[]>([]);
    const currentPage = ref(1);
    const rowSize = ref(4);
    const isLoading = ref(false);
    const isMobile = ref(window.innerWidth <= 768);
    const currentView = ref('grid');
    const hasMore = ref(true);
    const showTopButton = ref(false);
    let wishlistTimer: number | null = null;
    let observer: IntersectionObserver | null = null;

    const wishlistService = useWishlistService();

    const visibleMovieGroups = computed(() => {
      return movies.value.reduce<Movie[][]>((resultArray, item, index) => {
        const groupIndex = Math.floor(index / rowSize.value);
        if (!resultArray[groupIndex]) {
          resultArray[groupIndex] = [];
        }
        resultArray[groupIndex].push(item);
        return resultArray;
      }, []);
    });

    const setupIntersectionObserver = () => {
      observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && !isLoading.value && hasMore.value) {
              fetchMovies();
            }
          },
          { rootMargin: '100px', threshold: 0.1 }
      );

      if (loadingTrigger.value) {
        observer.observe(loadingTrigger.value);
      }
    };

    const fetchMovies = async () => {
      if (isLoading.value || !hasMore.value) return;

      isLoading.value = true;
      try {
        const url = props.genreCode === "0"
            ? 'https://api.themoviedb.org/3/movie/popular'
            : 'https://api.themoviedb.org/3/discover/movie';

        const params: any = {
          api_key: props.apiKey,
          language: 'ko-KR',
          page: currentPage.value,
          per_page: 10
        };

        if (props.genreCode !== "0") {
          params.with_genres = props.genreCode;
        }

        const response = await axios.get<APIResponse>(url, { params });
        const newMovies = response.data.results;

        if (newMovies.length > 0) {
          let movieArray = [...movies.value, ...newMovies];

          if (props.sortingOrder !== 'all') {
            movieArray = movieArray.filter((movie) =>
                movie.original_language === props.sortingOrder
            );
          }

          movieArray = movieArray.filter((movie) => {
            if (props.voteAverage === -1) return true;
            if (props.voteAverage === -2) return movie.vote_average <= 4;
            return movie.vote_average >= props.voteAverage &&
                movie.vote_average < props.voteAverage + 1;
          });

          movies.value = movieArray;
          currentPage.value++;
        } else {
          hasMore.value = false;
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        isLoading.value = false;
      }
    };

    const getImageUrl = (path: string): string => {
      return path ? `https://image.tmdb.org/t/p/w300${path}` : '/placeholder-image.jpg';
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth <= 768;
      if (gridContainer.value) {
        const containerWidth = gridContainer.value.offsetWidth;
        const movieCardWidth = isMobile.value ? 100 : 300;
        const horizontalGap = isMobile.value ? 10 : 15;
        rowSize.value = Math.floor(containerWidth / (movieCardWidth + horizontalGap));
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      showTopButton.value = scrollTop > 300;
    };

    const scrollToTopAndReset = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      resetMovies();
    };

    const resetMovies = () => {
      movies.value = [];
      currentPage.value = 1;
      hasMore.value = true;
      fetchMovies();
    };

    const toggleWishlist = (movie: Movie) => {
      if (wishlistTimer) {
        clearTimeout(wishlistTimer);
      }
      wishlistTimer = window.setTimeout(() => {
        wishlistService.toggleWishlist(movie);
      }, 800);
    };

    const isInWishlist = (movieId: number): boolean => {
      return wishlistService.isInWishlist(movieId);
    };

    onMounted(() => {
      setupIntersectionObserver();
      fetchMovies();
      handleResize();
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (observer) {
        observer.disconnect();
      }
      if (wishlistTimer) {
        clearTimeout(wishlistTimer);
      }
    });

    watch([() => props.sortingOrder, () => props.voteAverage], () => {
      resetMovies();
    });

    return {
      gridContainer,
      loadingTrigger,
      visibleMovieGroups,
      hasMore,
      showTopButton,
      getImageUrl,
      scrollToTopAndReset,
      toggleWishlist,
      isInWishlist,
    };
  },
});
</script>

<style scoped>
/* 여기에 필요한 스타일을 추가하세요 */
</style>