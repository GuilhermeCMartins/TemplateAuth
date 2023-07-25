'use client';

import { ChangeEvent, useState } from "react";
import { handleRegister } from "../api/register/route";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const user = {
      email: formValues.email,
      password: formValues.password
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = handleRegister(user)

    if(!res){
      return;
    }

    router.push("/login")
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        rowGap: 10,
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <button
        style={{
          backgroundColor: `${loading ? "#ccc" : "#3446eb"}`,
          color: "#fff",
          padding: "1rem",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "loading..." : "Register"}
      </button>
    </form>
  );
};
