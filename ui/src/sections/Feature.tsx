import React from "react";
import FeatureCard from "@/components/FeatureCard";
import { Zap,Shield,Sparkles } from "lucide-react";

const Feature:React.FC = () => {
    return (
        <>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-10 w-10 mb-4 text-primary" />}
            title="Lightning Fast"
            description="Process tasks at unprecedented speeds, saving you valuable time."
          />
          <FeatureCard
            icon={<Shield className="h-10 w-10 mb-4 text-primary" />}
            title="Secure & Private"
            description="Your data is protected with state-of-the-art encryption and privacy measures."
          />
          <FeatureCard
            icon={<Sparkles className="h-10 w-10 mb-4 text-primary" />}
            title="Intelligent Insights"
            description="Gain valuable insights from your data with our advanced AI algorithms."
          />
        </div>
      </div>
    </section>
        
        </>
    )
}
export default Feature