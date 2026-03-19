import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = [
  { to: "/courses", key: "nav.courses" },
  { to: "/work", key: "nav.proof" },
  { to: "/services", key: "nav.services" },
  { to: "/about", key: "nav.about" },
];

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-6">
      <div className="container mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-border" />
          <div className="w-2 h-2 rounded-full bg-brass" />
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium mb-1">Andrea Freydell</p>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(link.key)}
              </Link>
            ))}
            <a
              href="mailto:andrea.f@grupoambiente.com.co"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t("footer.email")}
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          (c) {new Date().getFullYear()} Andrea Freydell. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
