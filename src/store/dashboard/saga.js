import {call, put, takeEvery} from "redux-saga/effects";
import {apiFail, apiSuccess} from "./actions";
import {GET_CLASSES_DATA} from "./actionTypes"
import {getAllClassesService} from "../../services/dashboard/dashboardService";


function* getMainChartAndGridData(){
    try {
        const response = yield call(getAllClassesService);
        yield put(apiSuccess(GET_CLASSES_DATA, response));
    } catch (error) {
        yield put(apiFail(GET_CLASSES_DATA));
    }
}


function* dashboardSaga() {
    yield takeEvery(GET_CLASSES_DATA, getMainChartAndGridData);
}

export default dashboardSaga;
