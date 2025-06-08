// pages/about.tsx
import React from "react";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const AboutPage: React.FC = () => {
  const handleClick = (buttonName: string) => {
    alert(`You clicked the ${buttonName} button!`);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 mt-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          This project demonstrates fundamental concepts of Next.js, TypeScript,
          and Tailwind CSS.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <Button
            onClick={() => handleClick("Small Rounded")}
            size="small"
            shape="rounded-full"
          >
            Small Rounded Button
          </Button>
          <Button
            onClick={() => handleClick("Medium Square")}
            size="medium"
            shape="rounded-sm"
          >
            Medium Square Button
          </Button>
          <Button
            onClick={() => handleClick("Large MD Rounded")}
            size="large"
            shape="rounded-md"
          >
            Large MD Rounded Button
          </Button>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
