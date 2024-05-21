import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CategoryList from '@/components/CategoryList.vue';
import ProductList from '@/components/ProductList.vue';
import ProductDetails from '@/components/ProductDetails.vue';
import ShoppingCart from '@/components/ShoppingCart.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: CategoryList },
  { path: '/categories/:categoryId', component: ProductList },
  { path: '/products/:productId', component: ProductDetails },
  { path: '/cart', component: ShoppingCart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
