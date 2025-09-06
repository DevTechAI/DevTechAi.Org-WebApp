"use client";

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Users, Globe } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navigation 
        activeSection="terms" 
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
                <FileText className="w-4 h-4 mr-1" />
                Legal Information
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Terms of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our AI services and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8">
            
            {/* Last Updated */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>Last Updated: January 2025</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  These terms of service govern your use of DevTechAi.Org's AI solutions and services. 
                  By accessing or using our services, you agree to be bound by these terms.
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-purple-600" />
                  <span>1. Service Description</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  DevTechAi.Org provides artificial intelligence solutions including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Machine Learning and Predictive Analytics</li>
                  <li>Natural Language Processing Services</li>
                  <li>Computer Vision Solutions</li>
                  <li>Data Analytics and Business Intelligence</li>
                  <li>Cloud SaaS Services</li>
                  <li>AI Consulting and Implementation</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-green-600" />
                  <span>2. User Responsibilities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">By using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Provide accurate and complete information when required</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                  <li>Respect intellectual property rights</li>
                  <li>Maintain confidentiality of any proprietary information</li>
                  <li>Report any security vulnerabilities responsibly</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Privacy */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <span>3. Data Privacy and Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We are committed to protecting your data and privacy:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>All data is encrypted in transit and at rest</li>
                  <li>We implement industry-standard security measures</li>
                  <li>Data is processed in compliance with applicable privacy laws</li>
                  <li>We do not sell or share personal data with third parties without consent</li>
                  <li>Users have the right to access, modify, or delete their data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-purple-600" />
                  <span>4. Intellectual Property</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  All intellectual property rights in our services remain with DevTechAi.Org:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Our AI models, algorithms, and software are proprietary</li>
                  <li>Client data and custom solutions remain the property of the client</li>
                  <li>We respect third-party intellectual property rights</li>
                  <li>Unauthorized use or reproduction is strictly prohibited</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-red-600" />
                  <span>5. Limitation of Liability</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Our services are provided "as is" without warranties</li>
                  <li>We are not liable for indirect or consequential damages</li>
                  <li>Our total liability is limited to the amount paid for services</li>
                  <li>We do not guarantee specific outcomes or results</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> legal@devtechai.org</p>
                  <p><strong>Phone:</strong> +91 7794841440</p>
                  <p><strong>Address:</strong> Hitech City, Hyderabad, Telangana, India</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
