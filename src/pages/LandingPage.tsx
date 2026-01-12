import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { IncludedSection } from '../components/ProductSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';


export function LandingPage() {
    return (
        <div className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-white relative">
            <Header />
            <main>
                <Hero />
                <AboutSection />
                <IncludedSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}
