export function addItem(id) {
    return {
        type: "CART_ADD",
        payload: id,
    };
}

export function deleteItem(id) {
    return {
        type: "CART_DELETE",
        payload: id,
    };
}

