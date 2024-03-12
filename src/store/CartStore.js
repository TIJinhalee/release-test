import { create } from "zustand";
import { devtools } from 'zustand/middleware';

export const CartStore = create(devtools((set)=>({
    cartList: [],
    productsList: [],

    setProductsList: (products) => set({ productsList: products }),

    // 상품 갯수 조정
    countItem: (id, quantity)=> set((state)=> ({
        cartList: state.cartList.map((el)=> el.id === id ? { ...el, quantity: quantity} : el)
    })),

    // 카트에 상품 추가
    addItemToCart: (id) => set((state) => ({
        cartList: [...state.cartList, {
            id: id,
            quantity: 1
        }]
    })),
    // 카트에서 상품 제거
    removeFromCart: (id)=> set((state) => ({
        cartList: state.cartList.filter((p) => p.id !== id)
    })),
})))


