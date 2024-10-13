import SurveyDashboard from "@/components/Dashboard";

import Header from "@/components/Header";
import React from "react";

const DashboardFormPage: React.FC = () => {
    return <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4">
              <SurveyDashboard/>
            
        </main>
        
    </div>;
};

export default DashboardFormPage;