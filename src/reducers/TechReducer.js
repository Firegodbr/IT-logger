import {
    GET_TECHS,
    ADD_TECH,
    SET_LOADING,
    TECH_ERROR,
    DELETE_TECH
} from "../actions/types";

const initialState = {
    techs: null,
    loading: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TECHS:
            return {
                ...state,
                techs: action.payload,
                loading: false
            };
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            };
        case DELETE_TECH:
            return {
                ...state,
                techs: state.techs.filter(tech => tech.id !== action.payload),
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case TECH_ERROR:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
