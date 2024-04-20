import {API_FAIL, API_SUCCESS, GET_CLASSES_DATA} from "./actionTypes";

const INIT_STATE = {
    classesData: [],
};

const Dashboard = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_SUCCESS:
            switch (action.payload.actionType) {
                case GET_CLASSES_DATA:
                    return {
                        ...state,
                        classesData: action.payload.data
                    };
            }
        case API_FAIL:
            switch (action.payload.actionType) {
                case GET_CLASSES_DATA:
                    return {
                        ...state,
                        classesData: []
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
}


export default Dashboard;