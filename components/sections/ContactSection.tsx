"use client";

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Phone, MapPin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@devtechai.org", "support@devtechai.org"],
    color: "purple"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 7794841440", "Mon-Fri 9AM-6PM EST"],
    color: "blue"
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    role: "Chief AI Officer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    profileUrl: "https://linkedin.com/in/sarah-chen-ai",
    description: "Leading AI research and innovation"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    profileUrl: "https://linkedin.com/in/michael-rodriguez-eng",
    description: "Building scalable AI solutions"
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Data Science Lead",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    profileUrl: "https://linkedin.com/in/priya-sharma-data",
    description: "Transforming data into insights"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    profileUrl: "https://linkedin.com/in/david-kim-product",
    description: "Driving product strategy and growth"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "UX Design Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    profileUrl: "https://linkedin.com/in/lisa-thompson-ux",
    description: "Creating intuitive AI experiences"
  },
  {
    id: 6,
    name: "Sixth Thompson",
    role: "UX Design Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    profileUrl: "https://linkedin.com/in/lisa-thompson-ux",
    description: "Creating intuitive AI experiences"
  }
];

const colorClasses = {
  purple: 'from-purple-100 to-purple-200 text-purple-600',
  blue: 'from-blue-100 to-blue-200 text-blue-600',
  green: 'from-green-100 to-green-200 text-green-600',
};

export default function ContactSection() {
  const [currentSlide, setCurrentSlide] = useState(2); // Start with middle profile (index 2)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how AI can drive growth and innovation in your organization. 
            Our experts are ready to help you get started.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name</label>
                    <Input 
                      placeholder="John" 
                      className="border-gray-200 focus:border-purple-500 transform hover:scale-105 transition-all duration-300" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name</label>
                    <Input 
                      placeholder="Doe" 
                      className="border-gray-200 focus:border-purple-500 transform hover:scale-105 transition-all duration-300" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="border-gray-200 focus:border-purple-500 transform hover:scale-105 transition-all duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company</label>
                  <Input 
                    placeholder="Your Company Name" 
                    className="border-gray-200 focus:border-purple-500 transform hover:scale-105 transition-all duration-300" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or how we can help..." 
                    className="border-gray-200 focus:border-purple-500 min-h-[120px] transform hover:scale-105 transition-all duration-300"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform hover:scale-105 hover:shadow-lg transition-all duration-300">
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed">
                Ready to start your AI journey? Our team of experts is here to help you 
                understand how artificial intelligence can transform your business operations 
                and drive growth.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[info.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-purple-700 transition-colors duration-300">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 transform hover:scale-105 hover:shadow-lg transition-all duration-500">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.1234567890123!2d78.3744!3d17.4478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b5c5c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sHitech%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Team Carousel Section */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transform hover:scale-105 transition-all duration-300">
              Meet Our Team
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              The Minds Behind DevTechAi.Org
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of AI experts, engineers, and innovators working together 
              to transform industries through cutting-edge artificial intelligence.
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Previous team member"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all duration-300 transform hover:scale-110"
              aria-label="Next team member"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Carousel Track */}
            <div className="overflow-hidden px-16">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentSlide - 1) * 33.333}%)` }}
              >
                {teamMembers.map((member, index) => {
                  const isActive = index === currentSlide;
                  const isLeft = index === (currentSlide - 1 + teamMembers.length) % teamMembers.length;
                  const isRight = index === (currentSlide + 1) % teamMembers.length;
                  
                  return (
                    <div key={member.id} className="w-1/3 flex-shrink-0 px-4">
                      <div className={`flex justify-center transition-all duration-500 ${
                        isActive 
                          ? 'scale-100 opacity-100' 
                          : isLeft || isRight 
                            ? 'scale-75 opacity-60' 
                            : 'scale-50 opacity-30'
                      }`}>
                        <div className="text-center space-y-4 group cursor-pointer" onClick={() => goToSlide(index)}>
                          {/* Profile Image */}
                          <div className="relative mx-auto">
                            <div className={`mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-all duration-500 ${
                              isActive ? 'w-32 h-32' : 'w-24 h-24'
                            }`}>
                              <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Hover overlay */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                              <ExternalLink className="h-6 w-6 text-white" />
                            </div>
                          </div>

                          {/* Member Info */}
                          <div className="space-y-2">
                            <h3 className={`font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300 ${
                              isActive ? 'text-xl' : 'text-lg'
                            }`}>
                              {member.name}
                            </h3>
                            <p className={`font-semibold text-emerald-600 ${
                              isActive ? 'text-lg' : 'text-base'
                            }`}>
                              {member.role}
                            </p>
                            <p className={`text-gray-600 max-w-xs mx-auto ${
                              isActive ? 'text-sm' : 'text-xs'
                            }`}>
                              {member.description}
                            </p>
                            
                            {/* Profile Link - Only show for active slide */}
                            {isActive && (
                              <a
                                href={member.profileUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-1 text-emerald-600 hover:text-emerald-700 font-medium transition-colors duration-300"
                              >
                                <span>View Profile</span>
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-emerald-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}