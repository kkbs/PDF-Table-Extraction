export const GEFILECONTENTS = 'GEFILECONTENTS';
export type GEFILECONTENTS = typeof GEFILECONTENTS;
export const GEFILECONTENTS_SUCCESS = 'GEFILECONTENTS_SUCCESS';
export type GEFILECONTENTS_SUCCESS = typeof GEFILECONTENTS_SUCCESS;
export const GEFILECONTENTS_FAILURE = 'GEFILECONTENTS_FAILURE';
export type GEFILECONTENTS_FAILURE = typeof GEFILECONTENTS_FAILURE;

export interface GetContent {
    type: GEFILECONTENTS;
    payload: number;
}

export type fileActions = GetContent;

export default class FileActions {
    public static getContent(fileId: number): GetContent {
        return {
            type: GEFILECONTENTS,
            payload: fileId
        };
    }
}