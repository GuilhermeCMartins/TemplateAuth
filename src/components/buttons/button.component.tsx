"use client";

import { signIn, signOut } from "next-auth/react";
import { Button, Link } from "./style";


export const LoginButton = () => {
  return (
    <Button onClick={() => signIn()}>
      Sign in
    </Button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" style={{ marginRight: 10 }}>
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <Button onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};

export const ProfileButton = () => {
  return <Link href="/dashboard">Profile</Link>;
};
