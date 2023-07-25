"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "../buttons/button.component";

export default function Navbar(){
    const { data } = useSession();

    return (
        <>
            <div>
                <Link href="/home"></Link>
            </div>
            <div>
                {data ? <>Bem vindo, {data.user.name} <ProfileButton/> <LogoutButton/></> : <><RegisterButton/> <LoginButton/></>}
            </div>
        </>
    )
}