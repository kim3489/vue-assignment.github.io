import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        apiKey: process.env.VUE_APP_TMDB_API_KEY,
    },
})

export default api