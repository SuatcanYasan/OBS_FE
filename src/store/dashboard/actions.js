import {
    API_FAIL,
    API_SUCCESS,
    GET_KPI_DATA,
    GET_MAIN_CHART_DATA,
    GET_PROGRESS_BAR_DATA,
    RESET_DASHBOARD_DATA,
} from "./actionTypes";

export const apiSuccess = (actionType, data) => ({
    type: API_SUCCESS,
    payload: { actionType, data },
});

export const apiFail = (actionType, error) => ({
    type: API_FAIL,
    payload: { actionType, error },
});

export const resetDashboardData = () => ({
    type: RESET_DASHBOARD_DATA
});

export const getMainChartData = (data) => ({
    type: GET_MAIN_CHART_DATA,
    payload: data
});

export const getProgressBarData = (accountCode) => {
    return ({
        type: GET_PROGRESS_BAR_DATA,
        accountCode: accountCode
    });
};

export const getKpiData = (accountCode) => {
    return ({
        type: GET_KPI_DATA,
        accountCode: accountCode
    });
}

