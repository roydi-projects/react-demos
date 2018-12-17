export const GET_PRODUCTS = 'GET_PRODUCTS';
export const BUY_PRODUCT = 'BUY_PRODUCT;'
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export function getProducts() {
    return {
        type: GET_PRODUCTS,
    };
}

export function buyProduct(productId = 0) {
    return {
        type: BUY_PRODUCT,
        payload: {
            productId,
        },
    };
}

export function addProduct(newProduct) {
    return {
        type: ADD_PRODUCT,
        payload: {
            product: newProduct,
        },
    };
}

export function deleteProduct(productId = 0) {
    return {
        type: DELETE_PRODUCT,
        payload: {
            productId,
        },
    };
}

export function editProduct(productToEdit) {
    return {
        type: EDIT_PRODUCT,
        payload: {
            product: productToEdit,
        },
    };
}