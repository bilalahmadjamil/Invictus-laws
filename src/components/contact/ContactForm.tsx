"use client";

import { useState } from "react";
import { Send, CheckCircle2, RotateCcw } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setError(null);
    
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    
    const payload = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedName(payload.firstName || "there");
        setIsSubmitted(true);
        setError(null);
        formElement.reset();
      } else {
        setError(data.error || "Submission failed. Please check your information and try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to connect to the server. Please check your internet connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setError(null);
    setSubmittedName("");
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center py-12 border border-green-100">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950 mb-3">
          Thank You, {submittedName}!
        </h3>
        <p className="text-slate-600 leading-relaxed font-light max-w-md mx-auto mb-8 text-sm sm:text-base">
          Your consultation request has been received directly by our legal team. An attorney or case manager will review your matter and contact you within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center justify-center px-6 py-3 bg-beige-100 text-maroon-950 font-bold rounded-lg hover:bg-gold-500 hover:text-white transition-all text-sm group"
        >
          <RotateCcw size={16} className="mr-2 group-hover:-rotate-90 transition-transform" />
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-bold text-maroon-950 uppercase tracking-wide">
            First Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maroon-900 focus:ring-2 focus:ring-maroon-900/20 transition-all outline-none bg-slate-50 focus:bg-white"
            placeholder="Ahmed"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-bold text-maroon-950 uppercase tracking-wide">
            Last Name
          </label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName"
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maroon-900 focus:ring-2 focus:ring-maroon-900/20 transition-all outline-none bg-slate-50 focus:bg-white"
            placeholder="Khan"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-bold text-maroon-950 uppercase tracking-wide">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input 
          type="email" 
          id="email" 
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maroon-900 focus:ring-2 focus:ring-maroon-900/20 transition-all outline-none bg-slate-50 focus:bg-white"
          placeholder="ahmed.khan@email.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-bold text-maroon-950 uppercase tracking-wide">
          Phone / WhatsApp Number <span className="text-red-500">*</span>
        </label>
        <input 
          type="tel" 
          id="phone" 
          name="phone"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maroon-900 focus:ring-2 focus:ring-maroon-900/20 transition-all outline-none bg-slate-50 focus:bg-white"
          placeholder="+92 3XX XXXXXXX"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-bold text-maroon-950 uppercase tracking-wide">
          Subject / Practice Area
        </label>
        <select 
          id="subject" 
          name="subject"
          defaultValue="Corporate & Commercial Law"
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maroon-900 focus:ring-2 focus:ring-maroon-900/20 transition-all outline-none bg-slate-50 focus:bg-white appearance-none"
        >
          <option value="Corporate & Commercial Law">Corporate & Commercial Law</option>
          <option value="Litigation & Dispute Resolution">Litigation & Dispute Resolution</option>
          <option value="Overseas Pakistanis Legal Affairs">Overseas Pakistanis Legal Affairs</option>
          <option value="Cyber Law & Digital Rights">Cyber Law & Digital Rights</option>
          <option value="Family Law & Succession">Family Law & Succession</option>
          <option value="Intellectual Property (Copyright & Trademark)">Intellectual Property (Copyright & Trademark)</option>
          <option value="Other Legal Inquiry">Other Legal Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-bold text-maroon-950 uppercase tracking-wide">
          Your Message / Case Details <span className="text-red-500">*</span>
        </label>
        <textarea 
          id="message" 
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-maroon-900 focus:ring-2 focus:ring-maroon-900/20 transition-all outline-none bg-slate-50 focus:bg-white resize-none"
          placeholder="Please provide details about your inquiry or legal matter..."
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white transition-all duration-300 shadow-md bg-maroon-950 hover:bg-maroon-900 hover:shadow-lg focus:ring-4 focus:ring-maroon-900/20 disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending Message...
          </div>
        ) : (
          <>
            Send Consultation Request
            <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </button>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm font-medium text-center">
          {error}
        </div>
      )}
    </form>
  );
}
