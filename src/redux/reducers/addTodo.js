import { ADDTODO } from "../constant/constants";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const ADDTODO_PENDING = `${ADDTODO}_${ActionType.Pending}`;
const ADDTODO_FULFILLED = `${ADDTODO}_${ActionType.Fulfilled}`;
const ADDTODO_REJECTED = `${ADDTODO}_${ActionType.Rejected}`;

const addTodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO_PENDING:
        return {
            ...state,
            loading: true,
        };
        case ADDTODO_FULFILLED:
        return {
            ...state,
            loading: false,
            data: action.payload,
        };
        case ADDTODO_REJECTED:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default addTodoReducer;
