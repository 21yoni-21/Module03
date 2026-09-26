import {
  createContext,
  useState,
} from "react";

export const AuthContext =
  createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] =
    useState(false);

  async function login(phone) {
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    setUser({
      phone,
    });

    setLoading(false);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;