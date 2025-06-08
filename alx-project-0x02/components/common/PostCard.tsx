// components/common/PostCard.tsx
import React from "react";
import { PostCardProps } from "../../interfaces";

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-6 mb-4 cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 line-clamp-3">{post.body}</p>
      <p className="text-sm text-gray-500 mt-2">User ID: {post.userId}</p>
    </div>
  );
};

export default PostCard;
