"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "500+ successful AI implementations across various industries with measurable ROI."
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Accelerated development cycles with our proven methodologies and pre-built components."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols and compliance with industry standards and regulations."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "PhD-level data scientists, ML engineers, and industry specialists dedicated to your success."
  }
];

export default function FeaturesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Built for Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI solutions combine cutting-edge technology with practical business applications 
            to deliver measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="flex space-x-4 group transform hover:scale-105 transition-all duration-300"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center transition-all duration-500 transform-gpu ${
                    hoveredCard === index ? 'scale-125 rotate-12 shadow-lg' : 'group-hover:scale-110'
                  }`}>
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-1 shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500">
              <div className="bg-white rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">AI Performance Dashboard</h3>
                    <Badge className="bg-green-100 text-green-700 animate-pulse">Live</Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 transform hover:scale-105 hover:rotate-2 transition-all duration-300">
                      <div className="text-2xl font-bold text-purple-700">97.3%</div>
                      <div className="text-sm text-purple-600">Accuracy</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 transform hover:scale-105 hover:rotate-2 transition-all duration-300">
                      <div className="text-2xl font-bold text-blue-700">1.2ms</div>
                      <div className="text-sm text-blue-600">Response Time</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 transform hover:scale-105 hover:rotate-2 transition-all duration-300">
                      <div className="text-2xl font-bold text-green-700">99.9%</div>
                      <div className="text-sm text-green-600">Uptime</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 transform hover:scale-105 hover:rotate-2 transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-700">2.1M</div>
                      <div className="text-sm text-orange-600">Processed</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Model Training</span>
                      <span className="text-sm font-medium text-green-600">Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full animate-pulse" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}