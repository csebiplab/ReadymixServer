"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href={"/sign-up"}>
                <Button>Sign Up</Button>
            </Link>
            <Link href={"/sign-in"}>
                <Button>Sign in</Button>
            </Link>
            <Link href={"/seo-credentials"}>
                <Button>Seo Credentials</Button>
            </Link>
        </main>
    );
}
