import { fileActions } from '../Actions/fileActions';
import ExternalApi from '../../Utils/externalApi';
import { call, put } from 'redux-saga/effects';
import * as constants from '../Actions/fileActions';
import { Paragraph } from '../state/fileState';

export function* getFileContents(actions: fileActions) {
    try {
        var apiParameters = {
            url: 'http://13.127.162.123/app/getsentences?input=' + actions.payload,
            method: 'GET'
        };
        let response = yield call(ExternalApi.Api, apiParameters);
        let parsed = response.data['sentences'] as Paragraph[];
        
        yield put({ type: constants.GEFILECONTENTS_SUCCESS, payload: parsed });

    } catch (e) {
        var snackbarState = {
            display: true,
            prompt: 'Oops!! Something went wrong'
        };
        yield put({ type: constants.GEFILECONTENTS_FAILURE, payload: snackbarState });
    }
}