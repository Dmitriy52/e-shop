<template>
  <Container>
    <Typography variant="h4" gutterBottom>
      Products
    </Typography>
    <Grid container spacing= {2}>
      <Grid item v-for="product in products" :key="product.id" xs= {12} md= {4}>
        <Card>
          <CardMedia
            :image="product.imageUrl"
            title="Product Image"
            style="height: 140px;"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {{ product.name }}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {{ product.price | currency }}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" @click="goToProduct(product.id)">View Details</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import StoreService from '../api/storeService/StoreService';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

export default defineComponent({
  name: 'ProductList',
  setup() {
    const products = ref([]);
    const route = useRoute();
    const router = useRouter();
    const storeService = new StoreService();

    const fetchProducts = async () => {
      const categoryId = Number(route.params.categoryId);
      products.value = await storeService.getCategoryProducts(categoryId);
    };

    const goToProduct = (productId: number) => {
      router.push(`/products/${productId}`);
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      goToProduct
    };
  }
});
</script>
