
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Calendar, CheckCircle2 } from "lucide-react";
import { trackContact } from "@/utils/facebookPixel";
import { trackRedditEvent } from "@/utils/redditPixel";
import { trackLeadEvent } from "@/utils/gtmTracking";

const CallToAction = () => {
  // Function to scroll to the bottom CTA section and track contact event
  const scrollToBottomCTA = () => {
    // Track Facebook Pixel event
    trackContact();
    
    // Track Reddit Pixel event
    trackRedditEvent('Lead', { lead_type: 'hero_cta' });
    
    // Track in GTM dataLayer
    trackLeadEvent({
      source: "Hero CTA Button",
      buttonText: "Bypass Account Bans Today",
      buttonLocation: "EcomHero"
    });
    
    // Scroll to CTA section
    const ctaSection = document.getElementById('ecom-cta-section');
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="flex flex-col gap-4">
      {/* Primary CTA Buttons */}
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
        <Button
          size="lg"
          className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white text-lg font-medium px-8 py-6 h-auto"
          onClick={() => window.open("https://wa.me/message/CHQCOSWMYIUUK1", "_blank")}
        >
          <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
        </Button>
        <Button
          size="lg"
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-6 h-auto"
          onClick={() => window.open("https://t.me/mediadoornet", "_blank")}
        >
          <Send className="mr-2 h-5 w-5" /> Telegram
        </Button>
        <Button
          size="lg"
          className="w-full md:w-auto bg-gray-700 hover:bg-gray-800 text-white text-lg font-medium px-8 py-6 h-auto"
          onClick={() => window.open("https://calendly.com/mediadoor-info/30min", "_blank")}
        >
          <Calendar className="mr-2 h-5 w-5" /> Book a Call
        </Button>
      </div>

      {/* Trust Signals - Redesigned for a cleaner look */}
      <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-1">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
          <span className="text-sm text-gray-300">No commitment required</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
          <span className="text-sm text-gray-300">Fast, human support</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-400 shrink-0" />
          <span className="text-sm text-gray-300">Used by 300+ brands globally</span>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
