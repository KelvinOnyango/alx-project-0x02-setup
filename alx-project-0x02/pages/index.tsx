// pages/index.tsx
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../components/layout/Header";

const RootPage: React.FC = () => {
  const router = useRouter();

  // Redirect to home page automatically
  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 mt-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Redirecting...
        </h1>
        <p className="text-lg text-gray-600">
          You will be redirected to the Home page shortly.
        </p>
      </main>
    </div>
  );
};

export default RootPage;
