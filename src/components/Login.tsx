// @/components/Login.tsx
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type Props = {
  error?: string;
  callbackUrl?: string;
};

const Login: React.FC<Props> = ({ error, callbackUrl }) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result && !result.error) {
      router.push(callbackUrl || "/"); // Redirect to homepage or specified callback URL after successful login
    } else {
      console.error("Failed to sign in:", result?.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
