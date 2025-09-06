"use client";

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Globe, BarChart3, Lightbulb, Zap, Shield, Bot, Database, Cpu, Target, Users, FileText, Search, Camera, TrendingUp, Settings, Code, Cloud, Lock, Server, Monitor, Smartphone, Wifi, HardDrive, Layers, RefreshCw, Globe2, ShieldCheck, BarChart, PieChart } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Custom ML models that learn from your data to predict trends, automate decisions, and optimize processes.",
    color: "purple"
  },
  {
    icon: Globe,
    title: "Natural Language Processing",
    description: "Advanced NLP solutions for chatbots, sentiment analysis, document processing, and language understanding.",
    color: "blue"
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description: "Transform raw data into actionable insights with our intelligent analytics and business intelligence platforms.",
    color: "green"
  },
  {
    icon: Lightbulb,
    title: "Computer Vision",
    description: "Visual recognition systems for quality control, security, medical imaging, and automated inspection.",
    color: "orange"
  },
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description: "Intelligent conversational AI that provides 24/7 customer support and automates customer interactions.",
    color: "indigo"
  },
  {
    icon: Database,
    title: "Big Data Processing",
    description: "Scalable data processing solutions for handling massive datasets with real-time analytics capabilities.",
    color: "cyan"
  },
  {
    icon: Cpu,
    title: "Deep Learning",
    description: "Advanced neural networks for complex pattern recognition, image processing, and predictive modeling.",
    color: "violet"
  },
  {
    icon: Target,
    title: "Predictive Analytics",
    description: "Forecast future trends and behaviors using advanced statistical models and machine learning algorithms.",
    color: "emerald"
  },
  {
    icon: Users,
    title: "AI-Powered CRM",
    description: "Intelligent customer relationship management systems that enhance customer engagement and sales.",
    color: "rose"
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Automated document processing, extraction, and analysis using advanced AI and OCR technologies.",
    color: "amber"
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description: "AI-powered search engines that understand context and provide relevant, personalized results.",
    color: "lime"
  },
  {
    icon: Camera,
    title: "Video Analytics",
    description: "Real-time video analysis for surveillance, behavior recognition, and automated monitoring systems.",
    color: "sky"
  },
  {
    icon: TrendingUp,
    title: "AI-Driven Marketing",
    description: "Personalized marketing campaigns, customer segmentation, and automated content generation.",
    color: "fuchsia"
  },
  {
    icon: Settings,
    title: "AI Model Optimization",
    description: "Performance tuning, model compression, and deployment optimization for production AI systems.",
    color: "slate"
  },
  {
    icon: Code,
    title: "AI Development Services",
    description: "Custom AI application development, API integration, and end-to-end AI solution implementation.",
    color: "stone"
  },
  {
    icon: Cloud,
    title: "AI Cloud Infrastructure",
    description: "Scalable cloud-based AI platforms with GPU acceleration and managed AI services.",
    color: "zinc"
  },
  {
    icon: Lock,
    title: "AI Security & Compliance",
    description: "Secure AI implementations with privacy protection, bias detection, and regulatory compliance.",
    color: "neutral"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Intelligent automation solutions that streamline workflows and eliminate repetitive tasks.",
    color: "teal"
  },
  {
    icon: Shield,
    title: "AI Consulting",
    description: "Strategic guidance on AI adoption, implementation roadmaps, and technology selection for your business.",
    color: "pink"
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description: "Scalable cloud platforms with high availability, auto-scaling, and global deployment capabilities.",
    color: "blue"
  },
  {
    icon: Monitor,
    title: "SaaS Application Development",
    description: "Custom software-as-a-service applications built for scalability, security, and user experience.",
    color: "green"
  },
  {
    icon: Smartphone,
    title: "Mobile-First SaaS",
    description: "Cross-platform mobile applications with offline capabilities and seamless cloud synchronization.",
    color: "purple"
  },
  {
    icon: Wifi,
    title: "API Development & Management",
    description: "RESTful APIs, GraphQL endpoints, and comprehensive API management with rate limiting and analytics.",
    color: "orange"
  },
  {
    icon: HardDrive,
    title: "Cloud Data Management",
    description: "Secure data storage, backup solutions, and data migration services across cloud platforms.",
    color: "teal"
  },
  {
    icon: Layers,
    title: "Microservices Architecture",
    description: "Scalable microservices design with containerization, orchestration, and service mesh implementation.",
    color: "indigo"
  },
  {
    icon: RefreshCw,
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines, infrastructure as code, and continuous integration workflows.",
    color: "cyan"
  },
  {
    icon: Globe2,
    title: "Multi-Cloud Solutions",
    description: "Hybrid and multi-cloud strategies for optimal performance, cost efficiency, and disaster recovery.",
    color: "violet"
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security",
    description: "Comprehensive security solutions including identity management, encryption, and compliance monitoring.",
    color: "emerald"
  },
  {
    icon: BarChart,
    title: "Cloud Analytics Platform",
    description: "Real-time analytics dashboards with data visualization and business intelligence capabilities.",
    color: "rose"
  },
  {
    icon: PieChart,
    title: "Cloud Cost Optimization",
    description: "Cost monitoring, resource optimization, and automated scaling to minimize cloud spending.",
    color: "amber"
  }
];

const colorClasses = {
  purple: { bg: 'from-purple-100 to-purple-200', text: 'text-purple-600' },
  blue: { bg: 'from-blue-100 to-blue-200', text: 'text-blue-600' },
  green: { bg: 'from-green-100 to-green-200', text: 'text-green-600' },
  orange: { bg: 'from-orange-100 to-orange-200', text: 'text-orange-600' },
  teal: { bg: 'from-teal-100 to-teal-200', text: 'text-teal-600' },
  pink: { bg: 'from-pink-100 to-pink-200', text: 'text-pink-600' },
  indigo: { bg: 'from-indigo-100 to-indigo-200', text: 'text-indigo-600' },
  cyan: { bg: 'from-cyan-100 to-cyan-200', text: 'text-cyan-600' },
  violet: { bg: 'from-violet-100 to-violet-200', text: 'text-violet-600' },
  emerald: { bg: 'from-emerald-100 to-emerald-200', text: 'text-emerald-600' },
  rose: { bg: 'from-rose-100 to-rose-200', text: 'text-rose-600' },
  amber: { bg: 'from-amber-100 to-amber-200', text: 'text-amber-600' },
  lime: { bg: 'from-lime-100 to-lime-200', text: 'text-lime-600' },
  sky: { bg: 'from-sky-100 to-sky-200', text: 'text-sky-600' },
  fuchsia: { bg: 'from-fuchsia-100 to-fuchsia-200', text: 'text-fuchsia-600' },
  slate: { bg: 'from-slate-100 to-slate-200', text: 'text-slate-600' },
  stone: { bg: 'from-stone-100 to-stone-200', text: 'text-stone-600' },
  zinc: { bg: 'from-zinc-100 to-zinc-200', text: 'text-zinc-600' },
  neutral: { bg: 'from-neutral-100 to-neutral-200', text: 'text-neutral-600' }
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            AI & Cloud Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered applications to cloud infrastructure, we provide comprehensive 
            technology solutions that transform your business processes and unlock new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50 transform perspective-1000"
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[service.color as keyof typeof colorClasses].bg} flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform-gpu`}>
                  <service.icon className={`h-6 w-6 ${colorClasses[service.color as keyof typeof colorClasses].text}`} />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}