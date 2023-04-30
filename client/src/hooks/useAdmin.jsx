import {useSelector} from "react-redux";

import {selectAuthData} from "../redux/auth/selectors";
import {ROLES} from "../core/constants";

const useAdmin = () => {
	const role = useSelector(selectAuthData).role

	const isAdmin = role === ROLES.ADMIN

	return isAdmin
}

export default useAdmin