"use client";
import React, { useContext } from "react";
import { TokenContext } from "@/app/context/tokenContext";

function LogoutButton() {
  const { token, setToken } = useContext(TokenContext);

  const logout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    // Update the token state
    setToken(null);
    // Redirect to login page
    window.location.href = "/";
  };

  return <button onClick={logout}>Logout</button>;
}

export default LogoutButton;
