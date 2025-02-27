import React from 'react';
import { Award, Target, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-blue-600 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About ConnectWorld</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn about our mission, values, and the team behind ConnectWorld.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              ConnectWorld was founded in 2020 with a simple yet powerful vision: to create a platform where people from all walks of life could connect, share ideas, and build meaningful relationships.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              What started as a small forum for tech enthusiasts quickly grew into a diverse community spanning multiple interests, backgrounds, and cultures. Today, ConnectWorld serves thousands of users worldwide, providing a space for open dialogue and connection.
            </p>
            <p className="text-lg text-gray-600">
              Our journey is just beginning, and we're excited to continue growing and evolving with our community at the heart of everything we do.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Team collaboration" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At ConnectWorld, we're guided by a set of core principles that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-600">
                To create a global platform that fosters meaningful connections and promotes the free exchange of ideas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We believe in creating a space where everyone feels welcome, regardless of background or beliefs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Respect</h3>
              <p className="text-gray-600">
                We foster an environment of mutual respect where diverse opinions can be shared constructively.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from platform development to community management.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The passionate individuals behind ConnectWorld who work tirelessly to create the best platform for our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden inline-block">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="CEO" 
                className="w-40 h-40 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Michael Johnson</h3>
            <p className="text-blue-600 mb-2">CEO & Founder</p>
            <p className="text-gray-600 text-sm">
              Visionary leader with 15+ years in tech and community building.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden inline-block">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="COO" 
                className="w-40 h-40 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Sarah Chen</h3>
            <p className="text-blue-600 mb-2">Chief Operations Officer</p>
            <p className="text-gray-600 text-sm">
              Operations expert ensuring smooth platform functioning.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden inline-block">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="CTO" 
                className="w-40 h-40 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">David Rodriguez</h3>
            <p className="text-blue-600 mb-2">Chief Technology Officer</p>
            <p className="text-gray-600 text-sm">
              Tech genius behind our platform's architecture and innovation.
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4 rounded-full overflow-hidden inline-block">
              <img 
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                alt="Community Manager" 
                className="w-40 h-40 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold">Emily Taylor</h3>
            <p className="text-blue-600 mb-2">Community Manager</p>
            <p className="text-gray-600 text-sm">
              Passionate about fostering meaningful connections within our community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;