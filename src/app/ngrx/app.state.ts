import { Tutorial } from "./../shared/model/tutorial.model";
import { MocUser } from "./../shared/model/moc-user.model"

export interface AppState {
    readonly tutorial: Tutorial[];
    readonly mocUser: MocUser[];
}