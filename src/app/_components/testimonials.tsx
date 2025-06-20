/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Engineering Manager",
    company: "TechFlow Inc",
    content: "GitMind.ai has transformed how our team handles code reviews. What used to take hours now takes minutes, and the AI catches issues we might have missed. It's like having a senior developer reviewing every PR.",
    rating: 5,
    initials: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer",
    company: "StartupLab",
    content: "The repository intelligence feature is incredible. New team members can understand our complex codebase in days instead of weeks. The natural language queries make onboarding so much smoother.",
    rating: 5,
    initials: "MR"
  },
  {
    name: "Emily Thompson",
    role: "CTO",
    company: "DevCorp Solutions",
    content: "We've seen a 50% reduction in onboarding time and 85% faster code reviews since implementing GitMind.ai. The ROI was immediate, and our developers love the collaborative features.",
    rating: 5,
    initials: "ET"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-orange-600 bg-clip-text text-transparent">
            Trusted by Development Teams Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what engineering leaders and developers say about GitMind.ai
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-orange-200 dark:hover:border-orange-800"
            >
              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                {/* Testimonial content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Author info */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}