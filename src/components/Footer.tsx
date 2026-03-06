const Footer = () => (
  <footer className="py-12 px-6">
    <div className="container mx-auto">
      {/* Divider with brass dot */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-border" />
        <div className="w-2 h-2 rounded-full bg-brass" />
        <div className="flex-1 h-px bg-border" />
      </div>
      <p className="text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Andrea Freydell. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
