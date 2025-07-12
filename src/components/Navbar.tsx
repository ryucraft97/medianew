import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, LogIn, LayoutDashboard } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isAuthenticated,
    logout
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm dark:bg-background/70" : "bg-transparent"}`}>
      <div className="container-custom py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/logomedia.PNG" alt="jjj" className="h-12 w-auto" />
            <span className="font-semibold text-xl dark:text-white">Media Door</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? <>
                <Button variant="outline" className="hover-lift dark:border-white/10 dark:hover:border-white/20 dark:bg-white/5" onClick={() => navigate("/dashboard")}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button onClick={logout} className="hover-lift bg-primary hover:bg-primary/90 dark:shadow-[0_0_15px_rgba(0,190,255,0.3)]">
                  Logout
                </Button>
              </> : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
