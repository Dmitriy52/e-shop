<template>
  <div id="app">
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" style="flex-grow: 1">
          Ecwid Store
        </Typography>
        <Badge badgeContent="cartCount" color="secondary">
          <ShoppingCartIcon @click="goToCart" />
        </Badge>
      </Toolbar>
    </AppBar>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from './state';
import { AppBar, Toolbar, Typography, Badge } from '@mui/material';
import ShoppingCartIcon from './components/ShoppingCart.vue';

export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter();
    const cartStore = useCartStore();

    const goToCart = () => {
      router.push('/cart');
    };

    return {
      cartCount: cartStore.itemCount,
      goToCart
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
