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
import { ArrowRight, Server, Monitor, Smartphone, Wifi, HardDrive, Layers, RefreshCw, Globe2, ShieldCheck, BarChart, PieChart, CheckCircle, Target, Users, TrendingUp, Zap, Shield, Database, Cpu } from 'lucide-react';

const cloudSolutions = [
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description: "Scalable cloud platforms with high availability, auto-scaling, and global deployment capabilities.",
    benefits: ["99.9% uptime guarantee", "Auto-scaling", "Global CDN", "Load balancing"]
  },
  {
    icon: Monitor,
    title: "SaaS Application Development",
    description: "Custom software-as-a-service applications built for scalability, security, and user experience.",
    benefits: ["Multi-tenant architecture", "API-first design", "Real-time updates", "Custom dashboards"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First SaaS",
    description: "Cross-platform mobile applications with offline capabilities and seamless cloud synchronization.",
    benefits: ["Offline functionality", "Push notifications", "Cross-platform", "Real-time sync"]
  },
  {
    icon: Wifi,
    title: "API Development & Management",
    description: "RESTful APIs, GraphQL endpoints, and comprehensive API management with rate limiting and analytics.",
    benefits: ["Rate limiting", "API analytics", "Documentation", "Version control"]
  },
  {
    icon: HardDrive,
    title: "Cloud Data Management",
    description: "Secure data storage, backup solutions, and data migration services across cloud platforms.",
    benefits: ["Automated backups", "Data encryption", "Migration tools", "Disaster recovery"]
  },
  {
    icon: Layers,
    title: "Microservices Architecture",
    description: "Scalable microservices design with containerization, orchestration, and service mesh implementation.",
    benefits: ["Container orchestration", "Service mesh", "Independent scaling", "Fault isolation"]
  }
];

const industries = [
  {
    name: "E-commerce",
    description: "Scalable online platforms with payment processing, inventory management, and customer analytics",
    icon: "🛒",
    features: ["Payment gateways", "Inventory tracking", "Customer analytics", "Order management"]
  },
  {
    name: "Healthcare",
    description: "HIPAA-compliant platforms for patient management, telemedicine, and medical record systems",
    icon: "🏥",
    features: ["Patient portals", "Telemedicine", "Medical records", "Appointment scheduling"]
  },
  {
    name: "Finance",
    description: "Secure financial platforms with real-time transactions, compliance, and fraud detection",
    icon: "💰",
    features: ["Real-time transactions", "Fraud detection", "Compliance tools", "Risk management"]
  },
  {
    name: "Education",
    description: "Learning management systems with video streaming, assessments, and student tracking",
    icon: "🎓",
    features: ["Video streaming", "Online assessments", "Student tracking", "Content management"]
  },
  {
    name: "Manufacturing",
    description: "IoT-enabled platforms for production monitoring, quality control, and supply chain management",
    icon: "🏭",
    features: ["IoT integration", "Production monitoring", "Quality control", "Supply chain"]
  },
  {
    name: "Real Estate",
    description: "Property management platforms with virtual tours, CRM, and transaction management",
    icon: "🏠",
    features: ["Virtual tours", "CRM systems", "Transaction management", "Property listings"]
  }
];

export default function CloudSaaSPage() {
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

    console.log('Cloud SaaS Service Inquiry:', formData);

    setIsSubmitting(false);
    setShowContactDialog(false);
    setShowSuccessDialog(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navigation 
        activeSection="services" 
        onScrollToSection={() => {}} 
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
                <Server className="w-4 h-4 mr-1" />
                Cloud SaaS Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Scale Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Cloud SaaS
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Transform your business with scalable cloud solutions and software-as-a-service applications. 
                From infrastructure to mobile apps, we deliver enterprise-grade cloud solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => setShowContactDialog(true)}
              >
                Start Cloud Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
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
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
              Cloud Solutions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comprehensive Cloud SaaS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cloud infrastructure to SaaS applications, our solutions provide 
              scalability, security, and performance for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudSolutions.map((solution, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <solution.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {solution.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Features:</h4>
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
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Cloud Solutions Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cloud SaaS solutions are tailored to meet the unique challenges 
              and opportunities across various industries.
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
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {industry.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
              Our Technology
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Advanced Cloud Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge cloud technologies and platforms to deliver 
              scalable, secure, and efficient cloud solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cloud Platforms",
                description: "AWS, Azure, Google Cloud with multi-cloud and hybrid solutions",
                icon: Server
              },
              {
                title: "Containerization",
                description: "Docker, Kubernetes, and container orchestration for scalable deployments",
                icon: Layers
              },
              {
                title: "DevOps & CI/CD",
                description: "Automated pipelines, infrastructure as code, and continuous deployment",
                icon: RefreshCw
              },
              {
                title: "Security & Compliance",
                description: "End-to-end security, encryption, and compliance monitoring",
                icon: ShieldCheck
              }
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <tech.icon className="h-8 w-8 text-blue-600" />
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
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How We Build Your Cloud Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful cloud implementation 
              tailored to your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your requirements and design a comprehensive cloud strategy.",
                icon: Target
              },
              {
                step: "02", 
                title: "Architecture Design",
                description: "We design scalable cloud architecture with security and performance in mind.",
                icon: Layers
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "We develop your solution with rigorous testing and quality assurance.",
                icon: Cpu
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "We deploy your solution and provide ongoing support and optimization.",
                icon: Zap
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <phase.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Scale with Cloud SaaS?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our cloud solutions can transform your business and drive growth.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => setShowContactDialog(true)}
          >
            Start Your Cloud Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900">Get Started with Cloud SaaS</DialogTitle>
            <DialogDescription>
              Fill out the form below and our cloud experts will get back to you within 24 hours.
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
                className="border-gray-200 focus:border-blue-500"
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
                className="border-gray-200 focus:border-blue-500"
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
                className="border-gray-200 focus:border-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your cloud requirements..."
                className="border-gray-200 focus:border-blue-500 min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
              Thank you for your interest in our cloud SaaS solutions! We have received your message and will get back to you soon.
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Our cloud experts typically respond within 24 hours.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
