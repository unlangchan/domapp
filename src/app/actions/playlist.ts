import { Action } from '@ngrx/store';
import { PlayList, Creator } from '../models/playlist';

export const LOAD = '[palylist] Load';

export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public payload: PlayList) { }
}

export type Actions
    = LoadAction;