const Footer = () => {
  return (
    <footer className="bg-navy py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-cream">
          <p className="text-sm">
            © {new Date().getFullYear()} Varnan Films. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
