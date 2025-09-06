"use client";

import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Briefcase, Users, Zap, CheckCircle, Upload, FileText } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead development of cutting-edge AI solutions and machine learning models.",
    detailedDescription: {
      overview: "We're looking for a Senior AI Engineer to lead our machine learning initiatives and drive innovation in artificial intelligence solutions. You'll work on complex AI projects, mentor junior developers, and contribute to our cutting-edge AI platform.",
      responsibilities: [
        "Design and implement machine learning models and algorithms",
        "Lead AI project development from conception to deployment",
        "Mentor junior AI engineers and conduct code reviews",
        "Collaborate with cross-functional teams to integrate AI solutions",
        "Research and implement state-of-the-art AI technologies",
        "Optimize model performance and scalability",
        "Document technical specifications and best practices"
      ],
      requirements: [
        "Bachelor's or Master's degree in Computer Science, AI, or related field",
        "3-5 years of experience in machine learning and AI development",
        "Strong programming skills in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)",
        "Knowledge of MLOps and model deployment practices",
        "Strong problem-solving and analytical skills",
        "Excellent communication and leadership abilities"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Health insurance and wellness programs",
        "Professional development budget",
        "Flexible work arrangements",
        "State-of-the-art equipment and tools",
        "Team building activities and events"
      ]
    }
  },
  {
    id: 2,
    title: "Data Scientist",
    department: "Data Science",
    location: "Hyderabad, India", 
    type: "Full-time",
    experience: "2-4 years",
    description: "Analyze complex datasets and build predictive models for business insights.",
    detailedDescription: {
      overview: "Join our Data Science team to extract valuable insights from complex datasets and build predictive models that drive business decisions. You'll work with large-scale data, develop statistical models, and create data-driven solutions.",
      responsibilities: [
        "Analyze large datasets to identify trends and patterns",
        "Develop predictive models and statistical analyses",
        "Create data visualizations and reports for stakeholders",
        "Collaborate with engineering teams to implement data solutions",
        "Design and conduct A/B tests and experiments",
        "Maintain and optimize data pipelines",
        "Present findings to technical and non-technical audiences"
      ],
      requirements: [
        "Bachelor's or Master's degree in Data Science, Statistics, or related field",
        "2-4 years of experience in data analysis and modeling",
        "Proficiency in Python, R, SQL, and data visualization tools",
        "Experience with machine learning libraries (scikit-learn, pandas, numpy)",
        "Knowledge of statistical analysis and experimental design",
        "Strong analytical and problem-solving skills",
        "Experience with cloud data platforms preferred"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Comprehensive health and dental coverage",
        "Learning and development opportunities",
        "Remote work flexibility",
        "Modern data science tools and infrastructure",
        "Collaborative and innovative work environment"
      ]
    }
  },
  {
    id: 3,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time", 
    experience: "1-3 years",
    description: "Create beautiful and responsive user interfaces for our AI applications.",
    detailedDescription: {
      overview: "We're seeking a Frontend Developer to create intuitive and engaging user interfaces for our AI-powered applications. You'll work with modern web technologies to build responsive, accessible, and performant user experiences.",
      responsibilities: [
        "Develop responsive web applications using React/Next.js",
        "Implement modern UI/UX designs with attention to detail",
        "Optimize applications for performance and accessibility",
        "Collaborate with designers and backend developers",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and technical discussions",
        "Stay updated with latest frontend technologies and best practices"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "1-3 years of frontend development experience",
        "Strong proficiency in React, JavaScript, TypeScript, HTML/CSS",
        "Experience with modern CSS frameworks (Tailwind CSS)",
        "Knowledge of responsive design principles",
        "Familiarity with version control (Git) and build tools",
        "Understanding of web performance optimization",
        "Experience with testing frameworks preferred"
      ],
      benefits: [
        "Competitive salary and growth opportunities",
        "Health insurance and wellness programs",
        "Professional development and training budget",
        "Flexible working hours and remote options",
        "Latest development tools and equipment",
        "Creative and collaborative team environment"
      ]
    }
  },
  {
    id: 4,
    title: "AI Product Manager",
    department: "Product",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "4-6 years", 
    description: "Drive product strategy and roadmap for AI-powered solutions.",
    detailedDescription: {
      overview: "Lead the product strategy and development of our AI-powered solutions. You'll work closely with engineering, design, and business teams to define product requirements, prioritize features, and ensure successful product launches.",
      responsibilities: [
        "Define product strategy and roadmap for AI solutions",
        "Gather and analyze user requirements and market research",
        "Collaborate with engineering teams on technical specifications",
        "Manage product backlog and prioritize features",
        "Coordinate with design teams on user experience",
        "Monitor product performance and user feedback",
        "Present product updates to stakeholders and executives"
      ],
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "4-6 years of product management experience",
        "Experience with AI/ML products preferred",
        "Strong analytical and problem-solving skills",
        "Excellent communication and presentation abilities",
        "Experience with agile development methodologies",
        "Knowledge of user research and data analysis",
        "Technical background preferred"
      ],
      benefits: [
        "Competitive salary and equity participation",
        "Comprehensive health and wellness benefits",
        "Professional development and conference attendance",
        "Flexible work arrangements",
        "Leadership development opportunities",
        "Innovative and fast-paced work environment"
      ]
    }
  },
  {
    id: 5,
    title: "HROps Tech Internship",
    department: "Human Resources",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Gain hands-on experience in HR technology, automation, and people analytics using AI tools.",
    detailedDescription: {
      overview: "Join our Human Resources team as an HROps Tech Intern and gain valuable experience in HR technology, automation, and people analytics. You'll work on real projects that impact our workforce and learn how AI is transforming HR operations.",
      responsibilities: [
        "Assist in implementing HR technology solutions",
        "Support HR automation and process optimization",
        "Analyze HR data and create reports and dashboards",
        "Help with recruitment technology and applicant tracking",
        "Participate in employee engagement initiatives",
        "Learn about AI applications in HR and people analytics",
        "Support various HR projects and initiatives"
      ],
      requirements: [
        "Currently pursuing or recently completed degree in HR, Business, or related field",
        "Basic understanding of HR processes and practices",
        "Interest in technology and data analysis",
        "Proficiency in Microsoft Office and basic data tools",
        "Strong communication and interpersonal skills",
        "Eagerness to learn and adapt to new technologies",
        "Attention to detail and organizational skills"
      ],
      benefits: [
        "Hands-on experience with cutting-edge HR technology",
        "Mentorship from experienced HR professionals",
        "Exposure to AI and analytics in HR",
        "Networking opportunities within the company",
        "Potential for full-time employment",
        "Certificate of completion",
        "Stipend and flexible schedule"
      ]
    }
  },
  {
    id: 6,
    title: "AI/ML Internship",
    department: "Data Science",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Work on real AI projects, learn machine learning algorithms, and contribute to innovative solutions.",
    detailedDescription: {
      overview: "Join our Data Science team as an AI/ML Intern and work on real-world AI projects. You'll learn machine learning algorithms, contribute to innovative solutions, and gain hands-on experience with cutting-edge AI technologies.",
      responsibilities: [
        "Work on real AI/ML projects under senior mentorship",
        "Learn and implement machine learning algorithms",
        "Analyze datasets and build predictive models",
        "Participate in model training and evaluation",
        "Document experiments and findings",
        "Collaborate with the data science team on research",
        "Present project results and learnings"
      ],
      requirements: [
        "Currently pursuing or recently completed degree in Computer Science, AI, or related field",
        "Basic programming skills in Python",
        "Understanding of machine learning concepts",
        "Familiarity with data analysis and statistics",
        "Strong mathematical and analytical skills",
        "Eagerness to learn and work on challenging problems",
        "Good communication and teamwork abilities"
      ],
      benefits: [
        "Hands-on experience with real AI projects",
        "Mentorship from senior data scientists",
        "Access to cutting-edge AI tools and datasets",
        "Learning opportunities and skill development",
        "Networking with AI professionals",
        "Potential for full-time employment",
        "Stipend and flexible working hours"
      ]
    }
  },
  {
    id: 7,
    title: "UI/UX Internship",
    department: "Design",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Design intuitive user experiences for AI applications and learn modern design principles.",
    detailedDescription: {
      overview: "Join our Design team as a UI/UX Intern and learn how to create intuitive user experiences for AI applications. You'll work on real design projects, learn modern design principles, and contribute to user-centered design solutions.",
      responsibilities: [
        "Assist in designing user interfaces for AI applications",
        "Create wireframes, prototypes, and mockups",
        "Conduct user research and usability testing",
        "Learn design tools like Figma, Sketch, or Adobe Creative Suite",
        "Collaborate with developers and product managers",
        "Participate in design reviews and feedback sessions",
        "Document design decisions and user flows"
      ],
      requirements: [
        "Currently pursuing or recently completed degree in Design, HCI, or related field",
        "Basic understanding of UI/UX design principles",
        "Familiarity with design tools (Figma, Sketch, or similar)",
        "Creative thinking and attention to detail",
        "Interest in AI and technology applications",
        "Good communication and presentation skills",
        "Portfolio of design work preferred"
      ],
      benefits: [
        "Hands-on experience with real design projects",
        "Mentorship from experienced designers",
        "Access to professional design tools and resources",
        "Learning opportunities in AI/UX design",
        "Portfolio building opportunities",
        "Networking with design professionals",
        "Potential for full-time employment"
      ]
    }
  },
  {
    id: 8,
    title: "Influencer PR Internship",
    department: "Marketing",
    location: "Hyderabad, India",
    type: "Internship",
    experience: "0-1 years",
    description: "Manage influencer partnerships, create engaging content, and build brand awareness in the AI space.",
    detailedDescription: {
      overview: "Join our Marketing team as an Influencer PR Intern and learn how to build brand awareness in the AI space through influencer partnerships and engaging content creation. You'll work on real marketing campaigns and learn modern PR strategies.",
      responsibilities: [
        "Assist in managing influencer partnerships and collaborations",
        "Create engaging content for social media and marketing campaigns",
        "Research and identify potential influencers in the AI/tech space",
        "Help with PR activities and media outreach",
        "Monitor social media trends and brand mentions",
        "Support content creation and campaign execution",
        "Analyze campaign performance and provide insights"
      ],
      requirements: [
        "Currently pursuing or recently completed degree in Marketing, Communications, or related field",
        "Basic understanding of social media and digital marketing",
        "Strong written and verbal communication skills",
        "Creative thinking and content creation abilities",
        "Interest in AI/technology and influencer marketing",
        "Familiarity with social media platforms",
        "Attention to detail and organizational skills"
      ],
      benefits: [
        "Hands-on experience with real marketing campaigns",
        "Mentorship from experienced marketing professionals",
        "Access to marketing tools and analytics platforms",
        "Learning opportunities in AI/tech marketing",
        "Networking with industry professionals",
        "Portfolio building with real campaign work",
        "Potential for full-time employment"
      ]
    }
  }
];

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<typeof jobOpenings[0] | null>(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleJobApply = (job: typeof jobOpenings[0]) => {
    setSelectedJob(job);
    setIsApplicationOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      coverLetter: '',
      resume: null
    });

    setIsSubmitting(false);
    setIsApplicationOpen(false);
    setShowSuccessDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
      <Navigation 
        activeSection="careers" 
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
                <Briefcase className="w-4 h-4 mr-1" />
                Join Our Team
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build the Future with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  AI Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Join DevTechAi.Org and be part of a team that's transforming industries 
                through cutting-edge artificial intelligence solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-green-200/20 to-blue-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 transform hover:scale-105 transition-all duration-300">
              Open Positions
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Current Job Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities and find your perfect role 
              in the world of artificial intelligence.
            </p>
          </div>

          {/* Full-time Positions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Full-time Positions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.filter(job => job.type === 'Full-time').map((job) => (
                <Card 
                  key={job.id} 
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {job.department}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              job.type === 'Internship' 
                                ? 'border-orange-200 text-orange-700 bg-orange-50' 
                                : 'border-blue-200 text-blue-700 bg-blue-50'
                            }`}
                          >
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <Briefcase className="h-8 w-8 text-purple-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {job.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        📍 {job.location}
                      </div>
                      <Button 
                        onClick={() => handleJobApply(job)}
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Internship Positions */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Internship Opportunities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {jobOpenings.filter(job => job.type === 'Internship').map((job) => (
                <Card 
                  key={job.id} 
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 border-0 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline" className="text-xs">
                            {job.department}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              job.type === 'Internship' 
                                ? 'border-orange-200 text-orange-700 bg-orange-50' 
                                : 'border-blue-200 text-blue-700 bg-blue-50'
                            }`}
                          >
                            {job.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {job.experience}
                          </Badge>
                        </div>
                      </div>
                      <Briefcase className="h-8 w-8 text-purple-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed mb-4">
                      {job.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500">
                        📍 {job.location}
                      </div>
                      <Button 
                        onClick={() => handleJobApply(job)}
                        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white transform hover:scale-105 hover:shadow-lg transition-all duration-300"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-36 h-36 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-green-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-200 transform hover:scale-105 transition-all duration-300">
              Why Join Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Be Part of Something Big
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that's passionate about pushing the boundaries of AI technology 
              and making a real impact in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Collaborative Culture</h3>
              <p className="text-gray-600">Work with brilliant minds in an environment that fosters innovation and creativity.</p>
            </div>
            <div className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Cutting-Edge Technology</h3>
              <p className="text-gray-600">Work with the latest AI technologies and contribute to groundbreaking projects.</p>
            </div>
            <div className="text-center space-y-4 group transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                <Briefcase className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Growth Opportunities</h3>
              <p className="text-gray-600">Advance your career with continuous learning and professional development.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Job Application Dialog */}
      <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-purple-600" />
              <span>Apply for {selectedJob?.title}</span>
            </DialogTitle>
            <DialogDescription>
              Review the job details below and fill out the application form. We'll review your profile and get back to you soon.
            </DialogDescription>
          </DialogHeader>

          {/* Job Description Section */}
          {selectedJob?.detailedDescription && (
            <div className="mb-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg border border-purple-200">
              <div className="space-y-6">
                {/* Job Overview */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-purple-600" />
                    Job Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedJob.detailedDescription.overview}
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Key Responsibilities
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.detailedDescription.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-600" />
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.detailedDescription.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-orange-600" />
                    Benefits & Perks
                  </h3>
                  <ul className="space-y-2">
                    {selectedJob.detailedDescription.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full Name *</label>
                <Input 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Doe" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email *</label>
                <Input 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone Number *</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Years of Experience *</label>
                <Input 
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="3 years" 
                  required
                  className="border-gray-200 focus:border-purple-500" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Resume/CV *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors duration-300">
                <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="hidden"
                  id="resume-upload"
                />
                <label 
                  htmlFor="resume-upload"
                  className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-300"
                >
                  Choose File
                </label>
                <p className="text-xs text-gray-500 mt-2">PDF, DOC, DOCX up to 10MB</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Cover Letter</label>
              <Textarea 
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..." 
                className="border-gray-200 focus:border-purple-500 min-h-[120px]"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button 
                type="button"
                variant="outline" 
                onClick={() => setIsApplicationOpen(false)}
                className="border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span>Application Submitted!</span>
            </DialogTitle>
            <DialogDescription className="text-center py-4">
              Thank you for applying! We have received your application and will get back to you soon.
              <br />
              <span className="text-sm text-gray-500 mt-2 block">
                Our HR team typically reviews applications within 3-5 business days.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center">
            <Button 
              onClick={() => setShowSuccessDialog(false)}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
