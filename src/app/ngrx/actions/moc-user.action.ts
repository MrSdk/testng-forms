import { MocUser } from "./../../shared/model/moc-user.model";
import { Action } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

export const CREATE = "[moc-user] CREATE";
export const GETBYID = "[moc-user] GET-BY-ID";

export class Create implements Action {
    readonly type = CREATE;

    constructor( public payload: MocUser ){  }
}

export class GetById implements Action {
    readonly type = GETBYID;

    constructor( public payload: number ){  }
}

export type Actions = Create | GetById;