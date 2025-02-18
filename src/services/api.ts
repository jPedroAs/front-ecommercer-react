import axios from 'axios'

const api = axios.create({
    baseURL:"https://api-gateway-pay.onrender.com",
    headers: {
        'Content-Type': 'application/json', // Garante que o tipo de conteúdo seja JSON
    }
})

export default api 