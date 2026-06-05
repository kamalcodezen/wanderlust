import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-8xl font-bold text-cyan-500">404</h1>

            <h2 className="text-3xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-cyan-500 text-white rounded-md"
            >
                Back To Home
            </Link>
        </div>
    );
};

export default NotFoundPage;