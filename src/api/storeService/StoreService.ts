import Api from '../api';

class StoreService {
    private apiService: Api;

    constructor() {
        this.apiService = new Api('https://app.ecwid.com/api/v3/storeId/categories');
    }

    async getCategories() {
        return this.apiService.get('categories');
    }

    async getCategoryProducts(categoryId: number) {
        return this.apiService.get(`categories/${categoryId}/products`);
    }

    async getProduct(productId: number) {
        return this.apiService.get(`products/${productId}`);
    }
}

export default StoreService;
