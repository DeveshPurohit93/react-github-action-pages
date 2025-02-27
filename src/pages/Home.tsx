import React from 'react';
import { ArrowRight, Users, MessageSquare, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[500px]" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ConnectWorld</h1>
            <p className="text-xl md:text-2xl mb-8">Your platform for connection, discussion, and community</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Learn More
              </Link>
              <Link 
                to="/forum" 
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-300"
              >
                Join Forum
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ConnectWorld?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a platform that brings people together from all walks of life to share ideas, 
            discuss topics, and build meaningful connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Building</h3>
            <p className="text-gray-600">
              Connect with like-minded individuals and build lasting relationships within our diverse community.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Engaging Discussions</h3>
            <p className="text-gray-600">
              Participate in thought-provoking discussions on a wide range of topics that matter to you.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
              <Globe className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
            <p className="text-gray-600">
              Connect with people from around the world and gain perspectives from different cultures.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Become part of our growing network and start connecting with others today.
          </p>
          <Link 
            to="/forum" 
            className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;