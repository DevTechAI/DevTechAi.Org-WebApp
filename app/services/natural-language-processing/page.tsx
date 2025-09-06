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
import { ArrowRight, MessageSquare, BarChart3, Zap, Shield, CheckCircle, Target, Users, TrendingUp, FileText, Bot, Search, Globe, Brain, Database } from 'lucide-react';

const nlpSolutions = [
  {
    icon: Bot,
    title: "Intelligent Chatbots",
    description: "Build conversational AI assistants that understand context and provide human-like responses.",
    benefits: ["24/7 customer support", "Reduced response time", "Improved customer satisfaction"]
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Automatically extract, analyze, and categorize information from documents and text data.",
    benefits: ["Faster document processing", "Reduced manual errors", "Improved data accuracy"]
  },
  {
    icon: BarChart3,
    title: "Sentiment Analysis",
    description: "Analyze customer feedback, social media, and reviews to understand public opinion and emotions.",
    benefits: ["Real-time brand monitoring", "Better customer insights", "Proactive reputation management"]
  },
  {
    icon: Search,
    title: "Smart Search & Discovery",
    description: "Implement intelligent search that understands user intent and provides relevant results.",
    benefits: ["Improved search accuracy", "Better user experience", "Increased content discoverability"]
  },
  {
    icon: MessageSquare,
    title: "Language Translation",
    description: "Real-time translation services that break down language barriers for global communication.",
    benefits: ["Global market expansion", "Improved communication", "Reduced language barriers"]
  },
  {
    icon: Target,
    title: "Content Generation",
    description: "AI-powered content creation that generates high-quality text for marketing and communication.",
    benefits: ["Faster content creation", "Consistent brand voice", "Reduced content costs"]
  }
];

const useCases = [
  {
    name: "Customer Service",
    description: "Automated support with intelligent routing and response generation",
    icon: "🎧",
    features: ["Multi-language support", "Context awareness", "Escalation handling"]
  },
  {
    name: "Content Management",
    description: "Automated content categorization, tagging, and quality assessment",
    icon: "📝",
    features: ["Auto-categorization", "Quality scoring", "Duplicate detection"]
  },
  {
    name: "Market Research",
    description: "Analyze customer feedback and social media for business insights",
    icon: "📊",
    features: ["Sentiment tracking", "Trend analysis", "Competitor monitoring"]
  },
  {
    name: "Legal & Compliance",
    description: "Document analysis and contract review for legal professionals",
    icon: "⚖️",
    features: ["Contract analysis", "Risk assessment", "Compliance checking"]
  },
  {
    name: "Healthcare",
    description: "Medical record processing and patient communication automation",
    icon: "🏥",
    features: ["Medical transcription", "Symptom analysis", "Patient communication"]
  },
  {
    name: "E-commerce",
    description: "Product descriptions, reviews analysis, and customer support automation",
    icon: "🛒",
    features: ["Product categorization", "Review analysis", "Chatbot support"]
  }
];

export default function NaturalLanguageProcessingPage() {
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

    console.log('NLP Service Inquiry:', formData);

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
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200/30 to-purple-200/30 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
                <MessageSquare className="w-4 h-4 mr-1" />
                Natural Language Processing
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unlock the Power of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Human Language
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Transform text data into actionable insights with our advanced NLP solutions. 
                From chatbots to sentiment analysis, we help you understand and leverage human language.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                onClick={() => setShowContactDialog(true)}
              >
                Explore NLP Solutions
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
              NLP Solutions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Comprehensive Language Processing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intelligent chatbots to advanced text analysis, our NLP solutions help you 
              understand, process, and leverage human language for business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nlpSolutions.map((solution, index) => (
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

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              Use Cases
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Real-World NLP Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our NLP solutions are transforming businesses across various industries 
              and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader>
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                    {useCase.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed mb-4">
                    {useCase.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-1">
                      {useCase.features.map((feature, i) => (
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
              Advanced NLP Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge NLP technologies and models to deliver accurate, 
              scalable, and efficient language processing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Large Language Models",
                description: "GPT, BERT, and custom transformer models for advanced text understanding",
                icon: Brain
              },
              {
                title: "Named Entity Recognition",
                description: "Identify and extract entities like names, dates, and locations from text",
                icon: Target
              },
              {
                title: "Intent Classification",
                description: "Understand user intent and classify messages for appropriate responses",
                icon: MessageSquare
              },
              {
                title: "Text Summarization",
                description: "Automatically generate concise summaries from large documents",
                icon: FileText
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
              How We Build Your NLP Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures successful NLP implementation tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Requirements Analysis",
                description: "We analyze your text data, understand your goals, and define NLP requirements.",
                icon: FileText
              },
              {
                step: "02", 
                title: "Data Preparation",
                description: "We clean, preprocess, and prepare your text data for optimal NLP performance.",
                icon: Database
              },
              {
                step: "03",
                title: "Model Development",
                description: "We develop, train, and fine-tune NLP models for your specific use case.",
                icon: Brain
              },
              {
                step: "04",
                title: "Integration & Testing",
                description: "We integrate your NLP solution and provide comprehensive testing and optimization.",
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
            Ready to Harness the Power of Language?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our NLP solutions can transform your business communication and data processing.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            onClick={() => setShowContactDialog(true)}
          >
            Start Your NLP Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl text-gray-900">Get Started with NLP Solutions</DialogTitle>
            <DialogDescription>
              Fill out the form below and our NLP experts will get back to you within 24 hours.
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
                placeholder="Tell us about your NLP requirements..."
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
              Thank you for your interest in our NLP solutions! We have received your message and will get back to you soon.
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Our NLP experts typically respond within 24 hours.
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
