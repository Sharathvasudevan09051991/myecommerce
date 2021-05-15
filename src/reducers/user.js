import { LOGGED_IN_USER } from "../actions/Types"


export default (state = null, { type, payload }) => {
    switch (type) {
    case LOGGED_IN_USER:
        return { ...state, ... payload }

    default:
        return state
    }
}
