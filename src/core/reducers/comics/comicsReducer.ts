import { SET_COMICS } from "../../actions/comics/comicsAction"
import { IState } from "../../interfaces/state";

const initialState: IState = {
    comics: undefined
}

export default (state = initialState, action: any) => {
    switch(action.type) {
        case SET_COMICS:
            const { comics } = action;
            return {...state, comics: comics};
        default:
            return state;
    }
}