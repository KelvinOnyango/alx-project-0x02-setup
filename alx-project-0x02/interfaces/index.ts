// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string; // For additional custom classes
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string; // Renamed from 'content' to 'body' to match JSONPlaceholder
}

export interface PostCardProps {
  post: Post; // Accepts a Post object directly
  onClick?: () => void; // Optional click handler for modal
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPostAdd: (title: string, content: string) => void;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserCardProps {
  user: User; // Accepts a User object directly
}
