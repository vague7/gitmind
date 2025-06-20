"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, GitPullRequest, Users, Mic } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "Repository Intelligence",
    description: "Share any GitHub repository link and ask natural language questions to get concise, intuitive answers.",
    benefits: [
      "Instant codebase understanding",
      "Natural language queries",
      "Faster team onboarding"
    ]
  },
  {
    icon: GitPullRequest,
    title: "AI Pull Request Reviews",
    description: "Automated PR analysis with accurate, concise descriptions and intelligent suggestions for improvement.",
    benefits: [
      "85% faster code reviews",
      "Consistent review quality",
      "Automated bug detection"
    ]
  },
  {
    icon: Users,
    title: "Project Collaboration Hub",
    description: "Centralized workspace for team collaboration across multiple repositories with shared insights.",
    benefits: [
      "Cross-repo visibility",
      "Team knowledge sharing",
      "Unified project view"
    ]
  },
  {
    icon: Mic,
    title: "Meeting Intelligence",
    description: "Upload meeting recordings to extract AI-generated insights and actionable items automatically.",
    benefits: [
      "Auto-generated summaries",
      "Action item tracking",
      "Context preservation"
    ]
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-orange-600 bg-clip-text text-transparent">
            Powerful Features for Modern Development Teams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to accelerate your GitHub workflow and improve team collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-orange-200 dark:hover:border-orange-800"
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 dark:bg-orange-900/30 mx-auto mb-4 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40 transition-colors">
                  <feature.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature highlight section */}
        <div className="mt-20 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                See GitMind.ai in Action
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join thousands of development teams who&apos;ve transformed their GitHub workflow. 
                From startup MVPs to enterprise applications, GitMind.ai scales with your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                  <span>Free 200 credits</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">AI Assistant</div>
                    <div className="text-xs text-green-500">● Online</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-muted rounded-lg p-3">
                    <span className="font-medium">You:</span> What does this function do?
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3">
                    <span className="font-medium text-orange-600">GitMind.ai:</span> This function validates user input and handles authentication. It includes rate limiting and error handling for production use.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}