import { STORE_USER, DELETE_USER } from "../actions/actionsTypes";
import createReducer from '../../../reducers/create-reducer'

export const initialState = {}

const user = createReducer(initialState, {
    [STORE_USER]: (state, action) => action.payload.user,
    [DELETE_USER]: (state, action) => initialState
})

export default user