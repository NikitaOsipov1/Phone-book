import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/store/types";
import {useCallback} from "react";
import {loginThunk, logoutThunk} from '../redux/thunks'

export const useAuth = () => {
    const dispatch = useDispatch();
    const userState = useSelector((state: RootState) => state.user);

    const onLogin = useCallback((email: string, _password: string) => {
        dispatch(loginThunk(email));
    }, [dispatch])

    const onLogout = useCallback(() => {
        dispatch(logoutThunk());
    }, [dispatch])

    return {
        ...userState,
        onLogin,
        onLogout
    }
}
