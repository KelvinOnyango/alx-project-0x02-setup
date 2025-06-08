// pages/posts.tsx
import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import PostModal from "../components/common/PostModal"; // For Task 4, although it's used on home.tsx
import { Post } from "../interfaces";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false); // For showing post details in a modal

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  // Although task 4 specifically uses this modal on home.tsx,
  // we can also use it here for displaying details if needed.
  // For the purpose of this task, we're just displaying the list.
  const handleAddPostFromModal = (title: string, content: string) => {
    // This function would typically send a POST request to an API
    // For now, we'll just log or add to local state if desired for demonstration
    console.log("New post added (from modal):", { title, content });
    // Example: Add to local state (would require a dummy ID)
    const newPost: Post = {
      userId: 1, // Dummy user ID
      id: Math.max(...posts.map((p) => p.id)) + 1, // Simple dummy ID generation
      title: title,
      body: content,
    };
    setPosts((prevPosts) => [newPost, ...prevPosts]); // Add to the beginning
    setIsPostModalOpen(false); // Close the modal
    setSelectedPost(null); // Clear selected post
  };

  if (loading)
    return <p className="text-center text-gray-600 mt-10">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 mt-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Posts
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>

        {/* Modal for displaying detailed post, only opens when a post is clicked */}
        {selectedPost && (
          <PostModal
            isOpen={isPostModalOpen}
            onClose={() => setIsPostModalOpen(false)}
            onPostAdd={handleAddPostFromModal} // This might not be relevant for a "view details" modal
            // but is included based on original PostModal spec
          >
            {/* You could render selectedPost details inside the modal here */}
            {/* For task 4, the PostModal accepts onPostAdd, so this is just to fulfill props. */}
          </PostModal>
        )}
      </main>
    </div>
  );
};

export default PostsPage;
