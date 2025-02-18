import axios from 'axios'

const api = axios.create({
    baseURL:"http://apisanta.sa-east-1.elasticbeanstalk.com",
    headers: {
        'Content-Type': 'application/json', // Garante que o tipo de conteúdo seja JSON
    }
})

export default api 