import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as any[],
    }),
    getters: {
        itemCount: (state) => state.items.length,
    },
    actions: {
        addItem(item: any) {
            this.items.push(item);
        },
        removeItem(index: number) {
            this.items.splice(index, 1);
        },
    },
});
