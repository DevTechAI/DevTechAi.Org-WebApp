"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVentures",
    company: "E-commerce",
    content: "DevTechAi's recommendation engine increased our conversion rates by 340% within the first quarter. Their team's expertise and support were exceptional.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "GlobalTech Industries",
    content: "The predictive maintenance solution has reduced our downtime by 60% and saved us millions in operational costs. Truly transformative technology.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Head of Analytics",
    company: "Healthcare",
    content: "Their medical imaging AI has improved our diagnostic accuracy significantly while reducing analysis time from hours to minutes.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-1/3 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-pink-200/20 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200 transform hover:scale-105 transition-all duration-300">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            working with DevTechAi.Org.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-white to-gray-50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:rotate-1"
            >
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 text-yellow-400 fill-current transform hover:scale-125 transition-transform duration-300" 
                    />
                  ))}
                </div>
                <CardDescription className="text-gray-700 text-base leading-relaxed">
                  "{testimonial.content}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <Badge variant="outline" className="text-xs transform hover:scale-105 transition-transform duration-300">
                    {testimonial.company}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}