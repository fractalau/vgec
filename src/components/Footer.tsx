const Footer = () => {
  return (
    <footer className="bg-earth-dark border-t border-primary-foreground/10 py-8">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg font-bold text-primary">VGEC</span>
            <span className="text-primary-foreground/50 text-sm">Victorian Geothermal Energy Company Pty Ltd</span>
          </div>
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} VGEC. All rights reserved. All amounts in AUD unless stated.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
