<template>
  <Container>
    <Typography variant="h4" gutterBottom>
      Categories
    </Typography>
    <Grid container spacing= {2}>
      <Grid item v-for="category in categories" :key="category.id" xs= {12} md= {4}>
        <Card>
          <CardMedia
            :image="category.imageUrl"
            title="Category Image"
            style="height: 140px;"
          />
          <CardContent>
            <Typography variant="h5" component="div">
              {{ category.name }}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" @click="goToCategory(category.id)">View Products</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  </Container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import StoreService from '../api/storeService/StoreService';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';

export default defineComponent({
  name: 'CategoryList',
  setup() {
    const categories = ref([]);
    const router = useRouter();
    const storeService = new StoreService();

    const fetchCategories = async () => {
      categories.value = await storeService.getCategories();
    };

    const goToCategory = (categoryId: number) => {
      router.push(`/categories/${categoryId}`);
    };

    onMounted(() => {
      fetchCategories();
    });

    return {
      categories,
      goToCategory
    };
  }
});
</script>
