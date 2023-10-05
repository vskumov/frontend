const initialState = {
    products: [
        {
            id: 1,
            name: 'iPhone 15',
            price: '1199 euro'
        },
        {
            id: 2,
            name: 'iPad Pro',
            price: '899 euro'
        },
        {
            id: 3,
            name: 'MacBook Air',
            price: '1299 euro'
        },
        {
            id: 4,
            name: 'Apple Watch Series 8',
            price: '499 euro'
        },
        {
            id: 5,
            name: 'AirPods Pro',
            price: '249 euro'
        }
    ],
    cartList: [],
};


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CART_ADD":
            const addedItem = state.products.find((item) => item.id === action.payload);
            let item;

            const itemFromCart = state.cartList.find((item) => item.id === action.payload);


            if (itemFromCart) {
                console.log(addedItem);
                item = { ...addedItem, quantity: itemFromCart.quantity + 1 };
                const newCartList = state.cartList.filter((item) => item.id !== action.payload);
                return { ...state, cartList: [...newCartList, item] };
            } else {
                item = { ...addedItem, quantity: 1 };
                return { ...state, cartList: [...state.cartList, item] };
            }

        case "CART_DELETE":
            const newCartList = state.products.filter((item) => item.id !== action.payload)
            return { ...state, cartList: newCartList };
        default:
            return state;
    }
}