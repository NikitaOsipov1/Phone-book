import * as actions from './actions';
import {Dispatch} from "redux";

export const getPhoneThunk = (id: string) => async (dispatch: Dispatch) => {
    try{
        dispatch(actions.getPhoneRequest())
    }catch (e){
        dispatch(actions.getPhoneError(e as Error))
    }
}
