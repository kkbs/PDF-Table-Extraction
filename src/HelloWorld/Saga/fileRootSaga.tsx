import * as constants from '../Actions/fileActions';
import { all, takeLatest } from 'redux-saga/effects';
import { getFileContents } from './fileSaga';

export default function* groupsRootSaga() {
    yield all([
        takeLatest(constants.GEFILECONTENTS, getFileContents)
    ]);
}