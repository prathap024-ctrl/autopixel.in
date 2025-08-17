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

const ContactForm = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="bg-white rounded-2xl px-4 py-12 sm:py-20 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Start Your Project
        </h2>

        {/* Form */}
        <form className="mt-8 space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label>Full Name *</Label>
              <Input type="text" placeholder="John Smith" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email Address *</Label>
              <Input type="email" placeholder="john@company.com" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label>Company Name</Label>
              <Input type="text" placeholder="Your Company" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone Number</Label>
              <Input type="phone" placeholder="+91 9876543210" />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label>Service Interest *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="voice">AI Voice Agents</SelectItem>
                  <SelectItem value="outreach">
                    Multi-Channel Outreach
                  </SelectItem>
                  <SelectItem value="funnels">
                    Funnel & Landing Page Builds
                  </SelectItem>
                  <SelectItem value="strategy">Growth Strategy</SelectItem>
                  <SelectItem value="automation">Automation Systems</SelectItem>
                  <SelectItem value="discuss">Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Monthly Budget Range</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10-25k">₹10,000 – ₹25,000</SelectItem>
                  <SelectItem value="25-50k">₹25,000 – ₹50,000</SelectItem>
                  <SelectItem value="50k-1l">₹50,000 – ₹1L</SelectItem>
                  <SelectItem value="1l+">₹1L+</SelectItem>
                  <SelectItem value="discuss">Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <Label>Project Timeline</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2w">1-2 weeks</SelectItem>
                  <SelectItem value="1m">1 month</SelectItem>
                  <SelectItem value="3m+">3+ months</SelectItem>
                  <SelectItem value="discuss">Discuss</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Textarea */}
          <div className="flex flex-col gap-2">
            <Label>Project Details *</Label>
            <Textarea
              placeholder="Tell us about your current challenges, what you’d like to automate, and your goals..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              rows={4}
            />
            <div className="text-right text-xs text-gray-500">
              {message.length}/500 characters
            </div>
          </div>

          {/* Button */}
          <div>
            <InteractiveHoverButton
              className="border-2 border-gray-900"
              type="submit"
            >
              Send Message
            </InteractiveHoverButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
