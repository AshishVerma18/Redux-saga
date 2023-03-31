import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILED } from './actions'

const initialState = {
    loading: false,
    error: undefined,
    loginResult: []
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            console.log("reducer check",action)
            return {
                ...state,
                loginResult: action.payload
            }
        case LOGIN_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }

}