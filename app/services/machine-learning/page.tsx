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
import { ArrowRight, Brain, BarChart3, Zap, Shield, CheckCircle, Target, Users, TrendingUp, Database, Cpu, FileText } from 'lucide-react';

const mlSolutions = [
  {
    icon: Target,
    title: "Predictive Analytics",
    description: "Forecast future trends and behaviors using historical data patterns to make informed business decisions.",
    benefits: ["Improved forecasting accuracy", "Reduced operational costs", "Better resource allocation"]
  },
  {
    icon: BarChart3,
    title: "Customer Segmentation",
    description: "Automatically group customers based on behavior, preferences, and demographics for targeted marketing.",
    benefits: ["Higher conversion rates", "Personalized experiences", "Increased customer lifetime value"]
  },
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Predict product demand to optimize inventory levels and reduce stockouts or overstock situations.",
    benefits: ["Reduced inventory costs", "Improved cash flow", "Better supply chain management"]
  },
  {
    icon: Shield,
    title: "Fraud Detection",
    description: "Real-time identification of fraudulent transactions and activities using advanced anomaly detection.",
    benefits: ["Reduced financial losses", "Enhanced security", "Improved customer trust"]
  },
  {
    icon: Database,
    title: "Recommendation Systems",
    description: "Personalized product and content recommendations that increase engagement and sales.",
    benefits: ["Higher user engagement", "Increased revenue", "Improved customer satisfaction"]
  },
  {
    icon: Cpu,
    title: "Process Optimization",
    description: "Automate and optimize business processes using ML algorithms for maximum efficiency.",
    benefits: ["Reduced manual work", "Faster processing", "Lower operational costs"]
  }
];

const industries = [
  {
    name: "E-commerce",
    description: "Personalized shopping experiences, inventory optimization, and dynamic pricing",
    icon: "🛒"
  },
  {
    name: "Healthcare",
    description: "Medical diagnosis assistance, drug discovery, and patient outcome prediction",
    icon: "🏥"
  },
  {
    name: "Finance",
    description: "Risk assessment, algorithmic trading, and credit scoring",
    icon: "💰"
  },
  {
    name: "Manufacturing",
    description: "Predictive maintenance, quality control, and supply chain optimization",
    icon: "🏭"
  },
  {
    name: "Retail",
    description: "Customer behavior analysis, demand forecasting, and price optimization",
    icon: "🏪"
  },
  {
    name: "Transportation",
    description: "Route optimization, predictive maintenance, and demand prediction",
    icon: "🚚"
  }
];

export default function MachineLearningPage() {
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

    console.log('ML Service Inquiry:', formData);

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
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200/30 to-purple-200/30 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
                <Brain className="w-4 h-4 mr-1" />
                Machine Learning Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Intelligent Automation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Leverage the power of machine learning to automate processes, predict outcomes, 
                and unlock insights from your data. Our advanced ML solutions drive growth and efficiency.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => setShowContactDialog(true)}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
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
              Our ML Solutions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comprehensive Machine Learning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From predictive analytics to intelligent automation, we provide end-to-end ML solutions 
              that transform your business operations and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlSolutions.map((solution, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <solution.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
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
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Transforming Industries with ML
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our machine learning solutions are tailored to meet the unique challenges 
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
                  <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How We Build Your ML Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful ML implementation from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your data, understand your business goals, and identify ML opportunities.",
                icon: FileText
              },
              {
                step: "02", 
                title: "Data Preparation",
                description: "We clean, preprocess, and prepare your data for optimal ML model performance.",
                icon: Database
              },
              {
                step: "03",
                title: "Model Development",
                description: "We develop, train, and validate ML models tailored to your specific requirements.",
                icon: Brain
              },
              {
                step: "04",
                title: "Deployment & Monitoring",
                description: "We deploy your ML solution and provide ongoing monitoring and optimization.",
                icon: Zap
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <phase.icon className="h-8 w-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-purple-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Machine Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our ML solutions can drive growth and efficiency in your organization.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => setShowContactDialog(true)}
          >
            Start Your ML Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900">Get Started with ML Solutions</DialogTitle>
            <DialogDescription>
              Fill out the form below and our ML experts will get back to you within 24 hours.
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
                className="border-gray-200 focus:border-purple-500"
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
                className="border-gray-200 focus:border-purple-500"
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
                className="border-gray-200 focus:border-purple-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your ML requirements..."
                className="border-gray-200 focus:border-purple-500 min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
              Thank you for your interest in our ML solutions! We have received your message and will get back to you soon.
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Our ML experts typically respond within 24 hours.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
