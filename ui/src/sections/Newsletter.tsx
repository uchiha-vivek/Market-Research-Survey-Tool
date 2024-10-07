import { Button } from "@/components/ui/button";
import React from "react";
import { Input } from "@/components/ui/input";

const NewsLetter:React.FC=() => {
    return (
        <>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the AI Revolution</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Be among the first to experience the future of AI-powered productivity. Sign up for our newsletter to stay updated.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
        
        </>
    )
}
export default NewsLetter