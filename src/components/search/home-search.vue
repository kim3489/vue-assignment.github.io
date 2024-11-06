<template>
  <div class="container-search">
    <div class="container-search-bar">
      <movie-search @change-options="changeOptions"></movie-search>
    </div>
    <div class="content-search">
      <movie-infinite-scroll
          :api-key="apiKey"
          :genre-code="genreId"
          :sorting-order="sortId"
          :vote-average="ageId"
      ></movie-infinite-scroll>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import MovieSearch from '@/views/search/movie-search.vue';
import MovieInfiniteScroll from '@/views/views/movie-infinite-scroll.vue';

export default {
  name: 'HomeSearch',
  components: {
    MovieSearch,
    MovieInfiniteScroll
  },
  setup() {
    const apiKey = ref(localStorage.getItem('f908ad8e7f8d05fafc1072a51caaab1e') || '');
    const genreId = ref('28');
    const ageId = ref(-1);
    const sortId = ref('all');

    interface GenreCode {
      [key: string]: number;
      '장르 (전체)': number;
      Action: number;
      Adventure: number;
      Comedy: number;
      Crime: number;
      Family: number;
    }

    const genreCode:GenreCode = reactive({
      '장르 (전체)': 0,
      'Action': 28,
      'Adventure': 12,
      'Comedy': 35,
      'Crime': 80,
      'Family': 10751
    });

    interface SortingCode {
      [key: string]: string;
      '언어 (전체)': string;
      '영어': string;
      '한국어': string;
    }

    const sortingCode : SortingCode = reactive({
      '언어 (전체)': 'all',
      '영어': 'en',
      '한국어': 'ko'
    });

    interface AgeCode {
      [key: string]: number;
      '평점 (전체)': number;
      '9~10': number;
      '8~9': number;
      '7~8': number;
      '6~7': number;
      '5~6': number;
      '4~5': number;
      '4점 이하': number;
    }

    const ageCode:AgeCode = reactive({
      '평점 (전체)': -1,
      '9~10': 9,
      '8~9': 8,
      '7~8': 7,
      '6~7': 6,
      '5~6': 5,
      '4~5': 4,
      '4점 이하': -2
    });

    interface SearchOptions {
      originalLanguage: string;
      translationLanguage: string;
      sorting: string;
    }

    const changeOptions = (options: SearchOptions) => {
      genreId.value = `${genreCode[options.originalLanguage]}`;
      ageId.value = ageCode[options.translationLanguage];
      sortId.value = sortingCode[options.sorting];
    };

    return {
      apiKey,
      genreId,
      ageId,
      sortId,
      changeOptions
    };
  }
};
</script>

<style scoped>
.container-search {
  margin-top: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.container-search-bar {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: right;
  margin-top: 10px;
}

.content-search {
  width: 100%;
}
</style>