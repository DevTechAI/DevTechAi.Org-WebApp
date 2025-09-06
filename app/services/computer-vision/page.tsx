"use client";

import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Eye, BarChart3, Zap, Shield, CheckCircle, Target, Users, TrendingUp, Camera, Image, Scan, Monitor, Brain } from 'lucide-react';

const cvSolutions = [
  {
    icon: Eye,
    title: "Object Detection",
    description: "Identify and locate objects in images and videos with high accuracy for surveillance and automation.",
    benefits: ["Real-time detection", "Multi-object tracking", "High accuracy rates"]
  },
  {
    icon: Camera,
    title: "Facial Recognition",
    description: "Advanced face detection and recognition systems for security, authentication, and user experience.",
    benefits: ["Secure authentication", "Access control", "User identification"]
  },
  {
    icon: Scan,
    title: "Quality Control",
    description: "Automated visual inspection systems that detect defects and ensure product quality in manufacturing.",
    benefits: ["Reduced defects", "Faster inspection", "Consistent quality"]
  },
  {
    icon: Image,
    title: "Medical Imaging",
    description: "AI-powered analysis of medical images for diagnosis assistance and treatment planning.",
    benefits: ["Faster diagnosis", "Improved accuracy", "Better patient outcomes"]
  },
  {
    icon: Monitor,
    title: "Surveillance Systems",
    description: "Intelligent monitoring systems that analyze video feeds for security and safety applications.",
    benefits: ["24/7 monitoring", "Threat detection", "Automated alerts"]
  },
  {
    icon: Target,
    title: "Augmented Reality",
    description: "Computer vision-powered AR applications that overlay digital information on real-world objects.",
    benefits: ["Enhanced user experience", "Interactive content", "Real-time processing"]
  }
];

const industries = [
  {
    name: "Manufacturing",
    description: "Automated quality control, defect detection, and production line monitoring",
    icon: "🏭",
    features: ["Defect detection", "Assembly verification", "Inventory tracking"]
  },
  {
    name: "Healthcare",
    description: "Medical image analysis, diagnostic assistance, and surgical navigation",
    icon: "🏥",
    features: ["X-ray analysis", "MRI interpretation", "Surgical guidance"]
  },
  {
    name: "Retail",
    description: "Customer behavior analysis, inventory management, and checkout automation",
    icon: "🛒",
    features: ["Customer tracking", "Shelf monitoring", "Cashier-less checkout"]
  },
  {
    name: "Security",
    description: "Surveillance systems, access control, and threat detection",
    icon: "🔒",
    features: ["Facial recognition", "Intrusion detection", "Crowd monitoring"]
  },
  {
    name: "Automotive",
    description: "Autonomous vehicles, driver assistance, and traffic monitoring",
    icon: "🚗",
    features: ["Lane detection", "Pedestrian recognition", "Traffic analysis"]
  },
  {
    name: "Agriculture",
    description: "Crop monitoring, disease detection, and yield optimization",
    icon: "🌾",
    features: ["Crop health", "Pest detection", "Harvest optimization"]
  }
];

export default function ComputerVisionPage() {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Computer Vision Service Inquiry:', formData);

    setIsSubmitting(false);
    setShowContactDialog(false);
    setShowSuccessDialog(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Navigation 
        activeSection="services" 
        onScrollToSection={() => {}} 
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-green-200/30 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
                <Eye className="w-4 h-4 mr-1" />
                Computer Vision Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                See Beyond the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Visible
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Transform visual data into actionable insights with our advanced computer vision solutions. 
                From object detection to medical imaging, we help machines see and understand the world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => setShowContactDialog(true)}
              >
                Explore CV Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-200 text-green-700 hover:bg-green-50 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Solutions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-green-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              CV Solutions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Advanced Computer Vision Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From object detection to medical imaging, our computer vision solutions provide 
              accurate, real-time visual analysis for diverse applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvSolutions.map((solution, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <solution.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {solution.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-purple-200/20 to-green-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Transforming Industries with Computer Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our computer vision solutions are revolutionizing operations across various industries, 
              from manufacturing to healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {industry.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Applications:</h4>
                    <ul className="space-y-1">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-green-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
              Our Technology
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Advanced Computer Vision Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge computer vision technologies and deep learning models 
              to deliver accurate, real-time visual analysis solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Deep Learning Models",
                description: "CNN, R-CNN, YOLO, and custom neural networks for object detection and classification",
                icon: Brain
              },
              {
                title: "Image Processing",
                description: "Advanced algorithms for image enhancement, filtering, and feature extraction",
                icon: Image
              },
              {
                title: "Real-time Processing",
                description: "Optimized systems for live video analysis and instant decision making",
                icon: Zap
              },
              {
                title: "Edge Computing",
                description: "Deploy computer vision models on edge devices for low-latency applications",
                icon: Monitor
              }
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <tech.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-purple-200/20 to-green-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How We Build Your Computer Vision Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful computer vision implementation 
              tailored to your specific visual analysis needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Visual Analysis",
                description: "We analyze your visual data requirements and define computer vision objectives.",
                icon: Eye
              },
              {
                step: "02", 
                title: "Data Collection",
                description: "We gather and prepare image/video datasets for model training and validation.",
                icon: Camera
              },
              {
                step: "03",
                title: "Model Development",
                description: "We develop, train, and optimize computer vision models for your specific use case.",
                icon: Brain
              },
              {
                step: "04",
                title: "Deployment & Integration",
                description: "We deploy your CV solution and integrate it with your existing systems.",
                icon: Zap
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <phase.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Give Your Business Vision?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our computer vision solutions can transform your visual data into actionable insights.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => setShowContactDialog(true)}
          >
            Start Your CV Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900">Get Started with Computer Vision</DialogTitle>
            <DialogDescription>
              Fill out the form below and our computer vision experts will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Full Name"
                required
                className="border-gray-200 focus:border-green-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="border-gray-200 focus:border-green-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Company</label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your Company Name"
                required
                className="border-gray-200 focus:border-green-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your computer vision requirements..."
                className="border-gray-200 focus:border-green-500 min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span>Message Sent!</span>
            </DialogTitle>
            <DialogDescription className="text-center py-4">
              Thank you for your interest in our computer vision solutions! We have received your message and will get back to you soon.
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Our computer vision experts typically respond within 24 hours.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
