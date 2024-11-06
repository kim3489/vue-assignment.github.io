// URLService.ts
import axios from 'axios';
import { ref } from 'vue';

export function useURLService() {
    const fetchFeaturedMovie = async (apiKey: string) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR`);
            console.log(response.data.results[0]);
            return response.data.results[0];
        } catch (error) {
            console.error('Error fetching featured movie:', error);
        }
    };

    const getURL4PopularMovies = (apiKey: string,  number = 1) => {
        return `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${number}`;
    };

    const getURL4ReleaseMovies = (apiKey: string,  number = 2) => {
        return `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=ko-KR&page=${number}`;
    };

    const getURL4GenreMovies = (apiKey: string, genre: string,  number = 1) => {
        return `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre}&language=ko-KR&page=${number}`;
    };

    return {
        fetchFeaturedMovie,
        getURL4PopularMovies,
        getURL4ReleaseMovies,
        getURL4GenreMovies
    };
}