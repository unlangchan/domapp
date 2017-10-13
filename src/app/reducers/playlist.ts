import { createSelector } from 'reselect';
import { PlayList } from '../models/playlist';
import * as playlist from '../actions/playlist';

export const initialState: PlayList = null;

export type State = PlayList;
/**
 * 状态控制
 */
export function reducer(state = initialState, action: playlist.Actions): State {
    switch (action.type) {

        case playlist.LOAD: {
            const playlist = action.payload;
            return playlist;
        }

        default: {
            return state;
        }
    }
}

/**
 * 状态选择器
 */

export const getTracks = (state: State) => state.tracks;

// export const getSelected = createSelector(getTracks, getSelectedId, (entities, selectedId) => {
//     return entities[selectedId];
// });