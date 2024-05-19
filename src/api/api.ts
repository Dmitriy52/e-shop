import axios from 'axios';

class Api {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    async get(endpoint: string) {
        try {
            const response = await axios.get(`${this.baseURL}${endpoint}`);
            return response.data;
        } catch (error) {
            console.error('Ошибка при выполнении GET запроса:', error);
            throw error;
        }
    }
}

export default Api;
