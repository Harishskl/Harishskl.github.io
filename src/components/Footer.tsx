const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Harish V. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            BE Mechanical Engineering | Coimbatore Institute of Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
