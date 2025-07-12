import { Facebook, Instagram, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-gray-50 border-t border-gray-200 dark:bg-black/20 dark:border-white/5 dark:cosmic-dots">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/logomedia.PNG" 
               
                className="h-10 w-auto" 
              />
              <span className="font-semibold text-xl dark:text-white">Media Door</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Empowering agencies with licensed Facebook accounts, unlimited spending, and extensive credit lines.
            </p>
          </div>
          
          
          
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4 dark:text-white">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Get the latest updates on Facebook advertising and agency growth strategies.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Enter your email" type="email" className="bg-white dark:bg-white/5 dark:border-white/10" />
              <Button className="dark:bg-primary dark:hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center dark:border-white/5">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Media Door. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookies
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Settings
            </a>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
