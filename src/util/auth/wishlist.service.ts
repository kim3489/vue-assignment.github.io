// src/util/movie/wishlist.service.ts
import { ref, watch } from 'vue';
import { Movie } from '@/models/types'; // Movie 타입의 정확한 경로를 확인하세요

export function useWishlistService() {
    const wishlist = ref<Movie[]>([]);

    const loadWishlist = () => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        wishlist.value = storedWishlist;
    };

    watch(wishlist, (newWishlist) => {
        localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    }, { deep: true });

    const toggleWishlist = (movie: Movie) => {
        const index = wishlist.value.findIndex(item => item.id === movie.id);
        if (index === -1) {
            wishlist.value.push(movie);
        } else {
            wishlist.value.splice(index, 1);
        }
    };

    const isInWishlist = (movieId: number): boolean => {
        return wishlist.value.some(item => item.id === movieId);
    };

    loadWishlist(); // 초기 로드

    return {
        wishlist,
        toggleWishlist,
        isInWishlist,
        loadWishlist
    };
}