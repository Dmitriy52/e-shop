<template>
  <Container>
    <Card>
      <CardMedia
        :image="product.imageUrl"
        title="Product Image"
        style="height: 300px;"
      />
      <CardContent>
        <Typography variant="h4" component="div">
          {{ product.name }}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {{ product.price | currency }}
        </Typography>
        <Typography variant="body1" paragraph>
          {{ product.description }}
        </Typography>
        <Button variant="contained" color="primary" @click="addToCart">
          Buy
        </Button>
      </CardContent>
    </Card>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../state';
import { Container, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import StoreService from '../api/storeService/StoreService';

export default defineComponent({
  name: 'ProductDetails',
  setup() {
    const product = ref<any>(null);
    const route = useRoute();
    const storeService = new StoreService();
    const cartStore = useCartStore();

    const fetchProduct = async () => {
      const productId = Number(route.params.productId);
      product.value = await storeService.getProduct(productId);
    };

    const addToCart = () => {
      if (product.value) {
        cartStore.addItem(product.value);
      }
    };

    onMounted(() => {
      fetchProduct();
    });

    return {
      product,
      addToCart
    };
  }
});
</script>
