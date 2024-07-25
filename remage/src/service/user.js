import { loginUser } from "../api/auth";


export const loginService = async (usernameInput, passwordInput, navigate, login, userType) =>{
    try {
        const response = await loginUser(usernameInput, passwordInput, userType);
        const token = response.headers['authorization'].split(' ')[1];
        const refresh_token = response.headers['refresh-token']
        login(token, refresh_token, userType);
        navigate('/')
      } catch (err) {
        alert(err.message);
      }

}
