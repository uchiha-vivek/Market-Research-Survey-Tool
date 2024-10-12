
 
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Feature from "@/sections/Feature";
import Hero from "@/sections/Hero";
import NewsLetter from "@/sections/Newsletter";
import React from "react";




const LandingPage:React.FC = ()=> {

    return (
        <>
        <div className="flex flex-col min-h-screen" >
             <Header/>
              
              
             <main className="flex flex-col items-center mx-auto w-full max-w-7xl px-4" >
                <Hero/>
                <Feature/>
                <NewsLetter/>   
             </main>
              
             <Footer/>
        </div>
        </>
    )
}
export default LandingPage