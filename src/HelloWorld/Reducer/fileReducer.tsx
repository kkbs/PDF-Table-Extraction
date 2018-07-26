import FileStore from '../state/fileState';
import * as constants from '../Actions/fileActions';

export default function fileReducer(state: FileStore = {content: []}, action: any) {
    switch (action.type) {
        case constants.GEFILECONTENTS_SUCCESS: {
            return {...state, content: action.payload};
        }
        default: {
            return {...state};
        }
    }
}