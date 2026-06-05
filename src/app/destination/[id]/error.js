"use client";

import { useEffect } from "react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-7xl font-bold text-red-500">Oops!</h1>

            <h2 className="text-3xl font-semibold mt-4">
                Something went wrong
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                An unexpected error occurred while loading this page.
            </p>

            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => reset()}
                    className="px-6 py-3 bg-cyan-500 text-white rounded-md"
                >
                    Try Again
                </button>

                <Link
                    href="/"
                    className="px-6 py-3 bg-gray-800 text-white rounded-md"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;