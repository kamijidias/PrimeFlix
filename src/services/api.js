import axios from 'axios'

//Base da URL: https://api.themoviedb.org/3/
// URL da API: movie/550?api_key=b6cdb504d21d107919bf54662fcdba07

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;