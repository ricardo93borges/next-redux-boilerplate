import { STORE_USER, DELETE_USER } from "./actionsTypes";

export const storeUser = (user = {}) => ({
    type: STORE_USER,
    payload: {user:user}
})

export const deleteUser = (id = null) => ({
    type: DELETE_USER,
    payload: {'id':id}
})