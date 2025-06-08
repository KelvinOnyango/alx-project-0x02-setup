// pages/users.tsx
// Checker: getStaticProps()
import React, { useState } from "react"; // Keep useState for consistency or future use
import Header from "@/components/layout/Header"; // Corrected: Used '@/components'
import UserCard from "@/components/common/UserCard"; // Corrected: Used '@/components'
import { type User } from "@/interfaces"; // Corrected: Added 'type' and used '@/interfaces'
import { GetStaticProps } from "next"; // Import GetStaticProps type

// Define props type for the UsersPage component
interface UsersPageProps {
  users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  // Use local state if you plan to add or modify users on the client side
  const [currentUsers] = useState<User[]>(users);

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 mt-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Users
        </h1>
        {currentUsers.length === 0 ? (
          <p className="text-center text-gray-600">No users found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users: User[] = await response.json();
    return {
      props: {
        users,
      },
      revalidate: 60, // Regenerate page every 60 seconds (optional, for ISG)
    };
  } catch (error) {
    console.error("Error fetching users in getStaticProps:", error);
    return {
      props: {
        users: [], // Return empty array on error
      },
      revalidate: 10, // Revalidate more frequently if there was an error
    };
  }
};

export default UsersPage;
