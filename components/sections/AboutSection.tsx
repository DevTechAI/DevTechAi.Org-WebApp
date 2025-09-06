"use client";

import { Badge } from '@/components/ui/badge';
import { Sparkles, Target, Users } from 'lucide-react';

const stats = [
  { value: "15", label: "Years of IT Excellence", color: "purple" },
  { value: "5+", label: "Industries Served", color: "green" },
  { value: "20+", label: "Happy Domestic & International Clients", color: "blue" },
  { value: "10M+", label: "Data Points Processed", color: "orange" },
];

const colorClasses = {
  purple: 'from-purple-100 to-purple-200 text-purple-700',
  green: 'from-green-100 to-green-200 text-green-700',
  blue: 'from-blue-100 to-blue-200 text-blue-700',
  orange: 'from-orange-100 to-orange-200 text-orange-700',
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-44 h-44 bg-gradient-to-br from-orange-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-blue-200/20 to-green-200/20 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 transform hover:scale-105 transition-all duration-300">
                About DevTechAi.Org
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Pioneering the Future of AI
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                DevTechAi.Org has been at the forefront of AI innovation, 
                helping businesses harness the power of artificial intelligence to solve 
                complex challenges and drive growth.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                <Target className="h-6 w-6 text-orange-600 mt-1 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors duration-300">Our Mission</h3>
                  <p className="text-gray-600">
                    To democratize AI technology and make it accessible to businesses of all sizes, 
                    enabling them to compete in the digital economy.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                <Sparkles className="h-6 w-6 text-purple-600 mt-1 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Our Vision</h3>
                  <p className="text-gray-600">
                    A world where AI enhances human potential, drives innovation, and creates 
                    sustainable value for society and businesses alike.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                <Users className="h-6 w-6 text-blue-600 mt-1 group-hover:rotate-12 transition-transform duration-300" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Our Team</h3>
                  <p className="text-gray-600">
                    50+ world-class AI researchers, engineers, and consultants with expertise 
                    spanning machine learning, data science, and software engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {stats.slice(0, 2).map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-2xl p-6 text-center transform hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-lg hover:shadow-xl`}
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="space-y-4 mt-8">
              {stats.slice(2, 4).map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses[stat.color as keyof typeof colorClasses]} rounded-2xl p-6 text-center transform hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-lg hover:shadow-xl`}
                >
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}