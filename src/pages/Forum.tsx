import React, { useState } from 'react';
import { MessageSquare, User, Clock, ThumbsUp, MessageCircle, Search, Filter, PlusCircle } from 'lucide-react';

// Mock data for forum topics
const mockTopics = [
  {
    id: 1,
    title: "Welcome to ConnectWorld Forum!",
    author: "Admin",
    date: "2023-06-15",
    category: "Announcements",
    replies: 24,
    views: 1352,
    likes: 47,
    pinned: true
  },
  {
    id: 2,
    title: "Tips for effective communication in online forums",
    author: "CommunityManager",
    date: "2023-07-02",
    category: "Guidelines",
    replies: 18,
    views: 876,
    likes: 32,
    pinned: true
  },
  {
    id: 3,
    title: "What books are you currently reading?",
    author: "BookLover42",
    date: "2023-08-10",
    category: "Books & Literature",
    replies: 56,
    views: 1205,
    likes: 28,
    pinned: false
  },
  {
    id: 4,
    title: "Favorite travel destinations for 2023",
    author: "Wanderlust",
    date: "2023-08-15",
    category: "Travel",
    replies: 42,
    views: 980,
    likes: 35,
    pinned: false
  },
  {
    id: 5,
    title: "Beginner's guide to meditation",
    author: "ZenMaster",
    date: "2023-08-20",
    category: "Health & Wellness",
    replies: 31,
    views: 754,
    likes: 29,
    pinned: false
  },
  {
    id: 6,
    title: "Latest tech gadgets worth checking out",
    author: "TechEnthusiast",
    date: "2023-08-25",
    category: "Technology",
    replies: 27,
    views: 689,
    likes: 18,
    pinned: false
  },
  {
    id: 7,
    title: "Sustainable living tips and tricks",
    author: "EcoFriendly",
    date: "2023-08-28",
    category: "Environment",
    replies: 19,
    views: 542,
    likes: 24,
    pinned: false
  },
  {
    id: 8,
    title: "Movie recommendations for the weekend",
    author: "FilmBuff",
    date: "2023-09-01",
    category: "Entertainment",
    replies: 38,
    views: 812,
    likes: 27,
    pinned: false
  }
];

// Mock data for categories
const categories = [
  "All Categories",
  "Announcements",
  "Guidelines",
  "Books & Literature",
  "Travel",
  "Health & Wellness",
  "Technology",
  "Environment",
  "Entertainment",
  "Sports",
  "Food & Cooking",
  "Arts & Crafts",
  "Music",
  "Gaming",
  "Education",
  "Career & Business"
];

const Forum = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('newest');
  
  // Filter topics based on search term and category
  const filteredTopics = mockTopics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         topic.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Sort topics based on selected sort option
  const sortedTopics = [...filteredTopics].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'most_replies':
        return b.replies - a.replies;
      case 'most_views':
        return b.views - a.views;
      case 'most_likes':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">ConnectWorld Forum</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join the conversation and connect with our community. Explore topics, share ideas, and make new connections.
          </p>
        </div>
      </div>

      {/* Forum Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Search and Filter Bar */}
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search topics or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  {categories.map((category, index) => (
                    <option key={index} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="most_replies">Most Replies</option>
                  <option value="most_views">Most Views</option>
                  <option value="most_likes">Most Likes</option>
                </select>
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
                <PlusCircle className="h-5 w-5 mr-2" />
                New Topic
              </button>
            </div>
          </div>
        </div>

        {/* Forum Topics */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
            <div className="col-span-6">Topic</div>
            <div className="col-span-2 text-center">Category</div>
            <div className="col-span-1 text-center">Replies</div>
            <div className="col-span-1 text-center">Views</div>
            <div className="col-span-1 text-center">Likes</div>
            <div className="col-span-1 text-center">Activity</div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {sortedTopics.length > 0 ? (
              sortedTopics.map((topic) => (
                <div key={topic.id} className={`p-4 hover:bg-gray-50 transition duration-150 ${topic.pinned ? 'bg-blue-50' : ''}`}>
                  <div className="md:grid md:grid-cols-12 gap-4">
                    <div className="col-span-6 mb-2 md:mb-0">
                      <div className="flex items-start">
                        {topic.pinned && (
                          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded mr-2">
                            Pinned
                          </span>
                        )}
                        <div>
                          <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800 transition duration-150">
                            {topic.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 mt-1">
                            <User className="h-4 w-4 mr-1" />
                            <span>{topic.author}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 text-center">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
                        {topic.category}
                      </span>
                    </div>
                    <div className="col-span-1 text-center text-gray-600">
                      <div className="flex items-center justify-center">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {topic.replies}
                      </div>
                    </div>
                    <div className="col-span-1 text-center text-gray-600">
                      {topic.views}
                    </div>
                    <div className="col-span-1 text-center text-gray-600">
                      <div className="flex items-center justify-center">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {topic.likes}
                      </div>
                    </div>
                    <div className="col-span-1 text-center text-gray-600">
                      {new Date(topic.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                No topics found matching your criteria
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;