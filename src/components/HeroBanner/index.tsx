import React from 'react';
import { heroBannerData } from './data';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner = () => {
    return (
        <section className='relative flex flex-col md:flex-row min-h-[620px] text-white overflow-hidden'>
            {/* Background images */}
            {/* Mobile background (Red/Purple) */}
            <div className="absolute inset-0 z-0 md:hidden bg-banner-mobile bg-cover bg-center">
                {/* FIFA logo on mobile */}
                <div className='absolute bottom-4 right-4 z-10'>
                    <Image
                        src={heroBannerData.images.leftBackground ?? '/default-logo.png'}
                        alt="FIFA 26 Logo"
                        width={90}
                        height={100}
                        objectFit="contain"
                    />
                </div>
            </div>

            {/* Mobile background (Player image) */}
            <div className="absolute top-[40%] sm:top-[35%] w-full h-[60%] sm:h-[65%] z-0 md:hidden bg-banner-bg bg-cover bg-center"></div>

            {/* Desktop background */}
            <div className="hidden md:flex absolute inset-0 z-0">
                <Image
                    src={heroBannerData.images?.fullBackground ?? '/default-background.jpg'}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 md:py-0">
                {/* The main layout container. We'll use flex-col for small screens and change to flex-row for medium screens and up. */}
                <div className="flex flex-col md:flex-row h-full">

                    {/* Left side content (This will be on top for small screens) */}
                    <div className="flex flex-col justify-start md:justify-center md:h-full md:w-1/2 p-4 md:p-12 text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                            {heroBannerData.title}
                        </h1>
                        <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-full md:max-w-lg mx-auto md:mx-0 font-medium">
                            {heroBannerData.description}
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                            {heroBannerData.buttons.map((button) => (
                                <Link
                                    key={button.action}
                                    href="#" // Replace with actual links
                                    className={`px-6 py-3 font-semibold text-white bg-black hover:bg-gray-800 transition text-lg shadow-lg ${button.variant}`}
                                >
                                    {button.text}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right side section will be placed here to show up below the left section on small screens */}
                    {/* Add your right section content here. */}
                    {/* For example: */}
                    <div className="md:w-1/2 md:flex md:justify-end md:items-center p-4">
                        {/* You would place the content for your right section here */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
