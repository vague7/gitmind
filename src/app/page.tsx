import { auth } from "@clerk/nextjs/server";
import { Navbar } from './_components/navbar';
import { Hero } from './_components/hero';
import { Features } from './_components/features';
import { HowItWorks } from './_components/how-it-works';
import { Testimonials } from './_components/testimonials';
import { FAQ } from './_components/faq';
import { Footer } from './_components/footer';
import { redirect } from "next/navigation";


export default async function Home() {
  const { userId } =await  auth();
    if (userId) {
      return  redirect('/dashboard')
    }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
    
  );
}