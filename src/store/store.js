import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    itemsInCart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItemInCart: (state, action) => {
            const { id, doughs, sizes, price, title, img } = action.payload.items;
            
            // Поиск объекта по критериям id, doughs и sizes
            const index = state.itemsInCart.findIndex(item => {
                return item.id === id && item.doughs === doughs && item.sizes === sizes;
            });
            
            if (index === -1) {
                // Если объекта с такими критериями нет, добавьте его с count = 1 и сохраните price и title
                state.itemsInCart.push({ id, doughs, sizes, count: 1, price, title, img });
            } else {
                // Если объект существует, увеличьте count на 1
                state.itemsInCart[index].count += 1;
            }
        },
        
        
        

        incrementPizzaCount: (state, action) => {
            const { id, pizzaDough, pizzaSize } = action.payload.info;
        
            const updatedItems = state.itemsInCart.map(item => {
                if (item.id === id && item.doughs === pizzaDough && item.sizes === pizzaSize) {
                    // Увеличиваем счетчик только для выбранного элемента
                    return { ...item, count: item.count + 1 };
                }
                return item;
            });
        
            state.itemsInCart = updatedItems;
        },
        
        
        decrementPizzaCount: (state, action) => {
            const { id, pizzaDough, pizzaSize } = action.payload.info;
        
            const updatedItems = state.itemsInCart.map(item => {
                if (item.id === id && item.doughs === pizzaDough && item.sizes === pizzaSize) {
                    if(item.count === 1){

                    }
                    else{
                        // Уменьшаем счетчик только для выбранного элемента
                        return { ...item, count: item.count - 1 };
                    }
                }
                return item;
            });
        
            state.itemsInCart = updatedItems;
        },
        deleteItem: (state, action) => {

            const { id, pizzaDough, pizzaSize } = action.payload.info

            const updatedItems = state.itemsInCart.filter((item) => {
                if(item.id === id && item.doughs === pizzaDough && item.sizes === pizzaSize){

                }
                else{
                    return item
                }
            })

            state.itemsInCart = updatedItems
        },
        setPizzaPrice: (state, action) => {
            const updatedPrice = action.payload
            state.totalPrice = updatedPrice
        },
        deleteAllItems: (state) => {
            state.itemsInCart = []
        }
        
    }
})

export const { setItemInCart, incrementPizzaCount, decrementPizzaCount, deleteItem, setPizzaPrice, deleteAllItems } = cartSlice.actions


export default cartSlice.reducer