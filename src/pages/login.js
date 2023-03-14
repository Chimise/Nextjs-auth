import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Input from "@/components/Input";
import request from "@/utils/request";
import useAuth from "@/hooks/useAuth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    try {
      const data = await request("/api/login", {
        method: "POST",
        body: {
          email,
          password,
        },
      });
      login(data);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-[350px] p-4 bg-slate-100">
        <form onSubmit={handleSubmit} className="w-full space-y-2">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <Button type="submit">Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
