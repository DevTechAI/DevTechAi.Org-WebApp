"use client";

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Lock, Users, Globe } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navigation 
        activeSection="privacy" 
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
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
                <Shield className="w-4 h-4 mr-1" />
                Privacy & Data Protection
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Privacy{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-green-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="space-y-8">
            
            {/* Last Updated */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-green-600" />
                  <span>Last Updated: January 2025</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  This Privacy Policy describes how DevTechAi.Org collects, uses, and protects your personal information 
                  when you use our AI services and solutions. We are committed to protecting your privacy and ensuring 
                  the security of your data.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="h-6 w-6 text-blue-600" />
                  <span>1. Information We Collect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We collect information you provide directly to us and information we obtain automatically:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Personal Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Name, email address, and contact information</li>
                      <li>Company name and job title</li>
                      <li>Project requirements and specifications</li>
                      <li>Payment and billing information</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Usage Information:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Service usage patterns and preferences</li>
                      <li>Device information and IP addresses</li>
                      <li>Log files and analytics data</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  <span>2. How We Use Your Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Deliver AI solutions and technical support</li>
                  <li>Process transactions and manage accounts</li>
                  <li>Communicate about services, updates, and promotions</li>
                  <li>Improve our AI models and service quality</li>
                  <li>Ensure security and prevent fraud</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="h-6 w-6 text-green-600" />
                  <span>3. Data Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We implement comprehensive security measures to protect your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data storage with industry-standard protocols</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication systems</li>
                  <li>Employee training on data protection practices</li>
                  <li>Incident response and breach notification procedures</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span>4. Information Sharing</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell, trade, or rent your personal information. We may share information only in these circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>With trusted service providers under strict confidentiality agreements</li>
                  <li>In case of business transfers or mergers</li>
                  <li>To protect our rights, property, or safety</li>
                </ul>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <span>5. Your Privacy Rights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a structured format</li>
                  <li><strong>Restriction:</strong> Limit how we process your data</li>
                  <li><strong>Objection:</strong> Object to certain types of processing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-6 w-6 text-green-600" />
                  <span>6. Cookies and Tracking</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Essential Cookies:</strong> Required for basic WebApp functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand WebApp usage</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span>7. International Data Transfers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Your data may be transferred to and processed in countries other than your own:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>We ensure adequate protection through standard contractual clauses</li>
                  <li>Data processing agreements with all third-party providers</li>
                  <li>Compliance with applicable data protection laws</li>
                  <li>Regular assessments of data transfer mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 bg-gradient-to-br from-green-50 to-blue-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-green-600" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or want to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Data Protection Officer:</strong> privacy@devtechai.org</p>
                  <p><strong>General Inquiries:</strong> hello@devtechai.org</p>
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
