import React, { useState } from "react";
import { TutorialVideosSection } from "../components/helpSection/tutorialVideoSection";
import { FAQSection } from "../components/helpSection/faqSection";

const HelpSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I get started with MeMeY?",
      answer:
        'To get started, download MeMeY using the "GET MEMEY" button on the Blue Pill or Red Pill page. Follow the login tutorial below to set up your account, and use the data import tutorial to load your dataset.',
    },
    {
      question: "What kind of data does MeMeY support?",
      answer:
        "MeMeY supports CSV, Excel, and JSON file formats. Ensure your data is clean and properly formatted for the best results. Check the data import tutorial for more details.",
    },
    {
      question: "Can I schedule a personalized demo?",
      answer:
        'Yes! Click the "Schedule a Demo" button below to book a live session with our team. We’ll walk you through MeMeY’s features and answer any questions you have.',
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            You’ve come to the right place.
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We’re here to help you get the most out of MeMeY. Reach out via
            email or phone, explore our tutorials, or dive into our FAQ section
            for quick answers.
          </p>
        </div>
        <TutorialVideosSection />
        <FAQSection faqs={faqs} openFaq={openFaq} setOpenFaq={setOpenFaq} />
      </div>

      {/* Custom Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-in-out;
          }
        `}
      </style>
    </main>
  );
};

export default HelpSection;
