import { GOALS} from "../constant/constants";
import { ActionType } from "redux-promise-middleware";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const GOALS_PENDING = `${GOALS}_${ActionType.Pending}`;
const GOALS_FULFILLED = `${GOALS}_${ActionType.Fulfilled}`;
const GOALS_REJECTED = `${GOALS}_${ActionType.Rejected}`;

const goalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOALS_PENDING:
        return {
            ...state,
            loading: true,
        };
        case GOALS_FULFILLED:
        return {
            ...state,
            loading: false,
            data: action.payload,
        };
        case GOALS_REJECTED:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
};

export default goalsReducer;
