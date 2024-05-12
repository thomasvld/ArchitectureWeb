"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { TokenContext } from "@/app/context/tokenContext";


export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  //const { setToken } = useContext{ TokenContext }
  const router = useRouter();

  const submitData = async (e: React.SyntheticEvent, action: string) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
    try {
      const body = { name, email, password, action };
      const response = await fetch(`/api/auth/${action}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json()
      //setToken(data.Token)
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <center>
      <div>
        <form>
          <input
            autoFocus
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            type="text"
            value={name}
          />
          <input
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="text"
            value={email}
          />
          <input
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            type="password"
            value={password}
          />
          <button id="login" type="button" onClick={(e) => submitData(e, "Login")}>
            Login
          </button>
          <button id="register" type="button" onClick={(e) => submitData(e, "Register")}>
            Register
          </button>
        </form>
      </div>
    </center>
  );
}
