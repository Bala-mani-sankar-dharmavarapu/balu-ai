export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Chat {
  id: string;
  title: string;
  timestamp: string;
}

export interface Card {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export const mockUser: User = {
  name: "Marcus Aurelius",
  email: "marcusarel@gmail.com",
  avatar: "https://via.placeholder.com/40x40/8b5cf6/ffffff?text=MA",
};

export const recentChats: Chat[] = [
  {
    id: "1",
    title: "Brainstorming small business ideas",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    title: "The history of roman empire",
    timestamp: "1 day ago",
  },
  {
    id: "3",
    title: "Crypto investment suggestions",
    timestamp: "3 days ago",
  },
];

export const cards: Card[] = [
  {
    id: "1",
    title: "What's Happen in 24 hours?",
    subtitle: "Get the latest updates and trends",
    icon: "🌍",
  },
  {
    id: "2",
    title: "Stock market update",
    subtitle: "Real-time market analysis and insights",
    icon: "📈",
  },
  {
    id: "3",
    title: "Deep economic research",
    subtitle: "Comprehensive economic analysis",
    icon: "📊",
  },
];

export const versions = ["Valerio v1.2", "Valerio v1.1", "Valerio v1.0"];
