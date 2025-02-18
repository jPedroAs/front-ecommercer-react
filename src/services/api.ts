import axios from 'axios'

const api = axios.create({
    baseURL:"/api",
    headers: {
        'Content-Type': 'application/json', // Garante que o tipo de conteúdo seja JSON
    }
})

export default api 