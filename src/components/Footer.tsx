import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/work", label: "Proof" },
  { to: "/services", label: "Ways to Work" },
  { to: "/about", label: "About" },
];

const Footer = () => (
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
          <p className="text-sm text-muted-foreground">
            Founder systems, proof, and productized workflow builds for non-technical operators.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:andrea.f@grupoambiente.com.co"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        (c) {new Date().getFullYear()} Andrea Freydell. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
