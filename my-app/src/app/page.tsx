import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>GBCS Frontend Coding Challenge</title>
        <meta
          name="description"
          content="A simple coding challenge for new hires."
        />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to the GBCS Frontend Coding Challenge
        </h1>
        <p className="mb-4">
          Your task is to create a to-do list component using the `useState` and
          `useEffect` hooks.
        </p>
        <Link href="/todo-list" className="text-blue-500 underline">
          Go to the To-Do List Component
        </Link>
      </main>
    </div>
  );
};

export default Home;
