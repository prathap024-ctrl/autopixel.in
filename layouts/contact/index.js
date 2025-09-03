"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Bot,
  Zap,
  Target,
  Phone,
  Mail,
  Award
} from "lucide-react";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    timeline: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", text: "Happy Clients" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "340%", text: "Avg Revenue Increase" },
    { icon: <Clock className="w-6 h-6" />, number: "24/7", text: "Support Available" },
    { icon: <Award className="w-6 h-6" />, number: "4.9★", text: "Client Rating" }
  ];

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Voice Agents",
      description: "Intelligent conversational AI that handles customer calls, bookings, and support inquiries 24/7 with natural human-like interactions.",
      benefits: ["Reduce support costs by 70%", "Handle 1000+ calls simultaneously", "Multilingual support"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Multi-Channel Outreach",
      description: "Automated campaigns across email, SMS, WhatsApp, and social media that generate qualified leads and nurture prospects effectively.",
      benefits: ["3x higher response rates", "Automated follow-up sequences", "Lead scoring & qualification"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Sales Funnel & Landing Pages",
      description: "High-converting sales funnels and optimized landing pages designed to maximize your ROI and accelerate customer acquisition.",
      benefits: ["Up to 85% conversion rates", "A/B tested templates", "Mobile-optimized design"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Business Automation",
      description: "Custom workflow automation that eliminates repetitive tasks and streamlines your operations for maximum efficiency.",
      benefits: ["Save 40+ hours per week", "Eliminate human errors", "Scalable processes"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Patel",
      company: "E-commerce Solutions Pvt Ltd",
      text: "Our sales increased by 280% in just 3 months after implementing their AI voice agents and automation systems.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Priya Sharma",
      company: "Digital Marketing Agency",
      text: "The multi-channel outreach system generated 150 qualified leads in the first month. ROI was incredible!",
      rating: 5,
      image: "👩‍💻"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-6">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-sm text-blue-200">Trusted by 500+ Businesses Across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join successful businesses that have <strong className="text-blue-400">increased revenue by 340%</strong> and
              <strong className="text-purple-400"> reduced costs by 60%</strong> using our cutting-edge AI solutions
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="text-blue-400 mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Column - Services (2/3 width) */}
            <div className="lg:col-span-2 space-y-8">

              {/* Services Grid */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
                  Our Premium AI Solutions
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                      <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-slate-300 mb-4 leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span className="text-slate-400">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">How We Transform Your Business</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { step: "1", title: "Strategy Call", desc: "Free 30-min consultation to understand your goals" },
                    { step: "2", title: "Custom Solution", desc: "Tailored AI automation plan designed for your business" },
                    { step: "3", title: "Implementation", desc: "Complete setup and training within 14 days" }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                        {item.step}
                      </div>
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-3">{testimonial.image}</div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-slate-400 text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-slate-300 italic">{testimonial.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Contact Form (1/3 width, sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">

                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs text-green-400">FREE Consultation</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Get Started Today</h2>
                    <p className="text-slate-300 text-sm">Transform your business in 30 days</p>
                  </div>

                  {/* Contact Form */}
                  <div className="space-y-5">

                    {/* Name & Email */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-white font-medium text-sm">Full Name *</Label>
                        <Input
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white font-medium text-sm">Business Email *</Label>
                        <Input
                          type="email"
                          placeholder="your@company.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 h-11"
                        />
                      </div>
                    </div>

                    {/* Company & Phone */}
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-white font-medium text-sm">Company Name</Label>
                        <Input
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 h-11"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white font-medium text-sm">Phone Number</Label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 h-11"
                        />
                      </div>
                    </div>

                    {/* Service Interest */}
                    <div className="space-y-2">
                      <Label className="text-white font-medium text-sm">Primary Interest *</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white h-11">
                          <SelectValue placeholder="Choose your main interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="voice">AI Voice Agents</SelectItem>
                          <SelectItem value="outreach">Multi-Channel Outreach</SelectItem>
                          <SelectItem value="funnels">Sales Funnels & Landing Pages</SelectItem>
                          <SelectItem value="automation">Business Automation</SelectItem>
                          <SelectItem value="strategy">Growth Strategy</SelectItem>
                          <SelectItem value="all">All Solutions</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-2">
                      <Label className="text-white font-medium text-sm">Monthly Investment Range</Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white h-11">
                          <SelectValue placeholder="Select your budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">₹15,000 - ₹30,000 (Startup)</SelectItem>
                          <SelectItem value="growth">₹30,000 - ₹75,000 (Growth)</SelectItem>
                          <SelectItem value="scale">₹75,000 - ₹1.5L (Scale)</SelectItem>
                          <SelectItem value="enterprise">₹1.5L+ (Enterprise)</SelectItem>
                          <SelectItem value="discuss">Let&apos;s Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <Label className="text-white font-medium text-sm">When to Start?</Label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white h-11">
                          <SelectValue placeholder="Project timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="1-2w">Within 2 weeks</SelectItem>
                          <SelectItem value="1m">Within 1 month</SelectItem>
                          <SelectItem value="flexible">Flexible timing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label className="text-white font-medium text-sm">Your Goals & Challenges *</Label>
                      <Textarea
                        placeholder="Tell us about your current challenges, what you want to automate, and your business goals..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength={500}
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none"
                      />
                      <div className="text-right text-xs text-slate-400">
                        {message.length}/500 characters
                      </div>
                    </div>

                    {/* Trust Indicators */}
                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <div className="flex items-center">
                          <Shield className="w-3 h-3 mr-1 text-green-400" />
                          <span>100% Secure</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1 text-blue-400" />
                          <span>Response in 2hrs</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-3 h-3 mr-1 text-purple-400" />
                          <span>No spam calls</span>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <InteractiveHoverButton
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 text-base border-0 group shadow-lg"
                      type="submit"
                    >
                      <span className="flex items-center justify-center">
                        Get My Free Strategy Session
                      </span>
                    </InteractiveHoverButton>

                    <div className="text-center space-y-2">
                      <p className="text-xs text-slate-400">
                        ✓ No setup fees ✓ Cancel anytime
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-xs text-slate-500">
                        <div className="flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          <span>Email only</span>
                        </div>
                        <span>•</span>
                        <span>Privacy protected</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to 10X Your Business Growth?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join 500+ successful businesses that have transformed their operations with our AI automation solutions.
              <br className="hidden sm:block" />
              <strong className="text-blue-400">Average ROI: 340% in 90 days</strong>
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-slate-400">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>No setup costs</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>14-day implementation</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                <span>Money-back guarantee</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;