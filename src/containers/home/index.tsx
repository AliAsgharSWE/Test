import React from 'react'

const HomePage = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-400 font-sans">
                <h1 className="text-5xl font-bold text-gray-800 mb-4">
                    Welcome to Your Beautiful Homepage!
                </h1>
                <p className="text-lg text-gray-600 max-w-lg text-center">
                    This is a modern, responsive homepage built with React. Start building something amazing!
                </p>
                <button
                    className="mt-8 px-8 py-3 text-white bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full shadow-lg text-base font-semibold hover:scale-105 transition-transform"
                >
                    Get Started
                </button>
            </div>
        </>
    )
}

export default HomePage

