"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
    const { data: session } = useSession();

    return (
        <div>
            <h1>GeeksforGeeks</h1>

            {session ? (
                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            ) : (
                <button onClick={() => signIn("google")}>
                    Sign In with Google
                </button>
            )}
        </div>
    );
}