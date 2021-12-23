import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/store/types";
import {useCallback} from "react";
import {getPhoneThunk} from '../redux/thunks'

export const usePhone = () => {
    const dispatch = useDispatch();
    const phonesState = useSelector((state: RootState) => state.phones.phones);

    const onGetPhone = useCallback((email: string, _password: string) => {
        dispatch(getPhoneThunk(email));
    }, [dispatch])

    return {
        ...phonesState,
        onGetPhone
    }
}
