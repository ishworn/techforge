import React from 'react';
import Image from 'next/image';

import { Button } from "@/utils/button";

// CSS
import style from "./hero.module.css";

function Hero() {
    return (
        <section>
            {/* Hero Section */}
            <div className="min-h-max bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center text-center px-4 pt-12 pb-48 relative">
                
                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Transform your ideas
                        <br />
                        into reality
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Build and deploy your next project with our powerful platform.
                        Join thousands of developers creating amazing experiences.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="px-8 py-4 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold rounded-md transition-colors">
                            Get started
                        </Button>
                        <Button className="px-8 py-4 text-white hover:bg-gray-700 font-semibold rounded-md transition-colors">
                            Request a demo
                        </Button>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className={`${style.cards} absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-32`}>
                <Image
                    src="/Images/Photo/imgHero.png"
                    alt="hero"
                    className="w-full h-full"
                    width={700}
                    height={300}
                />
            </div>
        </section>
    );
}

export default Hero;
