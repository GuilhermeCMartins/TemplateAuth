"use client"

import { useSession } from "next-auth/react";
export default function Dashboard() {
  const { data: session, status } = useSession();

  return (
    <>
      <h1>Dashboard</h1>
      <h2>{session?.user.name}</h2>
      <h2>{session?.user.email}</h2>
    </>
  );
}
