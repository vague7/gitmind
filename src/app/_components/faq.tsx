"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does GitMind.ai integrate with existing GitHub workflows?",
    answer: "GitMind.ai seamlessly integrates with your existing GitHub repositories through our OAuth integration. Simply connect your repositories, and our AI begins analyzing your codebase immediately. There's no need to change your current workflow - GitMind.ai enhances what you're already doing."
  },
  {
    question: "Is my code secure and private?",
    answer: "Absolutely. We follow enterprise-grade security practices with SOC 2 compliance. Your code is processed securely and never stored permanently. We use encryption in transit and at rest, and you maintain full control over which repositories GitMind.ai can access."
  },
  
  {
    question: "How accurate are the AI-generated PR reviews?",
    answer: "Our AI achieves 95%+ accuracy in identifying potential issues, bugs, and improvement opportunities. The system is trained on millions of code reviews and continuously learns from feedback. However, we always recommend human oversight for critical changes."
  },
  {
    question: "Can GitMind.ai work with private repositories?",
    answer: "Yes, GitMind.ai fully supports private repositories. Our GitHub integration requests only the necessary permissions, and you can selectively choose which repositories to connect. All analysis happens securely in our SOC 2 compliant infrastructure."
  },
  {
    question: "What programming languages are supported?",
    answer: "GitMind.ai supports all major programming languages including JavaScript, TypeScript, Python, Java, Go, Rust, C++, C#, Ruby, PHP, and more. Our AI models are continuously updated to support new languages and frameworks as they emerge."
  },
  
  
];

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-orange-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about GitMind.ai
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-orange-200 dark:hover:border-orange-800 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-orange-600 py-6 text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact section */}
          <div className="mt-16 text-center bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you get the most out of GitMind.ai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@gitmind.ai" 
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-semibold transition-colors"
              >
                Contact Support
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-border hover:border-orange-200 dark:hover:border-orange-800 rounded-md font-semibold transition-colors"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}