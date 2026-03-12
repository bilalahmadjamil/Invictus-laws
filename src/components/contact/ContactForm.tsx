"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double-submission
    
    setIsSubmitting(true);
    setError(null);
    setIsSubmitted(false);
    
    const formData = new FormData(e.currentTarget);
    const formElement = e.currentTarget;
    
    try {
      const response = await fetch("https://formspree.io/f/mwvrblyv", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        setError(null); // Explicitly clear any previous errors
        formElement.reset();
        // Reset success state after 10 seconds
        setTimeout(() => setIsSubmitted(false), 10000);
      } else {
        const data = await response.json();
        setError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Only set connection error if we haven't already succeeded
      setError("Failed to connect to the server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none bg-slate-50 focus:bg-white"
            placeholder="Ahmed"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none bg-slate-50 focus:bg-white"
            placeholder="Khan"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address <span className="text-red-500">*</span></label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none bg-slate-50 focus:bg-white"
          placeholder="ahmed.khan@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none bg-slate-50 focus:bg-white"
          placeholder="+92 3XX XXXXXXX"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject / Practice Area</label>
        <select 
          id="subject" 
          name="subject"
          defaultValue=""
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none bg-slate-50 focus:bg-white appearance-none"
        >
          <option value="" disabled>Select an area of interest...</option>
          <option value="corporate">Corporate & Commercial Law</option>
          <option value="litigation">Commercial Litigation</option>
          <option value="cyber">Cyber Law</option>
          <option value="family">Family Law</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">Your Message <span className="text-red-500">*</span></label>
        <textarea 
          id="message" 
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all outline-none bg-slate-50 focus:bg-white resize-none"
          placeholder="Please provide details about your inquiry..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white transition-all duration-300 shadow-md ${
          isSubmitted 
            ? "bg-green-600 hover:bg-green-700" 
            : "bg-navy-900 hover:bg-navy-800 hover:shadow-lg focus:ring-4 focus:ring-navy-900/20"
        }`}
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </div>
        ) : isSubmitted ? (
          "Message Sent Successfully"
        ) : (
          <>
            Send Message
            <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </button>

      {error && (
        <p className="text-red-500 text-sm font-medium text-center mt-4">
          {error}
        </p>
      )}
    </form>
  );
}
