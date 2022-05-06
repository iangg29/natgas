import axios from "axios";
import { AuthActionType } from "../actions/auth.action";

const authState = {
  isLoggedIn: false,
  user: {
    email: "",
    name: "",
    lastname: "",
    vacations: 0,
    ngBlocks: 0,
    number: 0,
    verified: false,
    rfc: "",
    birthdate: "",
    cellphone: 0,
    address: "",
    gender: "",
    contractdate: "",
    roles: [],
    created_at: "",
    updated_at: "",
  },
  token: "",
};

const getAuthState = () => {
  const auth: any = localStorage.getItem("auth");
  try {
    const authObj = JSON.parse(auth);
    const { token } = authObj;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return authObj;
  } catch (error) {
    return authState;
  }
};

const newAuth = getAuthState();

const authReducer = (state: any = newAuth, action: any) => {
  switch (action.type) {
    case AuthActionType.LOGIN_SUCCESS:
      const loginAuthState = {
        isLoggedIn: true,
        user: action.payload.data.user,
        token: action.payload.token,
      };
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${action.payload.token}`;
      localStorage.setItem("auth", JSON.stringify(loginAuthState));
      return loginAuthState;
    case AuthActionType.LOGOUT_SUCCESS:
      localStorage.removeItem("auth");
      return authState;
    default:
      return state;
  }
};

export default authReducer;
