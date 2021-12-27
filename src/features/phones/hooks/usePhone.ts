import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/store/types";
import {useCallback} from "react";
import {getPhoneThunk} from '../redux/thunks'

export const usePhone = () => {
    const dispatch = useDispatch();
    const phonesState = useSelector((state: RootState) => state.phones.phones);

    return {
        ...phonesState
    }
}
