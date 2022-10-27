import toast from 'react-hot-toast';
export const TURN_ON_SPINNER = "TURN_ON_SPINNER";
export const TURN_OFF_SPINNER = "TURN_OFF_SPINNER";
export const UPDATE_FILTER_STATE = "UPDATE_FILTER_STATE";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";


const signInSuccess = (token) => {
  return { type: SIGN_IN, payload: token };
};

const logoOutSuccess = () => {
  return { type: SIGN_OUT};
};

export const setSpinnerLoading = (flag) => {
  if (flag) {
    return { type: TURN_ON_SPINNER, payload: true };
  } else {
    return { type: TURN_OFF_SPINNER, payload: false };
  }
};

export const updateFilter = (payload) => (dispatch) => {
  return dispatch({
    type: UPDATE_FILTER_STATE,
    payload: payload,
  });
};

export const loginAction = (user) => {
  return async (dispatch) => {
    /* const { token, msg, role } = await postLogin(user); */

    if (user === "admin") {
      await localStorage.setItem("token", "tokenAdmin");
      await localStorage.setItem("role", "admin");
      dispatch(signInSuccess({token: "token", role: "admin"}))
      /* try {
        const jsonValue = JSON.stringify(user)
  
        await localStorage.setItem('@storage_user', jsonValue)
      } catch (e) {
        console.log("Error Storage", e)
      } */

      dispatch(signInSuccess("tokenAdmin"));
      toast.success(user, "Bienvenido a la plataforma");
    } else if (user === "JuiraUser") {
      await localStorage.setItem("token", "tokenUser");
      await localStorage.setItem("role", "user");
      dispatch(signInSuccess({token: "tokenUser", role: "user"}))
    } else {
      await localStorage.setItem("token", "");
      await localStorage.setItem("role", "");
      dispatch(logoOutSuccess());
      toast.error(undefined, "Eres un guest");
    }
  };
};

export const logoOutAction = () => {
  return async (dispatch) => {
    await localStorage.removeItem("token");
    dispatch(logoOutSuccess());
  };
};
