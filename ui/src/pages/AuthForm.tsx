import MyForm from "@/components/authentication/auth-form";

import Header from "@/components/Header";
import React from "react";

const AuthFormPage: React.FC = () => {
    return <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex mt-10 flex-col items-center mx-auto w-full max-w-7xl px-4">
             <MyForm/>
            
        </main>
        
    </div>;
};

export default AuthFormPage;