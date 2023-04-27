import jwtDecode from "jwt-decode";

export const is_auth = () => {
	const token = get_token();
	if (token) {
		if (is_expired(token)) {
			delete_token();
			return false;
		}
		return true;
	} else {
		return false;
	}
};

export const is_expired = (token: string) => {
	const { exp } = jwtDecode(token) as {
		exp: number;
	};
	const expire = exp * 1000;
	const timeOut = expire - Date.now();
	if (timeOut < 0) {
		return true;
	}
	return false;
};

export const delete_token = () => {
	sessionStorage.removeItem("token");
};

export const save_local = (token: string, empId: string) => {
	sessionStorage.setItem("token", token);
	sessionStorage.setItem("empId", empId);
};

export const get_token = () => {
	return sessionStorage.getItem("token");
};

export const empIdLogueado = () => {
	return Number(sessionStorage.getItem("empId"));
};
