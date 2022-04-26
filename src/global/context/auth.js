import React, { useState } from 'react';

const AuthContext = React.createContext({
   token: '',
   isLoggedIn: false,
   isAdminLoggedIn: false,
   login: function (token) { },
   logout: function () { },
   setIsAdmin: function () { }
});

export function AuthContextProvider(props) {
   const [token, setToken] = useState(null);
   const [isAdmin, setIsAdmin] = useState(false);

   const isLoggedIn = !!token;
   const isAdminLoggedIn = !!token && isAdmin;

   function login(token) {
      setToken(token);
   }

   function logout() {
      setToken(null);
   }

   const value = { token, isLoggedIn, isAdminLoggedIn, login, logout, setIsAdmin };

   return (
      <AuthContext.Provider value={value}>
         {props.children}
      </AuthContext.Provider>
   );
}

export default AuthContext;
