"use client";

import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Github className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl">GitMind.ai</span>
            </div>
            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              AI-powered GitHub workflow optimization for modern development teams.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="sm" className="h-9 w-9 p-0">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-orange-500 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Enterprise</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Feature Requests</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-lg p-6 md:p-8">
            <div className="text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
                <p className="text-muted-foreground text-sm">
                  Get the latest updates on new features and developer insights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:max-w-xs">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 text-sm font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 GitMind.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-orange-500 transition-colors">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}