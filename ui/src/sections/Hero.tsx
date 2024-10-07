import { Button } from "@/components/ui/button";
import React from "react";


const Hero:React.FC =() => {
    return (
        <>
        
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter mb-3 sm:text-4xl md:text-5xl lg:text-6xl/none">
            Unlock Data-Driven Insights with AI-Powered Surveys !
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Harness the power of artificial intelligence to streamline your tasks, boost productivity, and unlock new possibilities.
            </p>
          </div>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}
export default Hero