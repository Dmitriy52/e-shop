<template>
  <Container>
    <Typography variant="h4" gutterBottom>
      Shopping Cart
    </Typography>
    <List>
      <ListItem v-for="(item, index) in cartItems" :key="index">
        <ListItemText primary= {item.name} secondary= {item.price} />
        <Button @click="removeItem(index)" color="secondary">
          Delete
        </Button>
      </ListItem>
    </List>
    <Button variant="contained" color="primary" @click="placeOrder">
      Place Order
    </Button>
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../state';
import { Container, List, ListItem, ListItemText, Button, Typography } from '@mui/material';

export default defineComponent({
  name: 'ShoppingCart',
  setup() {
    const cartStore = useCartStore();

    const removeItem = (index: number) => {
      cartStore.removeItem(index);
    };

    const placeOrder = () => {
      alert('Congratulations on your purchase!');
      cartStore.items = [];
    };

    return {
      cartItems: cartStore.items,
      removeItem,
      placeOrder
    };
  }
});
</script>
