import React, { createContext, useState, useContext, useEffect } from "react";

// Create a context for the token
export const TokenContext = createContext<{
  token: string | null;
  setToken: (token: string) => void;
}>({
  token: null,
  setToken: (token: string | null) => {},
});

// Create a provider for the token context
export function TokenContextProvider({ ...props }) {
  const [token, setToken] = useState<string | null>(null);

  // Check if a token exists in local storage when the component mounts
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {props.children}
    </TokenContext.Provider>
  );
}
