import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        // if this is undefined, then there is no token yet
        return userToken?.token
    };

    const [token, setToken] = useState(getToken()); // initially will be undefined, so calling useToken { token } in App will be !token

    const saveToken = userToken => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
    };

    return {
        setToken: saveToken,
        token
    };
}