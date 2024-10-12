import React from "react";
import FeatureCard from "@/components/FeatureCard";
import { Zap,Shield,Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Feature:React.FC = () => {
  const navigate = useNavigate()
   const handleButtonclick = (path:string) => {
          navigate(path)
   }
    return (
        <>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-10 w-10 mb-4 text-primary" />}
            title="SurveyPedia"
            description="Generate Survey questions for your Buiseness"
             
          > <Button onClick={() => handleButtonclick("/survey-generator")}>Learn More</Button></FeatureCard>
          <FeatureCard
            icon={<Shield className="h-10 w-10 mb-4 text-primary" />}
            title="Secure & Private"
            description="Your data is protected with state-of-the-art encryption and privacy measures."
          > <Button onClick={() => handleButtonclick("SurveyPedia")}>Learn More</Button> </FeatureCard>
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 mb-4 text-primary" />}
            title="Intelligent Insights"
            description="Gain valuable insights from your data with our advanced AI algorithms."
          ><Button onClick={() => handleButtonclick("SurveyPedia")}>Learn More</Button></FeatureCard>
        </div>
      </div>
    </section>
        
        </>
    )
}
export default Feature