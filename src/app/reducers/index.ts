import * as fromPlayList from './playlist';

export interface State {
    playlist: fromPlayList.State;
}

export  const reducers = {
    playlist: fromPlayList.reducer
};