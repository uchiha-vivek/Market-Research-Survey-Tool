import Header from "@/components/Header";
import SurveyQuestionBuilder from "@/components/survey";
import SurveyShare from "@/components/survey-share";
import React from "react";
const SurveyQuestionPage: React.FC = () => {
    return <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4 mt-10">
           <SurveyQuestionBuilder/>
           
           <div className="mt-20" >
            <SurveyShare surveyId="123" surveyTitle="Test Survey"/>
           </div>
            
        </main>
        
    </div>;
};
export default SurveyQuestionPage;