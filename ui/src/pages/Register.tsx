import RegisterPage from "@/components/authentication/register-form";
import Header from "@/components/Header";
import React from "react";
const RegisterFormPage: React.FC = () => {
    return <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4">
           <RegisterPage/>
            
        </main>
        
    </div>;
};
export default RegisterFormPage;