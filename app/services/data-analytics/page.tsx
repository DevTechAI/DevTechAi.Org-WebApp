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
import { ArrowRight, BarChart3, TrendingUp, Zap, Shield, CheckCircle, Target, Users, Database, PieChart, LineChart, Activity, Brain } from 'lucide-react';

const analyticsSolutions = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights with comprehensive BI dashboards and reports.",
    benefits: ["Real-time dashboards", "Custom reporting", "Data visualization"]
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast future trends and outcomes using advanced statistical models and machine learning.",
    benefits: ["Accurate forecasting", "Risk assessment", "Strategic planning"]
  },
  {
    icon: PieChart,
    title: "Customer Analytics",
    description: "Deep insights into customer behavior, preferences, and lifetime value for better targeting.",
    benefits: ["Customer segmentation", "Behavior analysis", "Retention optimization"]
  },
  {
    icon: LineChart,
    title: "Performance Analytics",
    description: "Monitor and analyze business performance metrics across all departments and functions.",
    benefits: ["KPI tracking", "Performance optimization", "Goal alignment"]
  },
  {
    icon: Activity,
    title: "Real-time Analytics",
    description: "Process and analyze data streams in real-time for immediate insights and decision making.",
    benefits: ["Instant insights", "Live monitoring", "Rapid response"]
  },
  {
    icon: Database,
    title: "Data Warehousing",
    description: "Centralized data storage and management systems for efficient analytics and reporting.",
    benefits: ["Data consolidation", "Improved accessibility", "Better data quality"]
  }
];

const industries = [
  {
    name: "E-commerce",
    description: "Customer behavior analysis, sales forecasting, and inventory optimization",
    icon: "🛒",
    metrics: ["Conversion rates", "Customer lifetime value", "Inventory turnover"]
  },
  {
    name: "Healthcare",
    description: "Patient outcomes analysis, resource optimization, and clinical decision support",
    icon: "🏥",
    metrics: ["Patient satisfaction", "Treatment effectiveness", "Resource utilization"]
  },
  {
    name: "Finance",
    description: "Risk assessment, fraud detection, and investment portfolio optimization",
    icon: "💰",
    metrics: ["Risk scores", "Fraud detection rates", "ROI analysis"]
  },
  {
    name: "Manufacturing",
    description: "Production efficiency, quality control, and supply chain optimization",
    icon: "🏭",
    metrics: ["Production yield", "Quality metrics", "Supply chain efficiency"]
  },
  {
    name: "Marketing",
    description: "Campaign performance, customer acquisition, and brand analytics",
    icon: "📈",
    metrics: ["Campaign ROI", "Customer acquisition cost", "Brand awareness"]
  },
  {
    name: "Retail",
    description: "Sales analytics, inventory management, and customer experience optimization",
    icon: "🏪",
    metrics: ["Sales performance", "Inventory levels", "Customer satisfaction"]
  }
];

export default function DataAnalyticsPage() {
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

    console.log('Data Analytics Service Inquiry:', formData);

    setIsSubmitting(false);
    setShowContactDialog(false);
    setShowSuccessDialog(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50">
      <Navigation 
        activeSection="services" 
        onScrollToSection={() => {}} 
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-blue-200/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-orange-200/30 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 transform hover:scale-105 transition-all duration-300">
                <BarChart3 className="w-4 h-4 mr-1" />
                Data Analytics Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Turn Data Into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600">
                  Strategic Advantage
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Unlock the power of your data with our comprehensive analytics solutions. 
                From business intelligence to predictive analytics, we help you make data-driven decisions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => setShowContactDialog(true)}
              >
                Start Analytics Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-200 text-orange-700 hover:bg-orange-50 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
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
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 transform hover:scale-105 transition-all duration-300">
              Analytics Solutions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comprehensive Data Analytics Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From descriptive to predictive analytics, our solutions help you understand 
              your data and make informed business decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsSolutions.map((solution, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                    <solution.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
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
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
              Industries We Serve
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Data-Driven Success Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our analytics solutions are tailored to meet the unique challenges 
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
                  <CardTitle className="text-xl text-gray-900 group-hover:text-orange-700 transition-colors duration-300">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {industry.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Metrics:</h4>
                    <ul className="space-y-1">
                      {industry.metrics.map((metric, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                          {metric}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 transform hover:scale-105 transition-all duration-300">
              Our Technology
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Advanced Analytics Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge analytics technologies and platforms to deliver 
              accurate, scalable, and efficient data analysis solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Big Data Platforms",
                description: "Hadoop, Spark, and cloud-based solutions for processing large datasets",
                icon: Database
              },
              {
                title: "Visualization Tools",
                description: "Tableau, Power BI, and custom dashboards for data visualization",
                icon: BarChart3
              },
              {
                title: "Machine Learning",
                description: "Advanced ML algorithms for predictive analytics and pattern recognition",
                icon: Brain
              },
              {
                title: "Real-time Processing",
                description: "Stream processing technologies for real-time analytics and monitoring",
                icon: Activity
              }
            ].map((tech, index) => (
              <div key={index} className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <tech.icon className="h-8 w-8 text-orange-600" />
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
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-orange-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-purple-200/20 to-orange-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              How We Build Your Analytics Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful analytics implementation 
              tailored to your specific data analysis needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description: "We analyze your data sources, quality, and analytics requirements.",
                icon: Database
              },
              {
                step: "02", 
                title: "Data Preparation",
                description: "We clean, transform, and prepare your data for optimal analysis.",
                icon: Shield
              },
              {
                step: "03",
                title: "Analytics Development",
                description: "We develop custom analytics models and dashboards for your needs.",
                icon: BarChart3
              },
              {
                step: "04",
                title: "Deployment & Training",
                description: "We deploy your solution and provide training for your team.",
                icon: Zap
              }
            ].map((phase, index) => (
              <div key={index} className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <phase.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600">{phase.step}</div>
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-br from-orange-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Transform Your Data Into Insights?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our analytics solutions can help you make better decisions and drive business growth.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => setShowContactDialog(true)}
          >
            Start Your Analytics Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900">Get Started with Data Analytics</DialogTitle>
            <DialogDescription>
              Fill out the form below and our analytics experts will get back to you within 24 hours.
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
                className="border-gray-200 focus:border-orange-500"
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
                className="border-gray-200 focus:border-orange-500"
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
                className="border-gray-200 focus:border-orange-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your analytics requirements..."
                className="border-gray-200 focus:border-orange-500 min-h-[100px]"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
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
              Thank you for your interest in our data analytics solutions! We have received your message and will get back to you soon.
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Our analytics experts typically respond within 24 hours.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-orange-600 to-blue-600 hover:from-orange-700 hover:to-blue-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
