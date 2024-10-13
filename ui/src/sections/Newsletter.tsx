import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const NewsLetter: React.FC = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle email subscription logic here

        // Show the pop-up
        setIsPopupVisible(true);
    };

    const handleClosePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Unlock Smarter Workflows with AI
                            </h2>
                            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                Join our exclusive community and stay ahead with the latest updates on how our survey app is transforming productivity!
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <form className="flex space-x-2" onSubmit={handleSubmit}>
                                <Input type="email" placeholder="Enter your email" required />
                                <Button type="submit">Subscribe</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pop-up Modal */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h3 className="text-lg font-bold mb-4">Thank you for subscribing!</h3>
                        <p className="text-gray-700">You're now subscribed to our newsletter.</p>
                        <Button className="mt-4" onClick={handleClosePopup}>
                            Close
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default NewsLetter;
