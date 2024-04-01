import {
    API_FAIL,
    API_SUCCESS,
    GET_KPI_DATA,
    GET_MAIN_CHART_DATA,
    GET_PROGRESS_BAR_DATA,
    RESET_DASHBOARD_DATA
} from "./actionTypes";

const INIT_STATE = {
    mainChartData: null,
    progressBarData: [],
    kpiData: [],
};

const Dashboard = (state = INIT_STATE, action) => {
    switch (action.type) {
        case API_SUCCESS:
            switch (action.payload.actionType) {
                case GET_MAIN_CHART_DATA:
                    return {
                        ...state,
                        mainChartData: action.payload.data
                    };
                case GET_PROGRESS_BAR_DATA:
                    return {
                        ...state,
                        progressBarData: action.payload.data
                    };
                case GET_KPI_DATA:
                    return {
                        ...state,
                        kpiData: action.payload.data
                    };
                default:
                    return state;
            }
        case API_FAIL:
            switch (action.payload.actionType) {
                case GET_MAIN_CHART_DATA:
                    return {
                        ...state,
                        chartsDataError: action.payload.error
                    };
                case GET_PROGRESS_BAR_DATA:
                    return {
                        ...state,
                        progressBarData: []
                    };
                case GET_KPI_DATA:
                    return {
                        ...state,
                        kpiData: []
                    };
                default:
                    return state;
            }
        case RESET_DASHBOARD_DATA:
            return {
                ...state,
                progressBarData: [],
                kpiData: [],
            };
        default:
            return state;
    }
}


export default Dashboard;