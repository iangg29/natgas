import axios, { AxiosResponse } from "axios";

const AuthActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIl",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
};

const LoginAuthAction = (
  credentials: { email: string; password: string },
  navigate: any,
) => {
  return async (dispatch: any) => {
    try {
      await axios
        .post(process.env.REACT_APP_LOGIN_URL, credentials, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res: AxiosResponse) => {
          const { data } = res;
          if (data.status === "success") {
            dispatch({
              type: AuthActionType.LOGIN_SUCCESS,
              payload: data,
            });
            // axios.get(`/user/me`).then((res: AxiosResponse) => {
            //   const user = res.data.data.user;
            //   if(user.verified === 0){
            //     navigate("/app/profile/me");
            //   }

            //   else{
            //     navigate("/app/dashboard");
            //   }
             
              
            // })
            navigate("/app/dashboard");
            
            
          } else {
            dispatch({
              type: AuthActionType.LOGIN_FAIL,
              payload: data,
            });
          }
        })
        .catch((error) => {
          dispatch({
            type: AuthActionType.LOGIN_FAIL,
            payload: error.response.data.error,
          });
        });
    } catch (error: any) {
      console.trace(error);
      if (error.response.data.error) {
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.data.error,
        });
      }
    }
  };
};

const LogoutAuthAction = (navigate: any) => {
  return (dispatch: any) => {
    navigate("/");
    dispatch({
      type: AuthActionType.LOGOUT_SUCCESS,
      payload: {},
    });
  };
};

export { AuthActionType, LoginAuthAction, LogoutAuthAction };
