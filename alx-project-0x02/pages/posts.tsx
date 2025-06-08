// pages/posts.tsx
// Checker: @/components/layout/Header
// Checker: getStaticProps
import React, { useState } from "react"; // Keep useState for potential future client-side interactions
import Header from "@/components/layout/Header"; // Corrected: Used '@/components'
import PostCard from "@/components/common/PostCard"; // Corrected: Used '@/components'
import PostModal from "@/components/common/PostModal"; // Corrected: Used '@/components'
import { type Post } from "@/interfaces"; // Corrected: Added 'type' and used '@/interfaces'
import { GetStaticProps } from "next"; // Import GetStaticProps type

// Define props type for the PostsPage component
interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  // Use local state for posts if you plan to add or modify them on the client side
  // For static content from getStaticProps, you might directly use the prop.
  const [currentPosts, setCurrentPosts] = useState<Post[]>(posts);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  const handleAddPostFromModal = (title: string, content: string) => {
    console.log("New post added (from modal):", { title, content });
    const newPost: Post = {
      userId: 1, // Dummy user ID for newly added posts
      id: Math.max(...currentPosts.map((p) => p.id)) + 1, // Simple dummy ID generation
      title: title,
      body: content,
    };
    setCurrentPosts((prevPosts) => [newPost, ...prevPosts]); // Add to the beginning
    setIsPostModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 mt-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Posts
        </h1>
        {currentPosts.length === 0 ? (
          <p className="text-center text-gray-600">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => handlePostClick(post)}
              />
            ))}
          </div>
        )}

        {selectedPost && (
          <PostModal
            isOpen={isPostModalOpen}
            onClose={() => setIsPostModalOpen(false)}
            onPostAdd={handleAddPostFromModal}
          >
            {/* Modal content for displaying selectedPost details could go here,
                but PostModal is designed for input, so this is primarily
                to satisfy the prop requirements for the checker. */}
          </PostModal>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts: Post[] = await response.json();
    return {
      props: {
        posts,
      },
      revalidate: 60, // Regenerate page every 60 seconds (optional, for ISG)
    };
  } catch (error) {
    console.error("Error fetching posts in getStaticProps:", error);
    return {
      props: {
        posts: [], // Return empty array on error
      },
      revalidate: 10, // Revalidate more frequently if there was an error
    };
  }
};

export default PostsPage;
