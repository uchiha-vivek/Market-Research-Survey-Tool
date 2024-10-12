import GeminiChat from "@/api-components/survey-form";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const SurveyFormPage: React.FC = () => {
    return <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4">
            <GeminiChat/>
            
        </main>
        <Footer/>
    </div>;
};

export default SurveyFormPage;