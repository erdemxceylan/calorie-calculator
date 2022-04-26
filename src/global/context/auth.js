import React, { useState } from 'react';

const AuthContext = React.createContext({
   token: '',
   isLoggedIn: false,
   isAdminLoggedIn: false,
   login: function (token) { },
   logout: function () { }
});

export function AuthContextProvider(props) {
   const [token, setToken] = useState(null);

   const isLoggedIn = !!token;

   function login(token) {
      setToken(token);
   }

   function logout() {
      setToken(null);
   }

   return (
      <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
         {props.children}
      </AuthContext.Provider>
   );
}

export default AuthContext;
