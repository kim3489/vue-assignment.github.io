<template>
  <movie-wishlist />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { useWishlistService } from '@/util/auth/wishlist.service';
import { Movie } from '@/models/types';

export default defineComponent({
  name: 'HomeWishlist',
  setup() {
    const wishlistService = useWishlistService();
    const wishlistMovies = ref<Movie[]>([]);

    const updateVisibleMovies = () => {
      // visibleWishlistMovies 업데이트 로직
    };

    watch(() => wishlistService.wishlist.value, (newWishlist) => {
      wishlistMovies.value = newWishlist;
      updateVisibleMovies();
    }, { immediate: true });

    const toggleWishlist = (movie: Movie) => {
      wishlistService.toggleWishlist(movie);
    };

    onMounted(() => {
      wishlistService.loadWishlist();
    });

    return {
      wishlistMovies,
      toggleWishlist,
      isInWishlist: wishlistService.isInWishlist,
      // 기타 필요한 메서드와 속성
    };
  }
});
</script>

<style scoped>
/* 컴포넌트별 스타일을 여기에 추가하세요 */
</style>