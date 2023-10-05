import { makeAutoObservable } from "mobx";

class CartStore {
    cartItems = [];

    constructor() {
        makeAutoObservable(this);
    }
    addItem(item) {
        this.cartItems.push(item);
    }
    removeItem(id) {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);
    }
    getTotalPrice() {
        return this.cartItems.reduce((total, item) => total + Number(item.price), 0);
    }
}
export default new CartStore();