import { LOGIN } from "../constant/constants";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const LOGIN_PENDING = `${LOGIN}_${ActionType.Pending}`;
const LOGIN_FULFILLED = `${LOGIN}_${ActionType.Fulfilled}`;
const LOGIN_REJECTED = `${LOGIN}_${ActionType.Rejected}`;

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_PENDING:
        return {
            ...state,
            loading: true,
        };
        case LOGIN_FULFILLED:
        return {
            ...state,
            loading: false,
            data: action.payload,
        };
        case LOGIN_REJECTED:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default loginReducer;
