// components/common/UserCard.tsx
import React from "react";
import { UserCardProps } from "../../interfaces";

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
      <p className="text-gray-600 mb-1">Email: {user.email}</p>
      <p className="text-gray-600 mb-1">
        Address: {user.address.street}, {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </p>
      <p className="text-gray-600">Phone: {user.phone}</p>
    </div>
  );
};

export default UserCard;
