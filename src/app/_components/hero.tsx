"use client";
import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Zap, Users, MessageSquare } from 'lucide-react';

export function Hero() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-background to-orange-50 dark:from-orange-950/20 dark:via-background dark:to-orange-950/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-orange-200/30 dark:bg-orange-800/20 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-orange-100/40 dark:bg-orange-900/20 animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full text-sm font-medium text-orange-800 dark:text-orange-200 mb-6">
            <Zap className="h-4 w-4" />
            <span>AI-Powered GitHub Workflow Optimization</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-orange-600 bg-clip-text text-transparent">
            Transform Your GitHub
            <br />
            <span className="text-orange-500">Workflow with AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Accelerate development with intelligent repository insights, automated PR reviews, 
            and collaborative tools that help engineering teams ship faster and smarter.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={()=> router.push("/sign-up")}
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
              <Github className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Faster Code Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">50%</div>
              <div className="text-sm text-muted-foreground">Less Time Onboarding</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-2">10k+</div>
              <div className="text-sm text-muted-foreground">Developers Trust Us</div>
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-lg shadow-2xl p-6 animate-fade-in">
            {/* Mock GitHub interface */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 text-sm text-muted-foreground">github.com/your-repo</div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted rounded p-4 flex items-center space-x-3">
                <MessageSquare className="h-8 w-8 text-orange-500" />
                <div>
                  <div className="font-medium text-sm">Ask Questions</div>
                  <div className="text-xs text-muted-foreground">Natural language queries</div>
                </div>
              </div>
              <div className="bg-muted rounded p-4 flex items-center space-x-3">
                <Zap className="h-8 w-8 text-orange-500" />
                <div>
                  <div className="font-medium text-sm">AI Reviews</div>
                  <div className="text-xs text-muted-foreground">Automated PR analysis</div>
                </div>
              </div>
              <div className="bg-muted rounded p-4 flex items-center space-x-3">
                <Users className="h-8 w-8 text-orange-500" />
                <div>
                  <div className="font-medium text-sm">Team Hub</div>
                  <div className="text-xs text-muted-foreground">Centralized workspace</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}