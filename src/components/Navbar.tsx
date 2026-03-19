import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = [
  { to: "/courses", key: "nav.courses" },
  { to: "/work", key: "nav.proof" },
  { to: "/services", key: "nav.services" },
  { to: "/about", key: "nav.about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLang = () => setLanguage(language === "en" ? "es" : "en");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight text-foreground">
          Andrea Freydell
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                location.pathname.startsWith(link.to) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Switch language"
          >
            <Globe size={16} />
            {language === "en" ? "ES" : "EN"}
          </button>
          <ContactDialog>
            <Button className="rounded-btn text-sm font-medium">{t("nav.cta")}</Button>
          </ContactDialog>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium py-2 ${
                location.pathname.startsWith(link.to) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
          >
            <Globe size={16} />
            {language === "en" ? "Español" : "English"}
          </button>
          <ContactDialog>
            <Button className="w-full rounded-btn text-sm font-medium" onClick={() => setMobileOpen(false)}>
              {t("nav.cta")}
            </Button>
          </ContactDialog>
        </div>
      )}
    </header>
  );
};

export default Navbar;
