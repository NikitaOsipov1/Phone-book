import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {loginUser, logoutUser} from '../redux/actions'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators({loginUser, logoutUser}, dispatch)
}
