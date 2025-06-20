"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Zap, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Github,
    title: "Connect Your Repository",
    description: "Simply paste your GitHub repository URL or connect through our GitHub integration. GitMind.ai instantly analyzes your codebase structure, dependencies, and patterns.",
    features: ["One-click integration", "Private repo support", "Multi-repo management"]
  },
  {
    icon: Zap,
    title: "AI Analyzes & Learns",
    description: "Our advanced AI models process your code, documentation, and project history to build a comprehensive understanding of your project's architecture and context.",
    features: ["Deep code analysis", "Pattern recognition", "Context mapping"]
  },
  {
    icon: Rocket,
    title: "Accelerate Development",
    description: "Start asking questions, reviewing PRs, and collaborating with your team using AI-powered insights that understand your specific codebase and development patterns.",
    features: ["Natural language queries", "Automated reviews", "Team collaboration"]
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-orange-600 bg-clip-text text-transparent">
            How GitMind.ai Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 dark:from-orange-800 dark:via-orange-700 dark:to-orange-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-orange-200 dark:hover:border-orange-800">
                  <CardContent className="p-8 text-center">
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-orange-500 text-white font-bold text-sm flex items-center justify-center shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 dark:bg-orange-900/30 mx-auto mb-6 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40 transition-colors mt-4">
                      <step.icon className="h-10 w-10 text-orange-600 dark:text-orange-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="h-6 w-6 text-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Workflow?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who&apos;ve accelerated their GitHub workflow with GitMind.ai. 
              Start your free trial today and experience the difference AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg font-semibold"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Free 200 credits • Setup in 5 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}