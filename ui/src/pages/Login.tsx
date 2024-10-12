import Login from "@/components/authentication/login-form";

import Header from "@/components/Header";
import React from "react";

const LoginFormPage: React.FC = () => {
    return <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4">
             <Login/>
            
        </main>
        
    </div>;
};

export default LoginFormPage;