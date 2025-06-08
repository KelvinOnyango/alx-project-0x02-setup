import Header from "../components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Welcome to ALX Project" />
      <main className="container mx-auto p-4">
        <div className="bg-white rounded-lg shadow p-6 mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Next.js + TypeScript + Tailwind CSS Starter
          </h2>
          <p className="mt-2 text-gray-600">
            This is a basic starter template for your ALX project.
          </p>
        </div>
      </main>
    </div>
  );
}
