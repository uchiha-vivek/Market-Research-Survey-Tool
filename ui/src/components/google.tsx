import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { auth, provider } from "../../config/firebase.config";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";
import LandingPage from "@/pages/LandingPage";
 

const Google: React.FC = () => {
    const [value, setValue] = useState<string>("");

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            const email = data.user?.email || "";
            setValue(email);
            localStorage.setItem("email", email);
        }).catch((error) => {
            console.error("Sign in error:", error);
        });
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem("email") || "";
        setValue(storedEmail);
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4">
                {value ? <LandingPage /> : <Button onClick={handleClick}>Sign in with Google</Button>}
            </main>
        </div>
    );
};

export default Google;
