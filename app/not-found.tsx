import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-gray-800">
      <h1 className="text-3xl font-bold sm:text-4xl">404 - Page Not Found</h1>
      <p className="mt-4 sm:text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-3xl bg-backgroundb px-5 py-2 text-backgroundw hover:scale-[.97] hover:shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
